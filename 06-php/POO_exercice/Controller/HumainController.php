<?php

require ROOT_PATH . 'Model/Humain.php';

class HumainController{
    private object $humain;

    public function __construct($nom, $class, $attaque, $pointsDeVie, $type, $level){
        $this->humain = new Humain($nom, $class, $attaque, $pointsDeVie, $type, $level);
    }

    /**
     * Get the value of humain
     *
     * @return object
     */
    public function getHumain(): object {
        return $this->humain;
    }

    /**
     * Set the value of humain
     *
     * @param object $humain
     *
     * @return self
     */
    public function setHumain(object $humain): self {
        $this->humain = $humain;
        return $this;
    }

    public function afficherHumain(){
        $humain = $this->humain;
        require ROOT_PATH . 'views/afficherHumain.php';
    }
}