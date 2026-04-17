// Run after DOM loads (faster than window.onload)
document.addEventListener("DOMContentLoaded", function () {

    // 1. Loader Remove Smooth
    const loader = document.getElementById("loader");
    if (loader) {
        window.addEventListener("load", () => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        });
    }

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle('active');
        });
    }

    // 3. Close Menu on Click
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

});

// 4. WhatsApp Form Integration (Global function)
function sendToWhatsApp(e) {
    e.preventDefault();

    let name = document.querySelector('.contact-form input[type="text"]').value.trim();
    let phone = document.querySelector('.contact-form input[type="tel"]').value.trim();
    let msg = document.querySelector('.contact-form textarea').value.trim();

    // Basic validation
    if (name === "" || phone === "" || msg === "") {
        alert("Please fill all details");
        return;
    }

    if (phone.length < 10) {
        alert("Enter valid mobile number");
        return;
    }

    // Message format
    let messageText =
        "Hello Viraj Enterprises,%0a" +
        "I want service details.%0a%0a" +
        "Name: " + name + "%0a" +
        "Phone: " + phone + "%0a" +
        "Requirement: " + msg;

    let url = "https://wa.me/919967767541?text=" + messageText;

    window.open(url, '_blank');
}
