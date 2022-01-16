// Liens vers le fichier contenat l'api
import User from "./classe/User.js";
import UserList from "./classe/UserList.js";
const linkToData = "./src/data/krystoUser.json";

let root = document.getElementById("root");
// ================ Fetch des données ==================
const userlist = new UserList();

fetch(linkToData)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log(`Une erreur de type ${response.status}  est survenu ! `);
    }
  })
  .then((data) => createUserList(data));

function createUserList(data) {
  data.krystoUser.forEach((user) => {
    userlist.addUser(
      new User(
        user.id,
        user.type,
        user.dateNaissance,
        user.dateInscription,
        user.nom,
        user.prenom,
        user.mail,
        user.mdp,
        user.adresse,
        user.quartier,
        user.ville,
        user.tel,
        user.zipCode,
        user.qrCode,
        user.totalPlastiqueCollecte,
        user.krystoCoins
      )
    );
  });
  return UserList;
}
console.log(userlist.userlist);
