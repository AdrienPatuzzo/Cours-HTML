// Exercice 27 : Trouver le nombre de personnes par tranche d'âge
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
  { name: 'Frank', age: 50 },
  { name: 'Grace', age: 15 },
];

// votre code ici .... //
// Calculer le nombre de personnes par tranche d'âge
const ageRanges = people.reduce((groupe, person) => {
  if (person.age < 20) {
    groupe.lessThan20 += 1;
  } else if (person.age >= 20 && person.age < 30) {
    groupe['20to29'] += 1;
  } else if (person.age >= 30 && person.age < 40) {
    groupe['30to39'] += 1;
  } else if (person.age >= 40) {
    groupe['40andAbove'] += 1;
  }
  return groupe;
},
  { lessThan20: 0, '20to29': 0, '30to39': 0, '40andAbove': 0 });

// résultat attendu :
console.log(ageRanges);
// { lessThan20: 1, 20to29: 2, 30to39: 2, 40andAbove: 2 }
