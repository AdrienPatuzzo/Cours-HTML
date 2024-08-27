#!/usr/bin/env node
// Créer un tableau d'utilisateurs vide
// y stocker 2 ou plus utilisateurs qui possèdent un "nom" et un "service" (ex: "informatique")
// créer une fonction qui permets de changer le service d'un utilisateur en y passant son nom, le nouveau service et le tableau d'origine
// cette fonction retourne un nouveau tableau à jour
// mettre à jour le tableau de base et l'afficher pour vérifier le changement
// destructuration et spread operator
// console.log du tableau d'origine modifié


let tabUtilisateurs = [];

let utilisateur1 = {
    nom: 'george abidbol',
    service: 'homme le plus class du monde'
};
let utilisateur2 = {
    nom: 'Maité la grosse',
    service: 'cuisinière'
};

tabUtilisateurs.push(utilisateur1, utilisateur2); // Ajout des utilisateurs au tableau

function changerService(nom, nouveauService, tableau) {
    let nouveauTableau = tableau.map(utilisateur => { // Copie du tableau original pour créer un nouveau tableau
        if (utilisateur.nom.toLowerCase() === nom.toLowerCase()) { // Vérifie si le nom correspond, en ignorant la casse
            return { ...utilisateur, service: nouveauService }; // Retourne un nouvel objet utilisateur avec le service mis à jour
        }
        return utilisateur; // Retourne l'utilisateur d'origine
    });
    return nouveauTableau;
}

let tableauMisAJour = changerService('george abidbol', 'chanteur', tabUtilisateurs); // Appel de la fonction pour changer le service de l'utilisateur

console.log(tableauMisAJour); // Afficher le tableau mis à jour
console.log(tabUtilisateurs); // Afficher le tableau de base pour vérifier qu'il n'a pas changé