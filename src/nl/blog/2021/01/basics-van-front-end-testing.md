---
title: Basics van front-end testing
date: 2021-01-04
author: Melle Wynia
summary: Als front-end developer zullen de begrippen unit test, integration test en end-to-end test je waarschijnlijk wel bekend voorkomen. Maar wat is het en wanneer gebruik je welke test? Dit artikel is een kleine intro tot de verschillende soorten tests en tools die je als front-end developer tot je beschikking hebt om je code te testen en uiteindelijk de kwaliteit te verbeteren.
categories: 
  - Adventskalender
---
Als front-end developer zullen de begrippen unit test, integration test en end-to-end test je waarschijnlijk wel bekend voorkomen. Maar wat is het en wanneer gebruik je welke test? Dit artikel is een kleine intro tot de verschillende soorten tests en tools die je als front-end developer tot je beschikking hebt om je code te testen en uiteindelijk de kwaliteit te verbeteren.

# Unit test

Het begint meestal met unit tests. Een unit test is een test die een op zichzelf staand onderdeel van je code controleert. Bij een unit test is de context van de functie in de applicatie niet van belang. Er wordt puur getest of een functie bij dezelfde input altijd dezelfde output teruggeeft. Oftewel, als je _a_ er in stopt, moet je altijd _b_ terug krijgen.

Unit tests maken het ook mogelijk om alle mogelijke uitkomsten van een functie snel te controleren. Je hoeft dan niet je applicatie op te starten en handmatig de mogelijkheden te testen; je kunt de unit tests starten. Daarmee kun je tijdens het ontwikkelen tijd besparen en vervelende verrassingen voorkomen bij een acceptance test.

Zo is het bijvoorbeeld bij een checkout van een webshop belangrijk dat een klant een geldige postcode invult. Ter validatie van je code kun je een eenvoudige unit test maken. Stel dat dit je validatie functie is:

```
function validatePostcode(postcode) {
    const matches = postcode.match(/(?:<getal>\d\d\d\d) (?:<letters>[A-Z])/);
    if (!matches) return false;
    const number = parseInt(matches.groups.getal, 10);
    const chars = matches.groups.letters;

    // Check number range 
    if (number < 1000 || number > 9992) return false;

    return true;
}
```

Dan kun je met deze unit test checken of je bij verschillende waardes de juiste `boolean` terug krijgt. Voor dit voorbeeld gebruik ik Jest, een JavaScript testing framework dat met vrijwel alle JavaScript frameworks werkt.

```
// Import jest

test('validatePostcode should return true', () => {
  expect(validatePostcode('1000 AA')).toBe(true);
  expect(validatePostcode('7777 AA')).toBe(true);
  expect(validatePostcode('9992 AA')).toBe(true);
});

test('validatePostcode should return false', () => {
  expect(validatePostcode('000 AB')).toBe(false);
  expect(validatePostcode('1000 A')).toBe(false);
  expect(validatePostcode('0000 AB')).toBe(false);
  expect(validatePostcode('0001 AB')).toBe(false);
  expect(validatePostcode('9993 AB')).toBe(false);
});
```

Je kunt je waarschijnlijk wel voorstellen dat dit een hoop tijd bespaart. Je hoeft niet de website te openen en de checkout meerdere malen te doorlopen om verschillende postcodes te testen.

# Integration test

Een integration test is een test waarbij in tegenstelling tot een unit test de context er wel toe doet. Je test meerdere onderdelen van een keten, bijvoorbeeld om te checken of een functie correct is aangeroepen. Voor een integration test kun je ook Jest gebruiken. Soms kan het benodigd zijn om bij een integration test bepaalde onderdelen van de applicatie te _mocken_. Stel je voor dat je een _submit_ van een formulier wilt testen, dan kan het zijn dat je de uitkomst van een _api callback_ moet mocken omdat je bij het uitvoeren van de test geen toegang hebt tot de API.

# End-to-end (e2e) test

Een end-to-end test is een test waarbij het gedrag van de gebruiker wordt gesimuleerd, die verschillende scenario's probeert uit te voeren met een bepaalde gewenste uitkomst. Zo kun je de belangrijkste happy- en non-happy flows testen. Een end-to-end test is een blackbox test. De test heeft geen kennis van de code, maar voert acties uit: aanklikken van een button, invullen van een formulier, submit, etc. Unit tests behoren tot een whitebox test, de test roept direct de code aan.

Wat je vaak ziet is dat e2e tests worden geschreven met behulp van _cucumber_ in het format _gherkin_. In leesbare taal staat uitgeschreven welke stappen uitgevoerd worden en vervolgens kunnen die stappen bij scenarios worden hergebruikt.

Je kunt _user stories_ als uitgangspunt voor je scenario's. Het begint met een feature: ‘Als klant wil ik betalen’, met scenario’s als: ‘Als klant wil ik betalen met iDeal’. De focus ligt altijd op de business value die gecreëerd wordt voor een gebruiker. Zo'n leesbare e2e test kan er zo uitzien:

```
Feature: Als klant wil ik betalen

    Scenario: Als klant wil ik betalen met iDeal
    Given Een correct ingevuld checkout formulier
    When de klant probeert te betalen
    Then de klant ziet de iDeal-pagina van de payment provider
```

Er zijn allerlei soorten software om een end-to-end tests uit te voeren. In het Angular ecosysteem is de combinatie Protractor met Selenium een bekende. Een andere interessante app is Cypress.io, waarbij je elke stap ook daadwerkelijk kunt zien gebeuren. Dit helpt bij het ontwikkelen van de tests. Als er iets onverwachts gebeurd, dan blijft het proces op de stap haken en kun je zien wat er aan de hand is.

# Testen, testen, testen

Je weet nu waar te starten met front-end testing. Het is een goede basis, maar met unit tests, integration tests of end-to-end tests zijn we er helaas nog niet. Je hebt onder andere ook nog: acceptance tests door acceptanten, accessibility tests, cross browser compatibility tests, system integration testing (over meerdere delen van de keten testen) en natuurlijk visuele regressie testing. Front-end development is zo eenvoudig nog niet.