---
title: "Scalable Vector Graphics en responsive web"
date: 2011-12-22
author: Jochen Vandendriessche
categories: 
  - Adventskalender
---
Het blijft grappig om te zien hoe print en web verder van elkaar verwijderd zijn dan ooit tevoren. De evolutie van het web is op zijn minst spectaculair te noemen. Van fluid designs met animated gifs en flashy backgrounds langsheen de fixed dimension websites die langzamerhand aan het uitsterven zijn. Printdesign heeft altijd genoten van de vaste afmetingen die het gedrukte eindwerk met zich meebrengt en het gebrek aan interactieve elementen, terwijl webdesigners meegroeiden met de meest courante schermresolutie. Jarenlang was 960 pixels de vaste waarde, maar 1 apparaat zette deze wereld op zijn kop. De revolutie die de iPhone teweeg bracht in het mobiele weblandschap was nooit gezien en de kloof tussen web en print design werd voor de zoveelste keer groter. Toch hebben deze één gemeenschappelijk überformaat: _SVG_.

Toen SVG het levenslicht zag en uiteindelijk een W3 recommendation werd in september 2001 bleef het in de schaduw staan van de gigant Macromedia Flash. Doorheen de tijd groeide Flash verder uit, niet echt verwonderlijk aangezien het naast vector graphics ook kon worden gebruikt voor video, audio, animaties, et cetera. Flash bleef jaren koning éénoog in het land der blinden, want terwijl de browsers bleven strijden over universele formaten, HTML- en CSS-implementaties en codecs kon hun SWF-formaat aan de hand van een plugin op ieder platform doen waarvoor het bedoeld was. Opnieuw was het de iPhone die een einde maakte aan de opmars van Flash. Prompt werden de schijnwerpers gericht op de open webstandaarden die video en audio mogelijk maakten, animaties met behulp van JavaScript of zelfs via CSS3!

Een nieuw tijdperk brak aan en de vaste waarden vervaagden, aangezien iedereen altijd en overal via eender welke mobiele telefoon, tablet, computer, televisie en spelconsole het wereldwijde web kon verkennen. Responsive web werd een buzzword, maar in tegenstelling tot Web 2.0 wel eentje met betekenis. Er werden boeken geschreven en presentaties gegeven over hoe we websites konden bouwen die zich aanpasten aan de screen estate en de mogelijk tragere verbinding van de bezoeker.

Helaas wordt SVG vandaag de dag soms wel vernoemd, maar toch wordt er nog te weinig gebruik gemaakt van dit formaat. De mogelijkheden zijn gigantisch en kunnen in de hedendaagse responsive approach een aantal voordelen bieden aan ontwikkelaars.

# Het is scalable

Laat dat nou net de aanpak van responsive zijn. Websites die meeschalen volgens de beschikbare resolutie. Meeste logo's en iconen zijn PNG of GIF images die dan meestal meermaals worden opgeslagen omdat ze in verschillende formaten nodig zijn. Waarom dan geen vectorformaat gebruiken die van nature uit haarscherp meeschaalt?

# Het heeft een kleine bestandsgrootte

Aangezien SVG een tekstbestand is, blijft de bestandsgrootte redelijk beperkt in tegenstelling tot GIF- of PNG-varianten. Als we dan nog eens aparte images gebruiken voor mobile, tablet, desktop, etc. hebben we hier tegenover maar één SVG file nodig.

# Het is makkelijk te bewerken en te stijlen

Een kleur, border of tekst aanpassen is zo gepiept! Het SVG bestand openen in je favoriete text editor is genoeg, je hebt met geen grafisch programma van doen!

# Het is animeerbaar

Omdat het een DOM heeft, kan je deze aanspreken met JavaScript om bepaalde zaken aan te passen. Infaden en resizen zijn bijvoorbeeld een fluitje van een cent.

# Overtuigd?

Het klinkt allemaal veelbelovend en te mooi om waar te zijn, en jammer genoeg is het dat ook een klein beetje. De meeste moderne browsers ondersteunen SVG native, maar voor sommige zal er toch een fallback voorzien moeten worden. Godzijdank zijn er hier diverse libraries voor, maar ééntje in het bijzonder springt hier toch wel uit: [RaphaelJS](http://raphaeljs.com/).

![](https://fronteers.nl/_img/2011/12/browsersupport-svg.png)

Een overzicht van de browsersupport (bron: <http://www.codedread.com/svg-support.php>).

Op de website van RaphaelJS kan je tal van voorbeelden vinden en een uitgebreide documentatie. Er is zelfs een aparte [gRaphaelJS](http://g.raphaeljs.com/) library speciaal voor grafieken. Bar-, line- en piecharts zullen nog nooit zo mooi meeschalen volgens het medium! Aangezien dit niet echt een hands-on artikel is wil ik wel nog meegeven dat het de moeite waard is om eens wat demo's te bekijken en misschien zelf eens te spelen met de mogelijkheden.

Hopelijk heb ik jullie een beetje kunnen overtuigen om in toekomstige projecten SVG te overwegen. Er zijn reeds enkele leuke sites die hier gebruik van maken zoals [sleepstreet.be](http://sleepstreet.be), [Asse Kloppend hart](http://www.assekloppendhart.be/wanneer/) en [Emacs for Mac OS X](http://emacsformacosx.com/), maar echte mannen gebruiken VI ;-)

### Over Jochen Vandendriessche
<img src="/archief/_img/2011/12/jochen-vandendriessche.jpg" alt="Foto van Jochen">
Freelance front-end developer onder de naam builtbyrobot. Viel als kind in een vat Red Bull en bijgevolg gigantisch energiek. Overtuigde Apple fanboy, houdt van open webstandaarden en een goede portie JavaScript. Twittert als [@joggink](https://twitter.com/joggink). Blogt ook van tijd tot tijd eens op [joggink.com](http://joggink.com/) en dan voornamelijk over front-end gerelateerde zaken en slechte internet providers. Is momenteel bezig aan een web based SVG editor, genaamd [Willistrator](http://willistrator.com) die naast SVG RaphaelJS kan genereren. 
Favoriete slogan: 'Develop for the best, optimize for the rest!'

Donatie: [Think pink](http://www.think-pink.be/)
Vier jaar geleden, op 10 december 2007, verloor mijn moeder een vijf jaar durende strijd tegen borstkanker. Vijf moeilijke jaren met af en toe een sprankeltje hoop, die helaas de kop werd ingedrukt door uitzaaiingen van deze agressieve tumor. Hopelijk kan deze donatie iets uitmaken aan de levensverwachting van andere vrouwen, moeders, dochters.
