<?php 

class Concession {
    private string $nomGarage;
    private array $tabVoiture;

    public function __construct($nomGarage = 'Chez Bernard')
    {
        $this->nomGarage = $nomGarage;
        $this->tabVoiture = [];
    }

    /**
     * Get the value of nomGarage
     *
     * @return string
     */
    public function getNomGarage(): string {
        return $this->nomGarage;
    }

/**
     * Get the value of tabVoiture
     *
     * @return array
     */
    public function getTabVoiture(): array {
        return $this->tabVoiture;
    }

    /**
     * Set the value of tabVoiture
     *
     * @param array $tabVoiture
     *
     * @return self
     */
    public function setTabVoiture(array $tabVoiture): self {
        $this->tabVoiture = $tabVoiture;
        return $this;
    }

    public function __toString()
    {
        $txt = '';
        $txt .= "Nom du garage : $this->nomGarage\n";
        $txt .= "Tableau des voitures : $this->tabVoiture\n";
        return $txt;
    }
}



