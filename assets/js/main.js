(function () {
  var body = document.body;
  var toggle = document.querySelector('.nav-toggle');

  function close() {
    body.classList.remove('nav-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.querySelector('.scrim')?.addEventListener('click', close);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  // Keep the current page visible when the sidebar is scrollable.
  var current = document.querySelector('.side-link[aria-current="page"]');
  if (current) current.scrollIntoView({ block: 'nearest' });
})();
