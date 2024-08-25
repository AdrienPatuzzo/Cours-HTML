// Exercice 13 : Calculer l'âge moyen des personnes dont le nom commence par une lettre spécifique
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// votre code ici .... //
// Spécifiez la lettre que vous voulez utiliser pour filtrer
// Filtrer les personnes dont le nom commence par la lettre spécifique
// Calculer l'âge moyen
// Diviser la somme totale par le nombre de personnes pour obtenir la moyenne
const specificLetter = 'B';
const filteredPeople = people.filter(person => person.name.startsWith(specificLetter));
const averageAge = filteredPeople.reduce((sum, person, index, array) => {
  sum += person.age;
  if (index === array.length - 1) {
    return sum / array.length;
  }
  return sum;
}, 0);

// résultat attendu :
console.log(averageAge); // 20
