const container__header = document.querySelector(".container__header");
const navigation = document.querySelector(".navigation");
const header__scrollY = document.querySelector(".header__scrollY");

///////////////////////
let widthBrowse;
window.addEventListener("load", (e) => {
  navigation.style.display = "flex";
});
// widthBrowse === window.screenY && (navigation.style.display = "flex");
window.addEventListener("scroll", (e) => {
  console.log(container__header.getBoundingClientRect());
  container__header.getBoundingClientRect().top === 0
    ? // && window.innerWidth > 1024
      (navigation.style.display = "none")
    : (navigation.style.display = "flex");
  window.innerWidth < 1024 && (navigation.style.display = "flex");
  container__header.getBoundingClientRect().top === 0
    ? (categories.style.display = "none")
    : (categories.style.display = "block");
  container__header.getBoundingClientRect().top === 0 &&
    loginForm.classList.add("activeOpenLogin");
});
console.log(header__scrollY);
window.addEventListener("scroll", (e) => {
  container__header.getBoundingClientRect().top === 0
    ? header__scrollY.classList.remove("activeScrollY")
    : header__scrollY.classList.add("activeScrollY");
});
window.addEventListener("resize", (e) => {
  // widthBrowse = window.innerWidth;
  window.innerWidth < 1024 ? console.log("nhỏ hơn 1024") : console.log("flase");
  window.innerWidth < 1024 && (navigation.style.display = "flex !important");
  // : (navigation.style.display = "none");
  console.log(window.innerWidth);
});

const openMenu = document.getElementById("openMenu");
const navigation__menu = document.querySelector(".navigation__menu");
const closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", () => {
  navigation__menu.classList.add("activeOpenMenu");
});
closeMenu.addEventListener("click", (e) => {
  navigation__menu.classList.remove("activeOpenMenu");
});
window.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target === navigation__menu) {
    navigation__menu.classList.remove("activeOpenMenu");
  }
});

const categories = document.querySelector(".categories");
const openCategories = document.getElementById("openCategories");
const navigation__categories = document.querySelector(
  ".navigation__categories"
);
console.log(openCategories, navigation__categories);
openCategories.addEventListener("click", (e) => {
  navigation__categories.classList.add("activeCategories");
});
window.addEventListener("click", (e) => {
  if (e.target === categories) {
    navigation__categories.classList.remove("activeCategories");
  }
});

// CART
const yourcart__container = document.querySelector(".yourcart__container");
const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");

openCart.addEventListener("click", (e) => {
  yourcart__container.classList.remove("activeCart");
});
closeCart.addEventListener("click", (e) => {
  yourcart__container.classList.add("activeCart");
});

const openLogin = document.getElementById("openLogin");
const loginForm = document.querySelector(".loginForm");

openLogin.addEventListener("click", (e) => {
  loginForm.classList.toggle("activeOpenLogin");
});
