const root = document.getElementById("root");
const url = "http://localhost:1337/api/";

let allTrocs = [];
init();

function init() {
  getTroc();
}

function getTroc() {
  fetch(`${url}trocs/`)
    .then((data) => data.json())
    .then((result) => {
      allTrocs = result;
      console.log("all trocs", allTrocs.data);
      renderTroc(allTrocs.data);
    });
}

function renderTroc(trocs) {
  let list = [];
  trocs.forEach((el) => {
    console.log(el.attributes);

    const item = `<li>${el.attributes.titre}</li>`;
    list = [...list, item];
  });

  console.log(list);
  root.innerHTML = `<ul>${list.join("")}<ul/>`;
}
