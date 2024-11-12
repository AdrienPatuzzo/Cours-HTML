<?php

require 'lib/init.php';
require ROOT_PATH . 'Controller/PersonnageController.php';
require ROOT_PATH . 'Controller/HumainController.php';
require ROOT_PATH . 'Controller/ZombieController.php';

$personnage1 = new PersonnageController("Milo", "guerrier", 10, 100, true);
$personnage2 = new PersonnageController("Tya", "archère", 5, 50, true);
$personnage3 = new PersonnageController("Lili", "archère", 5, 55, false);
$personnage4 = new PersonnageController("Gael", "voleur", 2, 10, false);

$humain1 = new humainController("George", "ménéstrel", -1, 1000, true, 1);
$zombie1 = new ZombieController("Poulpe", 69);

function presentation()
{
    echo "\033[1;31m---------------------------------------\033[0m\n";
    echo "\033[1;31m|    Forces du bien contre le mal !   |\033[0m\n";
    echo "\033[1;31m|           Version Zombie !!         |\033[0m\n";
    echo "\033[1;31m---------------------------------------\033[0m\n";
}
presentation();


echo "\033[1;31m----------------------------\033[0m\n";
echo($personnage1);
echo "\033[1;31m----------------------------\033[0m\n";
echo($personnage2);
echo "\033[1;31m----------------------------\033[0m\n";
echo($personnage3);
echo "\033[1;31m----------------------------\033[0m\n";
echo($personnage4);
echo "\033[1;31m----------------------------\033[0m\n";
$humain1->afficherHumain();
echo "\033[1;31m----------------------------\033[0m\n";
$zombie1->afficherZombie();