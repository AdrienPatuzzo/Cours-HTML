// Exercice 26 : Calculer la somme des âges des personnes
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// votre code ici .... //
// Calculer la somme des âges
const totalAge = people.reduce((somme, person) => somme + person.age, 0);

// résultat attendu :
console.log(totalAge); // 150
