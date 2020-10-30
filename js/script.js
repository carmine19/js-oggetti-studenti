//creare un oggetto che rappresenta uno studente:
// ogni studente è caratterizzato da un nome, un cognome e un'età.
// Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore

//creare un array di oggetti "studente".
// Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome

//tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente.
//Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.


//creo un oggetto che rappresenta lo studente con 3 propietà
var studente = {
    'nome': 'carmine',
    'cognome': 'pepi',
    'eta': 31,
}

// creo un ciclo for in per leggere le propietò dell oggetto
for (var studenteKey in studente) {
    // qui leggo i valori delle chiavi dell'oggetto
    console.log(studenteKey);
    //qui leggo i valori delle chiavi dell'oggetto
    console.log(studente[studenteKey]);

};


//creo un oggetto dove inserire i dati del nuovo utente
var studente_nuovo = {

    'nome': prompt('inserisci il tuo nome'),

    'cognome': prompt('inserisci il tuo cognome'),

    'eta': parseInt(prompt('inserisci la tua età')),

};


//creo un array che contiene vari studenti
var studenti = [

    { // questo è il primo oggetto dell'array a posizione 0
        'nome': 'carmine',
        'cognome': 'pepi',
        'eta': 31,
    },

    { // questo è il secondo oggetto dell'array a posizione 1
        'nome': 'rino',
        'cognome': 'pape',
        'eta': 16,
    }
];

//inserisco questo oggetto nell'array precendete, cioè studenti in quanto nel punto 3
//si richiede di inserire un nuovo studente
studenti.push(studente_nuovo);

//eseendo un array devo prima creare un ciclo for per leggere tutto il contenuto
for (var i = 0; i < studenti.length; i++) {

    //qui mi creo una variabile per leggere tutto il contenuto dell'array
    var studenti_correnti = studenti[i];
    console.log(studenti_correnti);

    //ora creo un ciclo for in per leggere gli oggenti contenuti nel array steudenti
    //che in questo caso è contenuto nella variabile studenti correnti
    for (var studentiKey in studenti_correnti) {
        //ora stampo solo il nome e cognome
        if (studentiKey == 'nome') {
            console.log(studentiKey + ' ' + studenti_correnti[studentiKey]);
        } else if (studentiKey == 'cognome') {
            console.log(studentiKey + ' ' + studenti_correnti[studentiKey]);
        }
    }
}