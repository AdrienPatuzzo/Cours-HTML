// Exercice 42 : Ajouter un champ "votingEligibility" indiquant "minor", "adult", "senior"
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 16 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 65 },
];

// votre code ici .... //
// Créer un nouveau tableau en ajoutant le champ "votingEligibility" à chaque objet
// Déclaration de la variable pour stocker le statut d'éligibilité au vote
// Déterminer l'éligibilité en fonction de l'âge
// Retourner un nouvel objet incluant le champ "votingEligibility"
const updatedPeople = people.map(person => {
  let votingEligibility;
  if (person.age < 18) {
    votingEligibility = "minor"; // Mineur si moins de 18 ans
  } else if (person.age < 60) {
    votingEligibility = "adult"; // Adulte si entre 18 et 59 ans
  } else {
    votingEligibility = "senior"; // Sénior si 60 ans ou plus
  }
  return {
    ...person, // Copie les propriétés existantes (nom et âge)
    votingEligibility // Ajoute le champ "votingEligibility"
  };
});

// résultat attendu :
console.log(updatedPeople);
// [
//   { name: "Alice", age: 17, votingEligibility: "minor" },
//   { name: "Bob", age: 20, votingEligibility: "adult" },
//   { name: "Charlie", age: 16, votingEligibility: "minor" },
//   { name: "David", age: 25, votingEligibility: "adult" },
//   { name: "Eve", age: 65, votingEligibility: "senior" }
// ]
