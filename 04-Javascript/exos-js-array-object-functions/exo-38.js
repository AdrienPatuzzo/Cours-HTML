// Exercice 38 : Trouver les personnes ayant un âge pair
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 21 },
  { name: 'Charlie', age: 34 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// votre code ici .... //
// Utiliser filter pour sélectionner les personnes ayant un âge pair
const evenAgedPeople = people.filter(person => person.age % 2 === 0);

// résultat attendu :
console.log(evenAgedPeople);
// [{ name: "Alice", age: 30 }, { name: "Charlie", age: 34 }, { name: "Eve", age: 40 }]
