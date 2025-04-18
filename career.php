<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Careers | Join Our Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="css/career.css">
</head>
<body>

  <header>
  <?php
        include_once('includes/header.php')
      ?>
  </header>

  <header class="header">
      <div class="header-background"></div>
      <div class="header-content">
          <h1 style="color: #ff5722;">Careers</h1>
          <p>Join our innovative team and shape the future of technology</p>
      </div>
  </header>

  <main>
      <section class="jobs-container">
          <h2 class="openposition">Open Positions</h2>
          <div class="jobs-grid" id="jobsGrid">
          </div>
      </section>
  </main>

  

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

  <div id="scrollToTop" aria-label="Scroll to top">↑</div>

  <?php
        include_once('includes/footer.php')
      ?>

  <div id="popupOverlay" class="popup-overlay">
      <div id="popupForm" class="popup-form">
          <div class="popup-header">
              <button id="closePopup" class="close-btn">×</button>
              <h2>Apply Now</h2>
          </div>
          <div class="popup-content">
              <form id="applicationForm">
                  <div class="form-group">
                      <label for="name">Full Name</label>
                      <input type="text" id="name" name="name" required>
                  </div>
                  <div class="form-group">
                      <label for="email">Email</label>
                      <input type="email" id="email" name="email" required>
                  </div>
                  <div class="form-group">
                      <label for="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" required>
                  </div>
                  <div class="form-group">
                      <label for="position">Position</label>
                      <input type="text" id="position" name="position" readonly required>
                  </div>
                  <div class="form-group">
                      <label for="experience">Years of Experience</label>
                      <input type="number" id="experience" name="experience" min="0" required>
                  </div>
                  <div class="form-group">
                      <label for="resume">Resume/CV</label>
                      <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required>
                  </div>
                  <div class="form-group">
                      <label for="message">Cover Letter</label>
                      <textarea id="message" name="message" rows="4" required></textarea>
                  </div>
                  <button type="submit" class="submit-btn">Submit Application</button>
              </form>
          </div>
      </div>
  </div>

  <script src="js/career.js"></script>
</body>
</html>
