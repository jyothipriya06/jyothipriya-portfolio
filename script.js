// ----------------------------------------------
//  SIMPLE JS FOR PORTFOLIO WEBSITE
//  - Footer year auto-update
//  - Scroll reveal animations
// ----------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

  // ----------------------------------------------
  // 1. Set current year in footer
  // ----------------------------------------------
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ----------------------------------------------
  // 2. Scroll Reveal Animation
  // ----------------------------------------------
  const revealElements = document.querySelectorAll("[data-reveal]");

  // If browser supports IntersectionObserver
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);   // Reveal only once
          }
        });
      },
      { threshold: 0.15 }   // 15% visible before revealing
    );

    revealElements.forEach(el => observer.observe(el));

  } else {
    // Fallback if browser does not support IntersectionObserver
    revealElements.forEach(el => el.classList.add("revealed"));
  }

});
