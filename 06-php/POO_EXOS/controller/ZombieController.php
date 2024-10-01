<?php

require ROOT_PATH . 'model/Zombie.php';

class ZombieController
{
    private object $zombie;

    public function __construct($nom, $pointsDeVie)
    {
        $this->zombie = new Zombie($nom, $pointsDeVie);
    }

    /**
     * Get the value of zombie
     *
     * @return object
     */
    public function getZombie(): object
    {
        return $this->zombie;
    }

    /**
     * Set the value of zombie
     *
     * @param object $zombie
     *
     * @return self
     */
    public function setZombie(object $zombie): self
    {
        $this->zombie = $zombie;
        return $this;
    }

    public function afficherZombie()
    {
        $personnage = $this->zombie;
        require ROOT_PATH . 'views/afficherPersonnage.php';
    }
}
