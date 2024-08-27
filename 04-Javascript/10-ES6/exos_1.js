#!/usr/bin/env node
// créer quelques objets "voiture" (mini 3) => 2 attributs : marque et puissance
// mettre ces objets dans un tableau
// créer une fonction qui prends en paramètre le tableau et une marque recherchée
// => nous renvoies le nombre de voitures trouvées
// Obligation d'utiliser uniquement la destructuration et le spread opérator
// => nombre de voiture trouvées
// 3 fois (...)

const voiture = {
    marque: 'renault',
    puissance: 'bien',
}
const voiture2 = {
    marque: 'peugeot',
    puissance: 'cool',
}
const voiture3 = {
    marque: 'toyota',
    puissance: 'tranquil',
}
let tabVoitures = [];
// let tabVoitures = [voiture, voiture2, voiture3];
tabVoitures = [...tabVoitures, voiture, voiture2, voiture3];

function rechercheParMarque(marqueRecherchee, ...args){
    let cpt = 0;
    for (const voiture of args) {
        const {marque} = voiture;
        if (marqueRecherchee === marque){
            cpt++;
        }
    }
    // console.log(`il y a ${cpt} voitures`);
    console.log(`${ cpt > 0 ? `il y a ` + cpt : "il n'y a aucune"} voiture de la marque ${marqueRecherchee}`);
};

rechercheParMarque('renault', ...tabVoitures)