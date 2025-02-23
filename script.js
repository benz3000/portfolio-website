// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Responsive menu toggle (for mobile)
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Load Lottie animation
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // The div where animation should appear
    renderer: 'svg', // Render as SVG
    loop: true, // Make it loop
    autoplay: true, // Auto-start animation
    path: 'assets/animation.json' // Path to your Lottie JSON file
});

// Animation for profile image
window.addEventListener("load", () => {
    document.querySelector(".profile").style.animation = "slideInRight 1s ease-out forwards";
});











