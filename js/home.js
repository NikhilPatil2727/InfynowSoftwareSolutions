// Basic one-by-one slider
const track = document.querySelector('.slider-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const indicators = Array.from(document.querySelectorAll('.slider-indicators span'));

let currentSlide = 0;
const totalSlides = slides.length;
const slideDuration = 7000; // 7 seconds per slide

// Show a specific slide by index
function showSlide(index) {
  currentSlide = (index + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  indicators.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

// Indicator clicks
indicators.forEach(dot => {
  dot.addEventListener('click', () => {
    const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
    showSlide(slideIndex);
  });
});

// Auto-slide every few seconds
setInterval(() => {
  showSlide(currentSlide + 1);
}, slideDuration);

// Initialize first slide
showSlide(0);


//footer date dynamic 
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;
});

//mobile side bar toogle menu 
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

document.addEventListener('click', (e) => {
  if (chatBot && !chatBot.contains(e.target) && !chatIcon.contains(e.target)) {
    chatBot.style.display = 'none';
  }
});

//close funtinaliy of enquirey form 
// document.querySelector('.enquiry-close-btn').addEventListener('click', function(e) {
//   e.preventDefault();
//   document.querySelector('.inquiry-form-container').style.display = 'none';
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




$("#txtName").on('input', function() {
  $("#error-txtName").text('');
});


$("#txtEmail").on('input', function() {
  $("#error-txtEmail").text('');
});


$("#txtMobileNo").on('input', function() {
  $("#error-txtMobileNo").text('');
});


$("#txtServices").on('change', function() {
  $("#error-txtServices").text('');
});


$("#enquiryDetails").on('input', function() {
  $("#error-enquiryDetails").text('');
});

$("#txtEmail").on('blur', function() {
  var email = $(this).val().trim();
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
 if (!emailRegex.test(email)) {
      $("#error-txtEmail").text("Please enter a valid email address.");
  }
});

$("#txtMobileNo").on('blur', function() {
  var phoneNumber = $(this).val().trim();
  console.log("Phone number on blur:", phoneNumber); 
  
  var phoneRegex = /^[0-9]{10}$/;
  
  if (!phoneRegex.test(phoneNumber)) {
    $("#error-txtMobileNo").text("Please enter a valid 10-digit phone number.");
  } else {
    $("#error-txtMobileNo").text('');
  }
});
