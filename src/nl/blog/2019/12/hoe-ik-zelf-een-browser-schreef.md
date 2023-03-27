---
title: "Hoe ik zelf een browser schreef"
date: 2019-12-09
author: Kilian Valkhof
categories: 
  - Adventskalender
---
Zelf een browser schrijven klinkt als een slecht idee, zeker als je zelf een front-end developer bent en dus helemaal geen C++ of andere native taal kent. Toch besloot ik een aantal jaar geleden om te kijken of ik het kon en ondertussen is mijn browser nu doorontwikkeld tot serieus product.

# Hoe kom je er op?

In 2015 besloot ik, zoals veel web designers en developers, over te stappen van Photoshop naar Sketch. Al heel snel kon ik daar goed mijn weg in vinden en vooral de manier waarop je in Sketch *artboards* kon maken vond ik erg fijn, waarmee je designs van verschillende afmetingen naast elkaar kon zetten. Al snel had ik een indeling waarbij alle responsive varianten van een paginaontwerp naast elkaar stonden, waardoor ik een heel goed overzicht kreeg van wat ik nou eigenlijk aan het ontwerpen was.

En toen ging ik terug naar de browser, waar ik telkens maar één viewport kon zien en de hele tijd bezig was de afmetingen van de browser of de responsive design tools te veranderen. Je kon niet gemakkelijk even twee afmetingen met elkaar vergelijken en in vergelijking met Sketch voelde dat nogal karig.

Rond dezelfde tijd was ik aan het spelen met [Electron](https://electronjs.org/), een framework waarmee je desktop applicaties kunt maken met webtechnieken. Ik besloot om een prototype te ontwikkelen waarin je dezelfde website in meerdere viewports naast elkaar zag, net zoals mijn indeling in Sketch. Na een paar avonden klooien had ik iets wat al best fijn werkte:

![Screenshot van het eerste prototype](https://fronteers.nl/_img/adventskalender/eigen-browser/screenshot-polypane-prototype.png)

Je kon er niet echt veel mee, maar je kon een URL invullen en die werd dan getoond in meerdere afmetingen. Best cool!

Electron bleek een goede keuze te zijn. Niet alleen was het daarmee mogelijk om met mijn bestaande kennis van webontwikkeling een ‘echte’ browser te maken, maar die browser gebruikte ook een up-to-date versie van Chromium en de Chromium developer tools. Hoewel je altijd in andere browsers moet testen, hoefde ik me er geen zorgen over te maken dat bepaalde webtechnieken niet werkte in mijn browser en kon ik de developer tools gebruiken die ik al gewend was.

Met dat prototype ging ik zelf werken en al snel merkte ik dat ik veel sneller ontwerpen kon implementeren omdat ik niet meer bezig was met het managen van mijn browserafmetingen en me enkel bezig hoefde te houden met de site. Dit verbeterde proces scheelde me uiteindelijk uren per week.

Door het zelf te gebruiken merkte ik ook wat ik miste en al snel begon ik functies toe te voegen: “standaard” browserfuncties zoals navigatie en het tonen van de paginatitel, het kunnen toevoegen van nieuwe schermen en de mogelijkheid om screenshots maken van alle schermen samen (ideaal om naar klanten te sturen).

Ik besloot de browser te delen met andere developers en al snel begon ik met hun feedback nieuwe dingen toe te voegen: het in en uit kunnen zoomen van alle schermen in de browser zoals je dat ook zo gemakkelijk in Sketch kan doen, standaard schermafmetingen gebaseerd op zowel populaire telefoons als de media queries van de site zelf, en het synchroniseren van scrollen en hovers tussen alle schermen (zodat als je in het éne schermpje iets deed dat ook in alle andere schermen gebeurde).

# Doorontwikkeling

Met iedere functie die ik toevoegde begon ik me meer en meer af te vragen waarom andere browsers dit niet ook doen. Maar Chrome, Firefox en vrienden zijn helemaal niet voor ontwikkelaars gemaakt. Er zijn namelijk veel meer reguliere gebruikers, die helemaal nooit developer tools nodig hebben. Developers zijn stiekem maar een piepkleine doelgroep voor ze en hoewel de developer tools die de browsers hebben echt fantastisch zijn, wordt er in de rest van de browser simpelweg geen rekening met ontwikkelaars gehouden.

Door de feedback die ik op mijn browser kreeg was ik er inmiddels achter hoeveel beter een browser kan werken voor front-enders als de *hele* interface gericht is op hun werk. Hierdoor besloot ik mijn browser als serieus product aan te gaan bieden. Sinds het begin van dit jaar ben ik fulltime bezig met het doorontwikkelen en mijn ideeën en die van gebruikers te implementeren. Daar zijn nieuwe functies als full-page screenshots, live reloading en device emulation uit gekomen.

![Screenshot van de browser nu](https://fronteers.nl/_img/adventskalender/eigen-browser/screenshot-polypane-now.png)

# Browsers kunnen zoveel meer

Browsers kunnen veel meer doen voor front-end developers. Een browser heeft zoveel informatie over een site die handig is voor de developer die met een site bezig is, maar die informatie wordt nergens getoond. Denk aan welke responsive afmetingen je allemaal in je CSS gebruikt. Als dat er heel veel zijn of ze zitten dicht op elkaar, dan heb je waarschijnlijk de mogelijkheid om dit drastisch te versimpelen en je CSS beter onderhoudbaar te maken.

Veel functies die we nu door middel van allemaal losse scriptjes en tooltjes gebruiken — zoals live reloading, je site vergelijken met het goedgekeurde design en layout debugging met iets als [Pesticide](http://pesticide.io/) — zijn veel toegankelijker en gemakkelijker te bedienen als ze direct in een browser zitten.

De browser weet ook veel over hoe toegankelijk een site is. Missende alt-teksten, onlogische kopvolgorde en onvoldoende contrast tussen tekst en achtergrond zijn allemaal problemen die je browser weet of kan berekenen. En als *renderer* kan je browser ook kleurenblindheid of andere visuele beperkingen simuleren.

Goede toegankelijkheid is minstens even belangrijk als een mooi responsive ontwerp en door bovenstaande functies prominent aan te bieden in mijn browser verwacht ik dat developers die functies eerder gebruiken. Nu hoeven ze niet van tevoren al te weten dat je kleurenblindheid kan simuleren of dat je met live reloading nooit meer op die reload-knop hoeft te klikken. Doordat de browser deze opties al in zich heeft kom je er mee in aanraking.

Natuurlijk ben ik niet de enige: ook Firefox heeft recentelijk een aantal mooie toegankelijkheidsfuncties toegevoegd. Nadeel blijft wel dat deze “verstopt” zitten achter een tabje in de developer tools en zo verborgen blijven voor de developers die daar niet zelf naar op zoek gaan.

Buiten deze functies zijn er zoveel dingen die voor developers belangrijk zijn waar je nu niet bij kan of diep voor in de developer tools moet duiken. Wat dacht je van een mooi overzicht van je cookies en localStorage? Of informatie over je HTTP-verbinding. Misschien gaat iedere link op je site via een 302 redirect omdat je slashes op een andere manier gebruikt dan de server. Als front-end developer wil je dat weten, want iedere 302 maakt je site een paar milliseconden trager. Ik ben dus voorlopig nog niet klaar met de doorontwikkeling.

# Een eigen browser maken, gek?

Na het gedaan te hebben kan ik zeggen: ja, wel een beetje. Maar ik heb iets gemaakt waar ik heel trots op ben en waar veel mensen dagelijks profijt van hebben. Het front-end werkveld is in de afgelopen jaren veel complexer geworden en lijkt soms wel dagelijks of zelfs per uur te veranderen. Daardoor is het gemakkelijk om je *overwhelmed* te voelen of je vooral bezig te houden met alles wat nieuw is en je minder bezig te houden met hoe effectief je nou zelf werkt. Het verbeteren van je proces — bijvoorbeeld door het gebruiken van een browser die je in je werkzaamheden ondersteunt — kan je uren per week tijdswinst opleveren. Zo gek is dat nog niet.

### Over Kilian
<img src="/archief/_img/adventskalender/eigen-browser/kilian.png" alt="Foto van Kilian" class="floating-portrait">
Kilian Valkhof is ruim 15 jaar front-end ontwikkelaar en ontwikkelt de browser [Polypane](https://polypane.app/). Fronteersleden kunnen Polypane [met korting gebruiken](https://fronteers.nl/blog/2019/05/25-procent-fronteers-korting-op-nieuwe-browser-polypane).
Kilians donatie gaat naar Stem op een vrouw.
