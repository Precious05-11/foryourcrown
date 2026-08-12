const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("active");

  menuToggle.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const aboutToggle = document.getElementById("aboutToggle");
const aboutExpanded = document.getElementById("aboutExpanded");
const aboutClose = document.getElementById("aboutClose");
const aboutIcon = document.querySelector(".about-icon");

aboutToggle.addEventListener("click", () => {
  aboutExpanded.classList.add("open");

  aboutIcon.textContent = "−";
});

aboutClose.addEventListener("click", () => {
  aboutExpanded.classList.remove("open");

  aboutIcon.textContent = "+";
});
