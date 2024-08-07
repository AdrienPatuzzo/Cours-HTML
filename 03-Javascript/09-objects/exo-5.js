// Exercice 5 :
// Créez un objet "cercle" avec la propriété "rayon".
// Ajoutez une méthode "calculerPerimetre" qui calcule et renvoie le périmètre du cercle.
// Ajoutez une méthode "calculerSurface" qui calcule et renvoie la surface du cercle.

let cercle = {
    rayon: 30,
    calculerPerimetre: function() {
        perimetre = (2 * Math.PI * this.rayon),
        console.log(`Le périmètre d'un cercle de rayon 30 est de ${perimetre}`);
    },
    calculerSurface: function() {
        surface = (Math.PI * Math.pow(this.rayon, 2)),
        console.log(`La surface d'un cercle de rayon 30 est de ${surface}`);
    },
}

cercle.calculerPerimetre();
cercle.calculerSurface();

// Pas de return sauf dans une fonction seule