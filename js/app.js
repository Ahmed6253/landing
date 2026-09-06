//burger menu click handler
const burger = document.getElementById("burger-btn");
const nav = document.getElementById("main-nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("is-open");
  burger.classList.toggle("is-active");
});

document.querySelectorAll(".header-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    nav.classList.remove("is-open");
    burger.classList.remove("is-active");
  });
});

//card flip handler
const card = document.querySelector(".card-container");

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

//scan QR animation handler
const downloadVisual = document.querySelector(".download");

downloadVisual.addEventListener("click", () => {
  downloadVisual.classList.toggle("scan");
});

//theme toggle handler
const themeBtn = document.getElementById("theme-btn");
const themeIconLight = document.querySelector(".theme-icon-light");
const themeIconDark = document.querySelector(".theme-icon-dark");
const body = document.body;
let theme = localStorage.getItem("theme") || "dark";

function setTheme() {
  body.classList.toggle("light", theme === "light");
  themeIconLight.style.display = theme === "light" ? "none" : "block";
  themeIconDark.style.display = theme === "light" ? "block" : "none";
}

themeBtn.addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme);
  setTheme();
});

setTheme();
