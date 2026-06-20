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
