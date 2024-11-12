// Exercice 41 : Calculer la moyenne d'âge des personnes pouvant voter
const people = [
  { name: 'Alice', age: 17, canVote: false },
  { name: 'Bob', age: 20, canVote: true },
  { name: 'Charlie', age: 16, canVote: false },
  { name: 'David', age: 25, canVote: true },
  { name: 'Eve', age: 40, canVote: true },
];

// votre code ici .... //
// Filtrer les personnes qui peuvent voter (canVote: true)
// Extraire les âges des personnes pouvant voter
// Calculer la somme des âges des personnes pouvant voter
// Calculer la moyenne d'âge en divisant la somme des âges par le nombre de votants
const voters = people.filter(person => person.canVote);
const voterAges = voters.map(voter => voter.age);
const totalAge = voterAges.reduce((sum, age) => sum + age, 0);
const averageAgeOfVoters = totalAge / voterAges.length;

// résultat attendu :
console.log(averageAgeOfVoters); // 28
