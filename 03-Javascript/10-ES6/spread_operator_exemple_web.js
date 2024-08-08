// fetch API

const user = {
    nom: 'bob',
    prenom: 'billy',
    age: 56,
    taille: 'petit',
}

// récupération des champs
const nom = 'gluk';
const age = 23;

// renvoyé l'objet modifié
// const newUser = {
//     nom: name,
//     prenom: 'billy',
//     age: 56,
//     taille: 'petit',
// }

const newUser = {
    // objet d'origine destructuré
    ...user,
    // attributs modifiés
    // nom: nom,
    // age: age,
    nom, // si le nom de la variable et de l'attribut sont identiques
    age, // age: age
};

console.log(newUser);