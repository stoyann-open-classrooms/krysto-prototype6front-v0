// Liens vers le fichier contenat l'api
const linkToData = "./src/data/krystoData.json";
let root = document.getElementById("root");
// ================ Fetch des données ==================
window.addEventListener("load", () => {
  fetch(linkToData)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(`Une erreur de type ${response.status}  est survenu ! `);
      }
    })
    .then((data) => createElements(data));
});

// creation de paragraphe avec les titres des produits
function createElements(data) {
  let dataFetched = data.produitRecyclables;
  console.log(dataFetched);

  dataFetched.forEach((produit) => {
    console.log(produit);
    let p = document.createElement("p");
    p.classList.add("data-name-test");
    p.innerText = `${produit.name}`;
    console.log(root);
    root.appendChild(p);
    console.log(p);
  });
}
