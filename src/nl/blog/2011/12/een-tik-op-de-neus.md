---
title: "Een tik op de neus"
date: 2011-12-11
author: Vasilis van Gemert
categories: 
  - Adventskalender
---
Een website bouwen op een _responsive-design_-manier is te vergelijken met aangevallen worden door een haai. Je weet dat je de haai _gewoon_ een tik op zijn neus moet geven maar hoe doe je dat precies? Zo'n haai is ook best imponerend. Dit artikel legt uit hoe je een responsieve site bouwt, hoe je hem opzet. En in onze voorbeeldsite gaan we dieper in op het geven van een tik op de neus van een haai.

# De basis

De basis van elke responsieve website (van elke website eigenlijk) is natuurlijk de content. [Onze site](/_downloads/2011/haaien/stap-11/) is een eenvoudig HTML document met wat headertjes, wat navigatie, wat paragrafen en wat plaatjes. Deze content gaan we stylen. De beste manier om dit te doen is via de zogenaamde _mobile first_ methode.

# Mobile first

Als je een bestaande desktop-site gaat optimaliseren voor kleinere resoluties dan is de _mobile first_ aanpak natuurlijk wat lastig, misschien zelfs onmogelijk. In dat geval zou ik een praktische _desktop down_ aanpak hanteren; bezoekers zijn er bij gebaat. Maar als je een nieuwe site bouwt dan heeft het vooral voordelen. Onze site over haaien zullen we dus ook op deze manier opbouwen.

# De viewport

De _viewport_ is een complex ding. Hoe het precies werkt, ga ik hier niet uitleggen, dat heeft _Peter-Paul Koch_ al gedaan ([deel 1](http://www.quirksmode.org/mobile/viewports.html) en [deel 2](http://www.quirksmode.org/mobile/viewports2.html), lees ze vooral als je niet weet hoe de _viewport_ werkt). De _viewport_ is nodig om aan te geven dat een apparaat zijn _"fysieke"_ pixels moet gebruiken en dus niet de desktop-pagina in uitgezoomde toestand moet weergeven. En _viewport_ definieer je in een meta-tag en ziet er als volgt uit:

```
<meta name="viewport" content="width=device-width,initial-scale=1">
```

Er bestaan andere waardes voor het content attribuut; je kan er bijvoorbeeld voor zorgen dat de gebruiker niet kan zoomen, een erg vervelende beperking. Doe dus maar nooit _(deze feature wordt wel eens gebruikt om een bug in iOS op te lossen waarbij de pagina vervelend inzoomt als je je apparaat van portret naar landschapsmodus draait. Onthoud goed dat alleen testers en designers hun apparaat wel eens draaien, normale mensen doen dit bijna nooit. Een echte bug is het dus nauwelijks. Overigens treedt deze bug niet op als je geen gebruik maakt van initial-scale)_.

# De CSS

_Mobile first_ betekent wat mij betreft gewoon _content first_. We structureren de content goed en stylen deze zodat hij er prettig uitziet. Zie [deze versie van onze haaiensite](/_downloads/2011/haaien/stap-1/). Dit zijn stijlen die zowel op kleine als op grote schermen werken, dus zaken als achtergrondkleuren van de body, de verhoudingen van de font-groottes (ja, dat zijn verhoudingen, geen individuele _random_ pixelwaardes), wat marges, het kleurenpallet en eventueel ook wat meer illustratieve zaken, zoals borders en zo. Op welke resolutie je deze versie ook bekijkt, de content is prima toegankelijk. Op brede schermen leest het wat onprettig, maar met een `body { max-width: 40em; }` [is dit opgelost](/_downloads/2011/haaien/stap-2/) ([screenshot](/_img/2011/12/stap-2.jpg)). De site is, als je lui bent, af.

## Grotere schermen

Veel bezoekers hebben een breder scherm waar de content wellicht iets beter tot zijn recht zou komen als we de layout zouden aanpassen. Te denken valt over een layout van meerdere kolommen of bijvoorbeeld een navigatie die bovenaan de pagina staat. De navigatie komen we op terug; we kijken eerst naar de layout. Om bredere schermen te bedienen linken we naar een extra CSS bestand met een _media query_:

```
<link rel="stylesheet" href="css/layout.css" media="only screen and (min-width: 50em)">
```

De content bestaat uit een `article` die begint bij `<h1>Aangevallen worden door een haai</h1>`en een `aside` die begint bij `<h1>Wist u dat…</h1>`. In de huidige situatie staan ze gewoon onder elkaar. Door ze als `display: inline-block;` te stijlen en ze een procentuele breedte te geven, staan ze vanaf een bepaalde breedte ineens naast elkaar. [Kijk maar](/_downloads/2011/haaien/stap-3/) ([screenshot](/_img/2011/12/stap-3.jpg)). Makkelijk he? _Ik gebruik `inline-block` omdat dat veel prettiger werkt dan floats. Het nadeel is dat pixelperfectie niet echt goed mogelijk is met `inline-block`. Pixelperfectie doet mij niet zo veel._

# Navigatie

Helemaal rechts bovenaan [de pagina](/_downloads/2011/haaien/stap-2/) staat een letter 'i' in een kadertje. Dit is een klassieke skiplink die je naar de navigatie onderaan de pagina brengt. Op kleine schermen vind ik dit een prima methode. Je zou er eventueel voor kunnen kiezen om de navigatie omhoog te halen als je op de skiplink klikt, dat kan redelijk eenvoudig, [kijk maar](/_downloads/2011/haaien/stap-4/) ([screenshot](/_img/2011/12/stap-4.jpg)). Voor allebei de oplossingen is wel wat te zeggen. In de tweede versie kan je er van uit gaan dat de gebruiker de footer nooit te zien gaat krijgen, wellicht is dat niet erg.

## Meer pixels

Als de gebruiker meer pixels tot haar beschikking heeft dan zou je de navigatie natuurlijk gewoon altijd bovenaan kunnen tonen. De standaardpatronen daarvoor zijn een horizontale navigatie bovenaan of een blokje met linkjes links. Ik heb voor een [horizontale balk](/_downloads/2011/haaien/stap-5/) ([screenshot](/_img/2011/12/stap-5.jpg)) gekozen, je kan vast wel zelf verzinnen hoe je hem elders neerzet, zo moeilijk is het niet. _Ik maak hier gebruik van `position: absolute;` omdat dat zo lekker makkelijk is en omdat ik de hoogte van de header ken. Er bestaan [hacks](http://adactio.com/journal/4780/) waarmee het ook lukt als je die hoogte niet kent._

# Plaatjes

Plaatjes zijn makkelijk flexibel te maken: `max-width: 100%;` en je bent klaar. Het nadeel aan deze techniek is dat mensen met een scherm van 320 pixels breed een plaatje downloaden van 1024 pixels breed en 212KB zwaar. Hetzelfde plaatje is 23KB zwaar als het 320 pixels breed is. Dat scheelt nogal wat, vooral in landen waar bandbreedte duur is. Hier _moet_ dus een oplossing voor verzonnen worden. Helaas bestaan hier geen mooie, eenvoudige oplossingen voor, alle oplossingen die er zijn zijn complex, lelijk en/of onbetrouwbaar.

Omdat ik geen toegang heb tot _server-side_-technologie bij het artikel over haaien moet ik kiezen voor een _client-side-only_ oplossing. Daar zijn er twee van. De ene is slecht, de andere is lelijk.

## De slechte methode

We serveren [om te beginnen](/_downloads/2011/haaien/stap-6/) het kleine plaatje. Zo weten we zeker dat gebruikers met een klein scherm geen onnodige KB's ophalen. Voor gebruikers met een groter scherm veranderen we met behulp van [JavaScript](/_downloads/2011/haaien/stap-6/js/script.js) de source van het plaatje in de source van het grote plaatje. Makkelijk en zeer eenvoudig te implementeren. Maar slecht om een paar redenen: browsers met een groot scherm doen _twee_ requests om één plaatje te tonen. Bovendien wordt in dit script gekeken naar de breedte van de _viewport_ om te bepalen of een plaatje vervangen moet worden, het is natuurlijk logischer om te kijken naar de de _context_ van het plaatje. Met _context_ bedoel ik gewoon de omgeving waar het plaatje staat; zijn container.

## De lelijke, onzinnige methode

Dingen in een `noscript` tag worden genegeerd door browsers die JavaScript ondersteunen. Als we het kleine plaatje dus in zo'n tag zetten dan krijgen mensen zonder JavaScript het kleine plaatje te zien, mensen mét JavaScript krijgen niks te zien. Met behulp van JavaScript kijken we naar de breedte van de plek waar het plaatje moet komen te staan, we lezen het juiste `data`-attribuut uit en plaatsen het plaatje op de juiste plek. [Tadaa, klaar](/_downloads/2011/haaien/stap-7/)!

```
<figure data-src-groot="img/haai-groot.jpg" data-src-medium="img/haai-med.jpg" data-src-klein="img/haai-klein.jpg" data-alt="Een haai die uit het water springt">
  <noscript>
    <img src="img/haai-klein.jpg" alt="Een haai die uit het water springt">
  </noscript>	
</figure>
```

De `noscript` tag is lelijk, het haalt de semantische waarde van het plaatje weg, maar erger nog: het creëert een afhankelijkheid van JavaScript om belangrijke content te tonen. Ik kan er op mijn site wel van uit gaan dat het script wordt uitgevoerd. Ik kan er ook van uit gaan dat het script _niet_ wordt uitgevoerd als iemand het artikel leest in een RSS-reader of een _read-it-later-tool_. Gebruik deze oplossing dus alleen als je echt niet anders kan.

## De juiste oplossing

Wat de juiste oplossing is, is geheel afhankelijk van de situatie, geheel afhankelijk van de tool die je aan het bouwen bent. In [dit artikel van Jason Grigsby](http://www.cloudfour.com/responsive-imgs-part-2/) worden alle manieren behandeld en alle voor- en nadelen besproken. De conclusie is eigenlijk dat er geen definitieve oplossing voor bestaat. Lees vooral [het artikel van Roel Van Gils op het Fronteers blog](/blog/2011/12/responsive-images-een-experiment) en alle andere artikelen van Jason Grigsby over dit onderwerp: [deel 1](http://www.cloudfour.com/responsive-imgs/), [deel 3](http://www.cloudfour.com/responsive-imgs-part-3-future-of-the-img-tag/), [deel 4](http://www.cloudfour.com/what-responsive-img-technique-should-we-teach-in-our-book/), [deel 5](http://www.cloudfour.com/responsive-imgs-choosing-between-semantic-markup-and-working-code/), [deel 6](http://www.cloudfour.com/device-detection-as-the-future-friendly-img-option/), [deel 7](http://www.cloudfour.com/clarification-on-device-detection-for-images/) en [deel 8](http://www.cloudfour.com/preferred-solutions-for-responsive-images/).

# De finishing touch

In dit artikel heb ik tot nu toe alleen gekeken naar optimalisatie voor verschillende schermgroottes, maar er is natuurlijk meer waar je voor zou kunnen optimaliseren. Voor _touch_ bijvoorbeeld. Hele grote aanpassingen zijn meestal niet nodig maar een iets hogere `line-height` is prettig voor mensen met dikke vingers. _`:hover` states_ uitzetten is ook een erg fijne en simpele aanpassing (en _`:focus` states_ toevoegen, nu ik toch bezig ben). Met wat slimme _feature detection_ zijn [aparte stijlen voor _touch devices_](/_downloads/2011/haaien/stap-8/) zo gemaakt. Ik gebruik daar [Modernizr](http://www.modernizr.com/) voor, lekker makkelijk en goed getest. Het voegt classes toe aan de `html`-tag.

```
<html class="js no-touch generatedcontent" lang="nl">
```

Schermen met een hele hoge resolutie zijn misschien wel gebaat bij een andere layout. Je kan denken aan nóg meer kolommen, maar je kan natuurlijk ook gewoon denken aan [een groter font](/_downloads/2011/haaien/stap-9/).

Als laatste nog een lekker nutteloze tip die het testen van responsieve sites niet makkelijker, maar toch wel _leuker_ maakt: CSS `transitions` werken niet alleen bij dingen als `:hover` maar ook bij de overgang van de ene naar de andere _media query_. Geen normaal mens zal het ooit te zien krijgen maar het testen wordt er wel [geiniger/irritanter](/_downloads/2011/haaien/stap-10/) door.

# De werkwijze

In dit artikel heb ik alleen maar gekeken naar de verschillende technische aspecten van een responsieve website, de werkwijze heb ik niet echt behandeld. De manier waarop zo'n ontwerp tot stand komt, is anders dan wat we gewend zijn. De ervaring leert me dat het maken van een responsief ontwerp veel meer een iteratief proces is dan het maken van een klassiek pixelplaatje. Visual designers, interaction designers, front-end developers en back-end developers werken tegelijkertijd aan onderdelen van het ontwerp. Oplossingen voor complexe componenten worden verzonnen, uitgewerkt, getest en verbeterd. Hier zou ik een heel artikel over kunnen schrijven, maar waarom zou ik? [Dat heeft Trent Walton al gedaan](http://trentwalton.com/2011/07/14/content-choreography/).

# Oude browsers

Sommige oude browsers snappen niks van _media queries_. Er zijn meerdere manieren om hier mee om te gaan. Je kan er natuurlijk voor kiezen om alleen de _mobiele_ layout te tonen aan deze gebruikers, maar je kan ook een [polyfill](https://github.com/scottjehl/Respond) gebruiken. Daarnaast kan je mensen mededelen dat ze een verouderde browser hebben en ze informeren over de consequenties die dat heeft en de mogelijkheden die er zijn om te upgraden naar iets moderns. Zo'n scriptje heb ik aan het voorbeeld toegevoegd, gebruikers van IE6, IE7, IE8 en IE9 [krijgen het te zien](/_downloads/2011/haaien/stap-11/) ([screenshot](/_img/2011/12/stap-11.jpg)). Het grote voordeel van deze laatste optie is dat je niet zo veel tijd hoeft te verspillen aan deze browsers. Het andere voordeel is dat mensen er achter komen dat hun browser verouderd is: mensen weten dit niet omdat wij altijd maar oplossingen voor ze blijven hacken _(ja, het is onze schuld dat oude browsers nog gebruikt worden)_.

# Complexe content

Natuurlijk bestaan niet alle sites uit alleen maar navigatie, tekstjes en fotootjes, er zijn ook veel complexere stukken content. Er zijn inmiddels al wel wat oplossingen verzonnen voor [data-tabellen](http://css-tricks.com/9096-responsive-data-tables/), [video's](http://webdesignerwall.com/tutorials/css-elastic-videos) ([alternatieve methode](http://fitvidsjs.com/)) en [advertenties](http://artequalswork.com/posts/responsive-ads.php). Wellicht is nog niet overal de ideale oplossing voor te vinden. Het enige wat helpt, is creativiteit, het delen van ideeën en gewoon vragen of iemand misschien een oplossing heeft.

# Tot slot

Een haai een tik op zijn neus geven lijkt eenvoudig, is toch redelijk complex maar is ook goed te overzien, zeker als je het een paar keer hebt gedaan. Ik hoop dat dit artikel je op weg heeft geholpen, niet in het geven van tikken maar wel in het maken van fantastische responsieve designs. Bouw vanuit de content, vanuit de basis, en pas de boel aan aan de mogelijkheden van het apparaat waarmee men toevallig kijkt. [Het voorbeeld wat ik heb gemaakt](/_downloads/2011/haaien/stap-11/) is natuurlijk erg eenvoudig, dat kan je zelf vast veel beter.

(TODO: Over Vasilis van Gemert
2011/12/vasilis-van-gemert.jpg
Vasilis van Gemert wil graag dat iedereen een betere front-end developer is dan hijzelf (hetgeen niet zo heel moeilijk is). Zolang dat nog niet zo is, zal hij zijn best doen om er voor te zorgen dat dat wel gebeurt. Dat doet hij onder andere door zich in te zetten voor Fronteers, door (ongeveer) dagelijks de [Daily Nerd](http://dailynerd.nl/) te schrijven en door principal front-end developer te zijn bij [Mirabeau](http://mirabeau.nl). In die functie probeert hij er ook voor te zorgen dat (grote) bedrijven (_én_ concurrenten) betere websites gaan maken. Want ook dat vindt hij belangrijk.

**Donatie:** [Electronic Frontier Foundation](https://www.eff.org/)
Het internet is tof en nuttig. Dat moet zo blijven. Helaas zijn er nogal wat schimmige overheden (zoals voornamelijk die van de VS) en grote bedrijven (voornamelijk bedrijven die in schimmige zaken als _rechten_ handelen) die het internet minder tof—onvriendelijk zelfs—willen hebben. Vandaar dat ik het EFF ondersteun.)
