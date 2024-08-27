let tabColors = ['bleu' , 'rouge' , 'vert'];

// tabColors.push('gris');
// console.log(tabColors);

// tabColors = [...tabColors, 'violet', 'noir'];
// console.log(tabColors);

let tabColors2 = ['rose' , 'saumon'];
let tabColors3 = tabColors.concat(tabColors2); // => ['bleu' , 'rouge' , 'vert' , 'rose' , 'saumon']

let tabColors4 = [...tabColors, ...tabColors2]; // => ['bleu' , 'rouge' , 'vert' , 'rose' , 'saumon']

console.log(tabColors3);
console.log(tabColors4);
