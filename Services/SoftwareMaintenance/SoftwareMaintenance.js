// Show sections on scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(section => observer.observe(section));
});

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});

// Navbar 
function toggleMobileMenu() {
  const sidebar = document.getElementById('mobile-sidebar');
  sidebar.classList.toggle('active');
}

// Scroll-to-Top functionality
document.getElementById('scrollToTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Set current year in footer
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;
});

// JavaScript for Mobile App Section
document.addEventListener('DOMContentLoaded', function() {
  const paragraphs = document.querySelectorAll('.mobile-app-section .text-content p');
  const image = document.querySelector('.mobile-app-section .image-content img');
  
  if (image) {
    image.style.animation = 'float 6s ease-in-out infinite';
  }
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  function checkVisibility() {
    paragraphs.forEach((paragraph, index) => {
      if (isInViewport(paragraph)) {
        setTimeout(() => {
          paragraph.classList.add('visible');
        }, index * 200);
      }
    });
  }
  
  if (image) {
    image.addEventListener('mousemove', function(e) {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      this.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    image.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
      setTimeout(() => {
        this.style.animation = 'float 6s ease-in-out infinite';
      }, 100);
    });
    
    image.addEventListener('mouseenter', function() {
      this.style.animation = 'none';
    });
  }
  
  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});