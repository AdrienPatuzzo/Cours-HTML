// Construction d'un object personne
function Personne(nom, prenom, age) { //mettre une majuscule lorsqu'on fait un constructor sinon marche pas
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
}

let personne1 = new Personne('Patuzzo', 'Adrien', 25);
// Construction d'une instance de Personne => object
let personne2 = new Personne('Toto', 'Tata', 12); //Construction d'un object personne

console.log('personne1 : ', personne1);
console.log('personne2 : ', personne2);