// Exercice 1 :
// Créez un objet "personne" avec les propriétés "nom", "age" et "ville"
// Affectez des valeurs à ces propriétés.
// Affichez ces valeurs à l'aide de consol.log()

// function Personne(nom, age, ville) { 
//     this.nom = nom;
//     this.age = age;
//     this.ville = ville;
// }

// let personne = {  
//     nom: 'Patuzzo',
//     age: 32,
//     ville: 'Dainville',
//     parler: function() {         "La fonction fléchée ne marche pas donc fonction normal"
//         console.log(`Bonjour je m'appelle ${this.nom} , j'ai ${this.age} et j'habite ${this.ville}`) 
//     },
// };
// personne.parler();


// autre façon de l'écrire

let personne = {  
    nom: 'Patuzzo',
    age: 32,
    ville: 'Dainville',
};
console.log(personne.nom);
console.log(personne.age);
console.log(personne.ville);

