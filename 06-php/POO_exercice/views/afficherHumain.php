<?php

echo "Nom : " . $humain->getNom() . "\n";
echo "Classe : " . $humain->getclass() . "\n";
echo "Attaque : " . $humain->getattaque() . "\n";
echo "Points de vie : " . $humain->getpointsDeVie() . "\n";
echo "Niveau : " . $humain->getLevel() . "\n";
echo "Fait partie des forces du : " . ((!$humain->gettype()) ? 'mal'  : 'bien') . "\n";