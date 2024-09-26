<?php

// readline permet d'ajouter des valeurs dans un tableau via le terminal
// $prenom = readline("Veuillez saisir un aliment : "); // stop le process jusqu'a ce qu'on appuis sur entrer
// echo gettype($prenom);

// $nombre = intval(readline("Veuillez saisir un aliment : ")); // si on veut un nombre il faut typé
// if(is_numeric($nombre)) echo 'ok';
// echo gettype($nombre);

$myTab = [];
// $saisi = readline("Ecrire n'importe quoi : ");
// for ($i=0; $i < 4; $i++) { 
//     array_push($myTab, $saisi);
// }
// print_r($myTab);

$limit = 5;
$count = 0;
while ($count < $limit) {
    $saisi = readline("Ecrire n'importe quoi, sinon écrire ';' pour sortir) : ");
    if (strtolower($saisi) === ';') {
        break; 
    }
    $myTab[] = $saisi; 
    $count++; 
}
echo "Voici votre tableau" . PHP_EOL;
print_r($myTab);

