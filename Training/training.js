// Set current year in footer
document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    // Add scroll animation
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.card, .domain-card, .timeline-content, .apply-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-visible');
            }
        });
    };
    
    // Add animation class to CSS
    const style = document.createElement('style');
    style.textContent = `
        .card, .domain-card, .timeline-content, .apply-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .domain-card:hover .domain-icon i,
        .card:hover .card-icon i {
            transform: scale(1.2);
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Popup form functionality
    const openBtn = document.getElementById("openFormBtn");
    const closeBtn = document.getElementById("closeFormBtn");
    const popup = document.getElementById("popupForm");
    const internshipForm = document.getElementById("internshipForm");
  
    if (openBtn && closeBtn && popup) {
        openBtn.addEventListener("click", () => {
            popup.style.display = "flex";
        });
  
        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });
  
        // Close when clicking outside form
        window.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });
        
        // Form submission
        if (internshipForm) {
            internshipForm.addEventListener("submit", (e) => {
                e.preventDefault();
                alert("Thank you for your application! We will contact you soon.");
                popup.style.display = "none";
                internshipForm.reset();
            });
        }
    }
    
    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
  });
  
  // Mobile menu toggle
  function toggleMobileMenu() {
    const sidebar = document.getElementById('mobile-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.card, .domain-card, .timeline-content, .apply-card');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-visible');
            }
        });
    };

    // Add animation class to CSS
    const style = document.createElement('style');
    style.textContent = `
        .card, .domain-card, .timeline-content, .apply-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .animate-visible {
            opacity: 1;
            transform: translateY(0);
        }

        .domain-card:hover .domain-icon i,
        .card:hover .card-icon i {
            transform: scale(1.2);
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Popup form functionality
    const openBtn = document.getElementById("openFormBtn");
    const closeBtn = document.getElementById("closeFormBtn");
    const popup = document.getElementById("popupForm");
    const internshipForm = document.getElementById("internshipForm");

    if (openBtn && closeBtn && popup) {
        openBtn.addEventListener("click", () => {
            popup.style.display = "flex";
        });

        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });

        // Close when clicking outside form
        window.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });

        // Form submission
        if (internshipForm) {
            internshipForm.addEventListener("submit", (e) => {
                e.preventDefault();
                alert("Thank you for your application! We will contact you soon.");
                popup.style.display = "none";
                internshipForm.reset();
            });
        }
    }

    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Show popup form every 5 seconds
    setInterval(() => {
        if (popup) {
            popup.style.display = "flex";
        }
    }, 5000);
});

// Mobile menu toggle
function toggleMobileMenu() {
    const sidebar = document.getElementById('mobile-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}
