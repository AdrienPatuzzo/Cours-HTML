<?php

require 'lib/init.php';
require ROOT_PATH . './Controller/ConcessionController.php';
require ROOT_PATH . './Controller/VoitureController.php';
// require "Model/Concession.php";

$concessionController = new ConcessionController();
$voiture1 = new Voiture(50, 10);
// $concession->saveVoiture($voiture1);

$voiture2 = new Voiture(60, 15);
$concessionController->saveVoiture($voiture1);
$concessionController->saveVoiture($voiture2);
// $concession->saveVoiture($voiture2);
// print_r($concession->getTabVoiture());

print_r($concessionController->showAllCar());