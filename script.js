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

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.style.maxHeight = "0px"; // Collapse menu
      setTimeout(() => navLinks.classList.remove("active"), 300);
    } else {
      navLinks.classList.add("active");
      navLinks.style.maxHeight = "500px"; // Expand menu smoothly
    }
  });
}

// Portfolio Tabs - Smooth Height Transition
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  const portfolioContent = document.querySelector(".portfolio-content");

  function updateActiveTab(newTab) {
    const newContent = document.getElementById(newTab + "-form");

    if (newContent) {
      const currentHeight = portfolioContent.offsetHeight;
      tabContents.forEach(content => content.classList.remove("active"));

      portfolioContent.style.minHeight = currentHeight + "px";

      setTimeout(() => {
        newContent.classList.add("active");
        portfolioContent.style.height = newContent.scrollHeight + "px";
      }, 100);

      setTimeout(() => {
        portfolioContent.style.minHeight = "";
      }, 500);
    }
  }

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      tabButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const tab = button.getAttribute("data-tab");
      updateActiveTab(tab);
    });
  });

  setTimeout(() => {
    const activeTab = document.querySelector(".tab-button.active").getAttribute("data-tab");
    updateActiveTab(activeTab);
  }, 300);
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

// Scroll Animations - Fade elements in when they appear in viewport
document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".reveal");

  const elementInView = (el, percentVisible = 0.2) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= window.innerHeight * (1 - percentVisible);
  };

  const displayScrollElement = (element) => {
    element.classList.add("active");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("active");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
      if (elementInView(el, 0.2)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation(); // Run on load
});

// Lightbox for Videos
document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".video iframe");
  const lightbox = document.getElementById("lightbox");
  const lightboxIframe = document.getElementById("lightbox-iframe");
  const closeLightbox = document.querySelector(".close-lightbox");

  if (videos && lightbox && lightboxIframe && closeLightbox) {
    videos.forEach(video => {
      video.addEventListener("click", () => {
        lightboxIframe.src = video.src; // Set the iframe source to the clicked video
        lightbox.classList.add("active"); // Show the lightbox
      });
    });

    closeLightbox.addEventListener("click", () => {
      lightbox.classList.remove("active"); // Hide the lightbox
      lightboxIframe.src = ""; // Clear the iframe source
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active"); // Hide the lightbox if clicking outside the iframe
        lightboxIframe.src = ""; // Clear the iframe source
      }
    });
  }
});

// Contact Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simulate form submission (replace with actual API call or backend integration)
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      console.log("Form Data:", data); // Log form data to the console

      // Show a success message
      alert("Thank you for your message! I'll get back to you soon.");

      // Reset the form
      contactForm.reset();
    });
  }
});

// Loading Animation
document.addEventListener("DOMContentLoaded", function () {
  const loading = document.getElementById("loading");

  if (loading) {
    // Simulate a loading delay (replace with actual page load logic)
    setTimeout(() => {
      loading.style.display = "none"; // Hide the loading animation
    }, 2000); // 2-second delay for demonstration
  }
});




  
















