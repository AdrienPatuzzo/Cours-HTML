// Exercice 2:
// Utilisez une instruction "switch" pour vérifier la valeur d'une variable "couleur"
// affichez la signification correspondante (par exemple, "rouge", signifie "danger", "vert" signifie "sécurité", etc.)

// let couleur = "vert";

// switch (couleur) {
//     case "rouge":
//         console.log("danger");
//         break;
//     case "vert":
//         console.log("sécurité");
//         break;
//     default:
//         console.log("dangereux");
//         break;
// }

// Correction avec interaction intégré

const readline = require('readline');
const log = console.log;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recursiveAsyncReadLine = function () {
    rl.question("Veuillez saisir une couleur ou quitter ['exit'] : ", function (couleur) {
        if (couleur === 'exit') {
            console.log('Au revoir');
        return rl.close(); //closing RL and returning from function.
    }
    //we need some base case, for recursion

    switch (couleur) {
      case 'vert':
        console.log('sécurisé');
        break;
        case 'jaune':
        console.log('attention');
        break;
        case 'rouge':
        console.log('dangereux');
        break;
      default:
        console.log("couleur non reconnue! ['rouge' , 'vert' , 'jaune']");
        break;
    }
    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow