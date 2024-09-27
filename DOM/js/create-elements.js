const newButton = document.createElement('button');
const newButton2 = document.createElement('button');
const maDiv = document.querySelector('#ma-div');
// console.log(maDiv);
newButton.textContent = 'valider';
newButton2.textContent = 'valider';
newButton.setAttribute('id', 'mon-bouton-1');
newButton.setAttribute('id', 'mon-bouton-2');

// console.log(newButton);

// document.body.append(newButton);
// maDiv.append(newButton2);

document.body.appendChild(newButton);
maDiv.appendChild(newButton2);