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

//mobile side bar toogle menu 
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



//portfolio 
// document.addEventListener('DOMContentLoaded', () => {
//   const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
//   const portfolioItems = document.querySelectorAll('.portfolio-grid-item');

//   // Animation for initial load
//   setTimeout(() => {
//     portfolioItems.forEach(item => {
//       item.style.opacity = '1';
//       item.style.transform = 'scale(1)';
//     });
//   }, 200);

//   // Filter functionality
//   filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       // Update active button
//       filterButtons.forEach(btn => btn.classList.remove('active'));
//       button.classList.add('active');

//       const filterValue = button.getAttribute('data-filter');

//       portfolioItems.forEach(item => {
//         if (filterValue === 'all' || item.classList.contains(filterValue)) {
//           item.classList.remove('hide');
//           setTimeout(() => {
//             item.style.opacity = '1';
//             item.style.transform = 'scale(1)';
//           }, 200);
//         } else {
//           item.classList.add('hide');
//           item.style.opacity = '0';
//           item.style.transform = 'scale(0.8)';
//         }
//       });
//     });
//   });

//   // Hover animations for portfolio cards
//   const portfolioCards = document.querySelectorAll('.portfolio-card-wrapper');

//   portfolioCards.forEach(card => {
//     card.addEventListener('mouseenter', () => {
//       const info = card.querySelector('.portfolio-card-info');
//       info.style.transform = 'translateY(0)';
//     });

//     card.addEventListener('mouseleave', () => {
//       const info = card.querySelector('.portfolio-card-info');
//       info.style.transform = 'translateY(100%)';
//     });
//   });
// });

