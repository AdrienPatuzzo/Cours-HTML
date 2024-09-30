<?php

require ROOT_PATH . './Model/voiture.php';

class VoitureController {
    private object $voiture;

    public function __construct() {
        $this->voiture = new Voiture();
    }


    /**
     * Get the value of voiture
     *
     * @return object
     */
    public function getVoiture(): object {
        return $this->voiture;
    }

    /**
     * Set the value of voiture
     *
     * @param object $voiture
     *
     * @return self
     */
    public function setVoiture(object $voiture): self {
        $this->voiture = $voiture;
        return $this;
    }
}