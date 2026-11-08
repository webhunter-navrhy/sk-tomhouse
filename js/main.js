// Formulár: v návrhu (demo) nič neodosiela, ostrý režim posiela na endpoint zo site.json.
(function () {
  document.querySelectorAll('form.formular').forEach(function (f) {
    var stav = f.querySelector('.formular-stav');
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      if (f.querySelector('.past input').value) return;
      var endpoint = f.getAttribute('data-endpoint');
      if (f.getAttribute('data-demo') === '1' || !endpoint) {
        stav.textContent = 'Toto je ukážka, správa sa neodoslala. Po spustení webu Vám budú dopyty chodiť priamo na e-mail.';
        return;
      }
      stav.textContent = 'Odosielam…';
      fetch(endpoint, { method: 'POST', body: new FormData(f), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error(r.status); f.reset(); stav.textContent = 'Ďakujeme, dopyt sme dostali. Ozveme sa.'; })
        .catch(function () { stav.textContent = 'Odoslanie sa nepodarilo. Napíšte nám prosím e-mailom alebo zavolajte.'; });
    });
  });
})();

// názov vybranej fotky namiesto anglického textu prehliadača
document.querySelectorAll('.formular__subor input').forEach(function (i) {
  i.addEventListener('change', function () {
    var m = i.parentNode.querySelector('.subor__meno');
    m.textContent = i.files.length ? i.files[0].name : 'nepovinné';
  });
});
