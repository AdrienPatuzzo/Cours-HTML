<?php

// $fileName = __DIR__ . "\\" . "sauv.txt";  // echo $fileName;
// $file = fopen($fileName, "w");
// fwrite($file, "Bonjour");
// fclose($file);

// $tab = [
// ["prenom" => "Adrien", "nom" => "Patuzzo", "age" => 33], 
// ["prenom" => "Kelly", "nom" => "Sniatecki", "age" => 23]
// ];

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

$tab = [$personne, $personne2];
$fileName = __DIR__ . "\\" . "sauv.csv";
$header = ["prenom", "nom", 'age'];

function arrayToCsv($fileName, $donnees, $delimiter, $header) {
    $file = fopen($fileName, 'w');
    fputcsv($file, $header, $delimiter);
    foreach ($donnees as $row){
        $row = (array) $row;
        fputcsv($file, $row, $delimiter);
    }
    fclose($file);
}
arrayToCsv($fileName, $tab, ",", $header);


