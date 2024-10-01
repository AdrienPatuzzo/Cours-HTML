<?php

class Personnage
{
    private string $nom;
    private string $classe;
    private int $attaque;
    private int $pointsDeVie;
    private bool $forceDuBien;

    public function __construct($nom, $classe, $attaque, $pointsDeVie, $forceDuBien)
    {
        $this->nom = $nom;
        $this->classe = $classe;
        $this->attaque = $attaque;
        $this->pointsDeVie = $pointsDeVie;
        $this->forceDuBien = $forceDuBien;
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
     * Get the value of classe
     *
     * @return string
     */
    public function getClasse(): string
    {
        return $this->classe;
    }

    /**
     * Set the value of classe
     *
     * @param string $classe
     *
     * @return self
     */
    public function setClasse(string $classe): self
    {
        $this->classe = $classe;
        return $this;
    }

    /**
     * Get the value of attaque
     *
     * @return int
     */
    public function getAttaque(): int
    {
        return $this->attaque;
    }

    /**
     * Set the value of attaque
     *
     * @param int $attaque
     *
     * @return self
     */
    public function setAttaque(int $attaque): self
    {
        $this->attaque = $attaque;
        return $this;
    }

    /**
     * Get the value of pointsDeVie
     *
     * @return int
     */
    public function getPointsDeVie(): int
    {
        return $this->pointsDeVie;
    }

    /**
     * Set the value of pointsDeVie
     *
     * @param int $pointsDeVie
     *
     * @return self
     */
    public function setPointsDeVie(int $pointsDeVie): self
    {
        $this->pointsDeVie = $pointsDeVie;
        return $this;
    }

    /**
     * Get the value of forceDuBien
     *
     * @return bool
     */
    public function getForceDuBien(): bool
    {
        return $this->forceDuBien;
    }

    /**
     * Set the value of forceDuBien
     *
     * @param bool $forceDuBien
     *
     * @return self
     */
    public function setForceDuBien(bool $forceDuBien): self
    {
        $this->forceDuBien = $forceDuBien;
        return $this;
    }
}
