document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

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

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

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
        window.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });
        if (internshipForm) {
            internshipForm.addEventListener("submit", (e) => {
                e.preventDefault();
                alert("Thank you for your application! We will contact you soon.");
                popup.style.display = "none";
                internshipForm.reset();
            });
        }
    }

    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    setInterval(() => {
        if (popup) {
            popup.style.display = "flex";
        }
    }, 5000);
});

function toggleMobileMenu() {
    const sidebar = document.getElementById('mobile-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.internship-training-section .text-content p');
    const image = document.querySelector('.internship-training-section .image-content img');

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