// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add hover animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.4)';
            card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
            card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        });
    });

    // Add hover animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        });
    });
});

// Handle form submission
document.getElementById('internshipForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real application, you would send this data to a server
    const formData = new FormData(this);
    alert('Thank you for your application! We will review it and get back to you soon.');
    this.reset();
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add parallax effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset;
    header.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Animate tech stack items
const techItems = document.querySelectorAll('.tech-category li');
techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px)';
        item.style.color = '#ff5722';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
        item.style.color = 'rgba(255, 255, 255, 0.8)';
    });
});

// Add subtle glow effect to headings
const headings = document.querySelectorAll('h2, h3');
headings.forEach(heading => {
    heading.addEventListener('mouseenter', () => {
        heading.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
    });
    
    heading.addEventListener('mouseleave', () => {
        heading.style.textShadow = 'none';
    });
});

// Add form field highlight effect
const formInputs = document.querySelectorAll('input, select');
formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.boxShadow = '0 0 0 2px rgba(255, 87, 34, 0.3)';
    });
    
    input.addEventListener('blur', () => {
        input.style.boxShadow = 'none';
    });
});

// ARROW

document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


