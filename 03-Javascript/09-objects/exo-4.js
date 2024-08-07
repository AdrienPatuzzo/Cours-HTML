// Exercice 4 :
// Créez un objet "compte" avec les propriétés "nom" (nom du propriétaire), "solde", et "historique"
// Ajoutez des méthodes "déposer" et "retirer" à cet objet pour effectuer des opérations sur le solde et les ajouter dans l'historique.
// Ajoutez une méthode "afficherHistorique" qui affiche toutes les opérations dans l'historique.

let compte = {
    nom: 'Patuzzo',
    solde: 1000,
    historique: [],
    deposer: function(nombre1) {
        this.solde += nombre1;
        console.log(this.solde);
        this.historique.push(`depot ${nombre1} €`);
    },
    retirer: function(nombre2) {
        this.solde -= nombre2;
        console.log(this.solde);
        this.historique.push(`retrait ${nombre2} €`);
    },
    afficherHistorique: function() {
        console.log(this.historique);
    }
}

// exemple de process (avec solde initial de 1000€)
compte.deposer(100);
compte.retirer(500);
compte.afficherHistorique(); 
// Retrait: 500€
// Dépôt: 100€
// Nouveau solde: 600€