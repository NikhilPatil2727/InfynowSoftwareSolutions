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
    }, 15000);
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

// chatbot code

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

$("#btn-add").click(function (e) {
    $(".error-message").text(''); 


    if ($("#txtName").val().trim().length < 1) {
        $("#error-txtName").text("Please enter your full name.");
        $("#txtName").focus();
        return false;
    }


    if ($("#txtMobileNo").val().trim().length < 1) {
        $("#error-txtMobileNo").text("Please enter your mobile number.");
        $("#txtMobileNo").focus();
        return false;
    }


    var phoneNumber = $("#txtMobileNo").val().trim();
    var phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phoneNumber)) {
        $("#error-txtMobileNo").text("Please enter a valid 10-digit phone number.");
        $("#txtMobileNo").focus();
        return false;
    }


    var email = $("#txtEmail").val().trim();
    if (email.length > 0) {
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            $("#error-txtEmail").text("Please enter a valid email address.");
            $("#txtEmail").focus();
            return false;
        }
    }


    if ($("#txtInterestedIn").val() === "" || $("#txtInterestedIn").val() === null) {
        $("#error-txtInterestedIn").text("Please select a course.");
        $("#txtInterestedIn").focus();
        return false;
    }

    $("#btn_add").attr("disabled", true);
    $(".spinner-border").show();
    $(".btn-text").text("Submitting...")

    var formData = new FormData();
    formData.append("txtName", $("#txtName").val());
    formData.append("txtMobileNo", $("#txtMobileNo").val());
    formData.append("txtEmail", $("#txtEmail").val());
    formData.append("txtCollege", $("#txtCollege").val());
    formData.append("txtCourse", $("#txtCourse").val());
    formData.append("txtInterestedIn", $("#txtInterestedIn").val());
    formData.append("txtMessage", $("#txtMessage").val());
    formData.append("resume", $("#txtResume")[0].files[0]); 
    formData.append("action", "enroll"); 


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
            alert("Application submitted successfully!");
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

$("#txtMobileNo").on('input', function() {
    $("#error-txtMobileNo").text('');
});

$("#txtEmail").on('input', function() {
    $("#error-txtEmail").text('');
});

$("#txtInterestedIn").on('change', function() {
    $("#error-txtInterestedIn").text('');
});


$("#txtEmail").on('blur', function() {
    var email = $(this).val().trim();
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        $("#error-txtEmail").text("Please enter a valid email address.");
    } else {
        $("#error-txtEmail").text('');
    }
});


$("#txtMobileNo").on('blur', function() {
    var phoneNumber = $(this).val().trim();
    var phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phoneNumber)) {
        $("#error-txtMobileNo").text("Please enter a valid 10-digit phone number.");
    } else {
        $("#error-txtMobileNo").text('');
    }
});
