let nomObjet = {}
console.log(typeof nomObjet); //object

let personne = {
    // clé => valeur
    nom: 'Patuzzo',
    prenom: 'Adrien',
    age: 32
};
console.log(personne);
// Renvoie l'ensemble des clé de l'objet

console.log(personne.nom);
// Pour récupérer quelque chose de précis a l'intérieur (ici le nom)

console.log(personne.age);
// Ne peut pas réenvoyer plusieurs infos de l'object, faire plusieurs console.log(personne.quelquechose)

