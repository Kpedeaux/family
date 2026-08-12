/* ==========================================================================
   Pedeaux Family Archive — map page behaviour
   External file, and no inline style="" anywhere: the site ships a strict CSP
   (script-src 'self'; style-src 'self'), which blocks both.
   ========================================================================== */

(function () {
  var P = window.PLACES;
  if (!P || !window.L) return;

  var map = L.map('map', { scrollWheelZoom: false }).setView(P.center, P.zoom);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var PREC = {
    exact:  'Pin is on the building',
    block:  'Pin is on the block',
    street: 'Street only — number unknown',
    town:   'Town only'
  };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* Built with DOM nodes and textContent rather than innerHTML — no injection
     surface, and no inline style attributes for the CSP to reject. */
  function popupNode(it) {
    var box = el('div');
    box.appendChild(el('h3', null, it.name));
    box.appendChild(el('p', 'pop__who', it.who + (it.years ? ' · ' + it.years : '')));
    box.appendChild(el('span', 'pop__prec prec-' + it.precision, PREC[it.precision] || it.precision));
    box.appendChild(el('p', 'pop__head', it.headline));
    box.appendChild(el('p', null, it.text));
    box.appendChild(el('p', 'pop__src', it.source));
    return box;
  }

  var markers = {};

  P.items.forEach(function (it) {
    var exact = it.precision === 'exact';
    var m = L.circleMarker([it.lat, it.lng], {
      radius: exact ? 8 : 10,
      color: '#fffdf8',
      weight: 2,
      fillColor: (P.kinds[it.kind] || {}).color || '#4a423a',
      fillOpacity: exact ? 0.95 : 0.55,
      dashArray: exact ? null : '3 3'
    }).addTo(map);
    m.bindPopup(popupNode(it), { maxWidth: 330 });
    m.bindTooltip(it.name, { direction: 'top', offset: [0, -6] });
    markers[it.id] = m;
  });

  /* Legend */
  var legend = document.getElementById('legend');
  Object.keys(P.kinds).forEach(function (k) {
    var li = el('li');
    li.appendChild(el('i', 'sw-' + k));
    li.appendChild(document.createTextNode(P.kinds[k].label));
    legend.appendChild(li);
  });
  var approx = el('li');
  approx.appendChild(el('i', 'sw-approx'));
  approx.appendChild(document.createTextNode('Hollow & dashed = approximate'));
  legend.appendChild(approx);

  /* Side list */
  var list = document.getElementById('placelist');
  P.items.forEach(function (it) {
    var b = el('button');
    b.type = 'button';
    b.appendChild(el('span', 'pl__dot sw-' + it.kind));
    b.appendChild(document.createTextNode(it.name));
    b.appendChild(el('span', 'pl__who', it.who));
    b.addEventListener('click', function () {
      map.setView([it.lat, it.lng], it.precision === 'town' ? 12 : 17, { animate: true });
      markers[it.id].openPopup();
      if (window.matchMedia('(max-width: 899px)').matches) {
        document.getElementById('map').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    list.appendChild(b);
  });

  /* Wheel zoom stays off until the map is clicked, so the page still scrolls. */
  map.on('click', function () { map.scrollWheelZoom.enable(); });
})();
