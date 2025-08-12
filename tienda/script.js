


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
