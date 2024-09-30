<?php

require 'lib/init.php';
require ROOT_PATH . './Controller/ConcessionController.php';
require ROOT_PATH . './Controller/VoitureController.php';
// require "Model/Concession.php";

$concessionController = new ConcessionController();
$voiture1 = new VoitureController();
$voiture1->setPuissance(18);
$voiture1->setVitesse(180);
// $concession->saveVoiture($voiture1);

$voiture2 = new VoitureController();
$voiture2->setPuissance(19);
$voiture2->setVitesse(190);
$concessionController->saveVoiture($voiture1);
$concessionController->saveVoiture($voiture2);
// $concession->saveVoiture($voiture2);
// print_r($concession->getTabVoiture());

print_r($concessionController->showAllCar());