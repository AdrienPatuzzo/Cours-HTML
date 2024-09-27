<?php

class Personnage {
    // propriétés | attribut
    /**
     * Nom du personnage
     *
     * @var string
     */
    public string $nom;
    public int $pointsDeVie;
    public int $force;

    public function __construct($nom, $pointsDeVie, $force = 50){
        $this -> nom = $nom;
        $this -> pointsDeVie = $pointsDeVie;
        $this -> force = $force;
    }

    public function attaquer($personnage, $pvPerte = 125){
        $personnage->pointsDeVie -= $pvPerte;
    }

    public function newNom($nom){
        $this->nom = $nom;
    }
    
// tostring permet de faire un echo $personnage sans faire $perso->parler mais oblige return dans function
    public function __toString(){ 
        $txt = '';
        $txt .= "Nom:$this->nom\n";
        $txt .= "Points de vie: $this->pointsDeVie\n";
        $txt .= "Force: $this->force\n";
        return $txt;
    }
}

$personnage1 = new Personnage("Adrien", 750, 75); // instanciation
$personnage2 = new Personnage("Lamok", 500, 100); 
$personnage3 = new Personnage("Oithi", 1000);
$personnage3->newNom('biscuit');
$personnage1->newNom('Bigboss');
echo $personnage3;
echo $personnage1;
// echo $personnage1 -> pointsDeVie . PHP_EOL;
// echo $personnage1;
$personnage2->attaquer($personnage1);
// echo $personnage1 -> pointsDeVie;
// echo $personnage1;

// $personnage2 -> pointsDeVie = 40; // manipulation
// $personnage3 -> taille = 180; Impossible d'ajouter un attribut dans l'objet.

// var_dump($personnage1);
// var_dump($personnage2);
// var_dump($personnage3);

