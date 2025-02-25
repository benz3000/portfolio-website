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

// Mobile Menu Toggle with Smooth Animation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
        navLinks.style.maxHeight = "0px"; // Collapse
        setTimeout(() => navLinks.classList.remove("active"), 300); // Wait for animation before removing class
    } else {
        navLinks.classList.add("active");
        navLinks.style.maxHeight = navLinks.scrollHeight + "px"; // Expand smoothly
    }
});

// Lazy loading for embedded TikTok video
document.addEventListener("DOMContentLoaded", function () {
    const tiktokEmbed = document.querySelector(".tiktok-embed");
    if (tiktokEmbed) {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }
});













