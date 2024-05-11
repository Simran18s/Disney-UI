
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 4.4,
    },
  },
});

  document.addEventListener("DOMContentLoaded", function() {
      const slides = document.querySelectorAll('#card1');
      let index = 0;
    
      function showSlide() {
        slides.forEach((slide, i) => {
          if (i === index) {
            slide.style.display = 'block';
          } else {
            slide.style.display = 'none';
          }
        });
      }
    
      function nextSlide() {
        index++;
        if (index === slides.length) {
          index = 0;
        }
        showSlide();
      }
    
      setInterval(nextSlide, 2000); // Change slide every 5 seconds
    });

    document.addEventListener("DOMContentLoaded", function() {
      const slides = document.querySelectorAll('#card3');
      let index = 0;
    
      function showSlide() {
        slides.forEach((slide, i) => {
          if (i === index) {
            slide.style.display = 'block';
          } else {
            slide.style.display = 'none';
          }
        });
      }
    
      function nextSlide() {
        index++;
        if (index === slides.length) {
          index = 0;
        }
        showSlide();
      }
    
      setInterval(nextSlide, 2000); // Change slide every 5 seconds
    });

    document.addEventListener("DOMContentLoaded", function() {
      const slides = document.querySelectorAll('#card2');
      let index = 0;
    
      function showSlide() {
        slides.forEach((slide, i) => {
          if (i === index) {
            slide.style.display = 'block';
          } else {
            slide.style.display = 'none';
          }
        });
      }
    
      function nextSlide() {
        index++;
        if (index === slides.length) {
          index = 0;
        }
        showSlide();
      }
    
      setInterval(nextSlide, 2000); // Change slide every 5 seconds
    });
    
    
    const showPopupBtn = document.querySelector(".login-btn");

    const formPopup = document.querySelector(".form-popup");

    const hidePopupBtn = formPopup.querySelector(".close-btn");

    const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
    showPopupBtn.addEventListener("click", () => {
      document.body.classList.toggle("show-popup");
  
    });
  // Hide login popup
     hidePopupBtn.addEventListener("click", () => showPopupBtn.click());
  // Show or hide signup form
  
    signupLoginLink.forEach(link => {
      link.addEventListener("click", (e) => {
          e.preventDefault();
          formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
      });
   });