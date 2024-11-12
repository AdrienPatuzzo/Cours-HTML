<?php

require ROOT_PATH . 'model/Humain.php';

class HumainController
{
    private object $humain;

    public function __construct($nom, $classe, $attaque, $pointsDeVie, $forceDuBien, $level)
    {
        $this->humain = new Humain($nom, $classe, $attaque, $pointsDeVie, $forceDuBien, $level);
    }

    /**
     * Get the value of humain
     *
     * @return object
     */
    public function getHumain(): object
    {
        return $this->humain;
    }

    /**
     * Set the value of humain
     *
     * @param object $humain
     *
     * @return self
     */
    public function setHumain(object $humain): self
    {
        $this->humain = $humain;
        return $this;
    }
    public function afficherHumain()
    {
        $personnage = $this->humain;
        require ROOT_PATH . 'views/afficherPersonnage.php';
    }
}
