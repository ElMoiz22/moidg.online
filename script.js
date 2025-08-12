<script>
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Submenús en móviles
  document.querySelectorAll(".has-submenu > .nav-link").forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        link.nextElementSibling.classList.toggle("open");
      }
    });
  });
});
</script>
