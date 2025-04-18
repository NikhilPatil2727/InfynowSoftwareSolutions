// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Scroll to Top
document.getElementById('scrollToTop').addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

// Navbar
function toggleMobileMenu() {
  const sidebar = document.getElementById('mobile-sidebar');
  sidebar.classList.toggle('active');
}

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

// Slider functionality
const track = document.querySelector('.slider-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const indicators = Array.from(document.querySelectorAll('.slider-indicators span'));

let currentSlide = 0;
const totalSlides = slides.length;
const slideDuration = 7000;

function showSlide(index) {
  currentSlide = (index + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  indicators.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
  });
}

indicators.forEach(dot => {
  dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
      showSlide(slideIndex);
  });
});

setInterval(() => {
  showSlide(currentSlide + 1);
}, slideDuration);

showSlide(0);

// Footer date dynamic
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;
});

const chatIcon = document.getElementById('chatIcon');
const chatBot = document.getElementById('chatBot');
const closeChat = document.getElementById('closeChat');
const chatInput = document.querySelector('.chat-input textarea');
const sendBtn = document.getElementById('sendBTN');
const chatbox = document.querySelector('.chatbox');

let userMessage = null;

// Toggle chat visibility
const toggleChat = () => {
    const isHidden = getComputedStyle(chatBot).display === 'none';
    chatBot.style.display = isHidden ? 'flex' : 'none';
};

// Create chat message div
const createChatDiv = (message, className) => {
    const chatDiv = document.createElement('div');
    chatDiv.classList.add('chat', className);
    chatDiv.innerHTML = `<p>${message}</p>`;
    return chatDiv;
};

// Handle chat message submission
const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = '';
    chatbox.appendChild(createChatDiv(userMessage, 'chat-outgoing'));
    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
        const incomingDiv = createChatDiv('Thinking...', 'chat-incoming');
        chatbox.appendChild(incomingDiv);
        chatbox.scrollTop = chatbox.scrollHeight;
        generateResponse(incomingDiv);
    }, 600);
};

// Simulated bot response
const generateResponse = (chatElement) => {
    const messageElement = chatElement.querySelector('p');
    setTimeout(() => {
        messageElement.textContent = "This is a sample response. Implement your API logic here.";
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);
};

// Event Listeners
chatIcon.addEventListener('click', toggleChat);
closeChat.addEventListener('click', toggleChat);
sendBtn.addEventListener('click', handleChat);

chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleChat();
    }
});
