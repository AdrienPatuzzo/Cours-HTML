let personne = {  //On est pas sur un constructor donc pas besoin de majuscule
    // clé => valeur
    nom: 'Patuzzo',
    prenom: 'Adrien',
    age: 32,
    // méthodes
    parler: function() {
        console.log(`Bonjour je m'appelle ${this.nom}`) //Ici il faut mettre des "alt 7"
    },
};

// On peut réafecter a l'infini des variables qu'on a déjà créer auparavent
console.log(personne.prenom);
personne.prenom = 'Laura'; // ok
console.log(personne.prenom);
personne.prenom = true; //a éviter !
console.log(personne.prenom);
personne.prenom = []; //a éviter !
console.log(personne.prenom);
personne.taille = '1.12m'; // A éviter !
console.log(personne);