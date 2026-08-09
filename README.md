# Pedeaux Family Archive

A static, dependency-free family-history site. Deploys to Cloudflare Pages at
**family.kevinpedeaux.com**.

## Structure

```
index.html                 the whole page (semantic HTML, no templating)
assets/css/styles.css      all styles; design tokens live in :root
assets/js/data.js          THE DATA — every person, record and source
assets/js/app.js           rendering, tree interaction, detail panel, search
assets/img/                portraits and record images
_headers                   Cloudflare Pages security headers
```

There is no build step and no framework. Open `index.html` in a browser and it works,
including from `file://`.

## Editing the tree

Everything lives in `assets/js/data.js`. Each person is a key in the `P` object:

```js
someId: {
  given: 'Marie', surname: 'Cancienne', sex: 'F',
  birth: { date: 'about 1822', place: 'Assumption Parish' },
  death: { date: '11 May 1862' },
  father: 'someOtherId',        // omit if unknown
  mother: 'someOtherId',
  spouse: 'Someone Not In The Tree',   // only when the spouse isn't an ancestor
  siblings: ['Name (dates)', ...],
  children: ['Name (dates)', { id: 'someId' }],  // { id } = already in the tree
  evidence: 'verified',         // 'verified' | 'confirm' | 'inferred'
  branch: 'pedeaux',            // optional; inherited from descendants if omitted
  blurb: 'One or two sentences.',
  records: [{ title, citation, text, highlight }],
  sources: [{ label, url }],
  note: 'Caveats, conflicts, corrections.'
}
```

The tree is an **ancestor** tree: the root is `kevin`, and a node's children in the UI are
that person's *parents*. Add a person, point a `father`/`mother` at their id, and they appear.

**Spouses are derived, not stored.** For anyone in the direct line the panel works out the spouse
automatically — it's the other parent of their direct-line child — and renders it as a link. Only
set `spouse` explicitly when someone married a person who isn't in the tree.

**Children written as `{ id: 'someId' }`** resolve against the dataset, show that person's dates, and
get tagged "your line" with a link that jumps the panel and scrolls the tree. Anyone else is a plain
string.

### The one rule

> Never add a parent link without a record naming **both** people.

A shared surname is not evidence. Use `evidence: 'inferred'` and explain the reasoning in
`note` when the link is probable but undocumented — the UI surfaces that honestly rather
than hiding it.

### Evidence levels

| Value | Badge | Means |
|---|---|---|
| `verified` | Documented | A civil or sacramental record names both this person and their parent |
| `confirm` | Single source | Likely, but one source only — often a user-submitted memorial |
| `inferred` | Inferred | Strong circumstances, no document naming both people |

## Adding a branch colour

Add the key to `BRANCHES` at the bottom of `data.js`, add a matching
`--b-<key>` custom property in `styles.css`, and add a sentence to `STREAM_COPY`
in `app.js`.

## Deploying

Cloudflare Pages, no build command, output directory `/`.

```bash
git init
git add -A
git commit -m "Pedeaux family archive"
git remote add origin <your repo>
git push -u origin main
```

Then in Cloudflare Pages: connect the repo, framework preset **None**, build command
empty, output directory `/`. Add `family.kevinpedeaux.com` as a custom domain.

`_headers` sets a strict CSP. It allows Google Fonts and nothing else. If you add a
third-party script or embed, widen it there deliberately rather than removing it.

### Caching — read this before you change `_headers`

`index.html`, `assets/css/*` and `assets/js/*` are served `max-age=0, must-revalidate`. That is
deliberate: those files are **edited in place and keep their filenames**, so any long cache would
serve stale content after a deploy. Revalidation is cheap — the browser sends an ETag and gets a
304 back. Only `assets/img/*` is cached long and `immutable`, because a new picture gets a new
filename.

The asset URLs in `index.html` also carry a `?v=` token:

```html
<link rel="stylesheet" href="assets/css/styles.css?v=20260809b">
<script src="assets/js/data.js?v=20260809b"></script>
<script src="assets/js/app.js?v=20260809b"></script>
```

**Bump that token whenever you edit CSS or JS** (any new value works — a date is easiest). It
defeats any intermediary or service worker that ignores cache headers. If a change still doesn't
appear after a deploy, purge the Cloudflare cache: Pages project → Caching → Purge Everything.

## Images

`assets/img/aucoin-baptism-1780.jpg` is a screen capture from the Ille-et-Vilaine archives
viewer (10 NUM 35093 86, Dinard-Saint-Énogat, Baptêmes/Mariages 1780). It's reproduced here
for family reference; the archive is the authoritative source and is linked from the panel.

`assets/img/joseph-gervaise-pierre-gaiennie.webp` came from the deGruy family history site.

## Accessibility

Keyboard: tree nodes are focusable and open on Enter or Space; Escape closes the panel.
The panel is a labelled modal dialog. Colour is never the only signal — every badge
carries text. `prefers-reduced-motion` is respected. Print styles expand the whole tree.
