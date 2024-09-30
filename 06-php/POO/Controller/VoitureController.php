<?php

require ROOT_PATH . './Model/voiture.php';

class VoitureController {
    private object $voiture;

    public function __construct() {
        $this->voiture = new Voiture();
    }

    public function setVitesse($newVitesse){
        $this->voiture->setVitesse($newVitesse);
    }

    public function setPuissance($newPuissance){
        $this->voiture->setPuissance($newPuissance);
    }
}