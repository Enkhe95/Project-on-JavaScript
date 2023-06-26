function slidesShow(activeSlide = 1) {
  const slides = document.querySelectorAll(".slide");

  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveСlasses();
      slide.classList.add("active");
    });
  }

  function clearActiveСlasses() {
    slides.forEach((slide) => slide.classList.remove("active"));
  }
}

slidesShow();
