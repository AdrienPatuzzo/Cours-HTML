<?php

require_once ROOT_PATH . 'model/Personnage.php';

class PersonnageController
{
    private object $personnage;

    public function __construct($nom, $classe, $attaque, $pointsDeVie, $forceDuBien)
    {
        $this->personnage = new Personnage($nom, $classe, $attaque, $pointsDeVie, $forceDuBien);
    }

    /**
     * Get the value of personnage
     *
     * @return object
     */
    public function getPersonnage(): object
    {
        return $this->personnage;
    }

    /**
     * Set the value of personnage
     *
     * @param object $personnage
     *
     * @return self
     */
    public function setPersonnage(object $personnage): self
    {
        $this->personnage = $personnage;
        return $this;
    }

    public function __toString()
    {
        $txt = '';
        $txt .= "Nom : " . $this->personnage->getNom() . "\n";
        $txt .= "Classe : " . $this->personnage->getClasse() . "\n";
        $txt .= "Attaque : " . $this->personnage->getAttaque() . "\n";
        $txt .= "Points de vie : " . $this->personnage->getPointsDeVie() . "\n";
        $txt .= "Fait partie des forces du : " . ((!$this->personnage->getForceDuBien()) ? 'mal'  : 'bien') . ".";
        return $txt;
    }
}
