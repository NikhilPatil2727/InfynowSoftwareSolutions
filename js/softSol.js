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
  
  // openModalBtn.addEventListener('click', () => {
  //     modalForm.style.display = 'flex';
  // });
  
  // closeModalBtn.addEventListener('click', () => {
  //     modalForm.style.display = 'none';
  // });
  
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

//paragraph

// JavaScript for Mobile App Section
document.addEventListener('DOMContentLoaded', function() {
  // Animate paragraphs on scroll
  const paragraphs = document.querySelectorAll('.mobile-app-section .text-content p');
  const image = document.querySelector('.mobile-app-section .image-content img');
  
  // Apply floating animation to the image
  if (image) {
    image.style.animation = 'float 6s ease-in-out infinite';
  }
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  // Initial check for elements in viewport
  function checkVisibility() {
    paragraphs.forEach((paragraph, index) => {
      if (isInViewport(paragraph)) {
        // Add delay based on index
        setTimeout(() => {
          paragraph.classList.add('visible');
        }, index * 200);
      }
    });
  }
  
  // Add interactive hover effect to the image
  if (image) {
    image.addEventListener('mousemove', function(e) {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      this.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    image.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
      // Restore the floating animation after mouse leaves
      setTimeout(() => {
        this.style.animation = 'float 6s ease-in-out infinite';
      }, 100);
    });
    
    image.addEventListener('mouseenter', function() {
      // Pause the floating animation when mouse enters
      this.style.animation = 'none';
    });
  }
  
  // Check visibility on scroll
  window.addEventListener('scroll', checkVisibility);
  
  // Initial check
  checkVisibility();
});

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
// ARROW functionality code 
document.getElementById('scrollToTop').addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
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
// chatIcon.addEventListener('click', toggleChat);
// closeChat.addEventListener('click', toggleChat);
// sendBtn.addEventListener('click', handleChat);

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleChat();
  }
});

// document.addEventListener('click', (e) => {
//   if (chatBot && !chatBot.contains(e.target) && !chatIcon.contains(e.target)) {
//     chatBot.style.display = 'none';
//   }
// });

$("#btn_add").click(function (e) {
  $(".error-message").text('');

  // Validation checks
  if ($("#txtName").val().trim().length < 1) {
      $("#error-txtName").text("Please enter your name.");
      $("#txtName").focus();
      return false;
  }

  var email = $("#txtEmail").val().trim();
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email.length < 1) {
      $("#error-txtEmail").text("Please enter your email address.");
      $("#txtEmail").focus();
      return false;
  } else if (!emailRegex.test(email)) {
      $("#error-txtEmail").text("Please enter a valid email address.");
      $("#txtEmail").focus();
      return false;
  }

  if ($("#txtMobileNo").val().trim().length < 1) {
      $("#error-txtMobileNo").text("Please enter your mobile number.");
      $("#txtMobileNo").focus();
      return false;
  }

  if ($("#txtServices").val() === "" || $("#txtServices").val() === null) {
    $("#error-txtServices").text("Please select a service.");
    $("#txtServices").focus();
    return false;
}


  if ($("#enquiryDetails").val().trim().length < 1) {
      $("#error-enquiryDetails").text("Please enter your message."); 
      $("#enquiryDetails").focus();
      return false;
  }

   $("#btn_add").attr("disabled", true);
   $(".spinner-border").show();
   $(".btn-text").text("Submitting...");

  // Append data
  var formData = new FormData();
  formData.append("txtName", $("#txtName").val());
  formData.append("txtEmail", $("#txtEmail").val());
  formData.append("txtMobileNo", $("#txtMobileNo").val());
  formData.append("txtServices", $("#txtServices").val());
  formData.append("enquiryDetails", $("#enquiryDetails").val());
  formData.append("action","enquiry");


  $.ajax({
        beforeSend: function () {
          $(".btn .spinner-border").show();
          $("#btn_add").attr("disabled", true);
      },
      url: "./backend/process_web.php",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (result) {
          alert("Enquiry submitted successfully");
          location.reload();
  
      },
      error: function (request, error) {
          console.error(error);
      },
      complete: function () {
        $(".btn .spinner-border").hide();
        $("#btn_add").attr("disabled", false);
        $(".btn-text").text("Submit");
    },
  });
});