// initialiser 3 variables mot1, mot2, mot3
// savoir si ils sont dans l'ordre alphabetique

let mot1 = "pierre";
let mot2 = "paul";
let mot3 = "jacques";

if ((mot1 < mot2) && (mot2 < mot3)) {
    console.log(mot1 + ', ' + mot2 + ' et ' + mot3 + " sont dans l'ordre alhpabétique");
} else {
    console.log(`${mot1}, ${mot2} et ${mot3} ne sont pas dans l'ordre alhpabétique`);
}

