<nav>
    <div class="logo">
        <a href="index.php"><img src="./logo.png" alt="TECH Logo" /></a>
    </div>

    <!-- Desktop Navigation Menu -->
    <ul class="main-nav">
        <li><a href="index.php">Home</a></li>
        <li class="dropdown">
            <a href="#">Services</a>
            <ul class="dropdown-menu">
                <li><a href="software-solutions.php">Custom Software Development</a>
                </li>
                <li><a href="web-development.php">Website Design & Development</a></li>
                <li><a href="application-development.php">Mobile App
                        Development</a></li>
                <li><a href="software-maintenance.php">Software Maintenance & Support
                        Services</a></li>
                <li><a href="training.php">Internship & Project Training</a></li>
                <li><a href="digital-marketing.php">Digital Marketing Services</a></li>
            </ul>
        </li>
        <li><a href="training.php">Internship</a></li>
        <li><a href="about.php">About</a></li>
        <li><a href="career.php">Careers</a></li>
        <li><a href="product.php">Products</a></li>
        <li><a href="blogs.php">Blogs</a></li>
        <li>
            <a href="contact.php">
                <button class="Contact">Contact</button>
            </a>
        </li>
    </ul>

    <!-- Hamburger Button (Mobile Only) -->
    <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Open Mobile Menu">
        <i class="fa fa-bars"></i>
    </button>
</nav>

<!-- Mobile Sidebar Menu -->
<div class="mobile-sidebar" id="mobile-sidebar">
    <div class="sidebar-header">
        <button class="close-btn" onclick="toggleMobileMenu()">×</button>
    </div>
    <div class="sidebar-content">
        <ul class="sidebar-nav">
            <li><a href="index.php" class="nav-link" style="text-decoration: none; color: #ff5722;">Home</a></li>
            <li class="dropdown">
                <a href="#" class="nav-link dropdown-toggle"
                    style="text-decoration: none ; color: #ff5722;">Services</a>
                <ul class="dropdown-menu">
                    <li><a href="software-solutions.php">Custom Software Development</a>
                    </li>
                    <li><a href="web-development.php">Website Design & Development</a></li>
                    <li><a href="application-development.php">Mobile App
                            Development</a></li>
                    <li><a href="software-maintenance.php">Software Maintenance &
                            Support Services</a></li>
                    <li><a href="training.php">Internship & Project Training</a></li>
                    <li><a href="digital-marketing.php">Digital Marketing Services</a>
                    </li>
                </ul>
            </li>
            <li><a href="training.php" class="nav-link"
                    style="text-decoration: none; color: #ff5722;">Training</a></li>
            <li><a href="about.php" class="nav-link" style="text-decoration: none; color: #ff5722;">About</a>
            </li>
            <li><a href="career.php" class="nav-link"
                    style="text-decoration: none; color: #ff5722;">Careers</a></li>
            <li><a href="product.php" class="nav-link"
                    style="text-decoration: none; color: #ff5722;">Products</a></li>
            <li><a href="blogs.php" class="nav-link" style="text-decoration: none; color: #ff5722;">Blogs</a>
            </li>
            <li><a href="contact.php" class="contact-btn" style="text-decoration: none;">Contact</a></li>
        </ul>
    </div>
</div>