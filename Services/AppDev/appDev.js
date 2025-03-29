// Show sections on scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    // Modal functionality
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalForm = document.getElementById('modalForm');
    
    openModalBtn.addEventListener('click', () => {
        modalForm.style.display = 'flex';
    });
    
    closeModalBtn.addEventListener('click', () => {
        modalForm.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modalForm) {
            modalForm.style.display = 'none';
        }
    });
    
    // Scroll to top functionality
    document.getElementById('scrollToTop').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Form submission
    const enquiryForm = document.querySelector('.enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your inquiry! We will get back to you soon.');
            modalForm.style.display = 'none';
            enquiryForm.reset();
        });
    }
});

// Mobile menu toggle
function toggleMobileMenu() {
    const sidebar = document.getElementById('mobile-sidebar');
    sidebar.classList.toggle('active');
}

//paragraph

// JavaScript for Mobile App Section
document.addEventListener('DOMContentLoaded', function() {
    // Animate paragraphs on scroll
    const paragraphs = document.querySelectorAll('.mobile-app-section .text-content p');
    const image = document.querySelector('.mobile-app-section .image-content img');
    
    // Apply floating animation to the image
    if (image) {
      image.style.animation = 'float 6s ease-in-out infinite';
    }
    
    // Function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    }
    
    // Initial check for elements in viewport
    function checkVisibility() {
      paragraphs.forEach((paragraph, index) => {
        if (isInViewport(paragraph)) {
          // Add delay based on index
          setTimeout(() => {
            paragraph.classList.add('visible');
          }, index * 200);
        }
      });
    }
    
    // Add interactive hover effect to the image
    if (image) {
      image.addEventListener('mousemove', function(e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        this.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      });
      
      image.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        // Restore the floating animation after mouse leaves
        setTimeout(() => {
          this.style.animation = 'float 6s ease-in-out infinite';
        }, 100);
      });
      
      image.addEventListener('mouseenter', function() {
        // Pause the floating animation when mouse enters
        this.style.animation = 'none';
      });
    }
    
    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
    
    // Initial check
    checkVisibility();
  });

  // Popup Form Functions
function openPopup() {
  const popupFormOverlay = document.getElementById('popupFormOverlay');
  popupFormOverlay.style.display = 'flex';
}

function closePopup() {
  const popupFormOverlay = document.getElementById('popupFormOverlay');
  popupFormOverlay.style.display = 'none';
}

// Form submission handler
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('Form submitted');
  closePopup();
});
// ARROW functionality code 
document.getElementById('scrollToTop').addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});