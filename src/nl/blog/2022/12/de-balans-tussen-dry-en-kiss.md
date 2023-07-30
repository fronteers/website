---
title: De Balans Tussen DRY en KISS
date: 2022-12-18
author: Paul van den Dool
summary: 'Als professionele (front-end) developer is de kans groot dat je in een team werkt en dat je rekening moet houden met het feit dat andere developers met jouw code zullen moeten werken. Het is dan van belang dat je nette code schrijft. Allereerst zodat andere developers je code begrijpen, maar—laten we wel wezen—ook omdat je niet wilt dat andere developers denken dat je er niets van bakt. De makkelijkste manier om nette code te schrijven is door je te houden aan development principes.'
categories: 
  - Adventskalender
---
Als professionele (front-end) developer is de kans groot dat je in een team werkt en dat je rekening moet houden met het feit dat andere developers met jouw code zullen moeten werken. Het is dan van belang dat je nette code schrijft. Allereerst zodat andere developers je code begrijpen, maar—laten we wel wezen—ook omdat je niet wilt dat andere developers denken dat je er niets van bakt. De makkelijkste manier om nette code te schrijven is door je te houden aan development principes.

## Don’t Repeat Yourself

Eén van de beter bekende development principes is Don't Repeat Yourself, of DRY afgekort. Dit principe gaat vooral over slim programmeren. Het vinden van delen in je code die je kunt abstraheren. Krijg je het idee dat je telkens dezelfde functie schrijft om bijvoorbeeld een input te valideren, dan is het *slim* om één functie te schrijven waar je elke waarde van de input door kunt halen om te valideren. Je houdt je code kort en je bespaart jezelf tijd omdat je jezelf niet hoeft te herhalen. Het is ook makkelijker om je code te beheren en het bespaart je tijd en moeite mochten er ooit veranderingen nodig zijn.

Een goed voorbeeld van Don’t Repeat Yourself is de Factory Design Pattern in JavaScript. Een fancy naam, maar eigenlijk is het minder complex dan het lijkt.

Laten we naar een klein voorbeeld kijken van de Factory Design Pattern.

Stel dat we de volgende code hebben:

```
const Kerstboom1 = {
	type: 'Nordmann',
	hoogte: 185,
	aantalBallen: 75,
	lichtAan() { console.log( '🎄' ) },
	lichtUit() { console.log( '🌲' ) }
}
```

```
const Kerstboom2 = {
	type: 'Douglasspar',
	hoogte: 500,
	aantalBallen: 350,
	lichtAan() { console.log( '🎄' ) },
	lichtUit() { console.log( '🌲' ) }
}
```

We maken hier twee keer een kerstboom object aan. De twee functies om de lichtjes aan en uit te doen zijn echter een beetje dubbelop. Ze zijn in beide kerstbomen precies hetzelfde. Dit is waar een Factory van pas komt.

```
function kerstboomFactory( type, hoogte, aantalBallen ) {
	return {
		type,
		hoogte,
		aantalBallen,
		lichtAan() {
			console.log( '🎄' );
		},
		lichtUit() {
			console.log( '🌲' );
		}
	}
}
const Kerstboom1 = kerstboomFactory( 'Nordmann', 185, 75 );
const Kerstboom2 = kerstboomFactory( 'Douglasspar', 500, 350 );
```

De Factory is een functie die het creëren van de kerstboom centraliseert. Daarmee houden we onze code DRY. De herhalende delen–de functies–worden gedefinieerd in de functie en de variabele onderdelen zoals de type, hoogte en aantal ballen kunnen mee worden gegeven aan de functie als argumenten. Deze Factory is een minder complex voorbeeld. Je kunt ook wat complexer gaan, zoals het gebruiken van een `Class`, maar dat is niet van belang voor dit artikel.

Er zijn een boel andere design patterns voor JavaScript die helpen om je code DRY te houden. Ik kan je aanbevelen om eens te kijken op [patterns.dev](http://patterns.dev) waar [Lydia Hallie](https://www.lydiahallie.io/) en [Addy Osmani](https://addyosmani.com/) een geweldige resource over dit onderwerp hebben opgericht.

## Keep It Simple Stupid

Dit vind ik het development principe met de leukste naam: Keep It Simple Stupid, of KISS. Eigenlijk is het een *design* principe gericht op gebruiksgemak voor de eindgebruiker. Maar het is ook prima toepasbaar op software development en een code base.

De term zou zijn bedacht in de Amerikaanse marine waar ze met vliegtuigmotoren werkten. De hoofdingenieur zou gezegd hebben dat de motoren zo simpel moesten zijn dat in gevechtssituaties iemand met basic training en met simpel gereedschap de motoren moeten kunnen onderhouden.

Ik wil diezelfde analogie op programmeren in teamverband toepassen. De code zou zo simpel en begrijpbaar moeten zijn dat een junior developer, iemand met weinig ervaring, de code kan onderhouden en er hun weg doorheen kan vinden.

De beste manier om je code simpel te houden is om duidelijke afspraken te maken. Afspraken over hoe je je code schrijft:

* Dat variabelen bovenaan een bestand worden gedeclareerd.
* Wat voor uitlijning en witruimte er word gebruikt.
* Welke naming conventions er worden gebruikt.

Als elke developer in je team zich daar aan houdt krijg je consistente code die makkelijk te lezen hoort te zijn.

Commentaar schrijven word ook vaak genoemd als manier om een code base toegankelijk te maken voor developers die er nog niet bekend mee zijn. Hoewel dat klopt ben ik persoonlijk van mening dat als je simpele code schrijft met duidelijke benamingen van je variabelen en functies, commentaar in veel gevallen niet nodig is. In programmeren noemen we dat zelf documenterende code ([self-documenting code](https://en.wikipedia.org/wiki/Self-documenting_code)). Maar soms kun je er niet omheen en dan is commentaar bij de code heel behulpzaam voor andere developers.

## De Balans

Over het algemeen is het volgen van development principes een goed iets. De afgelopen jaren ben ik echter al een paar keer een developer tegengekomen die daar in door kon schieten waardoor het juist een averechts effect had. Twee verschillende gevallen om precies te zijn. In beide gevallen ging het om developers die erg bekend zijn met de Design Patterns die ik eerder hierboven ook noemde. Hele technische developers die ervaring hebben met delen van Front-end Development die voorheen meer met back-end werden geassocieerd totdat JavaScript frameworks dit mee naar de front-end brachten.

Er waren gevallen waarbij deze twee developers oplossingen bedachten waar ze–in mijn mening–iets te veel waar doorgeschoten in het toepassen van bepaalde design patterns waardoor de code juist complexer werd dan had gehoeven. Functionaliteit werd geabstraheerd waardoor code over meerdere bestanden werd verdeeld. Er werd grot geschut ingezet voor een simpele kleine klus. De oplossingen zouden misschien passen bij grote features maar waren ongeschikt bij de kleine features waar ze nu werden toegepast.

Het gevolg was dat een andere developer enige tijd later aan hetzelfde stuk code moest werken en veel tijd kwijt was om alles te vinden in de code en om alles te begrijpen. Junior developers en developers zoals ik–die aan de front-front-end kant zitten met meer kennis van HTML en CSS dan van technische design patterns in JavaScript–zouden hier de nadelige gevolgen van merken. In deze gevallen was ik het ook persoonlijk die moeite had om een ogenschijnlijk simpele bug op te lossen ook al kun je mij niet echt meer een junior developer noemen.

Daarbij kunnen we terug komen op de analogie over vliegtuigmotoren en wat de Amerikaans ingenieur daar over zei. Hoe de vliegtuigmotoren zo simpel moeten zijn dat monteurs met basiskennis de motoren moeten kunnen repareren. De twee developers hadden de motor veel te complex gebouwd waardoor developers met basiskennis of zonder specialistische tools (kennis van JavaScript Design Patterns) het niet of moeilijk kunnen onderhouden.

De onbalans hoeft niet perse te komen door te veel complexiteit. Je kunt je code ook zó simpel opzetten dat het veel tijd kost om het te onderhouden. Een extreem voorbeeld is misschien een statische website die volledig uit losse HTML pagina’s bestaat waarbij op elke pagina dezelfde header met navigatie voorkomt. Eén wijziging moet je dan op alle pagina’s toepassen.

Ik vind dat er een balans moet worden gezocht tussen DRY en KISS. Tussen simpliciteit en complexiteit. Zeker als het gaat over een code base waar meerdere developers aan moeten werken. DRY code is goed totdat het te complex wordt voor (junior) developers om goed te begrijpen. KISS code is goed totdat het te simplistisch wordt en developers te veel tijd kwijt zijn met het onderhouden van de code.

Denk aan je mede-developer.
