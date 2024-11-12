// Exercice 9 : Compter le nombre de personnes adultes
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
  { name: 'Frank', age: 17 },
];

// votre code ici .... //
// Utilisation de reduce pour compter les adultes
// Si la personne est adulte (âge >= 18), on incrémente le compteur
const adultCount = people.reduce((count, person) => {
  return person.age >= 18 ? count + 1 : count;
}, 0);

// résultat attendu :
console.log(adultCount); // 5
