const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveСlasses();
    slide.classList.add("active");
  });
}

function clearActiveСlasses() {
  slides.forEach((slide) => slide.classList.remove("active"));
}
