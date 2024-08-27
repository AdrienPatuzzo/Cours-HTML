// Partie2 :
// ✓ Générer le nombre à trouver aléatoirement (entre 0 et 100)
// ✓ Boucler tant conditionner pour prévenir l’utilisateur que le nombre saisi n’est pas : Compris entre 0 et 100 et n’est pas un nombre
// ✓ Conditionner pour afficher : C’est Moins ! ou C’est Plus ! ou c’est gagné ! 

// Partie 2: Nombre aléatoire à trouver
let targetNumber = Math.floor(Math.random() * 101); // Génère un nombre aléatoire entre 0 et 100
let userGuess = null;

while (userGuess !== targetNumber) {
    let input = prompt("Entrez un nombre entre 0 et 100 :");
    // Vérifie si l'entrée est un nombre valide
    if (isNaN(input) || input < 0 || input > 100) {
        console.log("Veuillez entrer un nombre valide entre 0 et 100.");
        continue;
    }
    userGuess = parseInt(input, 10);
    if (userGuess < targetNumber) {
        console.log("C'est Plus !");
    } else if (userGuess > targetNumber) {
        console.log("C'est Moins !");
    } else {
        console.log("C'est gagné !");
    }
}