// Exercice 28 : Ajouter un champ "category" basé sur l'âge (enfant, adulte, senior)
const people = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 70 },
  { name: 'Eve', age: 40 },
];

// votre code ici .... //
// Ajouter le champ "category" basé sur l'âge
const categorizedPeople = people.map(person => {
  let category;
  if (person.age < 18) {
    category = 'child';
  } else if (person.age >= 18 && person.age < 65) {
    category = 'adult';
  } else {
    category = 'senior';
  }
  return {
    ...person,
    category
  };
});

// résultat attendu :
console.log(categorizedPeople);
// [
//   { name: "Alice", age: 10, category: "child" },
//   { name: "Bob", age: 20, category: "adult" },
//   { name: "Charlie", age: 35, category: "adult" },
//   { name: "David", age: 70, category: "senior" },
//   { name: "Eve", age: 40, category: "adult" }
// ]
