// Exercice 1 : Trouver les noms des personnes âgées de plus de 25 ans
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
];

// votre code ici .... //
// Étape 1 : Utiliser la méthode `filter` pour obtenir un tableau des personnes de plus de 25 ans
// Étape 2 : Utiliser la méthode `map` pour extraire les noms des personnes filtrées
const contenuePeople = people.filter(personne => personne.age > 25);
const result = contenuePeople.map(personne => personne.name);

// résultat attendu :
console.log(result); // ["Alice", "Charlie"]
