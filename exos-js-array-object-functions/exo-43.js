// Exercice 43 : Filtrer les personnes de catégorie "senior" pouvant voter
const people = [
  { name: 'Alice', age: 17, votingEligibility: 'minor' },
  { name: 'Bob', age: 20, votingEligibility: 'adult' },
  { name: 'Charlie', age: 16, votingEligibility: 'minor' },
  { name: 'David', age: 25, votingEligibility: 'adult' },
  { name: 'Eve', age: 65, votingEligibility: 'senior' },
];

// votre code ici .... //
// Filtrer les personnes de catégorie "senior"
const seniorVoters = people.filter(person => person.votingEligibility === 'senior');

// résultat attendu :
console.log(seniorVoters);
// [{ name: "Eve", age: 65, votingEligibility: "senior" }]
