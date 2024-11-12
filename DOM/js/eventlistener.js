const button = document.querySelector('#mon-bouton');

console.log(button);

button.addEventListener('mouseenter', () => {
    let paragraphe = document.querySelector('#mon-paragraphe');
    paragraphe.classList.add('change-color');
    // window.alert('bouton cliqué');
});

button.addEventListener('mouseleave', () => {
    let paragraphe = document.querySelector('#mon-paragraphe');
    paragraphe.classList.remove('change-color');
});

// let paragraphe = document.querySelector('#mon-paragraphe');
// console.log(paragraphe);
// paragraphe.style.color = "red";
// paragraphe.classList.add('change-color');
// paragraphe.innerHTML = "mon nouveau contenu";
// paragraphe.textContent = "mon nouveau contenu";

