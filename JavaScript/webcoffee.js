// Togglee
const navMenu = document.querySelector(".nav-menu");

// Saat Diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault();
  navMenu.classList.toggle("active");
};

// Klik Mana Aja Hilang
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

// Animasi Saat Discroll 
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => revealObserver.observe(el));
