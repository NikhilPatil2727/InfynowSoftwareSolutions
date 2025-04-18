// Show sections on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  sections.forEach((section) => observer.observe(section));
});

// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});

// Navbar
function toggleMobileMenu() {
  const sidebar = document.getElementById("mobile-sidebar");
  sidebar.classList.toggle("active");
}

// Scroll-to-Top functionality
document.getElementById("scrollToTop").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Set current year in footer
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
});

// JavaScript for Mobile App Section
document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.querySelectorAll(
    ".mobile-app-section .text-content p"
  );
  const image = document.querySelector(
    ".mobile-app-section .image-content img"
  );

  if (image) {
    image.style.animation = "float 6s ease-in-out infinite";
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }

  function checkVisibility() {
    paragraphs.forEach((paragraph, index) => {
      if (isInViewport(paragraph)) {
        setTimeout(() => {
          paragraph.classList.add("visible");
        }, index * 200);
      }
    });
  }

  if (image) {
    image.addEventListener("mousemove", function (e) {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      this.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    image.addEventListener("mouseleave", function () {
      this.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
      setTimeout(() => {
        this.style.animation = "float 6s ease-in-out infinite";
      }, 100);
    });

    image.addEventListener("mouseenter", function () {
      this.style.animation = "none";
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

// Chatbot Functionality
const chatIcon = document.getElementById("chatIcon");
const chatBot = document.getElementById("chatBot");
const closeChat = document.getElementById("closeChat");
const chatInput = document.querySelector(".chat-input textarea");
const sendBtn = document.getElementById("sendBTN");
const chatbox = document.querySelector(".chatbox");

let userMessage = null;

// Fixed toggle function
const toggleChat = () => {
  chatBot.style.display = chatBot.style.display === "flex" ? "none" : "flex";
};

// Rest of the JavaScript remains the same
const createChatDiv = (message, className) => {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = `<p>${message}</p>`;
  return chatDiv;
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatInput.value = "";
  chatbox.appendChild(createChatDiv(userMessage, "chat-outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    const incomingDiv = createChatDiv("Thinking...", "chat-incoming");
    chatbox.appendChild(incomingDiv);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingDiv);
  }, 600);
};

const generateResponse = (chatElement) => {
  const messageElement = chatElement.querySelector("p");
  setTimeout(() => {
    messageElement.textContent =
      "This is a sample response. Implement your API logic here.";
    chatbox.scrollTo(0, chatbox.scrollHeight); // Ensure scroll after response
  }, 1000);
};

// Event Listeners
chatIcon.addEventListener("click", toggleChat);
closeChat.addEventListener("click", toggleChat);
sendBtn.addEventListener("click", handleChat);

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleChat();
  }
});

document.addEventListener("click", (e) => {
  if (chatBot && !chatBot.contains(e.target) && !chatIcon.contains(e.target)) {
    chatBot.style.display = "none";
  }
});
