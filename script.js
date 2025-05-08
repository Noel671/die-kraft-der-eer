let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    nextSlide();
  }
});

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
