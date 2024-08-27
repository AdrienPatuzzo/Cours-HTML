let tabUsers = [
    {
        nom:'john',
        age: 15,
    },
    {
        nom:'Marc',
        age: 20,
    },
];

const rechercheUtilisateurParNom = (nomRecherche) => {
    let tabnomRecherche = [];
    for (const user of tabUsers){
        const { nom } = user;
        if (nomRecherche === nom) {
            tabnomRecherche.push(nomRecherche);
        }
    }
    const exist = (tabnomRecherche.length>0) ? `${nomRecherche} existe!` : `${nomRecherche} n'existe pas!`;
    console.log(exist);
};

// appels
rechercheUtilisateurParNom('Marc'); // => Marc existe!
rechercheUtilisateurParNom('Paul'); // => Paul n'existe pas!

