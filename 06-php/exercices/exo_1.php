<?php

// On peut appelé la fonction n'importe ou même si c'est moins logique
// echo meteo("hiver", 1); // Nous sommes en hiver et il fait 1 degré (ou 0 ou -1)
// echo meteo("hiver", 5); // Nous sommes en hiver et il fait 5 degrés 

// function meteo($saison, $temperature){
//     return "Nous sommes en $saison et il fait $temperature degrés";
// }

function meteo($saison, $temperature)
{
    if ($temperature != 1 && $temperature != 0 && $temperature != -1) {
        return "Nous sommes en $saison et il fait $temperature degrés";
    } else {
        return "Nous sommes en $saison et il fait $temperature degré";
    }
}
echo meteo("hiver", -10) . PHP_EOL;
echo meteo("hiver", -1) . PHP_EOL;
echo meteo("hiver", 0) . PHP_EOL;
echo meteo("hiver", 1) . PHP_EOL;
echo meteo("hiver", 10);

// Perrine
// function meteo($saison, $temperature)
// {
//     echo "Nous sommes en $saison et il fait $temperature " . ($temperature === 0 || $temperature === 1 || $temperature === -1 ? 'degré' : 'degrés');
// }; 

// amélioration de la fonction Perrine par Christophe
// function meteo($saison, $temperature){
//     $getPluriel = $temperature > 1 || $temperature < -1;
//     $avecOuSansS = $getPluriel ? 's' : '';
//     return "Nous sommes en $saison et il fait $temperature degré$avecOuSansS";
// }