const jobs = [
    {
        title: "Frontend Developer",
        description: "Join our team as a Frontend Developer to create stunning user interfaces and exceptional user experiences.",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Strong understanding of web fundamentals",
            "Excellent problem-solving skills"
        ],
        skills: [
            "React", "TypeScript", "HTML5", "CSS3", "JavaScript",
            "Responsive Design", "Web Performance Optimization"
        ],
        experience: "3+ years of frontend development experience"
    },
    {
        title: "Backend Developer",
        description: "Design and implement scalable server-side solutions and APIs that power our applications.",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Strong understanding of database design",
            "Experience with cloud services"
        ],
        skills: [
            "Node.js", "Python", "SQL", "NoSQL",
            "RESTful APIs", "Microservices Architecture"
        ],
        experience: "4+ years of backend development experience"
    },
    {
        title: "Java Full Stack Developer",
        description: "Build end-to-end enterprise applications using Java and modern web technologies.",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Strong Java fundamentals",
            "Experience with Spring Framework"
        ],
        skills: [
            "Java", "Spring Boot", "Hibernate", "SQL",
            "Angular/React", "RESTful Services"
        ],
        experience: "5+ years of full stack development experience"
    },
    {
        title: "Application Developer",
        description: "Develop and maintain enterprise applications while ensuring high performance and reliability.",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Strong object-oriented programming skills",
            "Experience with agile methodologies"
        ],
        skills: [
            "Java/C#", "SQL", "Web Services",
            "Design Patterns", "Cloud Platforms"
        ],
        experience: "3+ years of application development experience"
    },
    {
        title: "MERN Stack Developer",
        description: "Create modern web applications using MongoDB, Express.js, React, and Node.js.",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Strong JavaScript fundamentals",
            "Experience with MERN stack"
        ],
        skills: [
            "MongoDB", "Express.js", "React", "Node.js",
            "RESTful APIs", "AWS/Azure"
        ],
        experience: "4+ years of MERN stack development experience"
    },
    {
        title: "UI/UX Developer",
        description: "Create intuitive and engaging user interfaces while ensuring excellent user experience.",
        qualifications: [
            "Bachelor's degree in Design or related field",
            "Strong portfolio demonstrating UI/UX work",
            "Understanding of user-centered design"
        ],
        skills: [
            "Figma/Sketch", "Adobe Creative Suite",
            "HTML/CSS", "JavaScript", "Prototyping"
        ],
        experience: "3+ years of UI/UX design experience"
    },
    {
        title: "Python Full Stack Developer",
        description: "Build robust web applications using Python and modern frontend technologies.",
        qualifications: [
            "Bachelor's degree in Computer Science or related field",
            "Strong Python programming skills",
            "Experience with Python web frameworks"
        ],
        skills: [
            "Python", "Django/Flask", "React/Vue",
            "SQL", "RESTful APIs", "AWS"
        ],
        experience: "4+ years of Python development experience"
    }
];

// Populate jobs grid
function populateJobs() {
    const jobsGrid = document.getElementById('jobsGrid');
    const positionSelect = document.getElementById('position');

    jobs.forEach(job => {
        // Create job card
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3 class="job-title">${job.title}</h3>
            <p class="job-description">${job.description}</p>
            <div class="requirements">
                <h4>Qualifications</h4>
                <ul>
                    ${job.qualifications.map(qual => `<li>${qual}</li>`).join('')}
                </ul>
                <h4>Required Skills</h4>
                <ul>
                    ${job.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
                <h4>Experience</h4>
                <p>${job.experience}</p>
            </div>
        `;

        jobsGrid.appendChild(jobCard);

        // Add job to select options
        const option = document.createElement('option');
        option.value = job.title;
        option.textContent = job.title;
        positionSelect.appendChild(option);
    });
}

// Handle form submission
document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real application, you would send this data to a server
    const formData = new FormData(this);
    alert('Thank you for your application! We will review it and get back to you soon.');
    this.reset();
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateJobs();
    
    // Add form field highlight effect
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.boxShadow = '0 0 0 2px rgba(255, 87, 34, 0.3)';
            input.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        });
        
        input.addEventListener('blur', () => {
            input.style.boxShadow = 'none';
            input.style.backgroundColor = 'rgb(39, 32, 59)';
        });
    });
});

// Add scroll animation
document.addEventListener('scroll', function() {
    const jobCards = document.querySelectorAll('.job-card');
    jobCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight * 0.85) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Add subtle glow effect to headings
document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('h2, h3, h4');
    headings.forEach(heading => {
        heading.addEventListener('mouseenter', () => {
            heading.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
        });
        
        heading.addEventListener('mouseleave', () => {
            heading.style.textShadow = 'none';
        });
    });
});

// ARROW

document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// NAVBAR

function toggleMobileMenu() {
    const sidebar = document.getElementById('mobile-sidebar');
    sidebar.classList.toggle('active');
  }