<?php

require ROOT_PATH . './Model/Concession.php';

class ConcessionController {
    private object $Concession;

    public function __construct() {
        $this->Concession = new Concession();
    }

    public function saveVoiture($newVoiture){
        $tab = $this->Concession->getTabVoiture();
        $tab[] = $newVoiture;
        $this->Concession->setTabVoiture($tab);
    }

    public function showAllCar(){
        return $this->Concession->getTabVoiture();
    }

    // public function __toString()
    // {
    //     $txt = '';
    //     $txt .= "Nom du garage : $this->nomGarage\n";
    //     $txt .= "Tableau des voitures : $this->tabVoiture\n";
    //     return $txt;
    // }
}