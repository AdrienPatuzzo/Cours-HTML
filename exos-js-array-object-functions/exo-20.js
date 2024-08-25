// Exercice 20 : Trouver l'âge moyen des personnes dans chaque ville
const people = [
  { name: 'Alice', age: 30, city: 'New York' },
  { name: 'Bob', age: 20, city: 'Los Angeles' },
  { name: 'Charlie', age: 35, city: 'Chicago' },
  { name: 'David', age: 25, city: 'New York' },
  { name: 'Eve', age: 40, city: 'Los Angeles' },
];

// votre code ici .... //
// Grouper les personnes par ville et calculer l'âge moyen
// Calculer la moyenne pour chaque ville
const averageAges = people.reduce((group, person) => {
  const { city, age } = person;
  if (!group[city]) {
    group[city] = { totalAge: 0, count: 0 };
  }
  group[city].totalAge += age;
  group[city].count += 1;
  return group;
}, {});
for (const city in averageAges) {
  averageAges[city] = averageAges[city].totalAge / averageAges[city].count;
}

// résultat attendu :
console.log(averageAges);
// { "New York": 27.5, "Los Angeles": 30, "Chicago": 35 }
