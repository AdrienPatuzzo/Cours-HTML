// Exercice 3 :
//  Créez un objet "voiture" avec les propriétés "marque", "modele, et "annee".
// Ajoutez une méthode "afficher" à cet objet qui affiche toutes les propriétés de l'objet dans la console.

let voiture = {  
    marque: 'biloute',
    modele: 'chatte',
    annee: 69,
    afficher: function() {
        console.log(`Voiture de marque ${this.marque} du modèle ${this.modele} des années ${this.annee}`);
    },
};

voiture.afficher();

