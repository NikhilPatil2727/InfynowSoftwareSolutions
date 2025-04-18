<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infynow Softwares</title>
    <link rel="stylesheet" href="css/Home.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
  </head>

  <body>
    <header>

      <?php
        include_once('includes/header.php')
      ?>

      <!-- Hero Section with Inquiry Form -->
      <div class="hero-container">
        <div class="hero">
          <h1>
            Delivering Superior Cutting-Edge
            <span class="highlight">IT Solutions</span>
          </h1>
          <p>We Make Great Things Possible</p>
          <div class="cta-buttons">
            <!-- <a href="../Contact/contact.html" class="cta-button">Contact Us</a>
                    <a href="../About/about.html" class="cta-button">Get Started</a> -->
          </div>
          <div class="social-links">
            <a href="https://x.com/infynow/status/1331058651222589440"
              ><i class="fab fa-twitter"></i
            ></a>
            <a href="https://www.facebook.com/people/Infynow-Software-Solutions/61571202526100/"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a
              href="https://www.linkedin.com/company/infynow-business-solutions-llp/?originalSubdomain=in"
              ><i class="fab fa-linkedin-in"></i
            ></a>
            <a href="https://www.instagram.com/infynowsoftware_solutions/"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
        </div>

        <!-- Inquiry Form -->
        <div class="inquiry-form-container">
                <div class="modal">
                    <div class="modal-header">
                        <h2>ENQUIRY FORM</h2>
                        <!-- <button class="enquiry-close-btn">×</button> -->
                    </div>
                    <form class="enquiry-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="firstName">Full Name</label>
                                <input type="text" id="txtName" name="firstName" placeholder="Enter your Name" required />
                                <span class="error-message" id="error-txtName"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="txtEmail" name="email" placeholder="johndoe@sample.com" required />
                            <span class="error-message" id="error-txtEmail"></span>
                        </div>
                        <div class="form-group">
                            <label for="phoneNumber">Phone Number</label>
                            <input type="tel" id="txtMobileNo" name="phoneNumber" placeholder="000 000 0000" maxlength="10"/>
                            <span class="error-message" id="error-txtMobileNo"></span>
                        </div>
                        <div class="form-group">
                            <label for="dropdown1">Services</label>
                            <select id="txtServices" name="dropdown1" required>
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
                        <div class="form-group">
                            <label for="enquiryDetails">Any Message</label>
                            <textarea id="enquiryDetails" name="enquiryDetails" rows="2" placeholder="Type your answer here"></textarea>
                            <span class="error-message" id="error-enquiryDetails"></span>
                        </div>
                        <button type="button" class="submit-btn" id="btn_add">
                            <span class="btn-text">Submit</span>
                            <span class="spinner-border spinner-border-sm" style="display: none;" role="status" aria-hidden="true"></span>
                        </button>

                        
                    </form>
                    
                </div>
            </div>
      </div>
    </header>

    <!-- body section  -->
    <div class="services-section">
      <h2>Services We Offer</h2>
      <p>
        We provide cutting-edge software solutions, including web and mobile app
        development, AI-driven automation, cloud solutions, and IT services,
        helping businesses scale, innovate, and succeed in the digital era.
      </p>

      <div class="services-grid">
        <!-- Service 1 -->
        <a
          href="software-solutions.php"
          style="text-decoration: none">
          <div class="service-card">
            <i class="fa fa-lightbulb"></i>
            <h3>Custom Software Development</h3>
            <p>
              We develop custom, scalable software solutions, including apps and
              automation tools, ensuring seamless user experiences tailored to
              your business needs.....
            </p>
          </div>
        </a>

        <!-- Service 2 -->
        <a
          href="web-development.php"
          style="text-decoration: none">
          <div class="service-card">
            <i class="fa fa-server"></i>
            <h3>Website Design & Development</h3>
            <p>
              We build custom software solutions, delivering scalable, secure,
              and high-performance applications with seamless user experiences,
              tailored to your needs....
            </p>
          </div>
        </a>

        <!-- Service 3 -->
        <a
          href="application-development.php"
          style="text-decoration: none">
          <div class="service-card">
            <i class="fa fa-share-alt"></i>
            <h3>Mobile App Development</h3>
            <p>
              We build high-performance mobile apps with seamless experiences,
              scalability, and security, tailored for iOS, Android, or
              cross-platform solutions....
            </p>
          </div>
        </a>

        <!-- Service 4 -->
        <a
          href="software-maintenance.php"
          style="text-decoration: none">
          <div class="service-card">
            <i class="fa fa-wrench"></i>
            <h3>Software Maintenance & Support Services</h3>
            <p>
              We provide reliable software maintenance and support, ensuring
              security, performance, and updates for custom apps, web platforms,
              and enterprises....
            </p>
          </div>
        </a>

        <!-- Service 5 -->
        <a href="training.php" style="text-decoration: none">
          <div class="service-card">
            <i class="fa fa-graduation-cap"></i>
            <h3>Internship & Project Training</h3>
            <p>
              Our Internship & Project Training provides hands-on experience in
              software development, web, mobile, UI/UX, databases, and cloud
              computing skills....
            </p>
          </div>
        </a>

        <!-- Service 6 -->
        <a
          href="digital-marketing.php"
          style="text-decoration: none">
          <div class="service-card">
            <i class="fa fa-bullhorn"></i>
            <h3>Digital Marketing Services</h3>
            <p>
              We offer digital marketing services, including SEO, PPC, social
              media, and content marketing, to boost visibility, drive
              conversions, enhance brand growth, and maximize ROI....
            </p>
          </div>
        </a>
      </div>
    </div>

    <!-- Whye we choos us  -->

    <section class="why-choose-us">
      <div class="container">
        <div class="section-header">
          <h2 id="x">Why Choose Us</h2>
        </div>

        <div class="benefits-grid">
          <!-- Benefit 1 -->
          <div class="benefit">
            <div class="benefit-content">
              <div class="benefit-text">
                <h3>Expert-Led <span>Software Solutions</span></h3>
                <p>
                  Get cutting-edge technology solutions designed by experienced
                  professionals.
                </p>
              </div>
              <div class="benefit-icon">
                <i class="fas fa-clipboard-check"></i>
              </div>
            </div>
          </div>

          <!-- Benefit 2 -->
          <div class="benefit">
            <div class="benefit-content">
              <div class="benefit-text">
                <h3>On-Time <span>Project Delivery</span></h3>
                <p>
                  Fast and efficient development with strict deadlines and
                  quality assurance.
                </p>
              </div>
              <div class="benefit-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
            </div>
          </div>

          <!-- Benefit 3 -->
          <div class="benefit">
            <div class="benefit-content">
              <div class="benefit-text">
                <h3>Custom &amp; Scalable <span>Development</span></h3>
                <p>
                  We build software tailored to your business needs with
                  future-ready scalability.
                </p>
              </div>
              <div class="benefit-icon">
                <i class="fas fa-users"></i>
              </div>
            </div>
          </div>

          <!-- Benefit 4 -->
          <div class="benefit">
            <div class="benefit-content">
              <div class="benefit-text">
                <h3><span>Affordable &amp; Transparent</span> Pricing</h3>
                <p>
                  Get high-quality services at competitive prices with no hidden
                  costs.
                </p>
              </div>
              <div class="benefit-icon">
                <i class="fas fa-dollar-sign"></i>
              </div>
            </div>
          </div>

          <!-- Benefit 5 -->
          <div class="benefit">
            <div class="benefit-content">
              <div class="benefit-text">
                <h3><span>SEO & Performance</span> Websites</h3>
                <p>Fast, mobile-friendly, and SEO-optimized web solutions.</p>
              </div>
              <div class="benefit-icon">
                <i class="fas fa-cog"></i>
              </div>
            </div>
          </div>

          <!-- Benefit 6 -->
          <div class="benefit">
            <div class="benefit-content">
              <div class="benefit-text">
                <h3>24/7 <span>Support &amp; Maintenance</span></h3>
                <p>
                  Reliable post-launch support to ensure smooth performance.
                </p>
              </div>
              <div class="benefit-icon">
                <i class="fas fa-headset"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- tesimonals -->
    <div class="testimonials-slider-section">
      <h2>What Clients Say</h2>
      <p class="testimonials-subtitle">
        "Excellent service, seamless experience, and outstanding customer
        support!"
      </p>

      <!-- SLIDER CONTAINER -->
      <div class="slider-container">
        <div class="slider-track">
          <!-- SLIDE 1 -->
          <div class="slide">
            <div class="testimonial-card">
              <img
                src="public/images/santosh.9a5f613784a02824c527.jpeg"
                alt="Person 1"
                class="testimonial-img" />
              <div class="testimonial-content">
                <h3>Mr Santosh Kaveri</h3>
                <span class="job-title">Founder & Innovater</span>
                <div class="star-rating">★★★★★</div>
                <p>
                  Thanks to the attractive web solution team who made such a
                  wonderful website for our foundation. Extreme patience and
                  very pleasant and positive attitude. We loved getting our
                  website created by them and shall ever cherish it.
                </p>
                <div class="quote-icon">❝</div>
              </div>
            </div>
            <div class="testimonial-card">
              <img
                src="public/images/download.jpg"
                alt="Person 2"
                class="testimonial-img" />
              <div class="testimonial-content">
                <h3>Mr. Girish Badragond</h3>
                <span class="job-title">Scientist, Founder & Innovator</span>
                <div class="star-rating">★★★★★</div>
                <p>
                  Very nice kind and supportive they've always improved and
                  reverting back to all my queries and I'm more happy to
                  recommend them.
                </p>
                <div class="quote-icon">❝</div>
              </div>
            </div>
          </div>

          <!-- SLIDE 2 -->
          <div class="slide">
            <div class="testimonial-card">
              <img
                src="public/images/dinkar.08322f3f471c05e5e75c.png"
                alt="Person 3"
                class="testimonial-img" />
              <div class="testimonial-content">
                <h3>John Doe</h3>
                <span class="job-title">Adv. Dinkar Shetty</span>
                <div class="star-rating">★★★★★</div>
                <p>
                  infyNow and their team are knowledgeable, transparent, and
                  passionate at what they are doing. They completed the project
                  in these trying times within the stipulated period. They were
                  patient to all my questions and queries and were ready to
                  implement the changes requested by me. Overall extremely
                  satisfied.
                </p>
                <div class="quote-icon">❝</div>
              </div>
            </div>
            <div class="testimonial-card">
              <img
                src="public/images/abhishek.e44a4e228eb219e8ef3a.jpg"
                alt="Person 4"
                class="testimonial-img" />
              <div class="testimonial-content">
                <h3>Mr. Mahesh Shahapurkar</h3>
                <span class="job-title">Owner & Founder</span>
                <div class="star-rating">★★★★★</div>
                <p>
                  Amazing service at an affordable price. thanks to your team
                  for my website it's a pleasure working with infyNow. The team
                  understands briefs well and responds promptly to satisfy
                  requirements.
                </p>
                <div class="quote-icon">❝</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SLIDER INDICATORS -->
      <div class="slider-indicators">
        <span data-slide="0" class="active"></span>
        <span data-slide="1"></span>
      </div>
    </div>

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

    <!-- Scroll-to-Top Button -->
    <div id="scrollToTop" aria-label="Scroll to top">↑</div>

    <!-- Footer  -->

    <?php
    include_once('includes/footer.php')
  ?>

    <!-- <script
      data-cfasync="false"
      src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script> -->
      <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="js/home.js?v=1"></script>
  </body>
</html>
