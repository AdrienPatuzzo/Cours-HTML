// Exercice 4 : Trouver la personne avec le plus grand âge
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// votre code ici .... //
// Utilisation de la méthode reduce pour trouver la personne la plus âgée
// oldest est l'accumulateur qui contient l'objet représentant la personne la plus âgée trouvée jusqu'à présent
// person est l'objet courant du tableau people sur lequel on itère
// Comparaison de l'âge de l'accumulateur avec l'âge de la personne courante
// Si la personne courante est plus âgée que l'accumulateur, on met à jour l'accumulateur
// Sinon, on garde l'accumulateur tel quel
const oldestPerson = people.reduce((oldest, person) => {
  if (person.age > oldest.age) {
    return person;
  }
  else {
    return oldest;
  }
});

// résultat attendu :
console.log(oldestPerson); // { name: "Eve", age: 40 }
