// Simple scroll reveal animation
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((el) => observer.observe(el));

  // Theme toggle (light / dark)
  const themeToggle = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("jp-theme");

  if (storedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.textContent = "☀";
  }

  themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      themeToggle.textContent = "☾";
      localStorage.setItem("jp-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      themeToggle.textContent = "☀";
      localStorage.setItem("jp-theme", "light");
    }
  });

  // Dynamic year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
