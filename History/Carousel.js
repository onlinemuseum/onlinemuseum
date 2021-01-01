document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.querySelector(".button-right");
  const prevButton = document.querySelector(".button-left");
  let activeSlide = 0;
  let slides = document.querySelectorAll("#slider .slide");

  function Next() {
      slides[activeSlide].className = 'slide';
      activeSlide = (activeSlide + 1) % slides.length;
      slides[activeSlide].className = 'slide reveal';
  }

  nextButton.addEventListener("click", () => {
    Next();
  });
  prevButton.addEventListener("click", () => {
    Prev();
  });

  function Prev() {
      slides[activeSlide].className = 'slide';
      activeSlide = (activeSlide - 1) % slides.length;

      if (activeSlide == -1) {
          activeSlide = slides.length - 1;
      }
      slides[activeSlide].className = 'slide reveal';
  }
});