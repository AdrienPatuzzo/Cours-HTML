let personne = {  //On est pas sur un constructor donc pas besoin de majuscule
    // clé => valeur
    nom: 'Patuzzo',
    prenom: 'Adrien',
    age: 32,
    parler: function() {
        console.log(`Bonjour je m'appelle ${this.nom}`) //Ici il faut mettre des "alt 7"
    },
};

personne.parler();