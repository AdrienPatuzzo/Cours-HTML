// const readline = require('readline');  // est la méthode pour utiliser des librairies
//                                        //
// const rl = readline.createInterface({  //
//     input: process.stdin,              //
//     output: process.stdout             //
// })                                     //

// rl.question("saisissez votre âge : ", (age) => {

//     if (age >= 18){
//         console.log("Vous êtes majeur!")
//     } else {
//         console.log("Trop jeune!!")
//     }
//     rl.close();
// })

let nombre = 10;
                            // Quoi qu'il arrive il se passe au moins une fois une boucle.
do {                        //
    console.log(nombre);
    nombre--;
} while (nombre < 5);