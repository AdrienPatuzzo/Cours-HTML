<?php

require_once ROOT_PATH . 'Model/Personnage.php';

class Humain extends Personnage {
    private int $level;

    public function __construct($nom, $class, $attaque, $pointsDeVie, $type, $level){
        parent::__construct($nom, $class, $attaque, $pointsDeVie, $type);
        $this->level = $level;
    }

    /**
     * Get the value of level
     *
     * @return int
     */
    public function getLevel(): int {
        return $this->level;
    }

    /**
     * Set the value of level
     *
     * @param int $level
     *
     * @return self
     */
    public function setLevel(int $level): self {
        $this->level = $level;
        return $this;
    }
}