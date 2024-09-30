<?php

class Personnage
{
    public string $nom;
    public int $pointsDeVie;
    public int $force;

    public function __construct($nom, $pointsDeVie, $force)
    {
        $this->nom = $nom;
        $this->pointsDeVie = $pointsDeVie;
        $this->force = $force;
    }

    public function attaquer($personnage)
    {
        $degats = rand(10, 20) + $this->force;
        $personnage->pointsDeVie -= $degats;
        return "\033[31m$this->nom frappe avec une précision froide et inflige $degats points de dégâts.\033[0m\n";
    }

    public function soigner($soin = 100)
    {
        $this->pointsDeVie += $soin;
        return "\033[32m$this->nom tente de se soigner en prenant une petite pause café. +$soin points de vie... mais franchement, ça ne changera pas grand-chose.\033[0m\n";
    }

    public function repliqueAttaque()
    {
        $repliques = [
            "\033[36m \n'Je suis désolé, mais cela ne sera pas suffisant.'\n \033[0m",
            "\033[36m \n'Il est adorable de penser que tu peux me battre.'\n \033[0m",
            "\033[36m \n'Tu crois vraiment que tes efforts vont payer ? Quelle naïveté.'\n \033[0m",
            "\033[36m \n'Tu n'es qu'une petite pièce dans un grand test.'\n \033[0m"
        ];
        return $repliques[array_rand($repliques)];
    }

    public function repliqueFuite()
    {
        return "\033[34m$this->nom regarde ta tentative de fuite avec mépris : 'Fuir ? Vraiment ? C'était l'option la plus pathétique.'\033[0m\n";
    }

    public function __toString()
    {
        return "Nom: \033[36m$this->nom\033[0m | Points de vie: \033[32m$this->pointsDeVie\033[0m | Force: \033[33m$this->force\033[0m\n";
    }
}

function resetAdversaire($nom, $pv, $force)
{
    return new Personnage($nom, $pv, $force);
}

function combat($joueur, $adversaire, &$adversairesVaincus)
{
    echo "\n\033[1;37m---------------------------------------\033[0m\n";
    echo "\033[1;33m$adversaire->nom te fait face. 'Ah, te voilà... encore un effort inutile.'\033[0m\n";
    echo "\033[1;37m---------------------------------------\033[0m\n";

    while ($joueur->pointsDeVie > 0 && $adversaire->pointsDeVie > 0) {
        echo "\n\033[35mQue veux-tu faire ? (1) Attaquer (2) Se soigner (3) Fuir (4) Quitter le jeu : \033[0m";
        $choix = trim(fgets(STDIN));
        echo "\n";

        if ($choix == 1) {
            echo $joueur->attaquer($adversaire);
            echo $adversaire->repliqueAttaque() . "\n";
        } elseif ($choix == 2) {
            echo $joueur->soigner();
        } elseif ($choix == 3) {
            if (rand(0, 1) === 1) {
                echo "\033[34mTu as réussi à fuir... Wow. Quel courage. Je suis sûr que tout le monde est impressionné.\033[0m\n";
                return;
            } else {
                echo $adversaire->repliqueFuite();
                echo "\033[31m$adversaire->nom te rattrape et continue de se moquer de ta pathétique existence.\033[0m\n";
            }
        } elseif ($choix == 4) {
            echo "\033[33mTu as quitté le jeu. Peut-être est-ce la décision la plus intelligente que tu aies prise aujourd'hui.\033[0m\n";
            exit;
        } else {
            echo "\033[33mChoix incorrect, mais bon... c'est à ton image.\033[0m\n";
            continue;
        }

        if ($adversaire->pointsDeVie > 0) {
            echo "\033[31m$adversaire->nom attaque !\033[0m\n";
            echo $adversaire->attaquer($joueur);
        }

        echo "\nStatut du joueur :\n$joueur\n";
        echo "Statut de $adversaire->nom :\n$adversaire\n";
    }

    if ($joueur->pointsDeVie > 0) {
        echo "\n\033[32mFélicitations, $joueur->nom a vaincu $adversaire->nom ! Mais bon, tu n'as gagné que parce que les tests sont truqués.\033[0m\n";
        $adversairesVaincus[] = $adversaire->nom;
    } else {
        echo "\n\033[31m$adversaire->nom a triomphé... 'Tu étais si proche, mais en même temps si loin.'\033[0m\n";
        exit;
    }
}

function presentation()
{
    echo "\033[1;37m---------------------------------------\033[0m\n";
    echo "\033[1;35m|  Bienvenue dans l'arène de test !   |\033[0m\n";
    echo "\033[1;35m|  Les probabilités de survie sont    |\033[0m\n";
    echo "\033[1;35m|     statistiquement faibles.        |\033[0m\n";
    echo "\033[1;37m---------------------------------------\033[0m\n";
    echo "\033[35mQuel est ton nom, sujet de test ? \033[0m";
}

presentation();
$pseudo = trim(fgets(STDIN));
$joueur = new Personnage($pseudo, 450, 80);

$adversaires = [
    ["GLaDOS", 500, 60],
    ["Wheatley", 450, 55],
    ["Le Core de l'intelligence", 500, 65],
    ["Le Core de la colère", 600, 50],
    ["Turret", 470, 70],
];

$adversairesVaincus = [];

foreach ($adversaires as $advData) {
    $adversaire = resetAdversaire($advData[0], $advData[1], $advData[2]);
    combat($joueur, $adversaire, $adversairesVaincus);
    $joueur->pointsDeVie = 450;
    echo "\n\033[33mLes points de vie sont réinitialisés. Espérons que tu feras mieux cette fois.\033[0m\n";
}

echo "\n\033[1;37m---------------------------------------\033[0m\n";
echo "\033[1;32m|    Rapport de bataille final        |\033[0m\n";
echo "\033[1;37m---------------------------------------\033[0m\n";
echo "$pseudo, voici la liste des adversaires que tu as humiliés :\n";
foreach ($adversairesVaincus as $nomAdversaire) {
    echo "- \033[36m$nomAdversaire\033[0m\n";
}
echo "\033[35mMême si tu as survécu, il est probable que ton avenir soit aussi sombre que ta performance.\033[0m\n";
