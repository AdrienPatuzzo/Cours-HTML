// Exercice 44 : Ajouter un champ "canDrive" indiquant si la personne peut conduire (âge >= 16)
const people = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 16 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 14 },
];

// votre code ici .... //
// Créer un nouveau tableau en ajoutant le champ "canDrive" à chaque objet
// Ajouter le champ "canDrive" en fonction de l'âge
const updatedPeople = people.map(person => {
  return {
    ...person, // Copier les propriétés existantes (nom et âge)
    canDrive: person.age >= 16 // Définir "canDrive" à true si âge >= 16, sinon false
  };
});

// résultat attendu :
console.log(updatedPeople);
// [
//   { name: "Alice", age: 15, canDrive: false },
//   { name: "Bob", age: 20, canDrive: true },
//   { name: "Charlie", age: 16, canDrive: true },
//   { name: "David", age: 25, canDrive: true },
//   { name: "Eve", age: 14, canDrive: false }
// ]
