---
title: "Toegankelijkheid begint bij het eerste design"
date: 2019-12-12
author: Marjon Bakker
categories: 
  - Adventskalender
---
Al bij het ontwerpen van een nieuwe site is het belangrijk om rekening te houden met toegankelijkheid. Als toegankelijkheidsonderzoeker kom ik bij het testen van websites vaak problemen tegen die al in de designfase zijn veroorzaakt.
Wanneer je als front-ender weet waar je op kunt letten, dan kun je al heel vroeg in het bouwproces de juiste vragen stellen aan designers. Zo kunnen veel problemen al voor de livegang opgelost worden. En is er veel minder reparatie achteraf nodig.

In dit artikel wil ik graag ingaan op een aantal punten die van belang zijn als je een design moet omzetten in een HTML-webpagina.

[De onzichtbare user experience](#de-onzichtbare-user-experience)
[De zichtbare user experience](#de-zichtbare-user-experience)
[Afsluitend](#afsluitend)

# De onzichtbare user experience

Een design is heel visueel. Er zijn mooie schetsen gemaakt die tonen hoe de nieuwe site eruit moet gaan zien. Medewerkers van een designbureau zijn er vaak niet op getraind om rekening te houden met de user experience van mensen die slecht of niet kunnen zien.

Met name voor blinden, die het scherm helemaal niet kunnen zien en daarom werken met een screenreader, moet ook een structuur aanwezig zijn die zij kunnen gebruiken. Een soort onzichtbare user experience. Ontwerp je deze structuur goed, dan is hij ook nuttig voor andere soorten hulpapparatuur, zoals spraakbedieningssoftware.

Deze onzichtbare informatie is iets waar een designer prima rekening mee kan houden. Als developer kun je de informatie meenemen als je begint met bouwen. Nauw overleg tussen designer, developer en contentmanager is in deze startfase essentieel.

## Koppenstructuur

Een goede koppenstructuur helpt je screenreadergebruikers enorm op weg. Zij kunnen een koppenlijst opvragen die fungeert als inhoudsopgave van de site. Zo navigeren zij snel naar de gezochte informatie op de pagina.

![Screenshot koppenlijst VoiceOver, homepage Volkskrant, allemaal verkeerd gebruikte h4's en h3's](https://fronteers.nl/_img/adventskalender/toegankelijkheid-eerste-design/koppenlijst-voiceover-homepage-volkskrant.png)

(TODO: Een screenshot van een koppenlijst in VoiceOver, homepage volkskrant.nl)

Designers maken visueel wel koppen, maar denken vaak niet na over de kopniveaus. Het is ook de taak van contentmanagers of content designers om over dit soort informatiestructuren na te denken. Hebben ze dat niet gedaan, dan is het aan de developer of de toegankelijkheidsadviseur om vragen te gaan stellen.

### Wat is de h1 van deze pagina?

Het is 'best practice' dat elke webpagina een h1 heeft die zegt waar de pagina over gaat. Dit hoeft niet de eerste kop van de pagina te zijn. Het kan bijvoorbeeld de eerste kop in het main-element zijn, die beschrijft waar de unieke content op deze pagina over gaat, bijvoorbeeld 'Paspoort aanvragen' op een gemeentesite, of de kop van het artikel op een nieuwssite.

### Zijn er kopniveaus overgeslagen?

Sla geen kopniveaus over. Spring dus niet van `h2` naar `h4`. Een screenreadergebruiker kan snel het idee krijgen dat hij informatie mist.

### Staat alle content onder de juiste kop?

Zorg ervoor dat alle content onder de juiste kop staat. Dit gaat vaak mis bij zogenaamde _'chapeaus'_ (tekst boven kopjes). Zie bijvoorbeeld het screenshot hieronder. Hier zie je een nieuwsblokje van de homepage van [de Volkskrant](https://www.volkskrant.nl/) en informatie uit de [toegankelijkheidsinspector van Firefox](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector).

Deze elementen zijn in het nieuwsblokje aanwezig:

1. een afbeelding met `alt="Cruciale fase in impeachment-onderzoek: levert ambassadeur hét bewijs tegen Trump?"` (Een kanttekening: Dit is een slechte alt-tekst, omdat hij informatie dubbelt en bovendien niet beschrijft wat er op de afbeelding te zien is (zes portretfoto's).)
2. een h4 met de tekst 'NIEUWS IMPEACHMENT TRUMP'
3. een h3 met de tekst 'Cruciale fase in impeachmentonderzoek: levert ambassadeur hét bewijs tegen Trump'?

De afbeelding en de h4 vallen bóven de h3 die beschrijft waar dit blokje over gaat. Ze vallen dus in de koppenstructuur onder de h3 van het vorige blokje. Op het moment van schrijven was dat het kopje "Manifestatie van start: ‘We schrijven geschiedenis!’", over de staking van ziekenhuispersoneel. Erg verwarrend.

![Verkeerde koppenstructuur bij nieuwsblokje homepage Volkskrant, eerst h4 (chapeau) en dan h3](https://fronteers.nl/_img/adventskalender/toegankelijkheid-eerste-design/heading-levels-volkskrant.png)

(TODO: Een chapeau met h4 staat boven de kop met h3, volkskrant.nl)

### Moet dit wel een kop zijn?

Koppen zijn nodig om de content eronder te beschrijven. Staat er geen content onder een kop, dan is een h-element niet op zijn plaats. Opnieuw: Een screenreadergebruiker kan het idee krijgen dat hij informatie mist als er wel een kop is, maar geen content.

## Semantische structuur

Screenreadergebruikers hebben heel veel verschillende manieren om te navigeren. Naast koppenlijsten en linkslijsten zijn ook _landmarks_ heel nuttig.

Denk bij het uitwerken van het design na: Wat is de `header`, `main`, `aside`, `footer`, `nav`, van deze pagina? En als er van een element meer dan één op de pagina voorkomt, hoe noem je ze dan? Je kunt ze een naam geven met [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) of met [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby).

Denk erom: divs en spans betekenen niets voor hulpapparatuur! Voor toegankelijkheid is het altijd het beste om semantische elementen te gebruiken waar dat kan.

## Labels

### Zichtbare labels

In mijn ideale wereld hebben iconen, formuliervelden, knoppen, enzovoort, altijd een zichtbaar tekstlabel. Designers laten dit graag weg, omdat minder tekst zorgt voor een 'cleaner' ontwerp.

Maar als je spraakbediening gebruikt, hoe weet je dan hoe een formulierveld heet als het tekstlabel onzichtbaar is? Of stel, je bent cognitief beperkt. Hoe weet je dan waar al die iconen voor staan? Zelfs ervaren internetgebruikers kennen vaak de betekenis van een icoon niet, zoals blijkt uit de [Fronteers Jam Session](https://vimeo.com/251649861) die Mallory van Achterberg hield.

Zichtbare labels zijn ook erg belangrijk voor bijvoorbeeld mensen met concentratieproblemen of een kort werkgeheugen. Placeholders verdwijnen, tooltips vallen niet altijd op. Je helpt iedereen met het invullen van een formulier door altijd zichtbare labels te plaatsen. Het is dan altijd mogelijk om nog een keer na te gaan wat je moet invullen in het veld waar je bent.

### Iconen

Is het onontkoombaar om een icoon te plaatsen zonder tekst? De ervaring leert dat vaak vergeten wordt een tekstalternatief te bieden. Meestal kan dat prima met een `alt`-attribuut op de afbeelding, of met een visueel verborgen tekst in een `span`.

### Formuliervelden

Als in het design echt geen zichtbare labels voor formuliervelden gewenst zijn, zorg er dan in ieder geval voor dat de labels wel bestaan en beschikbaar zijn in de toegankelijkheidslaag. En dat ze op de juiste manier gekoppeld zijn aan het betreffende veld.

Zorg ook voor een tekst voor knoppen, ook al zijn de teksten niet zichtbaar. Zo blijven ze bruikbaar voor mensen die de pagina niet kunnen zien.

## Skiplink

Als je een website gebruikt met een muis, een touchpad of een ander point-and-click-apparaat, dan is het geen enkel probleem om snel het gewenste element te bereiken. Voor toetsenbordgebruikers die alleen een tabtoets tot hun beschikking hebben is het heel vervelend om steeds door herhalende blokken tekst heen te moeten navigeren. Tientallen keren de tabtoets indrukken is veel werk. Denk bijvoorbeeld aan alle links in een menu.

Omzeilende links (skiplinks) bieden hier vaak uitkomst. Mocht je je daar nog niks bij kunnen voorstellen, kijk dan bijvoorbeeld op de site van [Rijksoverheid](https://www.rijksoverheid.nl/). Gebruik je tabtoets om te navigeren. Als de pagina geladen is, verschijnt bij de eerste tab de skiplink met de tekst 'Ga direct naar inhoud'. Activeer je deze link, dan sla je het menu over en komt je toetsenbordfocus meteen in de inhoud van de pagina terecht.

![Screenshot skiplink Rijksoverheid.nl](https://fronteers.nl/_img/adventskalender/toegankelijkheid-eerste-design/screenshot-skiplink-rijksoverheid.png)

(TODO: Zo ziet de skiplink eruit op Rijksoverheid.nl)

Omzeilende links zijn niet alleen handig voor de hoofdinhoud van een pagina, maar ook voor andere belangrijke plekken op de pagina, zoals de zoekfunctie, een blok met contactinformatie of een lijst met filters bij een zoekresultatenpagina. Er kunnen dus meerdere skiplinks bestaan die leiden naar verschillende belangrijke onderdelen van een pagina.

Een skiplink wordt door een designer vaak niet ontworpen. Vraag aan de designer dus hoe de skiplink eruit moet zien.

# De zichtbare user experience

Een groot deel van de toegankelijkheidsproblemen bevindt zich in het zichtbare deel van de website, met name voor slechtzienden of kleurenblinden. Ook moet bij het bouwen van een site rekening worden gehouden met ziende toetsenbordgebruikers.

## Kleurgebruik

Een goede contrastverhouding is nodig om alle informatie op de pagina te kunnen waarnemen. Slecht contrast is al jaren nummer 1 op de lijst met toegankelijkheidsproblemen. Toch zijn er nog altijd designers en huisstijlontwerpers die kiezen voor kleurpaletten met lichte tinten.

Al bij het ontwerpen van een nieuwe huisstijl zou iemand alert moeten zijn op de kleuren van bijvoorbeeld het logo. Hoewel logo's van de toegankelijkheidsrichtlijnen niet hoeven te voldoen aan contrasteisen, nemen mensen de kleuren wel vaak over bij het maken van bijvoorbeeld infographics of pdf's.

### Heeft deze tekst voldoende contrast?

Meet in het design de kleuren van de teksten en hun achtergrond na met een kleurcontrasttool, bijvoorbeeld de [Colour Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/).

Houd hierbij rekening met de [juiste contrastratio's volgens WCAG](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html):

* Minimaal 4,5:1 bij gewone tekst
* Minimaal 3:1 bij grote tekst (18pt of 14pt vet)
* Denk eraan: De lettergroottes in WCAG zijn in punten. 14pt en 18pt zijn equivalent aan ongeveer 18.5px en 24px

Je kunt bij de designer ook een lijst met gebruikte kleuren opvragen en deze in een [kleurenmatrix](http://contrast-grid.eightshapes.com/) zetten. Hier zie je van verschillende kleurencombinaties of ze voldoen aan de vereiste contrastratio.

### Heeft dit interactieve element voldoende contrast?

Sinds 2018 is er versie 2.1 van WCAG. Hierin is ook een eis opgenomen voor het [contrast van interactieve componenten](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html). Dat wil zeggen dat ook knoppen, formuliervelden, en dergelijke duidelijk zichtbaar moeten zijn met behulp van voldoende contrast. Een ratio van minimaal 3:1 is hier vereist.

De eisen zijn een beetje ingewikkeld, maar het is wel de moeite waard om je hierin te verdiepen. Het gaat immers om de bruikbaarheid van de site. Kan iemand iets niet zien, dan kan hij het ook niet gebruiken.

### Een hoogcontrastknop, moet dat echt?

Nog altijd zijn er designers en opdrachtgevers die denken dat een ontwerp met slecht contrast geen probleem is, als je maar een hoogcontrastknop op je site zet. En strikt genomen valt er tijdens een toegankelijkheidsonderzoek niets af te keuren wanneer er een goed functionerende hoogcontrastknop op een site staat.

Toch zijn er een paar grote bezwaren tegen een hoogcontrastknop. Allereerst is het niet gebruiksvriendelijk. Mensen die de knop nodig hebben moeten hem eerst zien te vinden, en dat kan een uitdaging zijn als je slechtziend bent. Daarnaast vergt het veel extra werk om een tweede stylesheet te maken voor hoog contrast. Het kost bovendien meer onderhoud.

Een hoog contrastknop is symptoombestrijding. Als je hem nodig hebt, betekent dat dat je een ontoegankelijke huisstijl hebt. Het levert je ook problemen op met pdf’s, powerpoints et cetera. Als toegankelijkheidsonderzoeker vind ik vrijwel altijd plekken in een site waar het contrast niet in orde is, ook al staat de hoogcontrastknop aan. Het beste is om één versie van de stylesheet te maken met kleuren die voldoende contrast hebben.

### Moet je kleur kunnen zien om iets te snappen?

Informatie op een site moet niet alleen aan de kleur herkenbaar zijn. Denk bijvoorbeeld aan links in lopende tekst. Designers vinden onderstreping van links vaak niet mooi, maar het helpt je bezoekers enorm als ze links goed kunnen herkennen.

Ook in bijvoorbeeld grafieken is het belangrijk dat de informatie ook te begrijpen is als je kleuren niet (goed) kunt onderscheiden.

## Focus- en hoverstijl

Bij het ontwerpen van een site wordt vaak niet gedacht aan de focus- en hoverstijl. Met name de focusstijl moet voldoende duidelijk zijn voor toetsenbordgebruikers. Zij kunnen zo zien waar zij zijn op de pagina.

Heeft een designer geen focus- en hoverstijl ontworpen, vraag er dan om. Zet voor focus zeker geen `outline: none;` in je CSS zonder een vervangende stijl te schrijven.

## Responsive design

WCAG 2.1 heeft een [succescriterium 1.4.10 Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html). Dit succescriterium gaat uit van een viewport van 320 CSS pixels breedte. Houd hier rekening mee wanneer wordt ontworpen en gebouwd wordt voor mobiel, zodat horizontaal scrollen niet nodig is en er geen functionaliteit verdwijnt.

### Foutmeldingen in formulieren

Vaak wordt door designers niet gedacht aan het ontwerpen van een formulierstijl, met name foutmeldingen. Het is voor ziende gebruikers belangrijk dat de foutmeldingen niet alleen in kleur worden weergegeven en dat de kleuren die worden gebruikt, voldoende contrast hebben.

Denk ook na over wat de ervaring wordt voor blinde gebruikers: Hoe gaan zij weten dat er iets niet klopt? Karl Groves legt op zijn blog uitgebreid uit hoe je `aria-describedby` kunt gebruiken voor [toegankelijke foutmeldingen](https://karlgroves.com/2011/10/10/accessible-form-labeling-instructions).

# Afsluitend

Natuurlijk is er nog veel meer te vertellen over design en toegankelijkheid. Zeker de wat complexere gevallen verdienen veel meer aandacht dan in dit artikel past.

Harris Schneiderman gaf eind november een webinar met de titel ['Translating Design Wireframes into Accessible HTML/CSS'](https://www.youtube.com/watch?v=5gFSru8yGaU) voor Smashing Magazine. Wil je meer weten over tabvolgorde, roles, accessible names, values/states en focusmanagement, kijk dan vooral die video.

Voor een [zeer uitgebreid artikel over contrast](http://iacobien.nl/artikelen/contrast-van-tekst-met-achtergrondkleur-op-een-toegankelijke-site/) kun je kijken op de site van mijn collega Iacobien Riezebosch.

Vragen kun je altijd stellen in het accessibility-kanaal van de [Slack van Fronteers](https://fronteers-slack.herokuapp.com/).

### Over Marjon
<!-- <img src="/archief/_img/adventskalender/toegankelijkheid-eerste-design/marjon-bakker.jpg" alt="Foto van Marjon" class="floating-portrait"> -->
Marjon Bakker is sinds 2017 adviseur digitale toegankelijkheid bij [Firm Ground](https://www.firmground.nl). Zij werkt het liefst op het snijvlak tussen communicatie en frontend development, met oog voor bruikbaarheid van websites voor alle bezoekers. Ze heeft zich gespecialiseerd in technisch onderzoek en het uitwerken van praktische oplossingen voor developers en opdrachtgevers. Haar toegankelijkheidswerkzaamheden sluiten goed aan en bouwen voort op haar eerdere werkervaring als webredacteur en communitymanager.
Marjons donatie gaat naar Bits of Freedom.)

#### Contact
* [marjon@firmground.nl](mailto:marjon@firmground.nl)
* [LinkedIn](https://www.linkedin.com/in/marjonbakker/)
* [Twitter](https://twitter.com/MarjonBakker)
