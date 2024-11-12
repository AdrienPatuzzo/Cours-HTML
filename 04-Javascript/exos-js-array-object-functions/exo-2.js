// Exercice 2 : Calculer la moyenne des âges
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
];

// votre code ici .... //
// Étape 1 : Utiliser `map` pour créer un tableau contenant uniquement les âges des personnes
// Étape 2 : Utiliser `reduce` pour calculer la somme de tous les âges dans le tableau `ages`
// Étape 3 : Calculer la moyenne en divisant la somme totale des âges par le nombre de personnes
const ages = people.map(personne => personne.age);
const totalAge = ages.reduce((somme, age) => somme + age, 0);
const averageAge = totalAge / people.length;

// résultat attendu :
console.log(averageAge); // 27.5
