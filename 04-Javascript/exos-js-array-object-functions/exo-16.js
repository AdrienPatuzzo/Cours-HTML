// Exercice 16 : Trouver le plus jeune et le plus vieux dans chaque ville
const people = [
  { name: 'Alice', age: 30, city: 'New York' },
  { name: 'Bob', age: 20, city: 'Los Angeles' },
  { name: 'Charlie', age: 35, city: 'Chicago' },
  { name: 'David', age: 25, city: 'New York' },
  { name: 'Eve', age: 40, city: 'Los Angeles' },
];

// votre code ici .... //
// Utilisation de reduce pour grouper les personnes par ville et trouver les plus jeunes et les plus vieux
// Initialiser les valeurs pour une nouvelle ville
// Mettre à jour le plus jeune
// Mettre à jour le plus vieux
const youngestAndOldest = people.reduce((group, person) => {
  const { city, name, age } = person;
  if (!group[city]) {
    group[city] = {
      youngest: { name, age },
      oldest: { name, age }
    };
  } else {
    if (age < group[city].youngest.age) {
      group[city].youngest = { name, age };
    }
    if (age > group[city].oldest.age) {
      group[city].oldest = { name, age };
    }
  }
  return group;
}, {});

// résultat attendu :
console.log(youngestAndOldest);
// {
//   "New York": { youngest: { name: "David", age: 25 }, oldest: { name: "Alice", age: 30 } },
//   "Los Angeles": { youngest: { name: "Bob", age: 20 }, oldest: { name: "Eve", age: 40 } },
//   "Chicago": { youngest: { name: "Charlie", age: 35 }, oldest: { name: "Charlie", age: 35 } }
// }
