// Exo 1
// const paragraphe = document.gueryselector('#mon-paragraphe');
// console.log(paragraphe);

// paragraphe.textContent = 'mon contenu';


// ex2
// const myButton = document.queryselector('#mon-bouton');
// console.log(myButton);

// myButton.addEventListener('click', () => {
// window.alert('bouton cliqué');
// });

// exo 3
document.addEventListener('DOMContentLoaded', () => {
    const formulaire = document.getElementById('mon-formulaire');
    const champPrenom = document.getElementById('prenom');
    const champNom = document.getElementById('nom');
    const champCouleur = document.getElementById('couleur');
    const listePrenoms = document.getElementById('liste-prenoms');
    let compteur = 0;

    formulaire.addEventListener('submit', (event) => {
        event.preventDefault();
        const prenom = champPrenom.value.trim();
        const nom = champNom.value.trim();
        const couleur = champCouleur.value;
        const hasNumbers = (str) => /\d/.test(str);
        if (hasNumbers(prenom) || hasNumbers(nom)) {
            alert('Les champs Prénom et Nom ne doivent pas contenir de chiffres.');
            return;
        }

        if (prenom && nom) {
            compteur++;
            const newPrenom = document.createElement('li');
            newPrenom.textContent = `${compteur}. ${prenom} ${nom}`;
            newPrenom.style.color = couleur;
            const supprimerIcone = document.createElement('span');
            supprimerIcone.textContent = '✖';
            supprimerIcone.classList.add('supprimer');
            supprimerIcone.addEventListener('click', () => {
                newPrenom.remove();
                ajusterNumeros();
            });
            newPrenom.appendChild(supprimerIcone);
            listePrenoms.appendChild(newPrenom);
            champPrenom.value = '';
            champNom.value = '';
        }
    });

    function ajusterNumeros() {
        const items = listePrenoms.querySelectorAll('li');
        items.forEach((item, index) => {
            item.firstChild.textContent = `${index + 1}. ${item.firstChild.textContent.split('. ')[1]}`;
        });
        compteur = items.length;
    }
});