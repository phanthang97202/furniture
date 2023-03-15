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

// countdown
const daysNode = document.querySelector(".timer__day > h2");
const hoursNode = document.querySelector(".timer__hour > h2");
const minutesNode = document.querySelector(".timer__minute > h2");
const secondsNode = document.querySelector(".timer__second > h2");
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  daysNode.innerHTML = days;
  hoursNode.innerHTML = hours;
  minutesNode.innerHTML = minutes;
  secondsNode.innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// multi products
let items = document.querySelectorAll(".carousel__products_item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

// GRID FILTER PRODUCTS
const grid3 = document.getElementById("grid3");
const grid4 = document.getElementById("grid4");

grid3.addEventListener("click", (e) => {
  for (let i = 0; i < 4; i++) {
    const item = document.querySelector(`.col__filter_products${i + 1}`);
    item.classList.remove("col-lg-3", "col-md-4", "col-sm-6", "col-12");
    item.classList.add("col-lg-4", "col-md-6", "col-sm-6", "col-12");
  }
});

grid4.addEventListener("click", (e) => {
  for (let i = 0; i < 4; i++) {
    const item = document.querySelector(`.col__filter_products${i + 1}`);
    item.classList.add("col-lg-3", "col-md-4", "col-sm-6", "col-12");
    item.classList.remove("col-lg-4", "col-md-6", "col-sm-6", "col-12");
  }
});
// grid 3
// col-lg-4 col-md-6 col-sm-6 col-12

// grid 4
// col-lg-3 col-md-4 col-sm-6 col-12