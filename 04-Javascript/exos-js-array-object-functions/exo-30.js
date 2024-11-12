// Exercice 30 : Trouver les noms des personnes de catégorie "senior"
const people = [
  { name: 'Alice', age: 10, category: 'child' },
  { name: 'Bob', age: 20, category: 'adult' },
  { name: 'Charlie', age: 35, category: 'adult' },
  { name: 'David', age: 70, category: 'senior' },
  { name: 'Eve', age: 40, category: 'adult' },
];

// votre code ici .... //
// Filtrer les personnes de catégorie "senior" et extraire leurs noms
const seniors = people
  .filter(person => person.category === 'senior')
  .map(person => person.name);

// résultat attendu :
console.log(seniors); // ["David"]
