// ----------------------
// Contact Form Handling
// ----------------------
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting us!");
  this.reset();
});

// ----------------------
// AOS (Animate On Scroll)
// ----------------------
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: false
});

// ----------------------
// Mobile Sidebar Handling
// ----------------------
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");
const sidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("sidebarOverlay");
const sidebarLinks = document.querySelectorAll(".sidebar-link");

function toggleSidebar(show) {
  sidebar.classList.toggle("active", show);
  overlay.classList.toggle("active", show);
}

openBtn?.addEventListener("click", () => toggleSidebar(true));
closeBtn?.addEventListener("click", () => toggleSidebar(false));
overlay?.addEventListener("click", () => toggleSidebar(false));
sidebarLinks.forEach(link => link.addEventListener("click", () => toggleSidebar(false)));

// ----------------------
// Swiper Testimonial Carousel
// ----------------------
const swiper = new Swiper(".testimonialSwiper", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 }
  }
});

// ----------------------
// GLightbox Gallery
// ----------------------
GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
  loop: true,
  zoomable: true
});

// ----------------------
// tsParticles Background Effect
// ----------------------
tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: { color: { value: "#0e0e0e" } },
  fpsLimit: 60,
  detectRetina: true,
  particles: {
    number: {
      value: 80,
      density: { enable: true, area: 800 }
    },
    color: { value: ["#ffffff", "#00bcd4", "#ffc107"] },
    shape: { type: ["circle", "triangle", "edge"] },
    stroke: { width: 0 },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false
      }
    },
    size: {
      value: { min: 2, max: 6 },
      random: true,
      anim: {
        enable: true,
        speed: 4,
        size_min: 0.5,
        sync: false
      }
    },
    links: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.3,
      width: 1.2,
      shadow: {
        enable: true,
        color: "#ffffff",
        blur: 3
      }
    },
    move: {
      enable: true,
      speed: 1.2,
      outModes: { default: "bounce" }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "bubble"]
      },
      onClick: {
        enable: true,
        mode: ["push", "repulse"]
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        links: { opacity: 0.6 }
      },
      bubble: {
        distance: 150,
        size: 10,
        duration: 2,
        opacity: 0.8
      },
      repulse: {
        distance: 120,
        duration: 0.4
      },
      push: { quantity: 4 },
      remove: { quantity: 2 }
    }
  }
});
