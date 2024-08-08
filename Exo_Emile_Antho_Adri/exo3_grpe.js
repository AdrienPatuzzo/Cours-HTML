// Partie3 :
// ✓ Donner le choix d’un niveau de difficultés (ex : balise « select » : Facile : 20 coups Moyen : 15 coups Difficile : 10 coups
// ✓ Alerte popup (window.alert()) pour informer du nombre de coups épuisés
// ✓ Reload du script complet après appuis sur « ok » (window.location.relaod()) 

let targetNumber = Math.floor(Math.random() * 101); // Génère un nombre aléatoire entre 0 et 100
let userGuess = null;
let remainingAttempts = 0;
let difficulty = 20; // Valeur par défaut

function startGame() {
    difficulty = parseInt(document.getElementById("difficulty").value, 10);
    remainingAttempts = difficulty;
    targetNumber = Math.floor(Math.random() * 101); // Génère un nouveau nombre aléatoire
    console.log("Nouveau nombre à trouver:", targetNumber); // Pour les tests

    document.getElementById("message").textContent = '';// Réinitialise les messages
    let gameOn = true;

    while (remainingAttempts > 0 && gameOn) {
        let input = prompt(`Entrez un nombre entre 0 et 100 (Tentatives restantes: ${remainingAttempts}):`);
        if (isNaN(input) || input < 0 || input > 100) {
            alert("Veuillez entrer un nombre valide entre 0 et 100.");
            continue;
        }

        userGuess = parseInt(input, 10);
        remainingAttempts--;

        if (userGuess < targetNumber) {
            document.getElementById("message").textContent = "C'est Plus !";
        } else if (userGuess > targetNumber) {
            document.getElementById("message").textContent = "C'est Moins !";
        } else {
            document.getElementById("message").textContent = "C'est gagné !";
            gameOn = false;
            break;
        }
    }
    if (remainingAttempts === 0 && userGuess !== targetNumber) {
        window.alert("Nombre de coups épuisés. Vous avez perdu !");
    }
    window.location.reload();// Recharger le script complet après la fin du jeu
}

function showEasyHint() {
    document.getElementById("easyHintModal").style.display = "flex";
}
function closeModal() {
    document.getElementById("easyHintModal").style.display = "none";
}
function openCodingTips() {
    window.open("https://www.freecodecamp.org/news/coding-tips-for-beginners/", "_blank");
}
function closePage() {
    window.close(); // Ferme la fenêtre
}