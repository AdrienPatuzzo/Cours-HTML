// Exercice 33 : Filtrer les personnes dont le nom contient plus de 4 lettres
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// votre code ici .... //
const longNames = people.filter(person => person.name.length > 4);

// résultat attendu :
console.log(longNames);
// [{ name: "Alice", age: 30 }, { name: "Charlie", age: 35 }, { name: "David", age: 25 }]
