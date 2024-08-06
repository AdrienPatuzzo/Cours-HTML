// Exercice 3 :
// Créez une fonction normale qui prend un tableau en entrée et renvoie la somme de tout ses éléments
let array = [1, 2, 3, 4, 5];
let somme = 0;

for (let i = 0; i < array.length; i++) {
    somme += array[i];
};
console.log(somme); 
// Transformez cette fonction en une fonction fléchée
// const sommeTab = (array) => { const result = somme += array[i]; };
// console.log(sommeTab(1, 2, 3, 4, 5));