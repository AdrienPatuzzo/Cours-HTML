// Exercice 32 : Ajouter un champ "initial" représentant la première lettre du nom
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// votre code ici .... //
// Utilisation de la méthode `map` pour créer un nouveau tableau `updatedPeople`.
// `map` itère sur chaque élément du tableau `people` et retourne un nouvel objet modifié.
// On retourne un nouvel objet pour chaque personne avec ses propriétés existantes et une nouvelle propriété `initial`.
// L'opérateur de décomposition (`...person`) copie toutes les propriétés de `person` dans le nouvel objet.
// `charAt(0)` récupère la première lettre de la chaîne de caractères `person.name`.
const updatedPeople = people.map(person => {
  return {
    ...person,
    initial: person.name.charAt(0)
  };
});

// résultat attendu :
console.log(updatedPeople);
// [
//   { name: "Alice", age: 30, initial: "A" },
//   { name: "Bob", age: 20, initial: "B" },
//   { name: "Charlie", age: 35, initial: "C" },
//   { name: "David", age: 25, initial: "D" },
//   { name: "Eve", age: 40, initial: "E" }
// ]
