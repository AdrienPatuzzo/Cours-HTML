<?php

require ROOT_PATH . 'model/Jeu.php';

class JeuController
{

    private object $jeu;

    public function __construct($nom)
    {
        $this->jeu = new Jeu($nom);
    }

    public function ajouterHumain($humain)
    {
        $humains = $this->jeu->getHumains();
        $humains[] = $humain;
        $this->jeu->setHumains($humains);
    }

    public function ajouterZombie($zombie)
    {
        $zombies = $this->jeu->getZombies();
        $zombies[] = $zombie;
        $this->jeu->setZombies($zombies);
    }

    /**
     * Get the value of jeu
     *
     * @return object
     */
    public function getJeu(): object
    {
        return $this->jeu;
    }

    /**
     * Set the value of jeu
     *
     * @param object $jeu
     *
     * @return self
     */
    public function setJeu(object $jeu): self
    {
        $this->jeu = $jeu;
        return $this;
    }
}
