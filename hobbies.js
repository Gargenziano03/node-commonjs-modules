/*2 
Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. 
La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
Esporta la funzione dal file.*/

//definiamo
//funzione
function creahobbies(hobbyOne, hobbyTwo, hobbyThree) {
    return{
        hobbies:[hobbyOne, hobbyTwo, hobbyThree]
    }
}

//espostazione
module.exports = creahobbies()