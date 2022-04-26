---
title: "CSS Resets"
date: 2015-01-12
author: Kaj Rietberg
categories: 
  - De Artikelen
---
Wat betekenen ‘reset’ en ‘normalize’ eigenlijk? Hebben deze termen wel met elkaar te maken? En wat moet je er mee als front-ender?

# Wat doet de CSS reset?

Elke browser gebruikt een [standaard styling](http://css-class.com/test/css/defaults/UA-style-sheet-defaults.htm) voor het weergeven van de HTML elementen. Denk hierbij aan de grootte van het lettertype, de kleur en het onderstrepen van linkjes, of de witruimte (paddings of margins) van elementen zoals de `<p>` of `<h1>` tag. Niet elke browser gebruikt exact dezelfde standaard layout. Hierdoor kan je design er net iets anders uitzien in de verschillende browsers.
De WHATWG heeft in haar [HTML standard suggesties](https://html.spec.whatwg.org/multipage/rendering.html#rendering) aangebracht voor welke CSS de browser bouwers het beste zouden kunnen gebruiken zodat de HTML het beste weergegeven wordt zoals een front-end ontwikkelaar of zoals de WHATWG het noemt een document author het bedoeld zou hebben. Ze borduren hiermee verder op wat de W3C ooit begonnen was voor [CSS1](http://www.w3.org/TR/CSS1/#appendix-a), [CSS2](http://www.w3.org/TR/CSS2/sample.html) en [CSS2.1](http://www.w3.org/TR/CSS21/sample.html).

Om de verschillen tussen browsers te ondervangen zijn er CSS resets en CSS normalizers.

Een CSS reset overschrijft de standaard layout van een browser met simpele, neutrale basiswaardes. Alle elementen in een HTML document krijgen zo dezelfde font-size, padding, margin, line-height, etc. De tekst in een `<h1>` is dus even groot als in een `<small>`. Het is aan de developer om vanaf dit neutrale, blanco stylesheet zijn eigen styling op te bouwen. Zoals Jeff Starr schrijft: “Het geeft de bouwer een uniforme fundering om verder op te kunnen bouwen”. ([Jeff Starr: Killer Collection of CSS Resets](http://perishablepress.com/a-killer-collection-of-global-css-reset-styles/))

Op [cssresetr.com](http://cssresetr.com/) kun je zien wat verschillende resets doen. Hier zie je dat de verschillende resets ook echt verschillende zaken resetten.

# Welke resets zijn er eigenlijk?

Jeff Starr heeft in zijn artikel [Killer Collection of CSS Resets](http://perishablepress.com/a-killer-collection-of-global-css-reset-styles/) verschillende CSS-resets opgenomen. In augustus 2013 is het artikel geüpdatet. Het valt op dat de eerste resets vrij globaal starten met een * en een padding en margin van 0, tot aan specifiek benoemde HTML tags. Deze laatste levert dan ook een behoorlijk verhaal op. Op Sixrevisions is [de geschiedenis van de css reset](http://sixrevisions.com/css/the-history-of-css-resets/) beschreven. Hier staan verschillende resets benoemt. Interessant om eens door te nemen.

# Normalize

Een CSS reset is nogal rigoureus. Kritiek op de eerste generatie resets was bijvoorbeeld dat ze hulpzame features als :focus-styles weghaalden. Hierdoor zag je geen visuele feedback als je een link of form-element focus gaf. Dat zag er mooier uit, maar maakte de site slecht bruikbaar voor mensen die met keyboard navigeren of met hulpmiddelen surfen. Er kwam behoefte aan een opvolger die daar beter mee omging: een “normalizer”, bijvoorbeeld de [normalize van Nicolas Gallagher](http://nicolasgallagher.com/about-normalize-css/).

> 

> 

Niet iedereen gebruikt Normalize. Er zijn ook ontwikkelaars die CSS resets gebruiken. Zoals Flurin Egger, hij gebruikt CSS resets. [Zijn reactie](https://twitter.com/flurin/status/516963529749172226) na een vraag op twitter wat ontwikkelaars gebruiken, een reset of normalize: “Resets: een 0-like baseline, ik heb mijn eigen minimale versie. Normalizers = opinionated resets :)”

# Moet je je CSS resetten?

Het idee achter de reset is dat je gelijk ogende websites bouwt voor elke browser. We zien steeds meer stemmen opgaan dat dit niet hoeft en ook zeker niet meer kan. Hierdoor lijkt de CSS reset aan waarde te verleizen. We hoeven als Front-end ontwikkelaar niet alles meer in de hand te houden. Elke browser mag zijn/haar eigenaardigheden hebben.

Afhankelijk van het project waar je mee bezig bent bepaal je of je de CSS een reset meegeeft. Je hebt niet altijd alle HTML tags nodig die in een standaard reset zitten. Juist dit laatste is heel belangrijk. Kijk goed naar een standaard reset en haal er uit wat je nodig hebt en neem het niet klakkeloos over.

# Wat vinden andere front-enders van resets?

> 

> 

# TL;DR

Voor een front-end ontwikkelaar is het belangrijk om ervaring op te doen en te testen wat voor hem/haar handig is om te gebruiken. Elk project heeft andere uitdagingen en je kan klakkeloos een reset overnemen, maar zijn alle zaken in de reset echt nodig voor je project? Vaak niet. Voor front-end ontwikkelaars is belangrijk dat wij weten wat browsers doen, dat we weten wat HTML en CSS doet. We moeten leren hierop in te springen en mee te werken.

In dit artikel heb ik geen CSS resets opgenomen, want ik kan niet overzien welke reset het nuttigst is voor jou. Mijn bedoeling was inzicht te geven in wat een CSS reset precies is. 
Leer hoe de browsers werken; hoe gaan ze om met de verschillende HTML-tags en welke verschillen worden veroorzaakt tussen de verschillende browsers? Hoe beïnvloedt dat een design dat je aan het bouwen bent?

[Eric Meyer gaf in 2007 al aan](http://meyerweb.com/eric/thoughts/2007/04/18/reset-reasoning/): “Een CSS reset is om je aan het denken te zetten en niet om deze standaard te gebruiken”.

Gebruik jij een reset? Zo ja, welke en waarom? Zo nee, waarom niet?

# Links:

* [Whatwg: Rendering](https://html.spec.whatwg.org/multipage/rendering.html)
* [Jeff Starr: Killer Collection of CSS Resets (2007 / 2013)](http://perishablepress.com/a-killer-collection-of-global-css-reset-styles/)
* [* { CSS:resetr }](http://cssresetr.com/)
* [IE CSS](http://www.iecss.com/)
* [Michael Tuck: The History of CSS Resets (2010)](http://sixrevisions.com/css/the-history-of-css-resets/)
* [Normalize van Nicolas Gallagher](http://nicolasgallagher.com/about-normalize-css/)
* [Eric Meyer: Reset Reasoning (2007)](http://meyerweb.com/eric/thoughts/2007/04/18/reset-reasoning/)

# Interessante artikelen om te lezen die niet genoemd zijn in de tekst:

* [Richard Clark: HTML5 Reset Stylesheet (2009)](http://html5doctor.com/html-5-reset-stylesheet/)
* [Harry Roberts: Reset restarted (2011)](http://csswizardry.com/2011/10/reset-restarted/)
* [Jens Oliver Meiert: Why “Reset” Style Sheets Are Bad (2008)](http://meiert.com/en/blog/20080419/reset-style-sheets-are-bad/)

(TODO: Over Kaj Rietberg
blog/2014/kajrietberg.png
Kaj is Front-end ontwikkelaar bij Zorgweb in Zwolle. Zijn specialisaties zijn webforms, CSS, CSS-architectuur, Sass en hij verdiept zich momenteel in het responsive bouwen van webformulieren met grote tabellen.)