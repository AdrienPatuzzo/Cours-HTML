<?php

# Array (tableau)

// $prenom = "Nicolas, Marie, Grégoire, Sylvain, Céline";
// echo $prenom;

// $listePrenoms = Array ("Nicolas", "Marie", "Grégoire", "Sylvain", "Céline");
// print_r($listePrenoms);
// var_dump($listePrenoms); 

$listePrenoms2 = ["Nicolas", "Marie", "Grégoire", "Sylvain", "Céline"];
// affiche le tableau avec plus de détailles, comme le type d'ittérations ou le nombre de caractères (longueurs)
// print_r($listePrenoms2);
// var_dump($listePrenoms2); 

// echo $listePrenoms [2] . PHP_EOL;
// echo $listePrenoms2 [2];

// insérer des valeurs supplémentaire dans un tableau
// array_push($listePrenoms2, "Adrien", 21, true, ['test']);
// $listePrenoms2[] = "yoyo";

// print_r($listePrenoms2);

// exo afficher les différentes valeurs du tableau, et en colonne
// for ($i=0; $i < count($listePrenoms2); $i++) { 
//     echo "$listePrenoms2[$i] \n";
// }
// for ($i=0; $i < count($listePrenoms2); $i++) { 
//     print_r($listePrenoms2[$i] . PHP_EOL);
// }

// for ($i=0; $i < count($listePrenoms2); $i++) { 
//     var_dump("$listePrenoms2[$i], ");
// }

// changer la virgule sur la dernière valeur du tableau par un point
// $lastDot = implode(",\n", $listePrenoms2) . '.';
// echo "$lastDot";