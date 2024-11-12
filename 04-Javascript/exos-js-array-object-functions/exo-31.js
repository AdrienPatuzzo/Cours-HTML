// Exercice 31 : Grouper les personnes par première lettre de leur nom
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// votre code ici .... //
// Grouper les personnes par la première lettre de leur nom
// Obtenir la première lettre du nom
// Si la lettre n'est pas encore dans l'accumulateur, la créer
// Ajouter le nom au tableau correspondant à la première lettre
const groupedByInitial = people.reduce((groupe, person) => {
  const initial = person.name[0];
  if (!groupe[initial]) {
    groupe[initial] = [];
  }
  groupe[initial].push(person.name);
  return groupe;
}, {});

// résultat attendu :
console.log(groupedByInitial);
// { A: ["Alice"], B: ["Bob"], C: ["Charlie"], D: ["David"], E: ["Eve"] }
