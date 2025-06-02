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


// js/script.js

// Questo script è stato consolidato dalle Lezioni 18, 19 e 20.
// Assicurati che il tuo HTML sia configurato correttamente per il form di Netlify:
// <form name="contact" method="POST" data-netlify="true">
//   ... (campi input con attributi 'name') ...
// </form>


// --- Lezione 17: DOM e Selezione Elementi (Rivedere per contesto) ---
console.log("\n--- Lezione 17: DOM e Selezione Elementi (Rivedere) ---");

// Dichiarazione UNICA delle variabili all'inizio o al primo utilizzo.

// 1. Selezionare un elemento tramite ID (document.getElementById)
chiSonoSection = document.getElementById('chi-sono'); // PRIMA DICHIARAZIONE
if (chiSonoSection) {
    console.log("Sezione 'Chi sono' trovata tramite ID:", chiSonoSection);
    const titoloChiSono = chiSonoSection.querySelector('h2');
    if (titoloChiSono) {
        console.log("Il titolo di questa sezione è:", titoloChiSono.textContent);
    }
} else {
    console.log("Errore: Sezione 'Chi sono' non trovata. Controlla l'ID.");
}

// 2. Selezionare elementi tramite classe (document.getElementsByClassName)
const navLinks = document.getElementsByClassName('nav-link'); // PRIMA DICHIARAZIONE
if (navLinks.length > 0) {
    console.log("Link di navigazione trovati tramite classe:", navLinks);
    for (const link of navLinks) {
        console.log("Testo link:", link.textContent);
    }
}

// 3. Selezionare elementi tramite tag (document.getElementsByTagName)
const allParagraphs = document.getElementsByTagName('p'); // PRIMA DICHIARAZIONE
if (allParagraphs.length > 0) {
    console.log("Paragrafi trovati tramite tag:", allParagraphs);
}

// 4. Selezionare elementi con querySelector e querySelectorAll (Moderno e Flessibile)
const firstProject = document.querySelector('#progetti li'); // PRIMA DICHIARAZIONE
if (firstProject) {
    console.log("Primo progetto trovato con querySelector:", firstProject.textContent);
}

const allProjectItems = document.querySelectorAll('#progetti li'); // PRIMA DICHIARAZIONE
if (allProjectItems.length > 0) {
    console.log("Tutti i progetti trovati con querySelectorAll:", allProjectItems);
    allProjectItems.forEach((item, index) => {
        console.log(`Progetto ${index + 1}:`, item.textContent);
    });
}


// --- Lezione 18: Manipolazione del DOM ---
console.log("\n--- Lezione 18: Manipolazione del DOM ---");

// 1. Modificare il testo del sottotitolo nell'header
const subtitle = document.querySelector('header p'); // PRIMA DICHIARAZIONE
if (subtitle) {
    subtitle.textContent = "Benvenuto nel mio spazio creativo!";
    console.log("Sottotitolo header modificato.");
}

// 2. Modificare l'attributo src dell'immagine del profilo e aggiungere un data attribute
// Usiamo 'profileImage' per tutte le operazioni sull'immagine del profilo
const profileImage = document.querySelector('#chi-sono img'); // PRIMA DICHIARAZIONE (usata anche dopo)
if (profileImage) {
    // Se hai un'immagine 'profile-pic-new.webp' nella cartella images, puoi uncommentare questa riga
    // profileImage.setAttribute('src', 'images/profile-pic-new.webp');
    profileImage.setAttribute('data-original-src', profileImage.src); // Salva il src originale come data attribute
    profileImage.alt = "Foto profilo aggiornata di Stefano"; // Modifica direttamente la proprietà alt
    console.log("Immagine profilo modificata e data attribute aggiunto.");
}


// 4. Creare e aggiungere un nuovo link nel footer
const footer = document.querySelector('footer'); // PRIMA DICHIARAZIONE
if (footer) {
    const newFooterLink = document.createElement('a');
    newFooterLink.href = "https://github.com/StefanoMorbiolo"; // Sostituisci con il tuo profilo GitHub
    newFooterLink.textContent = "GitHub";
    newFooterLink.target = "_blank"; // Apre in una nuova scheda
    newFooterLink.style.marginLeft = '15px'; // Stile CSS diretto (per esempio)
    newFooterLink.style.color = '#fff'; // Colore bianco
    newFooterLink.style.textDecoration = 'none'; // Nessuna sottolineatura
    newFooterLink.style.fontWeight = 'bold';

    let linkContainer = footer.querySelector('.footer-links'); // Uso 'let' perché potrebbe essere riassegnato
    if (!linkContainer) {
        linkContainer = document.createElement('div');
        linkContainer.classList.add('footer-links');
        footer.appendChild(linkContainer);
    }
    linkContainer.appendChild(newFooterLink);
    console.log("Link GitHub aggiunto al footer.");
}


// --- Lezione 19: Eventi e addEventListener / Lezione 20: Interattività per il Portfolio ---
console.log("\n--- Lezione 19/20: Eventi e Interattività ---");


// Listener per il caricamento completo del DOM (assicura che l'HTML sia pronto)
document.addEventListener('DOMContentLoaded', () => {
    console.log("Il DOM è stato completamente caricato e analizzato (DOMContentLoaded)!");

    // Aggiungi la classe 'page-loaded' al body per effetti CSS (da Lezione 18)
    document.body.classList.add('page-loaded');
    console.log("Classe 'page-loaded' aggiunta al body.");

    // Task 1: Effetto Fade-In per le Sezioni (da Lezione 20)
    const allSections = document.querySelectorAll('main section'); // PRIMA DICHIARAZIONE
    allSections.forEach(section => {
        section.classList.remove('section-hidden');
        section.classList.add('section-visible');
    });
    console.log("Animazione fade-in delle sezioni attivata.");
});


// Interagire con l'immagine del profilo al mouseover/mouseout (da Lezione 19)
// Utilizziamo la variabile 'profileImage' già dichiarata in Lezione 18
if (profileImage) { // Usiamo la variabile 'profileImage' già definita sopra
    profileImage.addEventListener('mouseover', function() {
        console.log("Mouse sopra l'immagine del profilo!");
        this.style.filter = 'grayscale(100%)';
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'filter 0.3s ease, transform 0.3s ease';
    });

    profileImage.addEventListener('mouseout', function() {
        console.log("Mouse fuori dall'immagine del profilo!");
        this.style.filter = 'none';
        this.style.transform = 'scale(1.0)';
    });
}


// Validazione e Invio Form (Aggiornato per Netlify Forms - da Lezione 20 e successiva richiesta)
const contactForm = document.querySelector('form[name="contact"]'); // PRIMA DICHIARAZIONE
const nomeInput = document.getElementById('nome'); // PRIMA DICHIARAZIONE
const emailInput = document.getElementById('email'); // PRIMA DICHIARAZIONE
const messaggioTextarea = document.getElementById('messaggio'); // PRIMA DICHIARAZIONE

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;

        if (nomeInput.value.trim() === '') {
            alert("Per favore, inserisci il tuo nome.");
            isValid = false;
            nomeInput.focus();
        } else if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
            alert("Per favore, inserisci un'email valida.");
            isValid = false;
            emailInput.focus();
        } else if (messaggioTextarea.value.trim().length < 10) {
            alert("Il messaggio deve contenere almeno 10 caratteri.");
            isValid = false;
            messaggioTextarea.focus();
        }

        if (isValid) {
            console.log("Form validato con successo da JavaScript. Netlify prenderà il controllo dell'invio.");
            alert("Grazie per il tuo messaggio! Il tuo form è in fase di invio.");

            contactForm.submit();

            nomeInput.value = '';
            emailInput.value = '';
            messaggioTextarea.value = '';
        }
    });
} else {
    console.log("Errore: Form di contatto non trovato (verifica il selettore nel JS).");
}