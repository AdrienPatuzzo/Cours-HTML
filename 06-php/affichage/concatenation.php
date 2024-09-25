<?php

$bonjour = 'bonjour';
$tout = 'tout';
$leMonde = 'le monde';
$bonjour .= " $tout "; // $bonjour = $bonjour . tout
$bonjour .= "$leMonde\n"; // $bonjour = $bonjour . leMonde

echo $bonjour; // bonjour tout le monde
// echo $bonjour . ' ' . $leMonde . PHP_EOL; // Bonjour le monde
// echo "$bonjour $leMonde\n"; // Bonjour le monde

// $jour = 'aujourd'hui'; //erreur
// $jour2 = 'aujourd\'hui'; // échappement
$jour = "aujourd'hui"; // ok

