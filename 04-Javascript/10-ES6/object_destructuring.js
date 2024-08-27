const user = {
    nom: 'bob',
    prenom: 'boby',
    age: 56,
    taille: 'petit',
}

// destructuring
// const {nom, prenom, age, taille} = user;
const {nom, age} = user;

// affichage
console.log(user.nom);
// console.log(user.prenom);
console.log(user.age);
// console.log(user.taille);