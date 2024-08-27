// Exercice 29 : Filtrer les personnes de catégorie "adulte"
const people = [
  { name: 'Alice', age: 10, category: 'child' },
  { name: 'Bob', age: 20, category: 'adult' },
  { name: 'Charlie', age: 35, category: 'adult' },
  { name: 'David', age: 70, category: 'senior' },
  { name: 'Eve', age: 40, category: 'adult' },
];

// votre code ici .... //
// Filtrer les personnes de catégorie "adulte"
const adults = people.filter(person => person.category === 'adult');

// résultat attendu :
console.log(adults);
// [
//   { name: "Bob", age: 20, category: "adult" },
//   { name: "Charlie", age: 35, category: "adult" },
//   { name: "Eve", age: 40, category: "adult" }
// ]
