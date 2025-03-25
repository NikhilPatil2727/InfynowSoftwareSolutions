// Mobile menu functionality
function toggleMobileMenu() {
    const sidebar = document.getElementById('mobile-sidebar');
    sidebar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
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
        const elements = document.querySelectorAll('.service-card, .industry-card, .benefit-card, .overview-content, .cta-box');

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
        .service-card, .industry-card, .benefit-card, .overview-content, .cta-box {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .animate-visible {
            opacity: 1;
            transform: translateY(0);
        }

        .service-card:hover .service-icon,
        .industry-card:hover .industry-icon {
            transform: scale(1.2);
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Add background image to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const img = new Image();
        img.onload = function() {
            heroSection.style.backgroundImage = `url(${this.src})`;
            heroSection.style.backgroundSize = 'cover';
            heroSection.style.backgroundPosition = 'center';
        };
        img.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';
    }

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple form validation
            let isValid = true;
            const inputs = contactForm.querySelectorAll('input[required], textarea[required]');

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff5722';
                } else {
                    input.style.borderColor = '#0a2a5e';
                }
            });

            if (isValid) {
                // Show success message
                const submitButton = contactForm.querySelector('.submit-button');
                const originalText = submitButton.textContent;

                submitButton.textContent = 'Message Sent!';
                submitButton.style.backgroundColor = '#4CAF50';

                // Reset form
                contactForm.reset();

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.style.backgroundColor = '';
                }, 3000);
            }
        });
    }

    // Mobile menu toggle
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

    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
});
