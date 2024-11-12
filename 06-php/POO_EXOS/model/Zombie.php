<?php

class Zombie extends Personnage
{
    private const ATTAQUE_ZOMBIE = 10;
    private const CLASSE_ZOMBIE = "Zombie";
    private const FORCE_ZOMBIE = false;

    public function __construct($nom, $pointsDeVie)
    {
        parent::__construct($nom, self::CLASSE_ZOMBIE, self::ATTAQUE_ZOMBIE, $pointsDeVie, self::FORCE_ZOMBIE);
    }
}
