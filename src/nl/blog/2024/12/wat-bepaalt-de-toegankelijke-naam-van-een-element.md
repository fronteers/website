---
title: Wat bepaalt de toegankelijke naam van een element?
date: 2024-12-25
author: Kilian Valkhof
summary: "De toegankelijke naam van een element is hoe de browser een element doorgeeft aan hulptechnologieën zoals een screenreader of braille bord, en vormt de manier waarop iemand die een site niet (goed) kan zien de inhoud tot zich neemt."
categories:
    - Adventskalender
key: advent-2024-kilian
---

De toegankelijke naam van een element is hoe de browser een element doorgeeft aan hulptechnologieën zoals een screenreader of braille bord, en vormt de manier waarop iemand die een site niet (goed) kan zien de inhoud tot zich neemt. 

# De rol van elementen

Of een element een toegankelijk naam heeft of niet ligt aan de _rol_ die een element heeft op de pagina. Sommige elementen krijgen automatisch een toegankelijke naam, zoals een button, een link of een koptekst. Een div heeft geen toegankelijke naam, want een div heeft geen rol. Ook al geef je een div een expliciete toegankelijke naam (meer daarover later in het artikel), dan zal de browser dit negeren totdat er ook een relevante rol aan de div wordt toegekend.

Door die rollen kunnen browsers en hulptechnologieen bepalen welke delen van een pagina op welk moment relevant zijn. Wil een gebruiker snel door de pagina heen _skimmen_, dan zal een hulptechnologie enkel de elementen met rol _heading_ voorlezen. Wil een gebruiker snel naar de navigatie, dan zal een hulptechnologie enkel landmarkelementen voorlezen. Zo hoeft een gebruiker niet de hele pagina door te ploegen om te vinden wat hij zoekt.

Een deel van de rollen is dus inherent aan de HTML die je gebruikt, en waarom het belangrijk is om de HTML-elementen met de juiste semantiek te gebruiken. Daarmee krijg je niet alleen de rol van een element, maar ook de "batteries included" interactie: Een button hoef je niet zelf focusbaar en klikbaar te maken. Ga je zelf rollen toewijzen, dan moet je ook zelf de interactie toevoegen. 

Niet alles wat je op een site wilt bouwen kan je echter bouwen met HTML, soms moet je met generieke elementen een complexer component bouwen. In dat geval ga je zelf met ARIA-rollen aan de slag. Wil je een interface met tabjes maken, dan heeft ARIA bijvoorbeeld de rollen tab, tabpanel en tablist om dat toegankelijk op te bouwen. 

Denk vooral niet dat aan het einde van dit artikel je de taak staat te wachten om al je elementen van een expliciete toegankelijke rol en naam te voorzien: schrijf goede HTML en je komt al een heel eind. 

# toegankelijke namen

In de meest simpele vorm is dat de tekst in een element. Neem bijvoorbeeld deze button:

```
<button>
  Toevoegen
</button>
```

De toegankelijke naam van deze button is "Toevoegen". So far so good. Maar misschien wil ik er wel een icoontje aan toevoegen:

```
<button>
  Toevoegen <img src="hippe-winkelwagen.gif" alt="icoontje van een winkelwagen" />
</button>
```

Een oplettende lezer ziet dat deze afbeelding netjes een alt attribuut heeft dat de afbeelding beschrijft. De inhoud van dat alt attribuut telt echter ook mee voor de toegankelijke naam van de button. De toegankelijke naam van deze button is dus "Toevoegen icoontje van een winkelwagen". En dat is niet zo handig. Omdat we in de button al de tekst "Toevoegen" hebben, is het icoontje  alleen ter decoratie. Een betere oplossing is dus een leeg alt attribuut:

```
<button>
  Toevoegen <img src="hippe-winkelwagen.gif" alt="" />
</button>
```
De toegankelijke naam is nu weer "Toevoegen", joepie!

Tijd voor een stapje verder: De button heeft nu geen zichtbare tekst meer, maar enkel het icoontje. De toegankelijke naam is nu een lege string, en dat is niet handig. We kunnen de inhoud van het element dus niet meer gebruiken voor de toegankelijke naam. We kunnen dit nu op een aantal manieren oplossen. We beginnen met een aria attribuut wat hier speciaal voor bedoeld is: `aria-label`. 

```
<button aria-label="Toevoegen">
  <img src="hippe-winkelwagen.gif" alt="" />
</button>
```

Wanneer een element een `aria-label` attribuut heeft wordt de inhoud van het element **volledig genegeerd**. De toegankelijke naam van deze button is nu "Toevoegen", ongeacht wat er in het element staat. Dit kan snel voor problemen zorgen. 

Stel dat we een spoedticket binnen krijgen om naast de Toevoegen knop ook een "Verwijder" knop te maken. We kopiëren snel de code van de Toevoegen knop, hangen er een andere event handler aan en passen het icoontje aan naar een prullenbak. 

```
<button aria-label="Toevoegen">
  <img src="prullenbak.gif" alt="" />
</button>
```

We verversen de browser en het icoontje ziet er top uit en werkt ook als je er op klikt. Ship it!

...Maar die aria-label die zien we over het hoofd: we zien die namelijk _letterlijk niet_ in de browser. Je moet dus goed opletten dat je de aria-label ook aanpast wanneer je de inhoud van een element aanpast. Een ander probleem met aria-label is dat als je browser automatisch de pagina kan vertalen, de aria-label niet mee wordt vertaald ([aria-label does not translate](https://adrianroselli.com/2019/11/aria-label-does-not-translate.html)). 

Daarom proberen we een andere oplossing, screenreader-only tekst:

```
<button>
  <span class="sr-only">Toevoegen</span>
  <img src="hippe-winkelwagen.gif" alt="" />
</button>
```

".sr-only" is geen ingebouwde standaard, maar een conventie (met bijbehorende CSS) die veel wordt gebruikt. Dit is een voorbeeld van een .sr-only CSS:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

Deze CSS zorgt ervoor dat de inhoud absoluut niet zichtbaar is, maar nog wel voorgelezen wordt door een screenreader. Zo kunnen we de toegankelijke naam bepalen met "gewone" tekst die ook gewoon automatisch vertaalt kan worden. Uitpluizen hoe de CSS dat doet is iets voor een ander artikel. 

Overigens is er discussie over of een dergelijke class niet ingebouwd zou moeten zijn in browsers. [Ben Myers](https://benmyers.dev/blog/native-visually-hidden/) is voor, [Scott o'Hara](https://www.scottohara.me/blog/2023/03/21/visually-hidden-hack.html) is tegen. Beide artikelen zijn het lezen waard.

De toegankelijke naam van bovenstaande buttons wordt dus bepaald in deze volgorde:

1. Is er een aria-label attribuut? Gebruik die.
2. Zoniet, gebruik dan de inhoud van het element.

Dit is echter een extreem versimpelde volgorde. Om ook de rest van het 'toegankelijke naam'-algoritme te begrijpen gaan we ons voorbeeld wat complexer maken. We hebben nu twee knoppen, die ieder iets anders toevoegen:

```
<h3>Fronteers hoodie</h3>
<p>Lekker warm</p>
<button>
  Toevoegen <img src="hippe-winkelwagen.gif" alt="" />
</button>

<h3>Fronteers pet</h3>
<p>Staat je goed</p>
<button>
  Toevoegen <img src="hippe-winkelwagen.gif" alt="" />
</button>
```

De toegankelijke naam van deze buttons is nu "Toevoegen". Maar dat is niet handig, want de ene button voegt een hoodie toe en de andere een pet. Als je kunt zien waar de buttons staat is dat duidelijk, maar anders heb je een probleem. Wat we hier willen is dat we de knop expliciet aan het bijbehorende product kunnen linken. Dat kan met een `aria-labelledby` attribuut:

``` 
<h3 id="hoodie">Fronteers hoodie</h3>
<p>Lekker warm</p>
<button aria-labelledby="hoodie">
  Toevoegen <img src="hippe-winkelwagen.gif" alt="" />
</button>

<h3 id="pet">Fronteers pet</h3>
<p>Staat je goed</p>
<button aria-labelledby="pet">
  Toevoegen <img src="hippe-winkelwagen.gif" alt="" />
</button>
```
Met `aria-labelledby` kunnen we een ID opgeven van een ander element, en de toegankelijke naam van de button wordt dan de tekst van dat element. Net als `aria-label` wordt de inhoud van het element vervolgens genegeerd, en dat is nog wel een probleem want hoe weet een gebruiker nu dat de knop voor "Toevoegen" is?

`aria-labelledby` lost dit op doordat je er niet slechts één ID aan kan geven, maar een lijstje. De toegankelijke naam van de button wordt dan de tekst van alle elementen die je opgeeft, gescheiden door een spatie. Als we onze buttons zelf ook een ID geven, kunnen we de tekst van de button zelf ook toevoegen:

```
<h3 id="hoodie">Fronteers hoodie</h3>
<p>Lekker warm</p>
<button id="hoodie-voegtoe" aria-labelledby="hoodie hoodie-voegtoe">
  Toevoegen <img src="hippe-winkelwagen.gif" alt="" />
</button>

<h3 id="pet">Fronteers pet</h3>
<p>Staat je goed</p>
<button id="pet-voegtoe" aria-labelledby="pet pet-voegtoe">
  Toevoegen <img src="hippe-winkelwagen.gif" alt="" />
</button>
```

De toegankelijke naam van deze buttons is nu "Fronteers hoodie Toevoegen" en "Fronteers pet Toevoegen". Dit is een stuk duidelijker voor een gebruiker die niet kan zien wat er op de pagina staat.

Maar wacht even, we hebben net geleerd dat aria-labelledby op een element de inhoud van dat element negeert. Hoe kan het dan dat de tekst van de button zelf nu wel wordt voorgelezen? Wordt dit dan geen _infinite loop_? 

Gelukkig niet! Wanneer je via `aria-labelledby` een element aanwijst, dan wordt er gekeken naar de toegankelijke naam van dat element alsof er geen aria-labelledby attribuut was. Aria-labelledby geld alleen voor de eerste stap en je komt er dus niet mee in de knoop. Daar is over nagedacht!

Nog iets waar over nagedacht is: alle tekst die nu de toegankelijke naam vormt, is tekst in de pagina: die kan dus gewoon vertaald worden. 

Met `aria-labelledby` erbij is dit de volgorde waarop de toegankelijke naam bepaald wordt:

1. Is er een `aria-labelledby` attribuut én is dit het eerste element waarvoor je de toegankelijke naam aan het bepalen bent? Gebruik de tekst van de elementen die je opgeeft, gescheiden door een spatie.
1. Is er een aria-label attribuut? Gebruik die.
2. Zoniet, gebruikt dan de inhoud van het element.

# Conclusie

Hopelijk heb je nu een beter idee waar de toegankelijke naam van elementen vandaan komt, waarom je die soms wilt veranderen en hoe je dat op een goede manier doet. 

Helaas moet ik je vertellen dat het algoritme om een toegankelijke naam te bepalen nog veel gecompliceerder is. Die complexiteit is er vooral om te voorzien in de gevallen dat bovenstaande niet werkt. Voor bepaalde type input elementen, die geen inhoud hebben, wordt er bijvoorbeeld naar het `value` gekeken. Is er geen value maar is het een button type, zoals `<input typ="submit">`? Dan krijgt het van de browser de toegankelijke naam "Submit". Textarea's zonder inhoud krijgen de toegankelijke naam van het `title` of `placeholder` attribuut. En zo zijn er nog veel meer uitzonderingen. En als aller, allerlaatste wordt het `title` attribuut van een element gebruikt. 

Dit is expliciet een laatste redmiddel voor wanneer de ontwikkelaar zijn of haar werk niet heeft gedaan. Ben je bewust bezig met toegankelijke namen? Kijk dan naar de drie opties: tekst op de pagina, aria-label en aria-labelledby.

Wil je er meer over lezen? Hier vind je een duidelijke uitleg: [Accessible name calculation](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation) en als je er écht in wilt duiken kan je hier de specificatie vinden: [Accessible Name and Description Computation](https://www.w3.org/TR/accname-1.2/). Maar let op, die is behoorlijk pittig.