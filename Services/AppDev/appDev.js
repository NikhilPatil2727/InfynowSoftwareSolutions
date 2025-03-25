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