<?php

echo "Nom : " . $zombie->getNom() . "\n";
echo "Classe : " . $zombie->getclass() . "\n";
echo "Attaque : " . $zombie->getattaque() . "\n";
echo "Points de vie : " . $zombie->getpointsDeVie() . "\n";
echo "Fait partie des forces du : " . ((!$zombie->gettype()) ? 'mal'  : 'bien') . "\n";