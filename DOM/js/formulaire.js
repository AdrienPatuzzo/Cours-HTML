let user = {
    nom: "toto",
    prenom: "tata",
};
const monFormulaire = document.querySelector('#mon-formulaire')
// console.log(monFormulaire);


monFormulaire.addEventListener('submit', (event) => {
    event.preventDefault();
    const nom = monFormulaire.elements.nom.value;
    const prenom = monFormulaire.elements.prenom.value;
    // console.log(event.target[0].value);

    const newUser = { nom, prenom };
    user = { ...user, ...newUser };

    console.log(user);
    // console.log(nom, prenom);
    // console.log(monFormulaire.element.prenom.value);
    monFormulaire.reset();
});
