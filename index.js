const elHamburgerBtn = document.querySelector(".nav__bar");
const elNav = document.querySelector(".nav");

elHamburgerBtn.addEventListener("click:", () => {
  elNav.classList.toggle(".hamburger");
});
