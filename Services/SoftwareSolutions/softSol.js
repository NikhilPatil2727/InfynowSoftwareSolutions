document.addEventListener("DOMContentLoaded", () => {
  // Observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          }
      });
  }, { threshold: 0.2 });

  // Apply fade-in to all elements with the class "fade-in"
  document.querySelectorAll(".fade-in").forEach(el => {
      observer.observe(el);
  });

  // Staggered animation for "OUR BEST WEBSITE DESIGN AND DEVELOPMENT SERVICES ARE:" boxes
  const serviceCards = document.querySelectorAll(".services-grid.app-services .service-card");

  const staggerAnimation = (elements, delay = 200) => {
      elements.forEach((el, index) => {
          setTimeout(() => {
              el.classList.add("visible");
          }, index * delay);
      });
  };

  // Trigger staggered animation when the section is in view
  const servicesObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              staggerAnimation(serviceCards);
              servicesObserver.unobserve(entry.target); // Stop observing after triggering
          }
      });
  }, { threshold: 0.2 });

  // Observe the parent container of the service cards
  const appServicesSection = document.querySelector(".services-grid.app-services");
  if (appServicesSection) {
      servicesObserver.observe(appServicesSection);
  }
});

document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
function toggleMobileMenu() {
    const sidebar = document.getElementById('mobile-sidebar');
    sidebar.classList.toggle('active');
  }
