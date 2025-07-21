  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const submenuToggles = document.querySelectorAll(".submenu-toggle");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  submenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      const parent = toggle.closest(".has-submenu");
      parent.classList.toggle("open");
    });
  });
