<?php

$prenom = 'John'; // déclaration + initialisation

// echo 'Bonjour John';
// echo "\n";
// echo 'comment allez-vous John ?';
// echo "\n";
// echo 'Voici le profil de John';

echo 'Bonjour' . ' ' . $prenom . PHP_EOL;
// echo "Bonjour $prenom" . PHP_EOL;
echo "Comment allez vous $prenom" . PHP_EOL;
$prenom = 'Marie';
echo "Voici le profil de $prenom";