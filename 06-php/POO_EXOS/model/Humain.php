<?php

require_once ROOT_PATH . 'model/Personnage.php';

class Humain extends Personnage
{
    private int $level;

    public function __construct($nom, $classe, $attaque, $pointsDeVie, $forceDuBien, $level)
    {
        parent::__construct($nom, $classe, $attaque, $pointsDeVie, $forceDuBien);
        $this->level = $level;
    }

    /**
     * Get the value of level
     *
     * @return int
     */
    public function getLevel(): int
    {
        return $this->level;
    }

    /**
     * Set the value of level
     *
     * @param int $level
     *
     * @return self
     */
    public function setLevel(int $level): self
    {
        $this->level = $level;
        return $this;
    }
}
