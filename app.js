const navIcons = document.querySelector(".nav-icons");
const openBtn = document.querySelector(".nav-icons .open");
const closeBtn = document.querySelector(".nav-icons .close");
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");

openBtn.addEventListener("click", () => {
  navIcons.classList.add("nav-icons-rotate");
  container.classList.add("active-container");
  nav.classList.add("show-nav");
});

closeBtn.addEventListener("click", () => {
  navIcons.classList.remove("nav-icons-rotate");
  container.classList.remove("active-container");
  nav.classList.remove("show-nav");
});
