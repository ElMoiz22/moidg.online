document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const subMenuParents = document.querySelectorAll(".has-submenu");

  // Toggle menú principal
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // En móviles, abrir/cerrar submenús con clic
  subMenuParents.forEach(item => {
    item.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.classList.toggle("open");
      }
    });
  });

  // Cerrar menú cuando se hace clic en un enlace
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  });
});
