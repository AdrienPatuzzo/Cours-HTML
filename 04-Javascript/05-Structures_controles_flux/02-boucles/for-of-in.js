let couleurs = ["rouge" , "vert" , "orange"];

// forof
// for (const couleur of couleurs) {
//     switch (couleur) {
//     case "vert":
//         console.log("Vous pouvez souscrire une assurance chez nous.")
//         break;
//     case "rouge":
//         console.log("Vous ne pouvez pas souscrire une assurance chez nous.")
//         break;
//     case "orange":
//         console.log('Besoin d\'information suplémentaires.')
//         break;
//     default:
//         console.log("Couleur non reconnu.")
//         break;
//     }
// }

// forin
for (const indexOfCouleur in couleurs) {
    console.log(indexOfCouleur);
}