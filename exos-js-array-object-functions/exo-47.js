// Exercice 47 : Filtrer les personnes pouvant louer une voiture
const people = [
  { name: 'Alice', age: 15, canRentCar: false },
  { name: 'Bob', age: 20, canRentCar: false },
  { name: 'Charlie', age: 22, canRentCar: true },
  { name: 'David', age: 25, canRentCar: true },
  { name: 'Eve', age: 18, canRentCar: false },
];

// votre code ici .... //
const canRentCarPeople = people.filter(person => person.canRentCar)

// résultat attendu :
console.log(canRentCarPeople);
// [
//   { name: "Charlie", age: 22, canRentCar: true },
//   { name: "David", age: 25, canRentCar: true }
// ]
