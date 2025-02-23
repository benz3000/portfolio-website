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

// Profile Image Animation on Load
document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.querySelector(".profile");
    if (profileImage) {
        profileImage.style.transition = "opacity 1s ease, transform 1s ease";
        profileImage.style.opacity = "1";
        profileImage.style.transform = "translateX(0)";
    }
});





