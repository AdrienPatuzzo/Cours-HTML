// Exercice 21 : Ajouter un champ "fullName" combinant le prénom et le nom de famille
const people = [
  { firstName: 'Alice', lastName: 'Smith', age: 30 },
  { firstName: 'Bob', lastName: 'Johnson', age: 20 },
  { firstName: 'Charlie', lastName: 'Brown', age: 35 },
  { firstName: 'David', lastName: 'Williams', age: 25 },
  { firstName: 'Eve', lastName: 'Jones', age: 40 },
];

// votre code ici .... //
// Ajouter le champ fullName à chaque objet
const updatedPeople = people.map(person => ({
  ...person, // Copie tous les champs de l'objet original
  fullName: `${person.firstName} ${person.lastName}` // Crée le champ fullName
}));

// résultat attendu :
console.log(updatedPeople);
// [
//   { firstName: "Alice", lastName: "Smith", age: 30, fullName: "Alice Smith" },
//   { firstName: "Bob", lastName: "Johnson", age: 20, fullName: "Bob Johnson" },
//   { firstName: "Charlie", lastName: "Brown", age: 35, fullName: "Charlie Brown" },
//   { firstName: "David", lastName: "Williams", age: 25, fullName: "David Williams" },
//   { firstName: "Eve", lastName: "Jones", age: 40, fullName: "Eve Jones" }
// ]
