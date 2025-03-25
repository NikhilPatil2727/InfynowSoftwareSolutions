// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hero section animations
    const heroElements = document.querySelectorAll('.animate-hero');
    heroElements.forEach((element, index) => {
        element.style.animation = `fadeInUp 1s ${index * 0.3}s forwards`;
    });

    // Initial content visibility
    const initialElements = document.querySelectorAll('.section-title, .blog-card:nth-child(1), .blog-card:nth-child(2)');
    initialElements.forEach(element => {
        setTimeout(() => {
            element.classList.add('active');
        }, 500);
    });

    // Scroll reveal animation with lazy loading
    const revealElements = document.querySelectorAll('.reveal, .blog-card');
    
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.8;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Check on initial load

    // Blog modal functionality
    const modal = document.getElementById('blogModal');
    const closeModal = document.querySelector('.close-modal');
    const readMoreButtons = document.querySelectorAll('.read-more');
    const blogDetails = document.querySelectorAll('.blog-detail');
    
    // Open modal and show specific blog
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const blogId = this.getAttribute('data-blog');
            
            // Hide all blog details
            blogDetails.forEach(detail => {
                detail.style.display = 'none';
            });
            
            // Show selected blog detail
            document.getElementById(blogId).style.display = 'block';
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            
            // Scroll to top of modal
            modal.scrollTop = 0;
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    });
    
    // Close modal when clicking outside content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    });

    // FAQ toggle functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            
            // Toggle active class
            faqItem.classList.toggle('active');
            
            // Update toggle icon
            const toggleIcon = this.querySelector('.toggle-icon');
            toggleIcon.textContent = faqItem.classList.contains('active') ? '−' : '+';
        });
    });

    // Newsletter form submission (prevent default for demo)
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                // In a real application, you would send this to your server
                alert('Thank you for subscribing with: ' + email);
                emailInput.value = '';
            }
        });
    }

    // Progressive loading animation for blog content
    function animateContent() {
        const visibleElements = Array.from(document.querySelectorAll('.blog-card')).filter(
            element => element.getBoundingClientRect().top < window.innerHeight
        );
        
        visibleElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('active');
            }, index * 200);
        });
    }
    
    // Run initial animation
    setTimeout(animateContent, 1000);
    
    // Update on scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(animateContent, 100);
    });
});

// NAVBAR
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

  //footer date dynamic 
document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  });