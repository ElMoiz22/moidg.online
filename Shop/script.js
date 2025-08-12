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
      if (window.innerWidth <= 1200) {
        e.preventDefault();
        this.classList.toggle("open");
      }
    });
  });

  // Cerrar menú cuando se hace clic en un enlace
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 1200) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  });
});


src='https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js'

var swiper = new Swiper(&quot;.mySwiper&quot;, {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: &quot;.swiper-pagination&quot;,
          clickable: true,
        },
      autoplay: {
          delay: 6500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: &quot;.swiper-button-next&quot;,
          prevEl: &quot;.swiper-button-prev&quot;,
        },
      });
