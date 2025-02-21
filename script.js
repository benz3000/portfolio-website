// Responsive menu toggle (for mobile)
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Animate profile image on page load
window.addEventListener("load", () => {
    const profileImg = document.querySelector(".profile");
    profileImg.classList.add("animate");
});

// Load Lottie animation (if applicable)
if (document.getElementById('lottie-animation')) {
    var animation = lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animation.json'
    });
}



