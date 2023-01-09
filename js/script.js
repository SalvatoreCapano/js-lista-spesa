/* 
    Definizione e inizializzazione lista della spesa
    Ciclo While: 
        Creazione nuovo elemento li
        Inserimento testo nel li
        Inserire il li nella lista
*/

// Lista
const items = ['Pane', 'Pasta', 'Olio', 'Uova', 'Banane', 'Latte', 'Carote', 'Nutella'];

// Variabile Contatore
let i = 0;

// ul dell'HTML
const list = document.querySelector('#groceryList');

do {

    // Creazione nuovo elemento HTML
    const newLi = document.createElement('li');
    newLi.innerHTML = items[i];
    list.append(newLi);

    // Incremento elemento lista
    i++;

} while (i < items.length)