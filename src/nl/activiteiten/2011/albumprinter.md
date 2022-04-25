---
title: "Bijeenkomst bij Albumprinter op 26 oktober 2011"
date: 2011-10-26
eventdate: 2011-10-26
location: 
categories: 
    - meetup
---
Op woensdag 26 oktober was Fronteers te gast bij [Albumprinter](http://albumprinter.org/) te Amsterdam. Er waren twee sprekers: Bram Duvigneau over webtoegankelijkheid, en Arjan Eising over de huidige en toekomstige staat van CSS Selectors.

# Bram Duvigneau over webtoegankelijkheid

Bram Duvigneau heeft als webdeveloper met een visuele beperking zeer veel ervaring met accessibility. Hij liet aan de bezoekers zien hoe hij met zijn screenreader werkte (op een onnavolgbaar snel tempo) en tegen wat voor zaken blinde webgebruikers aanlopen. Enkele zaken die genoemd werden:

* Er bestaat geen HTML5-element om de main content-area aan te geven. Voor blinden is het toch wel handig om naar de main content te kunnen springen. Gebruik hiervoor het (wai aria) role=main attribute. Blinden hebben sowieso veel baat bij [landmarks](http://www.w3.org/TR/wai-aria/roles#landmark_roles).
* Ontnuchterend: veel blinden kennen hun screen reader maar slecht, en maken matig gebruik van de vele opties. Het springen van kop naar kop (van H2 naar H3 bijvoorbeeld) is niet algemeen bekend onder screenreadergebruikers.
* Vergeet keyboard accessibility niet.
* Accessibility testen kan ondermeer met de gratis [NVDA-plugin](http://www.nvda-project.org/) voor Firefox.

(Hidden)

(Hidden)

# CSS Selectors, door Arjan Eising

CSS Selectors zijn de stille kracht achter elke stylesheet. Met de komst van CSS Selectors level 3, en de browsers die het tegenwoordig allemaal ondersteunen, zijn we met enkele slimme selectors in staat 'krachtige' stijlen toe te passen. Daar komt nu een nieuwe set bij: CSS Selectors level 4, waarin vele handige selectors worden toegevoegd. [Arjan Eising](http://arjaneising.nl) gaf in zijn presentatie een chronologisch overzicht van de ontwikkeling van CSS-selectors van versie 1 tot versie 4.

(Hidden)

(Hidden)

(Hidden)

Nu de uitfasering van IE6 bijna een feit is, zou je bijna vergeten dat IE7 een betere CSS-selector-ondersteuning heeft dan zijn voorganger. De volgende selectors kun je dan ook probleemloos inzetten vanaf IE7:

* `E ~ F` matcht indien de F volgt op E
* `[attr^="foo"]` indien de attribuut attr start met 'foo'.
* `[attr$="bar"]` indien de attribuut attr eindigt met 'bar'.
* `[attr*="foobar"]` indien de attribuut attr 'foobar' bevat.

De volledige presentatie van Arjan is terug te vinden op <http://codex.arjaneising.nl/presentations/CSS_Selectors/>.

# Aanwezigen

* Sander Aarts
* Matthew Agustin
* Bjorn Boonen
* Matijs Brinkhuis
* Bram Duvigneau
* Arjan Eising
* Tom Greuter
* Marloes Hautmann
* Krijn Hoetmer
* Jeroen Kleuters
* Anton Kouliavtsev
* Martijn van Lambalgen
* Sander van Lambalgen
* Edwin Leijen
* Mallory
* Edwin Martin
* Bran van der Meer
* Tim Molendijk 
* Jeroen Mulder
* Peter Nederlof
* Jan Willem Nieuwland 
* Joël Plas
* Tobias Urff
* Joran Veenstra
* Mike Vierwind 
* Pascal Vree
* Maarten Wensveen
* en nog 3 personen

(Hidden)