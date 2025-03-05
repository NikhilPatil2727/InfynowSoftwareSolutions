document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');

    window.addEventListener('scroll', function() {
        if (heroSection) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            heroSection.style.backgroundPosition = `center ${rate}px`;
        }
    });
});

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

function initMap() {
    const companyLocation = {
        lat: 15.8497,
        lng: 74.4977
    };

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: companyLocation,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#020d26"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0a1e4a"
                    }
                ]
            }
        ]
    });

    const marker = new google.maps.Marker({
        position: companyLocation,
        map: map,
        title: 'InfyNow',
        animation: google.maps.Animation.DROP
    });

    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="color: #020d26; padding: 10px;">
                <h3 style="margin-bottom: 5px;">InfyNow</h3>
                <p style="margin: 0;">F4 First floor, Star Tower<br>Tilakwadi, Belagavi</p>
            </div>
        `
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

window.onload = initMap;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const infoItems = document.querySelectorAll('.info-item');
infoItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateX(10px)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateX(0)';
    });
});

document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function toggleMobileMenu() {
    const sidebar = document.getElementById('mobile-sidebar');
    sidebar.classList.toggle('active');
}
