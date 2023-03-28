---
title: "Rustig aan de gourmet dankzij Cypress.io"
date: 2019-12-19
author: Pieter Beekman
categories: 
  - Adventskalender
---
De feestdagen, dagen vol met eten, gezelligheid en nog meer clichés, komen er weer aan. Het laatste wat je op deze dagen wilt: een telefoontje over code die niet werkt. Last minute op kerstavond uitrollen vond je al geen goed idee, maar nu heb je er dubbel spijt van.
Maar hoe is dit te voorkomen, behalve door niet op kerstavond nog iets uit te rollen? Hoe kun je met een gerust hart aanschuiven bij de gourmet met de wetenschap dat bijvoorbeeld de login-knop op je site nog steeds inlogt? Wellicht is [Cypress.io](http://cypress.io/) wel het overwegen waard...

# Wat is Cypress?

Zelf hoorde ik een tijdje terug voor het eerst over Cypress. Met dit open source Javascript framework kun je end-to-end tests schrijven voor praktisch alles wat in een webbrowser draait. *Met welk framework de applicatie of website ook gebouwd is (React, Angular, Vue), het is allemaal te testen met Javascript!*

Cypress is een overkoepelend framework dat verschillende tools samenbrengt. Het bevat bekende test-tools als Mocha, Chai en Sinon. En doordat al deze tools dus al aanwezig zijn, kun je je focussen op wat echt belangrijk is: het schrijven van tests.

Na het lezen van wat algemene verhalen over dit framework, werd ik al enthousiast over de mogelijkheden:

* _Timetravel._ Iedere stap tijdens een test is een snapshot. Je kunt via de GUI iedere stap van je test los bekijken om te checken waar het mis gaat.
* _Debuggen met Chrome Devtools._ Je kunt (in iedere stap) snel debuggen met de vertrouwde Chrome Devtools.
* _‘Not flaky’._ Geen async hel, Cypress wacht netjes op de state die jij wilt, tot het testen verder gaat.
* _Het is Javascript!_ Dus als Front-ender met enige Javascript kennis kun je supersnel beginnen met het schrijven van tests.
* _Goede documentatie._ De site bevat goede en uitgebreide documentatie met veel voorbeelden.
* _Cypress heeft een GUI._ Tests zijn gemakkelijk te starten, volgen en stoppen in een duidelijke Graphical User Interface.

![De Cypress GUI a.k.a. test runner](https://fronteers.nl/_img/adventskalender/cypress-io/image001.png)

*Kortom: er zijn een hoop mooie features die het gourmetten op kerstavond een stuk aangenamer maken.*

# OK, ik heb ook een project dat ik wil testen! Wat moet ik doen?

Het installeren van Cypress is zo gedaan. Volgens de documentatie zou je binnen 60 seconden je eerste tests moeten kunnen draaien. Wellicht wat overdreven, maar heel veel scheelt het niet.

Om Cypress via npm te installeren, is het uitvoeren van het volgende script in je projectmap voldoende.

```
$ npm install cypress --save-dev
```

De Cypress test runner kun je vervolgens openen via NPX:

```
$ npx cypress open
```

Deze is ook te openen via een NPM script. Voeg hiervoor het volgende toe aan je *package.json*:

```
{
    "scripts": {
          "cypress:open": "cypress open"
    }
}
```

Hiermee kun je met onderstaand NPM commando de Cypress test runner openen.

```
$ npm run cypress:open
```

# De Test Runner

Na het openen van Cypress verschijnt de test runner. Hierin krijg je een overzicht van alle test-bestanden die er in je project zitten. Deze kunnen los van elkaar gestart worden, maar je kunt er ook voor kiezen om alle tests achter elkaar te draaien.

![Cypress mappenindeling](https://fronteers.nl/_img/adventskalender/cypress-io/image003.png)

Bij het installeren en de eerste keer openen van Cypress is er al automatisch een map cypress aangemaakt in je project. Deze bevat zelf ook weer diverse mappen, met daarin voorbeeldbestanden. De testscripts kun je terugvinden en toevoegen in *integration*. Dit is de belangrijkste map voor nu.Tijd voor een nieuwe test!

## Je eerste test: de login pagina

Stel je voor: inloggen is een belangrijke pagina van je site en moet altijd bereikbaar zijn via een grote button ‘inloggen’. Dan zou een logische eerste test zijn: wanneer de gebruiker op de inloggen button klikt, wordt hij/zij dan doorverwezen naar de juiste pagina?

Om te starten maak je eerst een nieuw bestand aan in de *integration* map. Laten we deze *login.spec.js* noemen (of waar je je goed bij voelt). Zoals je zult zien, het bestand zal meteen getoond worden in de test runner, mits je deze al open hebt staan.

De test kunnen we als succesvol beschouwen wanneer:

1. De login button bestaat
2. Deze aangeklikt kan worden
3. De gebruiker naar */login* wordt doorverwezen

```
describe('Login page test', function() {
    it('Visits the loginpage', function() {
        cy.visit('https://localhost:8000')
        cy.get('#login-button').click();
        cy.url().should('include', '/login');
    })
})
```

Wanneer je eerder tests met Mocha hebt geschreven zal bovenstaande syntax je al voor een groot deel bekend voor komen. Cypress heeft Mocha’s *bdd syntax* overgenomen waarmee je je tests kunt opbouwen. Je kunt dus zaken als `describe()`, `context()`, `it()` en `beforeEach()` gewoon blijven gebruiken.

In het script gaan we er van uit dat de te testen pagina op localhost draait. De eerste stap navigeert naar deze omgeving. Vervolgens kun je met `cy.get()` een element selecteren op basis van CSS-class. De `.click()` functie simuleert een klik op het element. In de laatste regel van de test wordt er een voorwaarde gesteld dat de url in ieder geval */login* zou moeten bevatten.

Nu de test geschreven is, kan deze gestart worden in de test runner. Nu is het een kwestie van achterover leunen en hopen dat alle test-opdrachten succesvol kunnen worden afgerond.

![De test runner in actie. Bron: cypress.io](https://fronteers.nl/_img/adventskalender/cypress-io/image005.png)

De test wordt in een browser uitgevoerd en je kunt meteen iedere stap meekijken. Aan de linkerkant van je scherm worden meteen alle stappen / interacties op de pagina getoond. Via deze tijdlijn kun je terug gaan naar iedere stap in de test en de DOM op dat specifieke moment bekijken en… manipuleren via de Chrome dev tools. Dankzij deze tijdmachine kun je precies zien wanneer een bepaalde bug zich voordoet en deze meteen debuggen!

Ik geef toe, het is een simpele test, maar het toont aan hoe makkelijk je kunt starten met het schrijven van tests. Je kunt met heel basale zaken beginnen en deze steeds verder uitbreiden.

## Nog een test: het inlogformulier

Dat de login pagina bereikbaar is, is fijn, maar een succesvolle inlog geeft nog iets meer rust. Daarom is het tijd om het script nog iets uit te breiden (of je voegt een nieuw test-script toe):

```
describe('Login', () => {
    it('User login works', () => {
        cy.visit('http://localhost:3000/account/login/');
        cy.get('[name="email"]').type('pieter@test.com');
        cy.get('[name="password"]').type('ditiseentest');
        cy.get('.container-login button').click();
        cy.url().should('include', '/accountmanagement');
        expect(cy.contains('Hoi Pieter!')).toBeTruthy;
        cy.screenshot();
    });
});
```

Het `.type()` commando geeft de mogelijkheid om inputs te vullen met content en zorgt ervoor dat er getest kan worden of de gebruiker succesvol ingelogd kan worden.

## Screenshots / videos

Wanneer tests falen maakt Cypress automatisch screenshots voor je. _*Deze screenshots van falende tests komen automatisch terecht in de map cypress/screenshots gevolgd door een map met de naam van de test.*_ Wil je screenshots op bepaalde momenten in de test laten maken? Ook dat kan. De regel

```
cy.screenshot();
```

maakt een screenshot van de hele pagina op het moment dat jij dat wil. Wel even opletten: Cypress verwijdert alle screenshots voor het `cypress run` commando.

## Configuratie in Cypress.json

Behalve de *cypress*-map, wordt er ook een *cypress.json*-bestand aangemaakt in de root folder van je project. In dit bestand kunnen algemene configuraties van en voor je tests worden gezet. Hierbij kun je denken aan het instellen van een baseurl (deze wordt als prefix gebruikt voor alle `cy.visit()` en `cy.request()` commando’s), timeouts, mappen waar bijvoorbeeld screenshots geplaatst moeten worden en de viewport.

Voorbeeldje: wanneer je je de `baseUrl` aanpast in de *config* naar:

```
{
    "baseUrl": "http://localhost:3000"
}
```

zorgt dit er voor dat

```
cy.visit("/login");
```

eigenlijk navigeert naar *http://localhost:3000/login*.

De waardes in de configuratie kunnen tijdens het testen nog wel worden overschreven door een `--config flag` toe te voegen in je CLI.

```
cypress run --config viewportWidth=1280,viewportHeight=720
```

Ook kunnen de waardes in je script zelf worden overschreven:

```
Cypress.config('pageLoadTimeout', 100000)
```

Is de uitkomst van je test niet helemaal zoals je die verwacht en vermoed je dat de configuratie de boosdoener is? In de *settings*-tab wordt een ‘gecompileerde’ versie van de gebruikte config weergegeven.

## Custom Commands

Wanneer je in verschillende tests telkens dezelfde acties uit moet voeren, dan kun je overwegen om een *custom command* toe te voegen aan je tests. De Cypress API is ingericht op het toevoegen (of aanpassen) van Cypress commando’s. Wanneer je altijd wil testen met een ingelogde gebruiker, dan kun je hier een standaard commando maken.

Zo’n custom commando kun je toevoegen aan *commands.js*, welke je kunt vinden in de */cypress/support* map, en kan er als volgt uit zien:

```
Cypress.Commands.add('login', () => {
    const user = {
        email: 'admin@site.com',
        password: 'test123' //natuurlijk alleen op local test ;)
    }

    cy.request({
        url: '/login',
        method: 'POST',
        body: {
            email: user.email,
            password: user.password,
        }
    })
});
```

Het custom command `cy.login()` kun je nu in al je testscripts gebruiken. Bijvoorbeeld aan het begin van iedere test:

```
describe('Cart page', () => {
    before(() => {
        cy.login()
    });

    it('Click cart button', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#cart-button').click();
        cy.url().should('include', '/cart');
    });
});
```

## XHR Calls

Met Cypress is ook het testen van XHR calls geen probleem. Het geeft je zelfs de keuze om de response ‘origineel’ te houden, of om deze te manipuleren. Door het intact laten van de response kan door een lange response tijd je tests vertragen. Daarom is het ‘mocken’ van een response, ook wel *stubbing* genaamd, het overwegen waard. Dit zorgt voor een snelle afhandeling van XHR calls, meestal binnen 20ms! Het mocken van de response kan met een paar regeltjes code:

```
cy.server()             // Response mocken (stubbing) aanzetten
cy.route({
    method: 'GET',      // Route alle GET requests
    url: '/users/*',    // met url dat  '/users/*' matched
    response: []        // geeft volgende response
})
```

Dit is de snelste optie, maar er is een mooiere oplossing voor het mocken van de data: het gebruik van *fixtures*.

Een *fixture* is een verzameling van data in een bestand dat tijdens de test gebruikt kan worden. Deze *fixture* bestanden kun je vinden in de *cypress/fixtures* map en kunnen onder andere gebruikt worden voor het mocken van XHR-responses.

Wanneer je de response van een zoekopdracht wil mocken, dan kun je een JSON bestand met zoekresultaten in de fixtures map plaatsen, uiteraard in hetzelfde format als dat je in ‘real life’ zou verwachten. Deze data kun je includen op de volgende manier:

```
cy.server();
cy.route('GET', '/search/*', 'fixture:searchresult.json');
```

*Fixtures* kunnen ook als alias worden ingeladen. Voordeel hiervan is dat je de data nog bijvoorbeeld zou kunnen manipuleren voordat je het als response teruggeeft:

```
cy.server();
cy.fixture('searchresult.json').as('searchJSON')
cy.route('GET', '/search/*', '@searchJSON');
```

Niet alleen van *fixtures*, maar ook van de `cy.route()` kan een alias gemaakt worden waardoor er verder in je code naar verwezen kan worden. Bijvoorbeeld om aan te geven dat er gewacht moet worden:

```
cy.route('GET', '/search/*').as('search');
cy.wait('@search'); //Wacht op response van de zoek call
cy.get('h2').should('contain', 'Gevonden resultaten'); //Ga verder
```

# Redt Cypress mijn gourmet?

Een doorgewinterde expert in Cypress ben ik nog niet, maar na een tijdje werken ben ik nog steeds enthousiast over dit (gratis) product.

Behalve de al beschreven mogelijkheden biedt Cypress nog heel veel meer. Zo kan Cypress worden toegevoegd aan je Continuous Integration proces. In [de documentatie van Cypress over continuous integration](https://docs.cypress.io/guides/guides/continuous-integration.html#Examples) kun je tal van voorbeelden vinden voor providers als Bitbucket, Docker, GitLab en Jenkins. Het [Cypress Dashboard](https://dashboard.cypress.io/) geeft overzicht van alle uitgevoerde tests.

Ook zijn er verschillende plugins beschikbaar om bijvoorbeeld screenshots te vergelijken en is er ook aan *code coverage* gedacht. Kortom: er is nog genoeg te ontdekken over het testen met deze tool.

Natuurlijk is het niet alleen maar rozengeur en maneschijn. Zo kunnen tests alleen in Javascript geschreven worden. Voor Front-end developers natuurlijk geen probleem, maar voor andere developers misschien wel een reden om voor een ander framework te kiezen. Wat mij betreft het grootste minpunt van Cypress is dat er (op dit moment) alleen getest kan worden in Chrome of Electron. Cross-browser testen voor bijvoorbeeld Edge en Firefox is er dus helaas nog niet bij.

Maar ondanks dat kan Cypress bij veel projecten een groot deel van de kopzorgen die je als developer kan hebben wegnemen. Het zorgt er in ieder geval voor dat ik komende kerstdagen met een gerust hart nog een stukje kip en champignon in mijn pannetje gooi…

### Pieter Beekman
<!-- <img src="/archief/_img//adventskalender/pieter(1).jpg" alt="Foto van Pieter" class="floating-portrait"> -->

Pieter is frontend developer bij Dekbed Discounter en werkt hier aan diverse platforms. Met de andere frontenders probeert hij iedere dag (nog) betere conversies te behalen door het toepassen van betere, snellere en mooiere code. Als zijn VS Code even uitstaat speelt hij het liefste boardgames.
Pieters donatie gaat naar KiKa.
