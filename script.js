document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');
  const submenuToggles = document.querySelectorAll('.submenu-toggle');
  const searchIcon = document.querySelector('.icon-search');
  const searchBar = document.getElementById('search-bar');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  submenuToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const submenu = btn.nextElementSibling;
      submenu.classList.toggle('active');
    });
  });

  searchIcon.addEventListener('click', () => {
    searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
  });
});
