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
}
let utilisateur2 = {
    nom: 'Maité la grosse',
    service: 'cuisinière'
}

tabUtilisateurs = [...tabUtilisateurs, utilisateur1, utilisateur2];

function changeServiceByName (newUtilisateurs, newService, ...args){
    let newtabUtilisateurs = [];
    for (const utilisateur of args){
        const {nom, Service} = utilisateur;
        if (nom === nom){
            newUtilisateurs = [...newUtilisateurs, {nom: utilisateur, service: newService}];
        }
        else{
        newUtilisateurs = [...newUtilisateurs, utilisateur];
        }
    }
    return newtabUtilisateurs;
}
tabUtilisateurs = [...newtabUtilisateurs];

console.log(newtabUtilisateurs);
changeServiceByName(``, ...tabUtilisateurs);