// Exercice 12 : Filtrer les personnes dont le nom commence par une lettre spécifique
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// votre code ici .... //
// Spécifiez la lettre que vous voulez utiliser pour filtrer
// Utilisation de filter pour sélectionner les personnes dont le nom commence par la lettre spécifique
const specificLetter = 'A';
const filteredPeople = people.filter(person => person.name.startsWith(specificLetter));

// résultat attendu :
console.log(filteredPeople);
// [{ name: "Alice", age: 30 }]
