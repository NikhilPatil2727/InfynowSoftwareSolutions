// Navbar Functionality
function toggleMobileMenu() {
    const sidebar = document.getElementById('mobile-sidebar');
    sidebar.classList.toggle('active');
}

// Scroll to Top Functionality
document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Set Current Year in Footer
document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
});

// Feature Card Animations and More Features Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Stagger Animation for Feature Cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const sections = document.querySelectorAll('.product-section, .cta-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        section.style.animationPlayState = 'paused';
        sectionObserver.observe(section);
    });

    // CTA Button Hover Effect
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            ctaButton.style.transform = 'translateY(-3px)';
            ctaButton.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
        ctaButton.addEventListener('mouseleave', () => {
            ctaButton.style.transform = 'translateY(0)';
            ctaButton.style.boxShadow = 'none';
        });
    }

    // More Features and Show Less Functionality
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    function initFeatures(section) {
        const grid = section.querySelector('.features-grid');
        const cards = Array.from(grid.querySelectorAll('.feature-card'));

        // Temporarily show all cards to calculate N
        cards.forEach(card => card.classList.remove('hidden-feature'));

        if (cards.length > 0) {
            const firstTop = cards[0].offsetTop;
            let N = 1;
            while (N < cards.length && cards[N].offsetTop === firstTop) {
                N++;
            }

            const initialRows = 2;
            const initialVisible = initialRows * N;

            // Hide cards beyond initialVisible
            cards.forEach((card, index) => {
                if (index >= initialVisible) {
                    card.classList.add('hidden-feature');
                }
            });

            // Show or hide the more-button
            const moreButton = section.querySelector('.more-button');
            if (cards.length > initialVisible) {
                moreButton.style.display = 'block';
                moreButton.textContent = 'More Features';
            } else {
                moreButton.style.display = 'none';
            }
        }
    }

    function setupMoreButton(section) {
        const moreButton = section.querySelector('.more-button');
        moreButton.addEventListener('click', () => {
            const grid = section.querySelector('.features-grid');
            const cards = Array.from(grid.querySelectorAll('.feature-card'));
            const visibleCards = cards.filter(card => !card.classList.contains('hidden-feature'));

            if (visibleCards.length > 0) {
                const firstTop = visibleCards[0].offsetTop;
                let N = 1;
                while (N < visibleCards.length && visibleCards[N].offsetTop === firstTop) {
                    N++;
                }

                const step = 2; // Show/hide 2 rows at a time
                if (moreButton.textContent === 'More Features') {
                    const hiddenCards = cards.filter(card => card.classList.contains('hidden-feature'));
                    const toShow = hiddenCards.slice(0, step * N);
                    toShow.forEach(card => card.classList.remove('hidden-feature'));
                    if (hiddenCards.length <= toShow.length) {
                        moreButton.textContent = 'Show Less';
                    }
                } else if (moreButton.textContent === 'Show Less') {
                    const visibleCardsNow = cards.filter(card => !card.classList.contains('hidden-feature'));
                    const toHide = visibleCardsNow.slice(-step * N);
                    toHide.forEach(card => card.classList.add('hidden-feature'));
                    const initialVisible = 2 * N;
                    if (visibleCardsNow.length - toHide.length <= initialVisible) {
                        moreButton.textContent = 'More Features';
                    }
                }
            }
        });
    }

    // Initialize and Setup for Each Product Section
    const productSections = document.querySelectorAll('.product-section');
    productSections.forEach(section => {
        initFeatures(section);
        setupMoreButton(section);
    });

    // Re-initialize on Window Resize
    window.addEventListener('resize', debounce(() => {
        productSections.forEach(section => {
            initFeatures(section);
        });
    }, 250));
});

const chatIcon = document.getElementById('chatIcon');
const chatBot = document.getElementById('chatBot');
const closeChat = document.getElementById('closeChat');
const chatInput = document.querySelector('.chat-input textarea');
const sendBtn = document.getElementById('sendBTN');
const chatbox = document.querySelector('.chatbox');

let userMessage = null;

// Fixed toggle function
const toggleChat = () => {
  chatBot.style.display = (chatBot.style.display === 'flex') ? 'none' : 'flex';
};

// Rest of the JavaScript remains the same
const createChatDiv = (message, className) => {
  const chatDiv = document.createElement('div');
  chatDiv.classList.add('chat', className);
  chatDiv.innerHTML = `<p>${message}</p>`;
  return chatDiv;
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatInput.value = '';
  chatbox.appendChild(createChatDiv(userMessage, 'chat-outgoing'));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    const incomingDiv = createChatDiv('Thinking...', 'chat-incoming');
    chatbox.appendChild(incomingDiv);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingDiv);
  }, 600);
};

const generateResponse = (chatElement) => {
  const messageElement = chatElement.querySelector('p');
  setTimeout(() => {
    messageElement.textContent = "This is a sample response. Implement your API logic here.";
    chatbox.scrollTo(0, chatbox.scrollHeight); // Ensure scroll after response
  }, 1000);
};

// Event Listeners
chatIcon.addEventListener('click', toggleChat);
closeChat.addEventListener('click', toggleChat);
sendBtn.addEventListener('click', handleChat);

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleChat();
  }
});

document.addEventListener('click', (e) => {
  if (chatBot && !chatBot.contains(e.target) && !chatIcon.contains(e.target)) {
    chatBot.style.display = 'none';
  }
});