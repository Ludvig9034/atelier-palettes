/* =========================================================
   FONT SWITCHER
   Tre rækker: Heading, Body, Mono. Hvert valg persisterer
   via localStorage på tværs af paletter.
   ========================================================= */
(function () {
  // Sans-serif fonte (til heading + body)
  var sansFonts = {
    'neue':    ['Neue',    "'PP Neue Montreal', -apple-system, system-ui, sans-serif"],
    'space':   ['Space',   "'Space Grotesk', -apple-system, system-ui, sans-serif"],
    'inter':   ['Inter',   "'Inter', -apple-system, system-ui, sans-serif"],
    'jakarta': ['Jakarta', "'Plus Jakarta Sans', -apple-system, system-ui, sans-serif"],
    'serif':   ['Serif',   "'Instrument Serif', Georgia, serif"]
  };

  // Monospace fonte (til metadata + labels)
  var monoFonts = {
    'jetbrains': ['JetB',  "'JetBrains Mono', ui-monospace, monospace"],
    'plex':      ['Plex',  "'IBM Plex Mono', ui-monospace, monospace"],
    'space-m':   ['Space', "'Space Mono', ui-monospace, monospace"],
    'fira':      ['Fira',  "'Fira Code', ui-monospace, monospace"],
    'dm':        ['DM',    "'DM Mono', ui-monospace, monospace"]
  };

  var STORAGE_HEADING = 'atelier-font-heading';
  var STORAGE_BODY    = 'atelier-font-body';
  var STORAGE_MONO    = 'atelier-font-mono';

  // Preconnect + Google Fonts loading
  var preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect'; preconnect1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(preconnect1);
  var preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect'; preconnect2.href = 'https://fonts.gstatic.com';
  preconnect2.crossOrigin = ''; document.head.appendChild(preconnect2);

  var fontsLink = document.createElement('link');
  fontsLink.rel = 'stylesheet';
  fontsLink.href = 'https://fonts.googleapis.com/css2'
    + '?family=Space+Grotesk:wght@400;500'
    + '&family=Inter:wght@400;500'
    + '&family=Plus+Jakarta+Sans:wght@400;500'
    + '&family=Instrument+Serif'
    + '&family=JetBrains+Mono:wght@400;500'
    + '&family=IBM+Plex+Mono:wght@400;500'
    + '&family=Space+Mono:wght@400;700'
    + '&family=Fira+Code:wght@400;500'
    + '&family=DM+Mono:wght@400;500'
    + '&display=swap';
  document.head.appendChild(fontsLink);

  function getStored(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function setStored(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  var currentHeading = getStored(STORAGE_HEADING) || 'neue';
  var currentBody    = getStored(STORAGE_BODY)    || 'neue';
  var currentMono    = getStored(STORAGE_MONO)    || 'jetbrains';
  if (!sansFonts[currentHeading]) currentHeading = 'neue';
  if (!sansFonts[currentBody])    currentBody    = 'neue';
  if (!monoFonts[currentMono])    currentMono    = 'jetbrains';

  // Apply ASAP — før DOMContentLoaded for at undgå flash
  document.documentElement.style.setProperty('--font-heading', sansFonts[currentHeading][1]);
  document.documentElement.style.setProperty('--font-body',    sansFonts[currentBody][1]);
  document.documentElement.style.setProperty('--font-mono',    monoFonts[currentMono][1]);

  function init() {
    var panel = document.createElement('div');
    panel.className = 'font-switcher';

    function makeRow(label, fontSet, currentKey, storageKey, cssVar) {
      var row = document.createElement('div');
      row.className = 'font-switcher-row';

      var lbl = document.createElement('div');
      lbl.className = 'font-switcher-label';
      lbl.textContent = label;
      row.appendChild(lbl);

      Object.keys(fontSet).forEach(function (key) {
        var btn = document.createElement('button');
        btn.className = 'font-switcher-pill';
        btn.textContent = fontSet[key][0];
        btn.title = key;
        if (key === currentKey) btn.classList.add('active');
        btn.addEventListener('click', function () {
          setStored(storageKey, key);
          document.documentElement.style.setProperty(cssVar, fontSet[key][1]);
          row.querySelectorAll('.font-switcher-pill').forEach(function (b) {
            b.classList.remove('active');
          });
          btn.classList.add('active');
        });
        row.appendChild(btn);
      });

      return row;
    }

    panel.appendChild(makeRow('Heading', sansFonts, currentHeading, STORAGE_HEADING, '--font-heading'));
    panel.appendChild(makeRow('Body',    sansFonts, currentBody,    STORAGE_BODY,    '--font-body'));
    panel.appendChild(makeRow('Mono',    monoFonts, currentMono,    STORAGE_MONO,    '--font-mono'));

    document.body.appendChild(panel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
