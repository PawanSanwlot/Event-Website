document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector("#menu-btn");
  const navbar = document.querySelector(".navbar");
  const themeToggler = document.querySelector(".theme-toggler");
  const toggleBtn = document.querySelector(".toggle-btn");
  const themeButtons = document.querySelectorAll(".theme-btn");

  menuBtn.onclick = () => {
      menuBtn.classList.toggle("fa-times");
      navbar.classList.toggle("active");
  };

  window.onscroll = () => {
      menuBtn.classList.remove("fa-times");
      navbar.classList.remove("active");
      themeToggler.classList.remove("active");
  };

  toggleBtn.onclick = () => {
      themeToggler.classList.toggle("active");
  };

  themeButtons.forEach(btn => {
      btn.onclick = () => {
          let color = btn.style.background;
          document.documentElement.style.setProperty("--theme-color", color);
      };
  });

  // Initialize Swiper for home slider
  new Swiper(".home-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
      },
      loop: true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
  });

  // Initialize Swiper for review slider
  new Swiper(".review-slider", {
      spaceBetween: 10,
      grabCursor: true,
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      breakpoints: {
          0: {
              slidesPerView: 1,
          },
          700: {
              slidesPerView: 2,
          },
          1050: {
              slidesPerView: 3,
          },
      },
  });
});