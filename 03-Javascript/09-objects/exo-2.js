// Exercice 2 :
// créez un tableau d'objets "personne" avec au moins 3 éléments.
// Parcourez ce tableau à l'aide d'une boucle pour afficher les noms de toutes les personnes.

let tabPersonnes = [
    {
    nom:'Patuzzo', 
    age: 25, 
    ville: 'Dainville',
    },
    {
        nom:'Patuzzo', 
    age: 25, 
    ville: 'Dainville',
    },
    {
        nom:'Patuzzo', 
    age: 25, 
    ville: 'Dainville',
    },
];

// Exemple de boucle
// for (let i = 0; i < tabPersonnes.length; i++) {
//     console.log(tabPersonnes[i].nom);
// }

// Autre exemple de boucle
// for (const personne of tabPersonnes) {
//     console.log(personne.nom)
// }

// Autre exemple de boucle
// tabPersonnes.forEach((personne) => {        //On pourrait pour récup chaque valeurs faire tabPersonnes.forEach((personne, index)
//     console.log(personne.nom);
// });

// Autre exemple de boucle
// tabPersonnes.map((personne) => {
//     console.log(personne.nom);
// });

let newtabPersonnes = [
    {
    nom:'Patuzzo', 
    age: 15, 
    ville: 'Dainville',
    },
    {
        nom:'Patuzzo', 
    age: 26, 
    ville: 'Dainville',
    },
    {
        nom:'Patuzzo', 
    age: 27, 
    ville: 'Dainville',
    },
];


// Autre exemple avec des ages différents dans le tableau
// tabPersonnes.map((personne) => {
//     if (personne.age >= 18) console.log(personne.nom);
// });

// Autre exemple avec des ages différents dans le tableau
// const newTab = tabPersonnes.filter((personne) => { //filter fait une boucle dans le tableau d'origine
//     personne.age >= 18
// }) 

// const newTab = tabPersonnes.filter((personne) => personne.age >= 18);
// for (const personne of newTab) {
//     console.log(personne.nom);
// }

const newtabPersonnes = tabPersonnes.filter((personne) => personne.nom === 'majeur');
console.log(tabPersonnes);
console.log(newtabPersonnes);
for (const personne of newtabPersonnes) {
    console.log(personne.nom);
}