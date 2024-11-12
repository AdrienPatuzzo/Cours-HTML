<?php

// $fileName = __DIR__ . "\\" . "sauv.txt";  // echo $fileName;
// $file = fopen($fileName, "w");
// fwrite($file, "Bonjour");
// fclose($file);

// $tab = [
// ["prenom" => "Adrien", "nom" => "Patuzzo", "age" => 33], 
// ["prenom" => "Kelly", "nom" => "Sniatecki", "age" => 23]
// ];

// change_color(''); // défault color
// change_color('green');
// print_r($tab);




Require ('lib/functions.php');
require ('lib/utils.php');
$tab = [];
$fileName = __DIR__ . "\\" . "sauv.csv";
csvToArray($tab, $fileName);
print_r($tab);

$personne = (object)[
    "prenom" => "Adrien", 
    "nom" => "Patuzzo", 
    "age" => 33
];
$personne2 = (object)[
    "prenom" => "Kelly", 
    "nom" => "Sniatecki", 
    "age" => 23
];

array_push($tab, $personne, $personne2, );
$header = ["prenom", "nom", 'age'];
arrayToCsv($fileName, $tab, ",", $header);

change_color('purple');
echo (PHP_EOL . PHP_EOL .
    "-------------------------" . PHP_EOL .
    "1. Chercher une personne." . PHP_EOL .
    "2. Supprimer une personne." . PHP_EOL .
    "3. Quitter." . PHP_EOL);
change_color("");

while (true) {
    $saisie = readline('veuillez choisir un menu ou 3 pour quitter : ');
    switch ($saisie) {
        case 1:
            require_once('personnes/lister_personnes.php');
            break;
        case 2:
            require_once('personnes/supprimer_personne.php');
            break;
        case 3:
            exit;
            break;
    }
}