// Run after DOM loads
document.addEventListener("DOMContentLoaded", function () {

    /* =============================
       1. Smooth Loader Remove
    ============================= */
    const loader = document.getElementById("loader");

    if (loader) {
        window.addEventListener("load", () => {
            loader.style.opacity = "0";
            loader.style.transition = "opacity 0.5s ease";

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
       3. Close Menu on Link Click
    ============================= */
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    /* =============================
       4. Sticky Navbar Shadow
    ============================= */
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
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

    const nameInput = document.querySelector('.contact-form input[type="text"]');
    const phoneInput = document.querySelector('.contact-form input[type="tel"]');
    const msgInput = document.querySelector('.contact-form textarea');

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const msg = msgInput.value.trim();

    // Validation
    if (!name || !phone || !msg) {
        alert("Please fill all details");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Enter valid 10 digit mobile number");
        return;
    }

    // WhatsApp Message (clean formatting)
    const message =
        `Hello Viraj Enterprises,\n` +
        `I want service details.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Requirement: ${msg}`;

    const whatsappURL = `https://wa.me/919967767541?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');

    // Optional UX improvement (reset form)
    nameInput.value = "";
    phoneInput.value = "";
    msgInput.value = "";
}