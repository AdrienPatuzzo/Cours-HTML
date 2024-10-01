<?php

class Personnage {
    private string $nom;
    private string $class;
    private int $attaque;
    private int $pointsDeVie;
    private bool $type;
    
    public function __construct($nom, $class, $attaque, $pointsDeVie, $type)
    {
        $this->nom = $nom;
        $this->class = $class;
        $this->attaque = $attaque;
        $this->pointsDeVie = $pointsDeVie;
        $this->type = $type;
    }

    /**
     * Get the value of nom
     *
     * @return string
     */
    public function getNom(): string {
        return $this->nom;
    }

    /**
     * Set the value of nom
     *
     * @param string $nom
     *
     * @return self
     */
    public function setNom(string $nom): self {
        $this->nom = $nom;
        return $this;
    }

    /**
     * Get the value of class
     *
     * @return string
     */
    public function getClass(): string {
        return $this->class;
    }

    /**
     * Set the value of class
     *
     * @param string $class
     *
     * @return self
     */
    public function setClass(string $class): self {
        $this->class = $class;
        return $this;
    }

    /**
     * Get the value of attaque
     *
     * @return int
     */
    public function getAttaque(): int {
        return $this->attaque;
    }

    /**
     * Set the value of attaque
     *
     * @param int $attaque
     *
     * @return self
     */
    public function setAttaque(int $attaque): self {
        $this->attaque = $attaque;
        return $this;
    }

    /**
     * Get the value of pointsDeVie
     *
     * @return int
     */
    public function getPointsDeVie(): int {
        return $this->pointsDeVie;
    }

    /**
     * Set the value of pointsDeVie
     *
     * @param int $pointsDeVie
     *
     * @return self
     */
    public function setPointsDeVie(int $pointsDeVie): self {
        $this->pointsDeVie = $pointsDeVie;
        return $this;
    }

    /**
     * Get the value of type
     *
     * @return bool
     */
    public function getType(): bool {
        return $this->type;
    }

    /**
     * Set the value of type
     *
     * @param bool $type
     *
     * @return self
     */
    public function setType(bool $type): self {
        $this->type = $type;
        return $this;
    }
}