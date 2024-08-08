// Pour écrire de la doc faire " / et ** " voir https://jsdoc.app/
/**
 *  fonction qui prends une liste de nombre non limitée
 *  et qui renvoie l'addition de ces nombres
 * @author Adrien Patuzzo Le big big boss de sa gwand mewe la puwt <a.pats@hotmail.fr>
 * @param  {number[]} args 
 * @returns 
 */
function addition(...args) {
    let result = 0;
    for (const nombre of args) result += nombre ;
    return result;
}

const result = addition(1, 4, 6, 7, 89, 67, 78);
console.log(result);