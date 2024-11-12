<?php

# INTEGER 
// gettype permet de vérifier le type de la variable
$variable1 = 127;
// peut s'écrire echo gettype($variable1)
echo "type variable 1 : " . gettype($variable1) . PHP_EOL; 

# FLOAT | DOUBLE
$variable2 = 1.5;
echo "type variable 2 : " . gettype($variable2) . PHP_EOL;
// Envoie "double" mais c'est un "float"

# STRING
$variable3 = "mot";
echo "type variable 3 : " . gettype($variable3) . PHP_EOL;

# BOOLEAN
$variable4 = true;
echo "type variable 4 : " . gettype($variable4) . PHP_EOL;

