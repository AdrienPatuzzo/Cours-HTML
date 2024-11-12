// Exercice 34 : Trouver les noms des personnes nées avant l'année 2000
const people = [
  { name: 'Alice', age: 30, birthYear: 1994 },
  { name: 'Bob', age: 20, birthYear: 2004 },
  { name: 'Charlie', age: 35, birthYear: 1989 },
  { name: 'David', age: 25, birthYear: 1999 },
  { name: 'Eve', age: 40, birthYear: 1984 },
];

// votre code ici .... //
// Utiliser la méthode filter pour garder les personnes nées avant l'année 2000
// Utiliser la méthode map pour extraire uniquement les noms des personnes filtrées
const bornBefore2000 = people
  .filter(person => person.birthYear < 2000)
  .map(person => person.name);


// résultat attendu :
console.log(bornBefore2000); // ["Alice", "Charlie", "David", "Eve"]
