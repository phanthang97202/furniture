// GRID FILTER PRODUCTS
const grid1 = document.getElementById("grid1");
const grid3 = document.getElementById("grid3");
const grid4 = document.getElementById("grid4");
console.log(grid1, grid3, grid4);

const container__product_one = document.querySelector(
  ".container__product_one"
);
const products__filter_container = document.querySelector(
  ".products__filter_container"
);

grid3.addEventListener("click", (e) => {
  console.log("grid3");

  container__product_one.classList.add("activeProductOne");
  products__filter_container.style.display = "block";
  for (let i = 0; i < 4; i++) {
    const item = document.querySelector(`.col__filter_products${i + 1}`);
    item.classList.remove("col-lg-3", "col-md-4", "col-sm-6", "col-12");
    item.classList.add("col-lg-4", "col-md-6", "col-sm-6", "col-12");
  }
});

grid4.addEventListener("click", (e) => {
  console.log("grid4");
  container__product_one.classList.add("activeProductOne");
  products__filter_container.style.display = "block";
  for (let i = 0; i < 4; i++) {
    const item = document.querySelector(`.col__filter_products${i + 1}`);
    item.classList.add("col-lg-3", "col-md-4", "col-sm-6", "col-12");
    item.classList.remove("col-lg-4", "col-md-6", "col-sm-6", "col-12");
  }
});

grid1.addEventListener("click", (e) => {
  console.log("grid1");
  container__product_one.classList.remove("activeProductOne");
  products__filter_container.style.display = "none";
});
