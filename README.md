10/04/2025										Laura Rana________________________________________
E2E Test per SauceDemo
Scopo del Progetto
Questo progetto implementa una serie di test automatizzati end-to-end per verificare l'aggiunta di un prodotto al carrello e la finalizzazione dell'acquisto sul sito di e-commerce demo SauceDemo.
Prerequisiti
•	Node.js
•	Cypress
•	TypeScript
Installazione
1.	Inizializza il progetto:
   npm init -y
2.	Installa le dipendenze:
   npm install cypress --save-dev
   npm install typescript --save-dev
   npm install @types/node --save-dev
3.	Configura Cypress: Crea un file cypress.json nella root del progetto con il seguente contenuto:
   {
     "baseUrl": "https://www.saucedemo.com",
     "video": false
   }
4.	Configura TypeScript: Crea un file tsconfig.json nella root del progetto con il seguente contenuto:
   {
     "compilerOptions": {
       "target": "es5",
       "lib": ["dom", "es2015"],
       "types": ["cypress"]
     },
     "include": ["cypress/**/*.ts"]
   }
Descrizione dei test
•	Test “1cgm_test_checksite.spec.ts”
Il test automatizzato esegue i seguenti passaggi:
1.	Navigazione al sito web 
2.	Verifica del titolo della pagina
3.	Verifica del pulsante login

•	Test “2cgm_test_checklogin.spec.ts”
Il test automatizzato esegue i seguenti passaggi:
1.	Crea un array con username, password, expectedUrl, errorMessage
2.	Per ogni utente definito nella pagina di login 
a.	Navigazione al sito web 
b.	Login
c.	Verifica l’Url di arrivo o del messaggio di errore

•	Test principale “3cgm_test_login1_1prod.spec.ts”
Il test automatizzato esegue i seguenti passaggi:
1.	Navigazione al sito web e login: Utilizza le credenziali standard_user e secret_sauce per accedere.
2.	Aggiunta del prodotto "Sauce Labs Backpack" al carrello: Seleziona il prodotto e aggiungilo al carrello.
3.	Navigazione alla pagina del carrello: Vai alla pagina del carrello per visualizzare i prodotti aggiunti.
4.	Finalizzazione dell'acquisto: Completa il processo di checkout inserendo le informazioni richieste.
5.	Verifica: Assicurati che l'acquisto sia stato completato con successo.
6.	Ritorno alla pagina dei prodotti

•	Test “4cmg_test_login1_moreprod.spec.ts”
Il test automatizzato esegue i seguenti passaggi:
1.	Navigazione al sito web e login: Utilizza le credenziali standard_user e secret_sauce per accedere.
2.	Aggiunta dei prodotti al carrello: Seleziona tutti i prodotti e li aggiunge al carrello.
3.	Navigazione alla pagina del carrello: Vai alla pagina del carrello per visualizzare i prodotti aggiunti.
4.	Finalizzazione dell'acquisto: Completa il processo di checkout inserendo le informazioni richieste.
5.	Verifica: Assicurati che l'acquisto sia stato completato con successo.
6.	Ritorno alla pagina dei prodotti

•	Test “5cgm_test_checktotaloverview.spec.ts”
Il test automatizzato esegue i seguenti passaggi:
1.	Navigazione al sito web e login: Utilizza le credenziali standard_user e secret_sauce per accedere.
2.	Aggiunta del prodotto "Sauce Labs Backpack" al carrello: Seleziona il prodotto e aggiungilo al carrello.
3.	Navigazione alla pagina del carrello: Vai alla pagina del carrello per visualizzare i prodotti aggiunti.
4.	Finalizzazione dell'acquisto: Completa il processo di checkout inserendo le informazioni richieste.
5.	Verifica: Verifica che i totali siano corretti: Item total+Tax=Total

•	Test “6cgm_test_login1_information.spec.ts”
Il test automatizzato esegue i seguenti passaggi:
1.	Navigazione al sito web e login: Utilizza le credenziali standard_user e secret_sauce per accedere.
2.	Aggiunta del prodotto "Sauce Labs Backpack" al carrello: Seleziona il prodotto e aggiungilo al carrello.
3.	Navigazione alla pagina del carrello: Vai alla pagina del carrello per visualizzare i prodotti aggiunti.
4.	Verifica delle informazioni obbligatorie: First Name, Last Name, Postal code

•	Test “7cgm_test_login1_backprod.spec.ts”
Il test automatizzato esegue i seguenti passaggi:
1.	Navigazione al sito web e login: Utilizza le credenziali standard_user e secret_sauce per accedere.
2.	Aggiunta del prodotto "Sauce Labs Backpack" al carrello: Seleziona il prodotto e aggiungilo al carrello.
3.	Navigazione alla pagina del carrello: Vai alla pagina del carrello per visualizzare i prodotti aggiunti.
4.	Ritorno alla pagina dei prodotti: il carrello non viene finalizzato

•	Test “8cgm_test_login1_orderprod.spec.ts”
Il test automatizzato esegue i seguenti passaggi:
1.	Navigazione al sito web e login: Utilizza le credenziali standard_user e secret_sauce per accedere.
2.	Cambia l’ordine dei prodotti: Seleziona il filtro di ordinamento
3.	Verifica: controlla che tutti i prodotti siano ordinati come da criterio


Esecuzione dei Test
Per eseguire il test, utilizza il seguente comando:
npx cypress open
Questo aprirà l'interfaccia di Cypress dove potrai selezionare e eseguire il test e2e_test.ts.
Oppure lanciare il comando
npx cypress run --spec "cypress/integration/NomeTest.spec.ts"
o per eseguirli tutti lanciare il comando
npx cypress run --spec "cypress/integration/**"

Debug e Risoluzione dei Problemi
•	Problema di login: Assicurati che le credenziali siano corrette e che il sito sia accessibile.
•	Elementi non trovati: Verifica che i selettori utilizzati nel codice siano corretti e che gli elementi siano presenti nel DOM.
•	Timeout: Se il test fallisce a causa di timeout, considera l'aumento del tempo di attesa per gli elementi.
Miglioramenti Futuri
•	Aggiungere ulteriori verifiche: Assicurati che il prodotto sia stato aggiunto correttamente al carrello.
•	Implementare test per altri scenari: Copri altri scenari di acquisto e gestione del carrello.
•	Ottimizzazione del codice: Migliora la leggibilità e la manutenzione del codice.
Conclusione
Questo README file fornisce tutte le informazioni che sono state necessarie per configurare, eseguire e comprendere i test automatizzati end-to-end per il sito di e-commerce demo SauceDemo. 
