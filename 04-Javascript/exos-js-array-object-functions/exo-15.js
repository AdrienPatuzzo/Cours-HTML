// Exercice 15 : Grouper les personnes par ville
const people = [
  { name: 'Alice', age: 30, city: 'New York' },
  { name: 'Bob', age: 20, city: 'Los Angeles' },
  { name: 'Charlie', age: 35, city: 'Chicago' },
  { name: 'David', age: 25, city: 'New York' },
  { name: 'Eve', age: 40, city: 'Los Angeles' },
];

// votre code ici .... //
// Utilisation de reduce pour grouper les personnes par ville
// Vérifier si la ville existe déjà comme clé dans l'objet acc
// Si non, créer un tableau vide pour cette ville
// Ajouter le nom de la personne dans le tableau correspondant à la ville
// Retourner l'accumulateur mis à jour
const groupedByCity = people.reduce((group, person) => {
  if (!group[person.city]) {
    group[person.city] = [];
  }
  group[person.city].push(person.name);
  return group;
}, {});

// résultat attendu :
console.log(groupedByCity);
// {
//   "New York": ["Alice", "David"],
//   "Los Angeles": ["Bob", "Eve"],
//   "Chicago": ["Charlie"]
// }
