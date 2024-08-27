// Exercice 50 : Grouper les personnes par champ "isWorkingAge"
const people = [
  { name: 'Alice', age: 15, isWorkingAge: false },
  { name: 'Bob', age: 20, isWorkingAge: true },
  { name: 'Charlie', age: 22, isWorkingAge: true },
  { name: 'David', age: 70, isWorkingAge: false },
  { name: 'Eve', age: 65, isWorkingAge: true },
];

// votre code ici .... //
// Initialiser un objet vide pour stocker les groupes
// Parcourir chaque personne dans le tableau
// Vérifier si la personne est en âge de travailler
const groupedByWorkingAge = {
  workingAge: [],       // Groupe pour les personnes en âge de travailler
  nonWorkingAge: [],    // Groupe pour les personnes hors de l'âge de travailler
};
people.forEach(person => {
  if (person.isWorkingAge) {
    groupedByWorkingAge.workingAge.push(person.name); // Ajouter le nom à la catégorie "workingAge"
  } else {
    groupedByWorkingAge.nonWorkingAge.push(person.name); // Ajouter le nom à la catégorie "nonWorkingAge"
  }
});

// résultat attendu :
console.log(groupedByWorkingAge);
// { workingAge: ["Bob", "Charlie", "Eve"], nonWorkingAge: ["Alice", "David"] }
