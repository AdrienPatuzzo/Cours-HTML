<?php

$fruit1 ='pomme';
$fruit2 ='Banane';

// echo "fruit1 : $fruit1\n"; //Pomme
// echo "fruit2 : $fruit2"; //Banane

$fruit2 = &$fruit1; // Passage par référence

// echo "fruit1 : $fruit1\n"; // Pomme
// echo "fruit1 : $fruit1"; // Pomme

$fruit1 = 'fraise';

echo "fruit1 : $fruit1\n"; // fraise
echo "fruit1 : $fruit1"; // fraise

