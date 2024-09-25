<?php

// function calculTva() {
//     return 100*1.2;
// }
// echo calculTva();

// function calculTva($prix) {
//     return $prix * 1.2;
// }
// echo calculTva(100);

// function calculTva($prix, $tauxTva){
//     return $prix * $tauxTva;
// }
// echo calculTva(100, 25);

// define ("TVAINGTPOURCENT", 1.2);
// define ("TVAINGTCINQPOURCENT", 1.2);

// function calculTva($prix, $tauxTva){
//     $prixCalcule = $prix * $tauxTva;
//     return $prixCalcule;
// }
// echo calculTva(100, TVAINGTCINQPOURCENT);

// valeur par défaut
define ("TVAINGTPOURCENT", 1.2); //taux par défaut
define ("TVAINGTCINQPOURCENT", 1.2); 

// taux 1.2 par défaut si non renseigné à l'appel de la fonction
// function calculTva($prix, $tauxTva = 1.2){ 
//     $prixCalcule = $prix * $tauxTva;
//     return $prixCalcule;
// }
// echo calculTva(100);
// echo calculTva(100, 1.25);

// A ne pas faire, valeur par défaut a la suite des valeurs obligatoires
// function calculTva2($tauxTva = 1.2, $prix){ 
//     $prixCalcule = $prix * $tauxTva;
//     return $prixCalcule;
// }
// echo calculTva2(100); // erreur


