<?php

# Pour affecter une variable on utilise un simple égal: '='
// $fruit = 'pomme';

# Pour tester une égaliter des valeurs entre deux variables on utilise un double égal: '=='
// $test = '123';
// $test2 = 123;
// echo $test == $test2; // envoie '1' qui veut dire 'true'

# Pour tester les valeurs et le type on utilise le triple égal: '==='
// echo $test === $test2; // false

// if ($test === $test2){
//     echo 'même valeur et type';
// } else {
//     echo 'test échoué!';
// }

# '!=' (! + =) | <> (< + >)
// $test = 56;
// $test2 = 123;

// avec le !=
// if ($test != $test2){
//     echo 'valeurs différentes';
// } else {
//     echo 'même valeurs';
// }

// avec le <>
// if ($test <> $test2){
//     echo 'valeurs différentes';
// } else {
//     echo 'même valeurs';
// }

# '!' (négation) équivaut à l'inverse de ...
// $test = '123';
// $test2 = 123;
// echo !($test === $test2); // true

// if (!($test === $test2)){
//     echo 'test échoué!';
// } else {
//     echo 'même valeurs et types';
// }

# '>' (strictement supérieur) | '<' (strictement inférieur)
// $nombre1 = 100;
// $nombre2 = 10;

// if ($nombre1 > $nombre2){
//     echo 'le nombre 1 est strictement supérieur au nombre 2';
// } else if ($nombre1 < $nombre2) {
//     echo 'le nombre 1 est strictement inférieur au nombre 2';
// } else {
//     echo 'le nombre 1 est égal au nombre 2';
// }

# '>=' (> + =) (supérieur ou égal) | '<=' (< + =) (inférieur ou égal)
// $nombre1 = 100;
// $nombre2 = 10;

// if ($nombre1 >= $nombre2){
//     echo 'le nombre 1 est supérieur ou égal au nombre 2';
// } else {
//     echo 'le nombre 1 est strictement inférieur au nombre 2';
// }

// if ($nombre1 <= $nombre2){
//     echo 'le nombre 1 est inférieur ou égal au nombre 2';
// } else {
//     echo 'le nombre 1 est strictement supérieur au nombre 2';
// }

# (et) 'AND' ou '&&'| (ou) 'OR' ou '||' | (ou éxclusif) 'XOR'
// $nombre1 = 67;
// $nombre2 = 77;
// $nombre3 = 45;
// $nombre4 = 100;

// if ($nombre1 > $nombre2 && $nombre2 > $nombre3 || $nombre4 === 10) {
//     echo "$nombre1 et $nombre2 et $nombre3 sont dans l'ordre décroissant";
// } else {
//     echo "$nombre1 et $nombre2 et $nombre3 ne sont pas dans l'ordre décroissant";
// }

$nombre1 = 67;
$nombre2 = 77;
$nombre3 = 45;
$nombre4 = 10; // joker
$test = $nombre1 > $nombre2 && $nombre2 > $nombre3 || $nombre4 === 10;
$texte = "$nombre1 et $nombre2 et $nombre3";
$texte2 = "dans l'ordre décroissant";
// if ($test) {
//     echo "$nombre1 et $nombre2 et $nombre3 sont "dans l'ordre décroissant";
// } else {
//     echo "$nombre1 et $nombre2 et $nombre3 ne sont pas dans l'ordre décroissant";
// }
// echo $test;
// echo $test ? "$nombre1 et $nombre2 et $nombre3 sont dans l'ordre décroissant" : "$nombre1 et $nombre2 et $nombre3 ne sont pas dans l'ordre décroissant";
// echo $texte . ($test ? "sont" : " ne sont pas ") . $texte2;
// echo $texte . (!$test ? "ne sont pas" : " sont ") . $texte2;
