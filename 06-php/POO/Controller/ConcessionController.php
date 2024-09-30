<?php

require 'Model/Concession.php';

class ConcessionController {
    private object $Concession;

    public function __construct() {
        $this->Concession = new Concession();
    }

    public function saveVoiture($newVoiture){
        $tab = [];
        $tab[] = $newVoiture;
        $this->Concession->setTabVoiture($tab);
    }
}