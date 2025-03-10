// Basic one-by-one slider
const track = document.querySelector('.slider-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const indicators = Array.from(document.querySelectorAll('.slider-indicators span'));

let currentSlide = 0;
const totalSlides = slides.length;
const slideDuration = 5000; // 5 seconds per slide

// Show a specific slide by index
function showSlide(index) {
  currentSlide = (index + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  indicators.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

// Indicator clicks
indicators.forEach(dot => {
  dot.addEventListener('click', () => {
    const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
    showSlide(slideIndex);
  });
});

// Auto-slide every few seconds 
setInterval(() => {
  showSlide(currentSlide + 1);
}, slideDuration);

// Initialize first slide
showSlide(0);


function toggleMobileMenu() {
    const sidebar = document.getElementById('mobile-sidebar');
    sidebar.classList.toggle('active');
  }


// ARROW functionality code 
  document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.service-card.reveal');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
          }
      });
  }, {
      threshold: 0.1
  });
  
  cards.forEach(card => {
      observer.observe(card);
  });
});