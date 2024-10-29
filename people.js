/*3 
Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies.
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.*/

//importazione
const names = require('./names.js')
names('cristiano', 'ronaldo')

//importazione
const creahobbies = require('./hobbies.js')
creahobbies('calcio. palestra, nuoto')
 