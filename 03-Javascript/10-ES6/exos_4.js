// faire en sorte qu'en appelant marc, l'age passe de 20 a 21

let tabUsers = [
    {
        nom: 'john',
        age: 15,
    },
    {
        nom: 'Marc',
        age: 20,
    },
];

function modifierAge(nom, nouvelAge) {
    // Parcourir le tableau pour trouver l'utilisateur avec le nom donné
    for (let i = 0; i < tabUsers.length; i++) {
        if (tabUsers[i].nom.toLowerCase() === nom.toLowerCase()) {
            // Mettre à jour l'âge de l'utilisateur
            tabUsers[i].age = nouvelAge;
            break; // Sortir de la boucle une fois l'utilisateur trouvé et mis à jour
        }
    }
}

modifierAge('marc', 21)
console.log(tabUsers);

