// Exercice 35 : Ajouter un champ "isTeenager" indiquant si la personne est un adolescent (13-19 ans)
const people = [
  { name: 'Alice', age: 12 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 15 },
  { name: 'Eve', age: 25 },
];

// votre code ici .... //
// Utiliser map pour ajouter le champ isTeenager à chaque objet du tableau
// Copier les propriétés existantes
// Ajouter la propriété isTeenager
const updatedPeople = people.map(person => {
  return {
    ...person,
    isTeenager: person.age >= 13 && person.age <= 19
  };
});

// résultat attendu :
console.log(updatedPeople);
// [
//   { name: "Alice", age: 12, isTeenager: false },
//   { name: "Bob", age: 17, isTeenager: true },
//   { name: "Charlie", age: 20, isTeenager: false },
//   { name: "David", age: 15, isTeenager: true },
//   { name: "Eve", age: 25, isTeenager: false }
// ]
