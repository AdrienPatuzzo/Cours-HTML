<?php

require_once ROOT_PATH . 'Model/Personnage.php';

class PersonnageController {
    private object $personnage;

    public function __construct($nom, $class, $attaque, $pointsDeVie, $type){
        $this->personnage = new Personnage($nom, $class, $attaque, $pointsDeVie, $type);
    }

    /**
     * Get the value of personnage
     *
     * @return object
     */
    public function getPersonnage(): object {
        return $this->personnage;
    }

    /**
     * Set the value of personnage
     *
     * @param object $personnage
     *
     * @return self
     */
    public function setPersonnage(object $personnage): self {
        $this->personnage = $personnage;
        return $this;
    }

    public function __toString()
    {
        $txt = '';
        $txt .= "Nom: ". $this->personnage->getnom() . "\n";
        $txt .= "Classe: ". $this->personnage->getclass() . "\n";
        $txt .= "Attaque: ". $this->personnage->getattaque() . "\n";
        $txt .= "Points de vie: ". $this->personnage->getpointsDeVie() . "\n";
        $txt .= "Des forces du: ". ((!$this->personnage->gettype()) ? 'mal' : 'bien') . "\n";
        return $txt;
    }
}