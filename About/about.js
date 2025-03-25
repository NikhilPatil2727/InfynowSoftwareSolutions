// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Smooth scroll for navigation (if you add navigation later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// ARROW
document.getElementById('scrollToTop').addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

// NAVBAR
function toggleMobileMenu() {
  const sidebar = document.getElementById('mobile-sidebar');
  sidebar.classList.toggle('active');
}

// Popup Form Functions
function openPopup() {
  const popupOverlay = document.getElementById('popupOverlay');
  popupOverlay.classList.add('active');
}

function closePopup() {
  const popupOverlay = document.getElementById('popupOverlay');
  popupOverlay.classList.remove('active');
}

// Form submission handler
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Add your form submission logic here
  console.log('Form submitted');
  closePopup();
});

// Add click event to Get A Quote button
document.querySelector('.discuss-section .contact-btn').addEventListener('click', function(e) {
  e.preventDefault();
  openPopup();
});

// Basic one-by-one slider
const track = document.querySelector('.slider-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const indicators = Array.from(document.querySelectorAll('.slider-indicators span'));

let currentSlide = 0;
const totalSlides = slides.length;
const slideDuration = 7000; // 7 seconds per slide

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

//footer date dynamic 
document.addEventListener("DOMContentLoaded", function () {
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;
});