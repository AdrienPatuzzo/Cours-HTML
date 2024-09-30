<?php

require 'Model/voiture.php';
require 'Controller/ConcessionController.php';
// require "Model/Concession.php";

$concessionController = new ConcessionController();
$voiture1 = new Voiture(50, 10);
// $concession->saveVoiture($voiture1);

$voiture2 = new Voiture(60, 15);
$concessionController->saveVoiture($voiture1);
$concessionController->saveVoiture($voiture2);
// $concession->saveVoiture($voiture2);

// print_r($concession->getTabVoiture());