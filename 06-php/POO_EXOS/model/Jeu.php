<?php

class Jeu
{
    private string $nom;
    private array $zombies;
    private array $humains;

    public function __construct($nom, $humains = [], $zombies = [])
    {
        $this->nom = $nom;
        $this->humains = $humains;
        $this->zombies = $zombies;
    }

    /**
     * Get the value of nom
     *
     * @return string
     */
    public function getNom(): string
    {
        return $this->nom;
    }

    /**
     * Set the value of nom
     *
     * @param string $nom
     *
     * @return self
     */
    public function setNom(string $nom): self
    {
        $this->nom = $nom;
        return $this;
    }

    /**
     * Get the value of zombies
     *
     * @return array
     */
    public function getZombies(): array
    {
        return $this->zombies;
    }

    /**
     * Set the value of zombies
     *
     * @param array $zombies
     *
     * @return self
     */
    public function setZombies(array $zombies): self
    {
        $this->zombies = $zombies;
        return $this;
    }

    /**
     * Get the value of humains
     *
     * @return array
     */
    public function getHumains(): array
    {
        return $this->humains;
    }

    /**
     * Set the value of humains
     *
     * @param array $humains
     *
     * @return self
     */
    public function setHumains(array $humains): self
    {
        $this->humains = $humains;
        return $this;
    }
}
