const sandwich = document.querySelector(".sandwich");
const nav = document.querySelector("nav");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

sandwich.addEventListener("click", () => {
  nav.classList.add("active");
  document.body.classList.add("menu-open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
  document.body.classList.remove("menu-open");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  document.body.classList.remove("menu-open");
});
