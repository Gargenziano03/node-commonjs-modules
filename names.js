/*1 
Crea una funzione che accetta due parametri: firstName, lastName. 
La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.*/

//definiamo
//funzione
function names(firstName, lastName) {
    return{
        firstName: firstName,
        lastName: lastName
    };
}

//esportazione
module.exports = names()


