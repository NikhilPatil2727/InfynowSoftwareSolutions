<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Us - InfyNow</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    <link rel="stylesheet" href="css/contact.css" />
  </head>
  <body>
    <header>
    <?php
        include_once('includes/header.php')
      ?>
    </header>

    <div class="hero-section">
      <div class="hero-background">
        <h1>CONTACT US</h1>
        <p>Get in touch with us for any questions or inquiries</p>
      </div>
    </div>

    <div class="contact-container">
    <div class="form-section">
      <h2 class="section-title">Get In Touch</h2>
      <form id="contactForm" onsubmit="return validateForm(event)">
        <div class="input-group">
          <input type="text" id="txtName" required>
          <label>Full Name</label>
          <span class="error-message" id="error-txtName"></span>


        </div>
        <div class="input-group">
          <input type="email" id="txtEmail" required>
          <label>Email Address</label>
          <span class="error-message" id="error-txtEmail"></span>

        </div>
        <div class="input-group">
          <input type="tel" id="txtMobileNo" maxlength="10" required>
          <label>Mobile Number</label>
          <span class="error-message" id="error-txtMobileNo"></span>

        </div>
        <div class="input-group">
          <select id="txtServices" required>
          <option value="" disabled selected>Select Services</option>
          <option value="Custom Software Development">Custom Software Development</option>
          <option value="Website Design & Development">Website Design & Development</option>
          <option value="Mobile App Development">Mobile App Development</option>
          <option value="Software Maintenance & Support Services">Software Maintenance & Support Services</option>
          <option value="Internship & Project Training">Internship & Project Training</option>
          <option value="Digital Marketing Services">Digital Marketing Services</option>
            <option value="other">Other</option>
          </select>
          <span class="error-message" id="error-txtServices"></span>

        </div>
        <div class="input-group">
        <textarea id="enquiryDetails" required></textarea>
          <label>Your Message</label>
        <span class="error-message" id="error-enquiryDetails"></span>

        </div>

        <button type="button" class="submit-btn" id="btn_add">
        <span class="btn-text">Send Message</span>
        <span class="spinner-border spinner-border-sm" style="display: none;" role="status" aria-hidden="true"></span>
    </button>
      </form>
    </div>
    <div class="info-section">
      <h2 class="section-title">Contact Information</h2>
      <div class="info-item">
        <i class="fas fa-map-marker-alt"></i>
        <p>F4 First floor, Star Tower, Oppo Canara Bank,<br>
          Khanapur Road near RPD Cross,<br>
          Tilakwadi Belagavi 590006</p>
      </div>
      <div class="info-item">
        <i class="fas fa-map-marker-alt"></i>
        <p>1st floor, Nirmala Plaza, Kolekar tikti bus stop,<br>
          Mangalwar peth, Kolhapur - 416012,<br>
          Maharashtra - India</p>
      </div>
      <div class="info-item">
        <i class="fas fa-envelope"></i>
        <p>info@infynow.com</p>
      </div>
      <div class="info-item">
        <i class="fas fa-phone-alt"></i>
        <p>(+91) 9513421639<br>(+91) 9611860475</p>
      </div>
      <div class="info-item">
        <i class="fas fa-globe"></i>
        <p>www.infynow.com</p>
      </div>
      <div class="social-links">
        <h3>Follow Us:</h3>
        <a href="https://www.facebook.com/people/Infynow-Software-Solutions/61571202526100/" class="social-icon"><i class="fab fa-facebook"></i></a>
        <a href="https://x.com/infynow/status/1331058651222589440" class="social-icon"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/company/infynow-business-solutions-llp/?originalSubdomain=in" class="social-icon"><i class="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/infynowsoftware_solutions/" class="social-icon"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>

    <div class="map-section">
      <h2 class="section-title-map">Our Location</h2>
      <div class="map-container">
        <div class="map-box">
          <h3 class="map-title">
            <span>➤</span> Infynow Software Solutions, Belagavi
          </h3>
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.4293350079674!2d74.49910184587199!3d15.834016606670254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66a455555555%3A0x68be6a454d516476!2sInfynow%20Software%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1742898650575!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"></iframe>
        </div>
        <div class="map-box">
          <h3 class="map-title">
            <span>➤</span> Infynow Software Solutions, Kolhapur
          </h3>
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7643.455621269174!2d74.22489930000002!3d16.6904987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc101e0f5f64d63%3A0x1cfeef969c373c06!2sInfynow%20Software%20Solutions%20LLP%20Kolhapur!5e0!3m2!1sen!2sin!4v1742895290529!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"></iframe>
        </div>
      </div>
    </div>

    <div id="scrollToTop" aria-label="Scroll to top">↑</div>

    <!-- Footer -->
    
    <?php
        include_once('includes/footer.php')
      ?>
    <!-- Chat Icon -->
    <!-- <div id="chatIcon">💬</div> -->

    <!-- Chatbot Container -->
    <div class="chatBot" id="chatBot">
      <header>
        <h2>Support Chat</h2>
        <span id="closeChat">×</span>
      </header>
      <div class="chatbox">
        <div class="chat chat-incoming">
          <p>Hello! How can I help you today?</p>
        </div>
        <div class="chat chat-outgoing">
          <p>I'd like to know more about your services.</p>
        </div>
      </div>
      <div class="chat-input">
        <textarea placeholder="Type your message..." rows="1"></textarea>
        <button id="sendBTN">Send</button>
      </div>
    </div>

    <!-- <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY"></script> -->
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="js/contact.js?v=1"></script>
  </body>
</html>
