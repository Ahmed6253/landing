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
const downloadVisual = document.querySelector(".download-visual");

downloadVisual.addEventListener("click", () => {
  downloadVisual.classList.toggle("scan");
});
