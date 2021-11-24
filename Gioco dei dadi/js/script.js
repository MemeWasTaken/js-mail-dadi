// 1) Generare numero casuale da 1 a 6 per il giocatore
let numPlayer = Math.floor(Math.random() * 6) + 1;
console.log('Il tuo numero: ' + numPlayer);

// 2) Generare numero casuale da 1 a 6 per il computer
let numComputer = Math.floor(Math.random() * 6) + 1;
console.log('Il numero del computer: ' + numComputer);

// 3) Verificare quale dei due numeri usciti è maggiore
// 4) printInConsole 
if (numPlayer > numComputer) {
    console.log('HAI VINTO!!');
} else if (numPlayer < numComputer) {
    console.log('Hai perso :(');
} else {
    console.log('Hai pareggiato, dai poteva andare peggio');
}