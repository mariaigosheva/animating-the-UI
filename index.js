// Utility
const get = id => document.getElementById(id);

// Elements
const openBtn = get("menu-btn");
const nav = get("nav");
const exitBtn = get("exit-btn");

// ----------------------
// Mobile Menu Toggle
// ----------------------
if (openBtn && exitBtn && nav) {
    openBtn.addEventListener("click", () => {
        nav.classList.add("open-nav");
    });

    exitBtn.addEventListener("click", () => {
        nav.classList.remove("open-nav");
    });
}

// ----------------------
// GSAP Animations
// ----------------------
if (typeof gsap !== "undefined") {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from(".main-copy", { y: 50, opacity: 0 })
      .to("h1 span", {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
      }, "-=.7")
      .from("ul.featured-cabins li", {
          y: 50,
          opacity: 0,
          stagger: 0.3
      }, "-=.7");
}

// ----------------------
// Active Nav Link Logic
// ----------------------
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    
    // Normalize to compare paths (prevents mismatch on trailing slashes)
    const linkPath = link.href.replace(/\/$/, "");
    const currentPath = window.location.href.replace(/\/$/, "");

    if (linkPath === currentPath) {
        link.classList.add("active");
    }

    // On click: set active + close mobile nav
    link.addEventListener("click", () => {

        // reset all links
        navLinks.forEach(l => l.classList.remove("active"));

        // set clicked one active
        link.classList.add("active");

        // close mobile menu if open
        if (nav) nav.classList.remove("open-nav");
    });
});
