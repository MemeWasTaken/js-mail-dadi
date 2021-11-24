// 1) Chiedere email all'utente
let mailUser = prompt('Inserisci la tua email:');
console.log(mailUser);

// 2) Controllare che sia in lista
const listEmails = ['luca@gmail.com', 'mario@gmail.com', 'franco@gmail.com', 'pippo@gmail.com'];
let found = false;
for (let i = 0; i < listEmails.length; i++) {
    const listEmailsElement = listEmails[i];
    if (mailUser.toLowerCase() == listEmailsElement.toLowerCase()) {
        found = true;
    }
}

// 3) Stampare messaggio di conseguenza
if (found == true){
    console.log('Benissimo! Sei nella lista!');
} else {
    console.log('La email inserita non risulta nella lista');
}
