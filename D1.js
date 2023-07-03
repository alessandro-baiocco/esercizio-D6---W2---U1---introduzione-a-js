/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
window.alert("i principali datatype di JS sono Int(o integer), float , boolean , string , null, undefined.");
window.alert(
  "per datatype tipo int (o integer) si intende un numero intero (senza virgola) come ad esempio 10 , 6 o 8; "
);
window.alert(
  "per datatype tipo float si può intendere sia un numero intero sia un numero con la virgola ad esempio 6.15 , 3.98 o un semplice 8"
);

window.alert(
  "esercizio 1 :per database di tipo string si intende una parola, lettera o frase ma per essere riconosciuto dal codice come dato di tipo string deve essere circondato dalle virgolette"
);
window.alert(
  "per datatype tipo boolean si intende un valore che può essere falso o vero ma attenzione non è considerato come stringa"
);
window.alert("per datatype null si intende un valore non esistente");
window.alert("per datatype undefined si intende un valore che non è stato definito nel codice");
console.log("i principali datatype di JS sono Int(o integer), float , boolean , string.");
console.log(
  "per datatype tipo int (o integer) si intende un numero intero (senza virgola) come ad esempio 10 , 6 o 8; "
);
console.log(
  "per datatype tipo float si può intendere sia un numero intero sia un numero con la virgola ad esempio 6.15 , 3.98 o un semplice 8"
);

console.log(
  "per database di tipo string si intende una parola, lettera o frase ma per essere riconosciuto dal codice come dato di tipo string deve essere circondato dalle virgolette"
);
console.log(
  "per datatype tipo boolean si intende un valore che può essere falso o vero ma attenzione non è considerato come stringa"
);
console.log("per datatype null si intende un valore non esistente");
console.log("per datatype undefined si intende un valore che non è stato definito nel codice");

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Alessandro";
console.log("esercizio 2 = ", name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let variable1 = 12;
let variable2 = 20;

console.log("esercizio 3 = ", variable1 + variable2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
console.log("esercizio 4 = ", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

name = "Baiocco";
console.log("esercizio 5 = ", name, "il valore const lo messo alla fine altrimenti dava errore e fermava il codice");
//il valore const lo messo alla fine

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

esercizio6 = 4 - x;
console.log("esercizio 6 = ", 4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";
window.alert(name1 === name2);
console.log("esercizio 7, name1 e name2 sono uguali ", name1 === name2);

//extra

console.log("EXTRA , adesso sono uguali ", name1 === name2.toLowerCase());

//const
const y = 15;
y = 32;
window.alert("esercizio 5 = ", y);
