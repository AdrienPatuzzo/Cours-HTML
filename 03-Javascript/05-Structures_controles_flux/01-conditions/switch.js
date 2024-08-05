let couleur = "noir";


// if (couleur = "vert"){
//     console.log("Vous pouvez souscrire une assurance chez nous.")
// } else if (couleur = "rouge") {
//     console.log("Vous ne pouvez pas souscrire une assurance chez nous.")
// } else {
//     console.log("Besoin d'informations suplémentaires.")
// }

switch (couleur) {
    case "vert":
        console.log("Vous pouvez souscrire une assurance chez nous.")
        break;
    case "rouge":
        console.log("Vous ne pouvez pas souscrire une assurance chez nous.")
        break;
    case "orange":
        console.log('Besoin d\'information suplémentaires.')
        break;
    default:
        console.log("Couleur non reconnu.")
        break;
}