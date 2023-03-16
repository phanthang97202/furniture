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
