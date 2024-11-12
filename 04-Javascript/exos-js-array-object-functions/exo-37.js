// Exercice 37 : Grouper les personnes par âge
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 30 },
  { name: 'Eve', age: 40 },
];

// votre code ici .... //
// Utiliser reduce pour grouper les personnes par âge
// Si l'âge de la personne existe déjà comme clé dans l'objet group, on ajoute le nom au tableau existant
// Sinon, on crée une nouvelle entrée pour cet âge avec un tableau contenant le nom de la personne
const groupedByAge = people.reduce((group, person) => {
  if (group[person.age]) {
    group[person.age].push(person.name);
  } else {
    group[person.age] = [person.name];
  }
  return group;
}, {});

// résultat attendu :
console.log(groupedByAge);
// { 30: ["Alice", "David"], 20: ["Bob"], 35: ["Charlie"], 40: ["Eve"] }
