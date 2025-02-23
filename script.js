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

// Responsive mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Profile image animation on page load
document.addEventListener("DOMContentLoaded", () => {
    const profileImage = document.querySelector(".profile");
    profileImage.style.opacity = "0";
    profileImage.style.transform = "translateX(100px)";

    setTimeout(() => {
        profileImage.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        profileImage.style.opacity = "1";
        profileImage.style.transform = "translateX(0)";
    }, 500);
});

// Load Lottie animation (if you want animated icons)
var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // Ensure this ID is in your HTML
    renderer: 'svg', 
    loop: true, 
    autoplay: true, 
    path: 'assets/animation.json' // Path to your Lottie JSON file
});







