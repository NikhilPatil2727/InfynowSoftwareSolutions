// Toggle Mobile Menu
function toggleMobileMenu() {
    const sidebar = document.getElementById('mobile-sidebar');
    sidebar.classList.toggle('active');
}

// Form Validation
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !subject || !message) {
        alert('Please fill in all fields');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number');
        return false;
    }

    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
    return true;
}

// Scroll Event for Hero Section Parallax (optional)
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    window.addEventListener('scroll', function() {
        if (heroSection) {
            const scrolled = window.pageYOffset;
            heroSection.style.backgroundPosition = `center ${scrolled * 0.5}px`;
        }
    });
});

// Scroll to Top
document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Footer Year
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Chatbot Functionality
const chatIcon = document.getElementById('chatIcon');
const chatBot = document.getElementById('chatBot');
const closeChat = document.getElementById('closeChat');
const chatInput = document.querySelector('.chat-input textarea');
const sendBtn = document.getElementById('sendBTN');
const chatbox = document.querySelector('.chatbox');

const toggleChat = () => {
    chatBot.style.display = chatBot.style.display === 'flex' ? 'none' : 'flex';
};

const createChatDiv = (message, className) => {
    const chatDiv = document.createElement('div');
    chatDiv.classList.add('chat', className);
    chatDiv.innerHTML = `<p>${message}</p>`;
    return chatDiv;
};

const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = '';
    chatbox.appendChild(createChatDiv(userMessage, 'chat-outgoing'));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        const incomingDiv = createChatDiv('Thinking...', 'chat-incoming');
        chatbox.appendChild(incomingDiv);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        setTimeout(() => {
            incomingDiv.querySelector('p').textContent = 'This is a sample response.';
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 1000);
    }, 600);
};

// chatIcon.addEventListener('click', toggleChat);
// closeChat.addEventListener('click', toggleChat);
// sendBtn.addEventListener('click', handleChat);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleChat();
    }
});

// Close chatbot when clicking outside
document.addEventListener('click', (e) => {
    if (!chatBot.contains(e.target) && !chatIcon.contains(e.target)) {
        chatBot.style.display = 'none';
    }
});


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
    $(".btn-text").text("Submitting...")
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
            // If the backend response is an error
           
                alert("Enquiry submitted successfully");
                location.reload();
    
        },
        error: function (request, error) {
            console.error(error);
        },
        complete: function () {
            $(".btn .spinner-border").hide();
            $("#btn_add").attr("disabled", false);
            $(".btn-text").text("Submit"); // Reset button text
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