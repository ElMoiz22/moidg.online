(function() {
  const header = document.getElementById('header');

  let lastScroll = window.pageYOffset;
  let ticking = false;

  // Ocultar/mostrar header al hacer scroll
  function onScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 58) {
      // Scroll hacia abajo y pasamos la altura del header -> ocultar
      header.style.top = '-58px';
    } else {
      // Scroll hacia arriba -> mostrar
      header.style.top = '0';
    }

    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
})();
