---
title: 'Kijk mama, zonder afbeeldingen! Grafische elementen maken met CSS'
date: 2011-12-13
author: Lennart Schoors
categories:
    - Adventskalender
---

Zoals Stijn Janssen het al aangaf, [we zijn geen slicers meer](/blog/2011/12/waarom-een-slicer-een-front-end-developer-is-geworden). Het idee van een website als een verknipt Photoshop document staat op uitsterven, en wij als front-end developers gebruiken steeds minder gif’s, jpg’s en png’s om onze designs visueel aan te kleden.

Wat is er mis met klassieke afbeeldingen? Wel, het zijn vaak grote bestanden en ze jagen het aantal HTTP requests de hoogte in—of je moet beginnen knoeien met sprites. Elke keer je een pixel wil veranderen moet je weer dat logge programma openen en sterft je CPU een klein beetje. Of probeer die piepkleine site maar eens te zoomen in je fullscreen browser op je 27” monitor, dan krijg je van die wazige pixelsoep. Voor responsive web design moet je soms zelfs verschillende versies van je graphics maken, en halfslachtige technieken gaan aanleren.

Nee, foto’s zullen wel altijd afbeeldingen blijven, maar voor de grafische omkadering zijn er aantal boeiende technologieën opgedoken die vaak veel geschikter zijn. _SVG_ lijkt razend interessant, maar voorlopig nog een beetje een zwarte doos, met _canvas_ worden heel wat grafieken tot leven gewekt, _web fonts_ zijn al helemaal geïntegreerd—we gebruiken ze zelfs voor [icoontjes](http://css-tricks.com/examples/IconFont/)—en natuurlijk is er ook _CSS_.

## Bijsluiter

Misschien eerst even een woordje over browser support. Een aantal van de volgende technieken werken prima op die gouwe ouwe Internet Explorer 6, andere ga je dan weer enkel kunnen zien in de laatste versie van Chrome bijvoorbeeld. Zoals altijd geldt ook hier het principe van progressive enhancement: begin met een eenvoudige basis die overal werkt en voeg dan laag per laag visuele verfijningen toe, tot je een prachtige ervaring op de modernste platformen hebt! Informatie over ondersteuning van specifieke features vind je natuurlijk op [When Can I Use](http://www.caniuse.com/).

Nu moet je wel goed opletten hoe ver je gaat met het maken van grafische elementen met CSS. In 2010 werden [enkele](http://desandro.com/articles/opera-logo-css) [halsbrekende](http://graphicpeel.com/cssiosicons) [experimenten](http://lensco.be/2010/04/04/css-world-clocks) op poten gezet—een leuke gimmick, maar allesbehalve geschikt voor productie. Nee, we gaan het vandaag hebben over veel kleinere maar daarom niet minder interessante toepassingen.

## Let's go!

Beginnen doen we bij eenvoudige geometrische vormen. Die kan je rechtstreeks toepassen op eender welk HTML element, maar vaak wordt er gebruik gemaakt van generated content via de `:before` & `:after` pseudo-elementen—zo vermijd je onnodig extra elementen toe te voegen aan je HTML. _Rechthoeken_ maak je als web designer elke dag, _cirkels_ zijn goed ingeburgerd via `border-radius`, en ook _driehoeken_ zijn perfect mogelijk met transparante `border`s. Die vormen kan je dan weer gaan combineren tot complexere figuren—Chris Coyier heeft er een [prachtig overzicht](http://css-tricks.com/examples/ShapesOfCSS) van gemaakt. Zo kan je vrij gemakkelijk deze tooltips maken zonder afbeeldingen of JavaScript:

JSFiddle: <http://jsfiddle.net/lensco/8MbvP/>

Die geometrische vormen kan je vervolgends gaan manipuleren en er allerlei effecten op toepassen. Met _CSS transforms_ kan je ze verplaatsen (`translate`), schalen (`scale`), draaien (`rotate`) en scheef zetten (`skew`). Bijvoorbeeld:

JSFiddle: <http://jsfiddle.net/lensco/NXan9/2/>

Dankzij CSS3 kan je die vormen zelfs inkleuren met _gradients_, een _schaduw_ of _glow_ geven met `box-shadow`, _animeren_ met transitions en animations, … de mogelijkheden zijn eindeloos. Waarom nog afbeeldingen gebruiken, als je deze knappe blokjes met geanimeerde drop-shadows gewoon in CSS kan maken?

JSFiddle: <http://jsfiddle.net/lensco/yYQdf/>

Het kan natuurlijk nog veel gekker, maar dan begeven we ons wel op experimenteel terrein. Zo kan je bijvoorbeeld met bovenstaande technieken het Shadow DOM gaan stijlen—het verborgen Document Object Model dat je browser genereert voor interface elementen. Beetje bij beetje zijn browserontwikkelaars dat Shadow DOM aan het openstellen, en kan je via pseudo-elementen als `::outer-spin-button`, `::scrollbar-track-piece:vertical` en `::slider-thumb` het uitzicht van een scrollbar of van de nieuwe HTML5 `input` types gaan personaliseren. Neus eens rond in de broncode van [Simurai's prachtige umbrUI](http://lab.simurai.com/css/umbrui/) om een idee te krijgen.

## De toekomst?

Die laatste demonstratie licht alvast een tipje van de sluier wat de toekomst betreft. De meest boeiende ontwikkelingen zijn momenteel te vinden in de specificaties van CSS [Filters](https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/Filters.src.html) en [Shaders](https://dvcs.w3.org/hg/FXTF/raw-file/tip/custom/index.html). Samen met enkele browserontwikkelaars zijn bedrijven als Adobe technologieën aan het bedenken die ons hopelijk binnenkort in staat stellen om via CSS effecten toe te passen die we nu eerder met programma's als Photoshop associëren. Denk bijvoorbeeld aan vervagen (blur), grijstinten, ruis toevoegen, enzovoort. Shaders zijn strikt gezien niet eens CSS, maar neem toch eens een kijkje naar de [indrukwekkende voorbeelden van Adobe](http://www.adobe.com/devnet/html5/articles/css-shaders.html).

Heel spannend allemaal, maar ook vandaag al kan je allerlei CSS technieken gebruiken om grafische elementen op te maken, zodat je niet langer je site moet gaan overladen met afbeeldingen. Doen!

## Over Lennart Schoors

<img src="/_img/2011/12/lennart-schoors.jpg" alt="Foto van lennart schoors uit 2011" class="floating-portrait" /> 
[Lennart Schoors](http://lensco.be/) uit Gent, België werkte meer dan vijf jaar aan sociaal netwerk Netlog, maar is sinds kort freelance interface designer en front-end developer. Schrijft af en toe korte postjes over HTML/CSS op [Bricss](http://bricss.net/).

Donatie: Wikipedia
Wat is de gemakkelijkste manier om dat hoofd van Jimmy Wales uit de header van Wikipedia te kegelen? Hint: niet door erover te klagen op Twitter. Gratis kennis voor de hele wereld, hoera!
