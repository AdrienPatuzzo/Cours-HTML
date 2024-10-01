<?php

echo "Nom : " . $personnage->getNom() . "\n";
echo "Classe : " . $personnage->getClasse() . "\n";
echo "Attaque : " . $personnage->getAttaque() . "\n";
echo "Points de vie : " . $personnage->getPointsDeVie() . "\n";
if (property_exists($personnage, "level")) echo "Niveau : " . $personnage->getLevel() . "\n";
echo "Fait partie des forces du : " . ((!$personnage->getForceDuBien()) ? 'mal'  : 'bien') . ".";
// var_dump($personnage->getNom());
