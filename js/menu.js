const menuOverlay = document.querySelector(".mobile-menu");
const closeMenuBtn = document.querySelector(".toggle-menu");
const openMenuBtn = document.querySelector(".toggle-menu__open");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("d-none");
});

closeMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.add("d-none");
});
