// Run after DOM loads
document.addEventListener("DOMContentLoaded", function () {

    /* =============================
       1. Smooth Loader Remove
    ============================= */
    const loader = document.getElementById("loader");

    if (loader) {
        window.addEventListener("load", () => {
            loader.style.opacity = "0";
            loader.style.transition = "0.5s";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        });
    }

    /* =============================
       2. Mobile Menu Toggle
    ============================= */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle('active');
        });
    }

    /* =============================
       3. Close Menu on Click
    ============================= */
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove('active');
        });
    });

    /* =============================
       4. Sticky Navbar Shadow Effect
    ============================= */
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });

});


/* =============================
   5. WhatsApp Form Integration
============================= */
function sendToWhatsApp(e) {
    e.preventDefault();

    const name = document.querySelector('.contact-form input[type="text"]').value.trim();
    const phone = document.querySelector('.contact-form input[type="tel"]').value.trim();
    const msg = document.querySelector('.contact-form textarea').value.trim();

    // Validation
    if (!name || !phone || !msg) {
        alert("Please fill all details");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Enter valid 10 digit mobile number");
        return;
    }

    // Message
    const message =
        `Hello Viraj Enterprises,%0a` +
        `I want service details.%0a%0a` +
        `Name: ${name}%0a` +
        `Phone: ${phone}%0a` +
        `Requirement: ${msg}`;

    const whatsappURL = `https://wa.me/919967767541?text=${message}`;

    window.open(whatsappURL, '_blank');
}