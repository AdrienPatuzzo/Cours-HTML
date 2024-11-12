<?php

require 'lib/init.php';
require ROOT_PATH . 'controller/PersonnageController.php';
require ROOT_PATH . 'controller/ZombieController.php';
require ROOT_PATH . 'controller/HumainController.php';
require ROOT_PATH . 'controller/JeuController.php';

$personnage1 = new PersonnageController("Milo", "Guerrier", 10, 100, true);
$personnage2 = new PersonnageController("Tya", "Archère", 5, 50, true);
$personnage3 = new PersonnageController("Lili", "Archère", 5, 55, false);
$personnage4 = new PersonnageController("Gael", "Voleur", 2, 10, false);
// echo "-------------------\n";
// echo $personnage1;
// echo "\n-------------------\n";
// echo $personnage2;
// echo "\n-------------------\n";
// echo $personnage3;
// echo "\n-------------------\n";
// echo $personnage4;
// echo "\n-------------------";
$humain1 = new HumainController("toto", "Guerrier", 45, 87, true, 7);
$humain1->afficherHumain();
$zombie = new ZombieController("toto", 500);
$zombie->afficherZombie();
$jeu = new JeuController("Mon Jeu");
$jeu->ajouterHumain($humain1);
$jeu->ajouterZombie($zombie);

print_r($jeu->getJeu()->getZombies());
print_r($jeu->getJeu()->getHumains());
