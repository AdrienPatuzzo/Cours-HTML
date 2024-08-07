// Partie 1 : 
// ✓ L’utilisateur saisi un nombre entre 10 et 20 
// ✓ Nombre a trouvé en dur => 12 
// ✓ Renvoyer un résultat en console : Soit "plus grand", soit "plus petit", soit "gagné" 
// ✓ Pas de vérification de saisie : l’utilisateur respecte les nombres entre 10 et 20 

// Partie 1: Nombre fixe à trouver
let targetNumber = 12; // Nombre à trouver

// Demande à l'utilisateur de saisir un nombre
let userGuess = parseInt(prompt("Entrez un nombre entre 10 et 20 :"), 10);

// Compare le nombre saisi avec le nombre cible
if (userGuess < targetNumber) {
    console.log("Plus grand");
} else if (userGuess > targetNumber) {
    console.log("Plus petit");
} else {
    console.log("Gagné !");
}

