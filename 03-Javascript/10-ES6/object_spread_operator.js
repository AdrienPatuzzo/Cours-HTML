// pas de const si spread operator utilisé
let user = {
    nom: 'bob',
    prenom: 'billy',
    age: 56,
    taille: 'petit',
}

const {age, taille, ...rest} = user // rest => {nom: 'test' , prenom:'toto }

// user.ville = 'Arras';
// user = {...user, ville: 'Arras'}

// console.log(user);
console.log(age, taille, rest);