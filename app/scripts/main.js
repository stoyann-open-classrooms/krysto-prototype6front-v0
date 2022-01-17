console.log("hello world");

const root = document.getElementById("root");
const url = "http://localhost:1337/api/";
let allProducts = [];
init();

function init() {
  getProduct();
}

function getProduct() {
  fetch(`${url}produits/`)
    .then((data) => data.json())
    .then((result) => {
      allProducts = result;
      renderProduct(allProducts);
    });
}

console.log(allProducts);
function renderProduct(products) {
  console.log(products.data);
  let list = [];
  products.data.forEach((el) => {
    console.log(el.attributes.titre);
    const item = `<li>${el.attributes.titre}</li>`;
    list = [...list, item];
  });
  console.log(list);
  root.innerHTML = `<ul>${list.join("")}</ul>`;
}
