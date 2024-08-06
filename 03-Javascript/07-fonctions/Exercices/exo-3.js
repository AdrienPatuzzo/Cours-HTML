// Exercice 3 :
// Créez une fonction normale qui prend un tableau en entrée et renvoie la somme de tous ses éléments
// function somme(tableau) {
//     let somme = 0;
    //   for (let i = 0; i < tableau.length; i++) {
    //     somme += tableau[i];
    //   }
    //   for (const nombre of tableau) {
    //     somme += nombre;
    //   }
    //   tableau.forEach((nombre, index) => {
    //     console.log(index);
    //     somme += nombre;
    //   });
    //   return somme;
    // }
//     tableau.map((nombre) => (somme += nombre)); // à préconiser
//     return somme;
//   }
  // somme([1, 2, 3, 4, 5]);
//   console.log(somme([14, 25, 3, 46, 5]));
  // Transformez cette fonction en une fonction fléchée
  // const somme2 = (tableau) => {
  //   let somme = 0;
  //   for (let i = 0; i < tableau.length; i++) {
  //     somme += tableau[i];
  //   }
  //   return somme;
  // };
  // console.log(somme2([1, 2, 3, 4, 5]));


// let tab = [45, 78, 87, 34];
// const somme = (tab) => {
//     return tab.reduce((accumulator, a) => accumulator + a, 0);
// };

// console.log(somme(tab));