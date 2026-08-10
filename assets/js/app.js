/**
 * Pedeaux Family Archive — UI
 *
 * Renders an ancestor tree (root = Kevin, children of a node = that person's
 * parents), a detail panel, search filtering, and branch focus.
 *
 * No dependencies. No build step. Works from file:// as well as https://.
 */
(function () {
  'use strict';

  const { people, branches, root } = window.FAMILY;

  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const EVIDENCE_LABEL = {
    verified: 'Documented',
    confirm:  'Single source',
    inferred: 'Inferred'
  };
  const EVIDENCE_HELP = {
    verified: 'A civil or sacramental record names both this person and their parent.',
    confirm:  'Likely, but resting on one source — often a user-submitted memorial.',
    inferred: 'Reasoned from circumstance. No document yet names both people.'
  };

  /* ── helpers ────────────────────────────────────────────────────────── */

  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  function fullName(p) {
    return [p.given, p.nickname ? `“${p.nickname}”` : '', p.surname, p.suffix]
      .filter(Boolean).join(' ');
  }

  function lifespan(p) {
    if (p.lifespanText) return p.lifespanText;
    const b = p.birth && p.birth.date;
    const d = p.death && p.death.date;
    if (!b && !d) return '';
    const yr = (s) => {
      if (!s) return '';
      const m = String(s).match(/\b(1[6-9]\d{2}|20\d{2})\b/);
      return m ? m[1] : String(s);
    };
    if (b && d) return `${yr(b)} – ${yr(d)}`;
    if (b) return `b. ${yr(b)}`;
    return `d. ${yr(d)}`;
  }

  /* Best-effort date parsing for the age-at-death line. Returns null for anything
     that isn't a single real date ("living after 1814", "between 1812 and 1814"). */
  const MONTH_IDX = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
  };
  function parseDateParts(s) {
    if (!s) return null;
    const str = String(s);
    if (/living|between|before\s|after\s|by\s+1/i.test(str)) return null;
    const years = str.match(/\b(1[5-9]\d\d|20\d\d)\b/g) || [];
    if (years.length !== 1) return null;
    const mMatch = str.toLowerCase().match(/january|february|march|april|may|june|july|august|september|october|november|december/);
    const dayTokens = (str.match(/\b[0-3]?\d\b/g) || []).map(Number).filter((n) => n >= 1 && n <= 31);
    return {
      y: +years[0],
      m: mMatch ? MONTH_IDX[mMatch[0]] : null,
      d: dayTokens.length ? dayTokens[0] : null,
      approx: /about|c\.|probably|\bor\b|\?/i.test(str)
    };
  }
  function ageAtDeath(p) {
    const b = p.birth && parseDateParts(p.birth.date);
    const d = p.death && parseDateParts(p.death.date);
    if (!b || !d) return '';
    let age = d.y - b.y;
    let exact = !b.approx && !d.approx && b.m != null && d.m != null && b.d != null && d.d != null;
    if (b.m != null && d.m != null) {
      if (d.m < b.m || (d.m === b.m && b.d != null && d.d != null && d.d < b.d)) age -= 1;
    } else if (exact) {
      exact = false;
    }
    if (age <= 0 || age > 115) return '';
    return (exact ? 'aged ' : 'aged about ') + age;
  }

  /* A person's spouse: an explicit `spouse` string when they married someone who
     isn't in the tree, otherwise derived — the other parent of their direct-line child. */
  function spouseHtml(id) {
    const p = people[id];
    if (p.spouse) return esc(p.spouse);
    for (const [cid, c] of Object.entries(people)) {
      let sid = null;
      if (c.father === id) sid = c.mother;
      else if (c.mother === id) sid = c.father;
      if (sid && people[sid]) {
        const q = people[sid];
        const span = lifespan(q);
        return `<button class="fam__link" type="button" data-goto="${esc(sid)}">${esc(fullName(q))}</button>${
          span ? ` <span class="fam__dates">${esc(span)}</span>` : ''}`;
      }
    }
    return '';
  }

  function branchOf(id) {
    let cur = id, guard = 0;
    while (cur && guard++ < 40) {
      const p = people[cur];
      if (!p) return null;
      if (p.branch) return p.branch;
      cur = p.father || p.mother;
    }
    return null;
  }

  /* relationship label from the root, e.g. "great-great-grandfather" */
  function relationLabel(depth, sex) {
    if (depth === 0) return '';
    const base = sex === 'F' ? 'mother' : 'father';
    if (depth === 1) return base;
    if (depth === 2) return 'grand' + base;
    const greats = depth - 2;
    if (greats === 1) return 'great-grand' + base;
    return `${greats}× great-grand${base}`;
  }

  /* ── build the ancestor tree ────────────────────────────────────────── */

  function buildNode(id, depth, rel) {
    const p = people[id];
    if (!p) return null;
    const kids = [];
    if (p.father) kids.push(buildNode(p.father, depth + 1, 'father'));
    if (p.mother) kids.push(buildNode(p.mother, depth + 1, 'mother'));
    return { id, person: p, depth, rel, children: kids.filter(Boolean) };
  }

  const TREE = buildNode(root, 0, null);

  function countPeople(n) { return 1 + n.children.reduce((a, c) => a + countPeople(c), 0); }
  function maxDepth(n) { return n.children.length ? 1 + Math.max(...n.children.map(maxDepth)) : 0; }

  /* ── render ─────────────────────────────────────────────────────────── */

  function nodeMarkup(n) {
    const p = n.person;
    const b = branchOf(n.id);
    const styleVar = b ? ` style="--branch: var(--b-${b})"` : '';
    const hasKids = n.children.length > 0;
    const rel = relationLabel(n.depth, p.sex);
    const span = lifespan(p);
    const place = (p.birth && p.birth.place) || p.origin || '';

    const tags = [];
    if (p.evidence) {
      tags.push(`<span class="pill pill--${p.evidence}" title="${esc(EVIDENCE_HELP[p.evidence])}">${EVIDENCE_LABEL[p.evidence]}</span>`);
    }
    if (p.immigrant) tags.push(`<span class="pill pill--origin">Crossed the Atlantic</span>`);
    if (b && branches[b]) tags.push(`<span class="pill pill--branch">${esc(branches[b].label)}</span>`);

    const searchBlob = [fullName(p), p.alsoKnownAs, place, span, b && branches[b] && branches[b].label]
      .filter(Boolean).join(' ').toLowerCase();

    return `
      <li class="tree__item" data-id="${esc(n.id)}" data-search="${esc(searchBlob)}" data-branch="${esc(b || '')}">
        <div class="node" role="button" tabindex="0" data-id="${esc(n.id)}"${styleVar}>
          <button class="node__toggle${hasKids ? '' : ' is-leaf'}" type="button"
                  aria-label="Collapse ${esc(fullName(p))}'s ancestors" ${hasKids ? '' : 'tabindex="-1" aria-hidden="true"'}>−</button>
          <span class="node__body">
            ${rel ? `<span class="node__rel">${esc(rel)}</span>` : '<span class="node__rel">You</span>'}
            <span class="node__name">${esc(p.given)}${p.nickname ? ` “${esc(p.nickname)}”` : ''} <span class="sur">${esc(p.surname || '')}</span>${p.suffix ? ' ' + esc(p.suffix) : ''}</span>
            <span class="node__meta">${esc([span, place].filter(Boolean).join(' · '))}</span>
            <span class="node__tags">${tags.join('')}</span>
          </span>
          <span class="node__chev" aria-hidden="true">›</span>
        </div>
        ${hasKids ? `<ul>${n.children.map(nodeMarkup).join('')}</ul>` : ''}
      </li>`;
  }

  function renderTree() {
    $('#tree').innerHTML = `<ul>${nodeMarkup(TREE)}</ul>`;
  }

  /* ── detail panel ───────────────────────────────────────────────────── */

  const panel  = $('#panel');
  const scrim  = $('#scrim');
  let lastFocus = null;

  function openPanel(id) {
    const p = people[id];
    if (!p) return;
    const b = branchOf(id);

    lastFocus = document.activeElement;

    $('#panel-branch').style.setProperty('--branch', b ? `var(--b-${b})` : 'var(--oxblood)');
    $('#panel-name').textContent  = fullName(p);
    $('#panel-dates').textContent = [lifespan(p), p.occupation].filter(Boolean).join(' · ');

    const rows = [];
    const rel = relationLabel(TREE.id === id ? 0 : depthOf(id), p.sex);
    if (rel) rows.push(['Relation', 'Kevin’s ' + rel]);
    if (p.alsoKnownAs) rows.push(['Also', p.alsoKnownAs]);
    if (p.birth && (p.birth.date || p.birth.place)) rows.push(['Born', [p.birth.date, p.birth.place].filter(Boolean).join(', ')]);
    if (p.death && (p.death.date || p.death.place)) {
      const when = [p.death.date, p.death.place].filter(Boolean).join(', ');
      const age = ageAtDeath(p);
      rows.push(['Died', age ? `${when} · ${age}` : when]);
    }
    if (p.occupation) rows.push(['Trade', p.occupation]);
    if (b && branches[b]) rows.push(['Line', `${branches[b].label} — ${branches[b].origin}`]);
    if (p.evidence) rows.push(['Evidence', `${EVIDENCE_LABEL[p.evidence]} — ${EVIDENCE_HELP[p.evidence]}`]);

    let html = '';

    if (p.photo) {
      html += `<figure class="panel__portrait">
        <img src="${esc(p.photo)}" alt="${esc(p.photoCaption || fullName(p))}" loading="lazy">
        ${p.photoCaption ? `<figcaption>${esc(p.photoCaption)}</figcaption>` : ''}
      </figure>`;
    }

    if (p.blurb) html += `<p>${esc(p.blurb)}</p>`;

    /* Spouse row goes first — it's the fact people look for. Already HTML-safe. */
    const sp = spouseHtml(id);
    const rowsHtml = (sp ? `<dt>Married</dt><dd>${sp}</dd>` : '')
      + rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('');
    html += `<dl class="kv">${rowsHtml}</dl>`;

    /* Siblings and children. An entry of the form { id } points at someone already in
       the tree — resolve their name and dates, and flag them as the direct line. */
    const famList = (items) => `<ul class="fam">${items.map((it) => {
      if (it && typeof it === 'object' && it.id) {
        const q = people[it.id];
        if (!q) return '';
        const span = lifespan(q);
        return `<li class="fam--line"><button class="fam__link" type="button" data-goto="${esc(it.id)}">${esc(fullName(q))}</button>${
          span ? ` <span class="fam__dates">${esc(span)}</span>` : ''
        } <span class="fam__tag">your line</span></li>`;
      }
      return `<li>${esc(it)}</li>`;
    }).join('')}</ul>`;

    if (p.siblings && p.siblings.length) {
      html += `<h4>Brothers and sisters</h4>${famList(p.siblings)}`;
    }
    if (p.children && p.children.length) {
      html += `<h4>Children</h4>${famList(p.children)}`;
    }

    if (p.records && p.records.length) {
      html += `<h4>The record itself</h4>`;
      html += p.records.map((r) => `
        <div class="record">
          <div class="record__title">${esc(r.title)}</div>
          <div class="record__cite">${esc(r.citation)}</div>
          <p class="record__text">${esc(r.text)}</p>
          ${r.highlight ? `<p class="record__hl">${esc(r.highlight)}</p>` : ''}
        </div>`).join('');
    }

    if (p.note) html += `<h4>Note</h4><div class="note">${esc(p.note)}</div>`;

    if (p.sources && p.sources.length) {
      html += `<h4>Sources</h4><ul class="srclist">${p.sources.map((s) =>
        `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)} ↗</a></li>`).join('')}</ul>`;
    }

    $('#panel-body').innerHTML = html;
    $('#panel-body').scrollTop = 0;

    /* jump straight to a relative without closing the panel */
    $$('.fam__link', $('#panel-body')).forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.goto;
        openPanel(target);
        const node = $(`.node[data-id="${target}"]`);
        if (node) node.scrollIntoView({ block: 'center', behavior: 'smooth' });
      });
    });

    panel.classList.add('is-open');
    scrim.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    $('#panel-close').focus();

    $$('.node').forEach((n) => n.setAttribute('aria-current', String(n.dataset.id === id)));
  }

  function closePanel() {
    panel.classList.remove('is-open');
    scrim.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    $$('.node').forEach((n) => n.setAttribute('aria-current', 'false'));
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  const DEPTHS = (function () {
    const m = {};
    (function walk(n) { m[n.id] = n.depth; n.children.forEach(walk); })(TREE);
    return m;
  })();
  function depthOf(id) { return DEPTHS[id] || 0; }

  /* ── interactions ───────────────────────────────────────────────────── */

  function onTreeClick(e) {
    const toggle = e.target.closest('.node__toggle');
    if (toggle) {
      e.stopPropagation();
      const li = toggle.closest('.tree__item');
      const collapsed = li.classList.toggle('is-collapsed');
      toggle.textContent = collapsed ? '+' : '−';
      return;
    }
    const node = e.target.closest('.node');
    if (node) openPanel(node.dataset.id);
  }

  function onTreeKey(e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const node = e.target.closest('.node');
    if (node && !e.target.closest('.node__toggle')) {
      e.preventDefault();
      openPanel(node.dataset.id);
    }
  }

  function setAllCollapsed(collapsed) {
    $$('.tree__item').forEach((li) => {
      if (!li.querySelector(':scope > ul')) return;
      li.classList.toggle('is-collapsed', collapsed);
      const t = li.querySelector(':scope > .node .node__toggle');
      if (t) t.textContent = collapsed ? '+' : '−';
    });
  }

  function applyFilter() {
    const q = $('#search').value.trim().toLowerCase();
    const activeBranch = $('.btn[data-branch][aria-pressed="true"]');
    const branch = activeBranch ? activeBranch.dataset.branch : '';

    const items = $$('.tree__item');
    if (!q && !branch) {
      items.forEach((li) => li.querySelector('.node').classList.remove('is-dim'));
      $('#result-count').textContent = '';
      return;
    }

    let hits = 0;
    items.forEach((li) => {
      const matchQ = !q || li.dataset.search.includes(q);
      const matchB = !branch || li.dataset.branch === branch;
      const on = matchQ && matchB;
      if (on) hits++;
      li.querySelector('.node').classList.toggle('is-dim', !on);
      if (on) {
        // make sure matches are visible
        let a = li.parentElement;
        while (a && a !== document) {
          if (a.classList && a.classList.contains('tree__item')) {
            a.classList.remove('is-collapsed');
            const t = a.querySelector(':scope > .node .node__toggle');
            if (t) t.textContent = '−';
          }
          a = a.parentElement;
        }
      }
    });
    $('#result-count').textContent = `${hits} of ${items.length}`;
  }

  /* ── streams grid ───────────────────────────────────────────────────── */

  const STREAM_COPY = {
    pedeaux:   'A ship’s carpenter’s son from the Nantes quayside. Michel Pedeau reached Louisiana after 1803 and was dead within a decade, leaving three boys on Bayou Lafourche.',
    aucoin:    'Acadians deported from Île Saint-Jean in 1758, landed at Saint-Malo, settled at Saint-Énogat, and sailed for Louisiana in 1785 with ten children aboard La Ville d’Archangel.',
    gaiennie:  'French New Orleans, established enough by the 1820s that a street in the Warehouse District still carries the name. A War of 1812 veteran sits at the head of it.',
    brunetti:  'John Brunetti was born in Italy in May 1893, spent his twenties in Chicago and married in New Orleans in 1921. The strongest lead on his origin points to Plataci in Calabria, an Arbëreshë village — a lead, deliberately not yet drawn on the tree.',
    franovich: 'Dalmatian oystermen in the lower delta — Buras, Empire, Port Sulphur. Anthony Franovich died at thirty-eight and lies at Our Lady of Good Harbor.',
    moizant:   'French Louisiana, married repeatedly into the Plaquemines Croatian community. Alfred Moizant lived to ninety-five.',
    larmann:   'John Casper Larmann came from Hanover and married in New Orleans in 1870. His son Anthony married into the Moore and Goubler families, whose tomb the Larmanns still share. Aunt Esther’s handwritten ledger preserved every date.',
    lemoine:   'Johanna Lemoine’s people — Lemoine, Rousselle, Delatte — are French-Creole names from the river parishes above New Orleans. Her mother died young, a brother died in the orphanage, and the line is the tree’s newest open front.',
    wellmeyer: 'German New Orleans, four documented generations deep. Ten Wellmeyers share one tomb at St. Vincent de Paul No. 3, and that tomb is how the line was cracked.'
  };

  function renderStreams() {
    $('#streams').innerHTML = Object.entries(branches).map(([key, b]) => `
      <article class="stream" style="--branch: var(--b-${key})">
        <h3>${esc(b.label)}</h3>
        <div class="stream__origin">${esc(b.origin)}</div>
        <p>${esc(STREAM_COPY[key] || '')}</p>
      </article>`).join('');
  }

  /* ── stats ──────────────────────────────────────────────────────────── */

  function renderStats() {
    const total = countPeople(TREE);
    const gens  = maxDepth(TREE) + 1;
    const docd  = Object.values(people).filter((p) => p.evidence === 'verified').length;
    const earliest = 1734; // Jeanne Muraille, baptised at Machecoul

    $('#stat-people').textContent = total;
    $('#stat-gens').textContent   = gens;
    $('#stat-docd').textContent   = docd;
    $('#stat-year').textContent   = earliest;
  }

  /* ── boot ───────────────────────────────────────────────────────────── */

  function init() {
    renderTree();
    renderStreams();
    renderStats();

    $('#tree').addEventListener('click', onTreeClick);
    $('#tree').addEventListener('keydown', onTreeKey);

    $('#panel-close').addEventListener('click', closePanel);
    scrim.addEventListener('click', closePanel);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePanel(); });

    $('#search').addEventListener('input', applyFilter);

    $('#expand-all').addEventListener('click', () => { setAllCollapsed(false); applyFilter(); });
    $('#collapse-all').addEventListener('click', () => {
      setAllCollapsed(true);
      // keep the first two generations open so the page never looks empty
      const rootLi = $('.tree__item');
      if (rootLi) {
        rootLi.classList.remove('is-collapsed');
        const t = rootLi.querySelector(':scope > .node .node__toggle');
        if (t) t.textContent = '−';
      }
    });

    $$('.btn[data-branch]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const on = btn.getAttribute('aria-pressed') === 'true';
        $$('.btn[data-branch]').forEach((b) => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', String(!on));
        applyFilter();
      });
    });

    $('#year').textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
