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
    for (let i = 0; i < tabUsers.length; i++) {
        if (tabUsers[i].nom.toLowerCase() === nom.toLowerCase()) {
            tabUsers[i].age = nouvelAge;// Mettre à jour l'âge de l'utilisateur
            break;
        }
    }
}

modifierAge('marc', 21)
console.log(tabUsers);

