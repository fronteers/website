---
title: Easy Accessibility
date: 2025-01-02
author: Josee Wouters
summary: 2025! Een nieuw jaar en 365 dagen om mooie dingen te maken voor het web. Maar doe je het wel toegankelijk? Het zal je vast niet ontgaan zijn, in juni van dit jaar gaat de EAA in; European Accessibility Act. Deze verplicht bedrijven in Europa om toegankelijke producten en diensten te leveren. Uiteraard vallen websites hier ook onder. Voor overheden gold dit in Nederland al langer, maar in 2025 zullen ook front-end developers die niet voor een overheid werken, hiermee rekening moeten houden. 
categories:
  - Adventskalender
key: advent-2024-josee
---
We kennen allemaal de 1001 redenen en excuses waarom een website niet toegankelijk is, zou hoeven zijn of wordt gebouwd: van “de designer heeft het zo ontworpen” tot “er is geen tijd en/of budget voor”. Die designer mag je vanaf juni gewoon met de EAA om de oren slaan en wat betreft het extra tijd? Bouwen met accessibility in gedachten hoeft helemaal niet zo ingewikkeld zijn. Hier een paar tips voor “easy a11y”. 

## Skip to content
Allereerst: de skip to content link. Dit is handig voor mensen die gebruik maken van een screenreader of met het toetsenbord door een website navigeren. Een skip to content link wordt bovenaan de pagina geplaatst als eerste element in de DOM zodat een gebruiker hiermee direct naar de content van de pagina kan gaan, en niet langs alle herhalende navigatie items hoeft. Probeer het maar eens op deze website: refresh de pagina, druk op je tab-toets en er komt een mooie button tevoorschijn die je de mogelijkheid geeft om het menu over te slaan.

Ik heb weleens skip to content links gezien die met JavaScript verborgen worden, inclusief een event listener om te zien of de tab-toets word ingedrukt om vervolgens de button zichtbaar te maken (wederom met JavaScript) en naar een willekeurig element in de pagina te gaan. Dit kan veel makkelijker!

Om te beginnen voeg je een `<a href="main">Ga naar inhoud</a>` toe aan je HTML. Bij voorkeur plaats je dit als allereerste element in de DOM, direct na de `<body>` tag. Je `<main>` element, of een ander element dat de content van je pagina bevat, geef je een `id="main"` mee en tada, je hebt een skip to content link! Zo simpel kan het zijn: een extra regel HTML en je hebt een skip to content link.

Met nog een vleugje CSS erbij, kun je het geheel nog mooier maken. Een skip to content link hoeft niet zichtbaar te zijn, met `position: absolute` en `top: -50px` bijvoorbeeld, kun je je link verbergen. Geen JavaScript voor nodig. Ook niet om deze zichtbaar te maken of een tab-toets te detecteren. Voeg in je CSS een regel toe voor je link met `:focus` en je link zal automagisch verschijnen zodra een gebruiker de tab-toets gebruikt.

Hoe ziet het er dan nu allemaal uit? Nou zo bijvoorbeeld!

```html
<body>
  <a href="#main" class="skip-link">Skip to content</a>
  <header>
    <!-- Je header en navigatie -->
  </header>
  <main id="main">
    <!-- Je content -->
  </main>
</body>
```
```
.skip-link {
  position: absolute;
  top: -50px;
}
.skip-link:focus {
  top: 10px;
}
```

## Toegankelijke modals
We zien ze liever niet, maar het is onvermijdelijk dat je als front-end developer dit een keer moet maken: een pop-up. Of je het nu een pop-up noemt, een modal, een dialog, een toast, of welke andere benamingen je nog meer kunt verzinnen: ze zijn niet altijd even gebruiksvriendelijk en een behoorlijke klus om toegankelijk te maken. Aan de slag met meerdere divjes, backdrops, buttons en niet te vergeten flink wat JavaScript om een focus trap toe te voegen. Of kan dit ook makkelijker?

Natuurlijk! Je zult alsnog wel wat JavaScript nodig hebben, maar als je het native HTML element `dialog` gebruikt, heb je in een paar minuten een toegankelijke modal gebouwd. We beginnen met een `<dialog>` element met wat content en een `<button>` om de modal of pop-up te openen.

Zowel JavaScript als je browser hebben beide al ingebouwde styling en functionaliteit om je toegankelijke pop-up te laten werken. Om de dialog te openen gebruik je de `showModal()` functie en de browser zal vervolgens je dialog in het midden van de pagina tonen met een lichte backdrop als achtergrond. Deze backdrop kun je vervolgens nog stylen met het `::backdrop` pseudo element. 

Ook zal er direct een focus trap toegepast worden. Zolang je modal geopend is, kun je met de tab-toets niet bij elementen onder je backdrop komen. Laten we nu eens kijken hoe dit er dan uit ziet. Ik ga in dit voorbeeld uit van Vanilla JS, maar dit is natuurlijk in elk framework toe te passen. Herschrijf en gebruik de `openModal` en `closeModal` zoals je elke functie gebruikt in je favoriete framework.

```
<dialog>
  <!--   Je content -->
  <button onclick="closeModal()">Sluit modal</button>
</dialog>
<button onclick="openModal()">Open modal</button>
```
```
const modal = document.querySelector('dialog');
function openModal() {  
  modal.showModal();
}
function closeModal() {  
  modal.close();
}
```

## Goede voornemens
Het duurt nog een paar maanden voor de EAA in gaat, maar jij bent nu alvast voorbereid. En als ik vraag wat je goede voornemens zijn, dan zeg je vast: ik ga overal een skip to content link en toegankelijke modal bouwen!