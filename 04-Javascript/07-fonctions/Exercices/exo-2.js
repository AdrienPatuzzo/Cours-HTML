// Exercice 2
// Créez une fonction normale qui prend deux nombres en entrée et renvoie leur somme
function addition(a, b) { 
    const result = a + b;
    return result; 
};

// transformez cette fonction en une fonction fléchée
const addition2 = (a, b) => { 
    const result = a + b;
    return result; 
};
console.log(addition(2, 3));
console.log(addition2(5, 3));