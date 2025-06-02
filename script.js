// js/script.js

console.log("Ciao! JavaScript è stato caricato correttamente!");
console.log("Benvenuto nel mio portfolio!");

// --- Esempio di Variabili ---
console.log("\n--- Esempio di Variabili ---");

let mioNome = "Stefano"; // Variabile che può cambiare
const annoCorrente = 2024; // Variabile il cui valore non cambierà

console.log("Il mio nome è: " + mioNome);
console.log("Siamo nell'anno: " + annoCorrente);

mioNome = "Stefano Morbiolo"; // Riassegno il valore a mioNome
console.log("Il mio nome completo è: " + mioNome);

// Prova a decommentare la riga sotto per vedere l'errore di const
// annoCorrente = 2025;

// --- Esempio di Tipi di Dato ---
console.log("\n--- Esempio di Tipi di Dato ---");

let quantita = 100;                 // Number
let descrizione = "Articoli";       // String
let isActive = true;                // Boolean
let prezzoUnitario = 15.50;         // Number (decimale)
let colorePreferito = null;         // Null
let citta;                          // Undefined (non assegnata)

console.log("Quantità:", quantita, typeof quantita);
console.log("Descrizione:", descrizione, typeof descrizione);
console.log("Attivo:", isActive, typeof isActive);
console.log("Prezzo Unitario:", prezzoUnitario, typeof prezzoUnitario);
console.log("Colore Preferito:", colorePreferito, typeof colorePreferito); // Output: object (è un quirk di JS, ma è un valore primitivo)
console.log("Città:", citta, typeof citta);

// Esempio di Template Literal (Stringhe con backticks)
let prodotto = "Laptop";
let costo = 1200;
let frase = `Il ${prodotto} costa ${costo} euro.`;
console.log(frase);

// --- Esempio di Operatori ---
console.log("\n--- Esempio di Operatori ---");

let num1 = 20;
let num2 = 7;

console.log("Somma:", num1 + num2);     // 27
console.log("Sottrazione:", num1 - num2); // 13
console.log("Moltiplicazione:", num1 * num2); // 140
console.log("Divisione:", num1 / num2);   // 2.857...
console.log("Resto:", num1 % num2);     // 6 (20 diviso 7 fa 2 con resto 6)

let cont = 5;
cont++; // Incrementa a 6
console.log("Contatore incrementato:", cont);
cont--; // Decrementa a 5
console.log("Contatore decrementato:", cont);

let saldo = 100;
saldo += 50; // Aggiunge 50 al saldo (saldo = 150)
console.log("Saldo aggiornato:", saldo);

console.log("Confronto == (5 == '5'):", 5 == '5');     // true
console.log("Confronto === (5 === '5'):", 5 === '5');   // false
console.log("Confronto != (10 != '10'):", 10 != '10');   // false
console.log("Confronto !== (10 !== '10'):", 10 !== '10'); // true
console.log("Maggiore (15 > 8):", 15 > 8);           // true

let isGuest = true;
let isAdmin = false;
let hasSubscription = true;

console.log("isAdmin && hasSubscription:", isAdmin && hasSubscription);   // false
console.log("isGuest || isAdmin:", isGuest || isAdmin);               // true
console.log("!isGuest:", !isGuest);                                 // false

// js/script.js

// ... (codice delle lezioni precedenti) ...

// --- Lezione 17: Il Document Object Model (DOM) e Selezione degli Elementi ---
console.log("\n--- Lezione 17: DOM e Selezione Elementi ---");

// 1. Selezionare un elemento tramite ID (document.getElementById)
const chiSonoSection = document.getElementById('chi-sono');
if (chiSonoSection) {
    console.log("Sezione 'Chi sono' trovata tramite ID:", chiSonoSection);
    console.log("Il titolo di questa sezione è:", chiSonoSection.querySelector('h2').textContent);
} else {
    console.log("Errore: Sezione 'Chi sono' non trovata. Controlla l'ID.");
}

// 2. Selezionare elementi tramite Classe (document.getElementsByClassName)
// Nota: 'section' nel tuo CSS è un tag, non una classe. Se vuoi usarla per selezione, usa getElementsByTagName o querySelectorAll
// Assumendo che tu voglia selezionare le sezioni principali, che non hanno una classe specifica nell'HTML attuale:
// Se le tue sezioni fossero così: <section class="portfolio-section">
// const portfolioSections = document.getElementsByClassName('portfolio-section');
// console.log("Sezioni con classe 'portfolio-section' (se esistente):", portfolioSections);

// Per ora, useremo i tag o querySelectorAll per le sezioni:
const tutteLeSezioni = document.getElementsByTagName('section');
console.log("Tutte le sezioni della pagina (by TagName):", tutteLeSezioni);
console.log("Numero di sezioni:", tutteLeSezioni.length);


// 3. Selezionare il primo elemento tramite Selettore CSS (document.querySelector)
const primoLinkNav = document.querySelector('nav ul li a');
if (primoLinkNav) {
    console.log("Primo link di navigazione (querySelector):", primoLinkNav.textContent);
}

const inputEmailForm = document.querySelector('#contatti input[type="email"]');
if (inputEmailForm) {
    console.log("Input email del form (querySelector):", inputEmailForm);
    console.log("Placeholder dell'input email:", inputEmailForm.placeholder);
}


// 4. Selezionare tutti gli elementi tramite Selettore CSS (document.querySelectorAll)
const tuttiILinkNav = document.querySelectorAll('nav ul li a');
console.log("Tutti i link di navigazione (querySelectorAll):", tuttiILinkNav);
consoleNavLinks(tuttiILinkNav); // Chiamiamo una funzione di supporto per stamparli

const tuttiGliInputDelForm = document.querySelectorAll('#contatti form input');
console.log("Tutti gli input e submit del form contatti:", tuttiGliInputDelForm);


// Funzione di supporto per stampare i link (utile per NodeList)
function consoleNavLinks(links) {
    console.log("Testo dei link di navigazione:");
    links.forEach((link, index) => {
        console.log(`Link ${index + 1}: ${link.textContent}`);
    });
}

document.getElementById('chi-sono')