export default class User {
  constructor(
    id,
    type,
    dateNaissance,
    dateInscription,
    nom,
    prenom,
    mail,
    mdp,
    adresse,
    quartier,
    ville,
    tel,
    zipCode,
    qrCode,
    totalPlastiqueCollecte,
    krystoCoins
  ) {
    this.id = id;
    this.type = type;
    this.dateNaissance = dateNaissance;
    this.dateInscription = dateInscription;
    this.nom = nom;
    this.prenom = prenom;
    this.mail = mail;
    this.mdp = mdp;
    this.adresse = adresse;
    this.quartier = quartier;
    this.ville = ville;
    this.tel = tel;
    this.zipCode = zipCode;
    this.qrCode = qrCode;
    this.totalPlastiqueCollecte = totalPlastiqueCollecte;
    this.krystoCoins = krystoCoins;
  }
}
