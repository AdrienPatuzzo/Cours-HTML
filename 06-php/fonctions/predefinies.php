<?php

// echo date('D/M/Y') . PHP_EOL; // => wed/Sep/2024
// echo date('d/m/y') . PHP_EOL; // => 25/09/2024
// echo date('d-m-y') . PHP_EOL; // => 25-09-2024
// echo date('j-m-y'); // => 25-09-2024

# strLen() Calculer le nombre de caractère (les espaces sont compris dedans)
// $phrase = ' Mettez la phrase que vous voulez ';
// echo strLen($phrase); //34

# substr() 
// $paragraphe = "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
// Mollitia distinctio quos deleniti molestiae aperiam, 
// velit quas eveniet molestias laboriosam maiores sunt obcaecati libero porro labore nisi non ratione voluptates nostrum!
// Lorem ipsum dolor sit amet consectetur adipisicing elit. 
// Veritatis dolor magnam at illo nulla exercitationem nam! 
// Aperiam totam deleniti quia molestias corrupti magnam commodi doloremque beatae modi. 
// Dolor, sit ea!";

// $excerpt = substr($paragraphe, 0, 56) . '...<a href="#">Lire la suite.</a>';
// echo $excerpt;

# isset()
// $pseudo = 'toto';
// // if ($pseudo) { erreur si $peuso n'éxiste pas
// if (isset($pseudo)){ 
//     echo 'la variable $pseudo existe'; 
// } else {
//     echo 'la variable $pseudo n\'existe pas';
// }

# empty()
// if ($pseudo) { erreur si $peuso n'éxiste pas
$pseudo = '   '; // si on utilise trim() il retire les espaces
if (empty(trim($pseudo))){ 
    echo 'la variable $pseudo est vide'; 
} else {
    echo 'la variable $pseudo n\'est pas vide';
}

