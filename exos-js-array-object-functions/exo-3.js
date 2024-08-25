// Exercice 3 : Grouper les personnes par tranche d'âge (moins de 25, 25 à 35, plus de 35)
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// votre code ici .... //
// Initialisation d'un objet pour stocker les groupes d'âge
// Utilisation de `forEach` pour parcourir chaque personne dans le tableau `people`
const ageGroups = {
  lessThan25: [],        // Tableau pour les personnes de moins de 25 ans
  between25And35: [],    // Tableau pour les personnes entre 25 et 35 ans
  moreThan35: []         // Tableau pour les personnes de plus de 35 ans
};

people.forEach(personne => {
  if (personne.age < 25) {
    ageGroups.lessThan25.push(personne.name);
  } else if (personne.age <= 35) {
    ageGroups.between25And35.push(personne.name);
  } else {
    ageGroups.moreThan35.push(personne.name);
  }
});


// résultat attendu :
console.log(ageGroups);
// {
//   lessThan25: ["Bob"],
//   between25And35: ["Alice", "Charlie", "David"],
//   moreThan35: ["Eve"]
// }
