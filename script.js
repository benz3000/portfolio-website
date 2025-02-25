// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
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
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.style.maxHeight = "0px"; // Collapse menu
        setTimeout(() => navLinks.classList.remove("active"), 300);
      } else {
        navLinks.classList.add("active");
        navLinks.style.maxHeight = "500px"; // Expand menu (adjust as needed)
      }
    });
  }
  
  // Portfolio Tabs - Switch between Long Form and Short Form
  document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));
        // Add active class to clicked button and corresponding content
        button.classList.add("active");
        const tab = button.getAttribute("data-tab");
        const contentToShow = document.getElementById(tab + "-form");
        if (contentToShow) {
          contentToShow.classList.add("active");
        }
      });
    });
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
  
















