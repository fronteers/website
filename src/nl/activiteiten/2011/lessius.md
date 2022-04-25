---
title: "Bijeenkomst bij Lessius op 24 november 2011"
date: 2011-11-24
eventdate: 2011-11-24
location: 
categories: 
    - meetup
---
Arjan heet iedereen welkom bij [Lessius](http://mechelen.lessius.eu/) en vertelt kort iets over Fronteers.

[Thomas Byttebier](http://www.thehotseat.be/) presenteert vanavond over responsive web design. Hij steekt van wal met een korte geschiedenisles. De auto zorgde in de twintigste eeuw voor een revolutie die alles beïnvloedde in ons leven. Aan het einde van de twintigste eeuw zorgde de personal computer voor eenzelfde soort wijziging, en nu rukt de smartphone op: een handzame personal computer die ervoor zorgt dat we altijd met het internet verbonden zijn.

Het gros van de grote bedrijven denkt nu, door die snelle opkomst: we moeten iets voor mobile doen. Dus komt er vaak een iPhone app. Maar dan moet er ook een Android app komen. En een Windows app. En zo kunnen we nog wel even doorgaan.

Vandaar dat veel bedrijven nu denken dat ze een mobiele versie van de site moeten maken, met alles eruit gestript. Echter, als je dan een linkje doorstuurt van de mobiele site, dan ziet iemand op een desktop computer de gestripte mobiele site. Dit is niet optimaal.

Enkele jaren geleden schreef Ethan Marcotte een A List Apart artikel getiteld [responsive web design](http://www.alistapart.com/articles/responsive-web-design/). Dat artikel sloeg in als een bom. Thomas laat enkele Belgische en Engelse voorbeelden zien van goed doordachte responsieve webdesigns.

'It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is the most adaptable to change.' —Charles Darwin. Het idee achter aanpassen aan de omgeving is dus al eeuwenoud.

Responsive web design bestaat uit twee onderdelen. De eerste is een layout fluid opbouwen: met procenten voor de maten in de breedte maak je een layout die pixel-perfect binnen het browserscherm past. *Elk* browserscherm.

Tweede component zijn mediaqueries. Die laden afhankelijk van de breedte (of hoogte) een ander stukje van de CSS in, zodat regels voor kleine schermbreedte toegepast worden. Een voorbeeld is om van elementen die eerst met `float:left` naast elkaar staan, onder kleine breedtes ongedaan worden gemaakt met `float:none`.

Echter, er is nog een probleem. Mediaqueries werken niet in Internet Explorer 8 en lager, maar ook niet in oudere mobiele browsers. Omdat veel niet-westerse landen alleen op internet gaan met een mobiele telefoon. Je moet compleet anders denken: mobile first. Door eerst een mobiele website te maken, heeft iedereen voordelen. De website upgradet wanneer het scherm breder is dan een X aantal pixels. Met een klein stukje JavaScript kan makkelijk ook de mediaqueries werkende te krijgen in Internet Explorer 8 en lager.

Dan is er nog een probleem: afbeeldingen. Door iedereen grote afbeeldingen te geven, en met `width:100%` werkt het overal. Echter moeten dan mobiele browsers alle grote afbeeldingen downloaden. Dit is voor de meeste sites niet echt een oplossing. Op een mobiele website wil je toch dat de pagina snel laadt. Thomas laat twee opties zien, gekozen uit vele tientallen. De eerste is browserdetectie. Niet ideaal maar wel een van de oplossingen die altijd werkt. De tweede oplossing is eentje met twee versies: `<img src="small.jpg?large=large.jpg">`. Op die manier laden standaard de kleine versies, en met een klein stukje JavaScript laadt je indien nodig de volledige grootte versies in.

Voor logos en andere niet-foto afbeeldingen zou je kunnen nadenken over SVG: vectorafbeeldingen. Die schalen altijd goed, zelfs als je een miljoen pixels breed de afbeeldingen wilt tonen. Met Raphael heeft Thomas een logo gemaakt dat er altijd anders uitziet, afhankelijk van de breedte. Zie [SleepStreet](http://www.sleepstreet.be/) voor het voorbeeld.

Voor video en datatabellen bestaan er enkele oplossingen, maar die zijn allemaal nog niet heel bruikbaar.

Na een korte pauze presenteert [Johan Ronsse](http://wolfslittlestore.be/) over design for developers. Hij is met name een interface ontwikkelaar. De assumptie die hij maakt is dat (front-end) ontwikkelaars liever in een IDE werken dan in Photoshop.

_Typografie._ Een belangrijk feit is dat diverse fonts op verschillende font groottes toch kleiner of groter tonen. Ook is er een aparte instructie voor kleine grootes, genaamd hinting. Daarnaast is het goed om een font uit te kiezen zodat je diverse karakters goed kunt onderscheiden. Dus geen 1 en l die er hetzelfde uitzien. Nog een tip over typografie is om niet te lange lijnen te hebben in je design, omdat de ogen vermoeid raken en je weet niet waar de volgende regel begint. Ook de `line-height` niet te klein te maken voor lopende teksten: optimaal is rond de 1.5 voor lopende teksten.

_Grids._ Om rust en strakheid in je ontwerp te creëren kun je een grid gebruiken. Door alle breedtematen op een grid uit te lijnen, zijn alle breedtes een veelvoud van de gridkolombreedte. Johan gebruikt vaak een veelvoud van 6.

_Kleuren en schaduwen._ Gebruik het als gereedschap, niet als decoratie. Schaduwen zijn in het echt nooit zwart of zeer donkergrijs. Beter is een softe, halfdoorzichtige grijstint. Buttons bestaan uit een subtiele gradient, een duidelijke tekst en een duidelijke rand om de button heen. Zorg ook voor een duidelijke `:hover` en `:focus` staten.

_Kleuren._ Tip die Johan geeft is kleurenblenden. Je werkt met 3 basiskleuren en denkt niet na over kleur. Als je toch met kleuren werkt, maak de kleur een tint van de achtergrond zodat het geheel bij elkaar past. Zet bijvoorbeeld op een blauwe achtergrond geen witte tekst, maar lichtblauwe tekst.

_Icons._ Investeer eens in een niet-FamFamFam iconset. Gebruik ook alleen icons als ze zeer duidelijk zijn. Bij twijfel: gebruik ook tekst.

_Herbruikbare CSS._ Met pattern libraries zoals [Bootstrap] kun je gemakkelijk veelvoorkomende stukken code copy-pasten.

_Extra's._ Verwijder nooit de `outline`s bij `:focus` als je niet een aparte stijl hebt gedefinieerd.

(Hidden)

(Hidden)

# Overige materialen en verslagen

* [Slides van de presentatie van Thomas](http://www.slideshare.net/bytte/responsive-web-design-10389263) (Slideshare)
* [Slides van de presentatie van Johan](http://www.slideshare.net/Wolfr/design-for-developersonlineversionlong) (Slideshare)
* [Verslag geschreven door Thomas Deceuninck](http://creativeskills.be/articles/fronteers-meetup-lessius/)

(Hidden)

(Hidden)

(Hidden)

(Hidden)

(Hidden)

(Hidden)

(Hidden)

(Hidden)

(Hidden)

# Aanmeldingen

(Hidden)

* Mathias Bynens
* Roel Van Gils
* Joris Hens
* Ad Eggermont
* Jan Moesen
* Arjan Eising
* Thomas Deceuninck
* Lennart Schoors
* Jurriaan Persyn
* Kristof Houben
* Steve Franciscus Julia De Jonghe
* Gregory Van Looy
* Tom Claus
* Stijn Janssen
* Laurens Peeters
* Martijn Croonen
* Bram Janssens
* Wart Claes
* Nick Looijmans
* Tom Schuermans
* Sander Houttekier
* Jelle Desramaults
* Mante Bridts
* Wim Hendrikx
* Jochen Vandendriessche
* Griet Verlinde
* Sebastien Toussaint
* Gunter Van Steen
* Wesley Verbruggen
* Yannick Onsea
* Mikael Gyselinck
* Yasmine Plasmans
* Bart Houben
* Dieter Verjans
* Tomas Berckx
* Wouter Liekens
* Vic Rau
* Shahways Romani
* Jan Michiels
* Bruno Byttebier
* Danny Calders
* Bramus Van Damme
* Koen Veestraeten
* Stijn Debacker
* Griffin Peeters
* Ellen De Cock
* Hannan Amnad
* Michiel De Smedt
* Stijn Van Loo
* Pascal Nosenzo
* Lorenz Vercauteren-Seghers
* Ewout Callens
* Frederick Vanbrabant
* Barbara Tombeur
* Maikel Beckers
* David Heerinckx
* Kenneth Geenen
* Barbara Lettany
* Sara Devuyst
* Dries Droesbeke
* Kim Wouters
* Alexander Strobbe
* Sara Feskens
* Thomas Van Roost
* Mathys Pieter
* Michiel Kenis
* Joris Ooms
* Jeff Nauwelaerts
* Ben Verschooris
* Dries Delaey
* Stijn Michiels
* Glenn Billiau

(Hidden)

(Hidden)