// Exercice 5 : Ajouter un nouveau champ "isAdult" à chaque objet indiquant si la personne est adulte (18 ans et plus)
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// votre code ici .... //
// Utilisation de la méthode map pour créer un nouveau tableau avec le champ "isAdult"
// Création d'un nouvel objet qui copie toutes les propriétés de l'objet courant "person"
// Ajout d'une nouvelle propriété "isAdult" qui vaut true si l'âge est 18 ou plus, sinon false

const updatedPeople = people.map(personne => {
  return {
    ...personne, isAdult: personne.age >= 18
  };
});

// résultat attendu :
console.log(updatedPeople);
// [
//   { name: "Alice", age: 30, isAdult: true },
//   { name: "Bob", age: 20, isAdult: true },
//   { name: "Charlie", age: 35, isAdult: true },
//   { name: "David", age: 25, isAdult: true },
//   { name: "Eve", age: 40, isAdult: true }
// ]
