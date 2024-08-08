// faire en sorte qu'en appelant marc, l'age passe de 20 a 19

let tabUsers = [
    {
        nom:'john',
        age: 15,
    },
    {
        nom:'Marc',
        age: 20,
    },
];

const modifierAge= (newAge) => {
    let tabnewAge = [];
    for (const user of tabUsers){
        const { age } = user;
        if (newAge === age) {
            tabnewAge.push(newAge);
        }
    }
    const exist = (tabnewAge.length = 0) ? `${newAge}` : `${newAge}`;
    console.log(exist);
};


modifierAge('marc', 19)
console.log(tabUsers);

