---
title: "Responsive images; een experiment"
date: 2011-12-07
author: Roel Van Gils
categories: 
  - Adventskalender
---
Goed anderhalf jaar geleden weerklonken de eerste oh's en ah's in de Twittersphere. Toen was responsive webdesign niet meer dan een—weliswaar beloftevolle—gimmick. Sindsdien is het hard gegaan: klanten hebben de mond vol over _mobile first_ en vandaag zijn zelfs onze moeders verslingerd aan hun iPad's. Er is uitstekend [leesvoer](http://www.amazon.com/Responsive-Web-Design-Ethan-Marcotte/dp/B005SYWGXW/ref=sr_1_1?ie=UTF8&qid=1322663650&sr=8-1) voorhanden, webdesigners overal te lande zijn druk aan het experimenteren en de [eerste responsieve websites](http://bostonglobe.com/) voor het brede publiek staan te [blinken](http://www.handelsbeurs.be/) op het internet. Over een jaar is responsive webdesign niet langer bijzaak, maar _noodzaak_.

# De toekomst is responsive

Wie nog niet helemaal overtuigd is van het belang van responsive webdesign voor een betere gebruikservaring, moet zeker de inspirerende [presentatie van Thomas Byttebier](http://www.slideshare.net/bytte/responsive-web-design-10389263) bekijken of het [boek van Ethan Marcotte](http://www.abookapart.com/products/responsive-web-design) lezen.

Ik ga er voor het gemak vanuit dat je al vertrouwd bent met hoe je de media queries uit CSS3 gebruikt—de basisbestanddelen van iedere responsieve website. En anders kan je na deze [5 minuten durende video-introductie](http://teamtreehouse.com/library/design-foundations/css3/media-queries/introduction/play) al meepraten. Want zo eenvoudig is het basisconcept.

# Geen rozengeur

Het is niet al maneschijn wat de klok slaat. Een lastige kwestie voor ontwerpers van responsieve websites is hoe om te gaan met afbeeldingen. Als je je ontwerp optimaliseert voor een desktopbrowser, een tablet en een smartphone (of alles daar tussenin), dan spreekt het voor zich dat je ook je afbeeldingen wilt schalen—of lichte variaties van je afbeeldingen wilt weergeven op die verschillende apparaten.

Terzelvertijd wil je te allen prijze voorkomen dat browsers meer afbeeldingen downloaden dan strikt noodzakelijk. Bandbreedte is immers kostbaar en de snelheid van mobiel dataverkeer is gemiddeld genomen—althans in België—niet iets om over naar huis te schrijven. En dan hebben wij het in het Westen nog niet eens zo slecht.

Voor de achtergrondafbeeldingen in je CSS stelt dit probleem zich niet, maar de `<img>` tags in je HTML gooien helaas roet in het eten. Moderne browsers starten zo snel mogelijk met het inladen van afbeeldingen—nog voor het DOM goed en wel is ingeladen (en liefst met zoveel mogelijk tegelijkertijd). Dat maakt het lastig om én een alternatief aan te bieden voor wie JavaScript niet heeft aanstaan en tegelijk te voorkomen dat een browser mét JavaScript geen overbodige afbeeldingen inlaadt; afbeeldingen die nooit weergegeven zullen worden op jouw apparaat.

# Oplossingen

Jason Grigsby heeft over dit onderwerp een [leerrijk en uitvoerig artikel](http://www.cloudfour.com/responsive-imgs/) geschreven. In het vervolg op dit artikel bespreekt hij de [voor- en nadelen van de reeds beschikbare technieken](http://www.cloudfour.com/responsive-imgs-part-2/) om de meest geschikte afbeelding te sturen naar apparaten met uiteenlopende scherm- en browserbreedtes.

Het gros van de technieken maakt gebruik van JavaScript en sommige bieden een fallback voor wanneer JavaScript niet beschikbaar is. De meeste technieken gebruiken bovendien Apache's `mod_rewrite` module voor het herschrijven van URI's en/of van PHP of Ruby om afbeeldingen aan de serverkant te manipuleren. De ene techniek is al ingenieuzer dan de andere en het vergt veel tijd om ze _allemaal_ uit te proberen. Dat heb ik dan ook niet gedaan, moet ik toegeven.

Om het probleem beter te begrijpen, heb ik vorige zomer de mouwen opgestroopt en zelf een script in elkaar geknutseld. Natuurlijk is het maar _een_ oplosing—en _zeker_ geen ideale—maar het heeft me wel een beter inzicht gegeven in de problemen waar je mee te maken krijgt als je een responsieve website bouwt. In dit artikel leg ik uit hoe het script werkt en welke gebreken het heeft. Misschien brengt het andere, getalenteerdere developers op nieuwe ideeën. En zo maken we het web samen beter. Als dat geen mooie kerstgedachte is!

# Meet Mingy

Ieder kind—of in ieder geval iedere jQuery plugin—moet een naam hebben. Ook al klinkt die naam erg sullig. Mingy betekent krenterig (een zeer on-Vlaamse eigenschap overigens) en dat is precies wat je moet zijn als je afbeeldingen naar een mobiel apparaat stuurt. Mingy stuurt net zoveel image-data naar de browser als strikt noodzakelijk. Dat is het uitgangspunt.

Net als jij, ben ik fan van nette HTML, of [POSH](http://en.wikipedia.org/wiki/Plain_Old_Semantic_HTML#Plain_Old_Semantic_HTML_.28POSH.29) als je wil. Voor mij dus liever geen `<noscript>` wrappers rondom de afbeeldingen en geen `rare_urls_met?kleine&groteversies` als `src` van de `<img>` tag. En JavaScript hoort in een afzonderlijk bestand; niet inline. _Unobtrusive JavaScript_ heet dat met een sjiek woord.

Bekijk misschien eerst even deze [demo](http://www.catchup.be/experiments/mingy_demo/). Maak je browservenster breder of smaller en bekijk met Firebug of de Webkit Inpsector wat de impact is op het totale gewicht van de pagina.

# Hoe werkt het?

Het script gaat uit van het idee dat je met _master images_ werkt. Een master image is de grootste variant (of groter) van de afbeelding die je wilt gebruiken. We gaan er ook vanuit dat iedere media query dezelfde master image inlaadt, maar met uiteenlopende afmetingen. De verhoudingen hoeven niet per se dezelfde te zijn. Het kan dus best dat je rechthoekige afbeeldingen gebruikt in de brede desktop-versie en vierkante afbeeldingen op het scherm van een smartphone. Een [PHP-script](https://github.com/roelvangils/mingy/blob/master/mingy/resize.php) aan de serverkant zorgt ervoor dat de afbeeldingen netjes worden bijgeknipt en gecachet. De situatie waarbij je een hele andere afbeelding wilt inladen voor een andere schermbreedte is (nog) niet gedekt door Mingy.

Meteen nadat de browser het pagina-DOM heeft ingelezen, schiet Mingy in actie ([bekijk het script](https://github.com/roelvangils/mingy/blob/master/mingy/jquery.mingy.js)). In afwachting van het ophalen van een op maat geschaalde afbeelding, geeft de browser een transparante PNG-afbeelding van 68 bytes weer. Dat is de [kleinst mogelijke transparante PNG](http://garethrees.org/2007/11/14/pngcrush/) die je kan maken. Het is de enige betrouwbare manier om te verhinderen dat je browser eerst een veel te grote afbeelding inlaadt en die vervolgens vervangt door een kleinere afbeelding—want dan zouden alle inspanningen voor niks geweest zijn.

Je zal terecht opmerken dat we het aantal HTTP-requests op deze manier wel opvoeren. Een praktijktest illustreert echter dat dat eigenlijk helemaal niet opweegt tegen het verminderde gewicht en de verminderde laadtijd van een pagina met veel afbeeldingen. Het [Network Link Conditioner preference pane](http://9to5mac.com/2011/08/10/new-in-os-x-lion-network-link-conditioner-utility-lets-you-simulate-internet-and-bandwidth-conditions/) in Xcode 4 voor Mac OS X Lion helpt je om te simuleren hoe webpagina's ingeladen worden op apparaten met een trage verbinding:

![Schermafbeelding van het voorkeurenpaneel 'Netwerk Link Conditioner' in Mac OS X](https://fronteers.nl/_img/2011/12/nlc.png)

# Hoe gebruik je het?

Opgelet: ik raad af om Mingy te gebruiken op een productiesite. Beschouw het in de eerste plaats als een proof of concept. Ik heb het bijvoorbeeld nog niet aangedurfd om Mingy uigebreid te testen in oudere versies van Internet Explorer, hoewel er in principe weinig kan mislopen.

Net voor het sluiten van je `</body>`, laad je het plugin-script:

```
<script src="mingy/jquery.mingy.js"></script>
```

Vergeet ook niet om ook jQuery zelf in te laden, bijvoorbeeld via de CDN van Google:

```
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
```

In zijn meest eenvoudige vorm, gebruk je de plugin zo:

```
$(function() {
  $('img').mingy();
});
```

Maar je kan ook een object met parameters meegeven:

```
$(function() {
  $('img').mingy({
    quality: 75,
    retina: false,
    noscriptFallback: true,
    reloadOnResize: true
  });
});
```

Zoals gezegd, hoef je aan je `<img>` tags helemaal niets te veranderen:

```
<img src="foto.jpg" width="250" height="250" alt="…" />
```

Voorlopig werkt Mingy enkel met JPG-afbeeldingen. Als je de kwaliteit van een individuele JPG wilt wijzigen, kan je optioneel een `data`-attribuut meegeven:

```
<img src="foto.jpg" width="250" height="250" alt="…" data-quality="50" />
```

In je stylesheet kan je de breedte en hoogte van je afbeeldingen als volgt bijsturen:

```
@media only screen and (max-width: 1000px) {
  img { width: 500px; height: 500px; }
}
@media only screen and (max-width: 500px) {
  img { width: 250px; height: 250px; }
}
```

Mingy zal alle afbeeldingen binnen de selector scope (`$('img')` in dit geval) automagisch fysiek herschalen als de breedte van je browservenster voldoet aan de `min-width` en `max-width` die je hebt opgegeven.

# Achter de schermen

Mingy gebruikt Apache's [mod_rewrite module](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) en een `.htaccess` bestand dat je in een map met afbeeldingen plaatst. Ik realiseer me dat dat sommige mensen afschrikt, maar feit is dat het op de meeste webservers gewoon wérkt. Hieronder volgt de inhoud van het `.htaccess`-bestand. Wie dat wil, kan het herschrijven van de URL trouwens vast ook op een 'anders geaarde' webserver aan de praat krijgen.

```
<IfModule mod_rewrite.c>
  RewriteEngine on
  RewriteRule (.*\.jpg)\((.*)\) mingy/resize.php?file=$1&options=$2 [L,QSA]
  RewriteRule (.*\.jpg) mingy/resize.php?file=$1&loading=true&noscriptfallback=true [L,QSA]
</IfModule>
```

JavaScript zorgt ervoor dat `<img src="foto.jpg" height="200" alt="…" />` omgevormd wordt naar iets als `<img src="foto.jpg(141,141,false,false,70) width="300" height="200" alt="…" />`. Deze URI lijkt op een function call en dat is het eigenlijk ook. Ach, het kon vast net zo goed met vraagtekens en ampersands, maar ik vond dit mooier staan. Bovendien zorgt het voor een betere client-side caching en voorkomt het mogelijk zelfs caching issues met sommige proxy-servers. Dat laatste is slechts een aanname.

De twee belangrijkste parameters zijn de eerste en de tweede: hiermee geven we de gewenste breedte en hoogte door aan het PHP-script. Over de andere drie parameters heb ik het straks nog even (zie 'Handigheidjes').

Het script [resize.php](https://github.com/roelvangils/mingy/blob/master/mingy/resize.php) wordt twee keer uitgevoerd als JavaScript aanstaat:

* De _tweede_ reguliere expressies matcht de originele URL en zorgt ervoor dat de transparante PNG wordt ingeladen.
* Onmiddellijk daarna, wanneer het jQuery-script alle `src`-attributen heeft gemanipuleerd, wordt de _eerste_ regex gematcht en stuurt `resize.php` een afbeelding met de juiste afmetingen naar de browser. Die wordt op de server gecachet.

Bezoekers zonder JavaScript laten we niet in de kou staan (je weet wat er gebeurd is met dat meisje met de zwavelstokjes dat op kerstavond in de kou bleef staan, toch?). Met JavaScript schrijven we een cookie weg (`js=true`) die we vervolgens met het PHP-script dat de afbeelding genereeert, weer inlezen. Als de cookie niet bestaat, sturen we geen transparante PNG naar de browser, maar gewoon de master image. Dat heeft als nadeel dat bezoekers die cookies uitgezet hebben en JavaScript aan hebben staan, extra image-data te verwerken krijgen.

# Handigheidjes

## Ook zonder CSS

Situatie: klant uploadt een 5-megapixel-foto via een upload-knop in een WYSIWYG-editor als CKeditor of TinyMCE en maakt ‘m kleiner door zelf de breedte en hoogte in te tikken in een hiervoor bestemd dialoogvenster. De fysieke bestandsgrootte blijft ongewijzigd, maar enkel de waarde van het `width`- en `height`-attribuut worden gewijzigd. Het gevolg is dat je niet alleen je eigen bandbreedte verspilt, maar ook die van je bezoekers. Da's duidelijk een _#fail_, maar toch zie je het nog vaak gebeuren.

```
<img src="bigass_2592x1944.jpg" width="300" height="200" alt="Verspilde bandbreedte />
```

Je kan het de klant natuurlijk niet kwalijk nemen en als je een [slim CMS](http://qontent.nl/) gebruikt, is het al helemaal geen issue. In andere gevallen kan Mingy hier mogelijk een uitkomst bieden; het script baseert zich immers (ook) op de waarden van het `width`- en `height`-attribuut voor het herschalen van afbeeldingen.

## JPEG-compressie ('quality')

Omdat de afbeeldingen toch op de server bijgeknipt worden (en gecachet), lag het voor de hand om een optie toe te voegen waarmee je de kwaliteit kan kiezen. Net zoals in het Save for Web-venster van Photoshop, kan je waarden van 1 tot 100 invullen. Als je de tab 'Net' in Firebug of 'Network' in de Webkit Inspector opent, kan je zo in een oogopslag zien welk effect het kiezen van een sterkere compressie heeft op het totale gewicht en de totale laadtijd van je pagina.

Onderstaand screenshot illustreert trouwens ook duidelijk wat ik eerder beschreef: initieel worden de placeholder PNG's van 68 bytes geladen en hierna pas de werkelijke afbeeldingen.

![Schermafbeelding van het Tabblad 'Net → Images' in Firebug voor Firefox](https://fronteers.nl/_img/2011/12/firebug.png)

## Retina

Wie een iPhone 4 of iPhone 4S (en arendsogen) heeft, zal de scherpere beeldkwaliteit van foto's in zogeheten retina-kwaliteit mogelijk waarderen. Persoonlijk vind ik het de extra kilobytes niet waard, maar misschien ligt dat aan mijn slechte ogen. Je zou de retina-versie ook kunnen gebruiken voor foto's die zo belangrijk zijn dat je verwacht dat bezoekers erop zullen inzoomen; in dat geval is het meegenomen dat het beeld extra scherp is.

Met JavaScript detecteren we of het apparaat een dubbele resolutie ondersteunt. 'Feature detection' heet dat, met een mooi woord. Probeer het zelf met:

```
console.log(window.devicePixelRatio > 1); // `true` of `false`
```

* `retina: true` zorgt ervoor dat de resolutie van *alle* afbeeldingen verdubbeld wordt. Dat is niet zinvol, maar je kan het gebruiken om te debuggen (of om te checken hoe zwaar je pagina wordt voor iPhone 4(s)-gebruikers).
* `retina: auto` zorgt ervoor dat de resolutie enkel verdubbeld wordt als het apparaat het beeld ook echt met een dubbele resolutie kan weergeven (hier gebruiken we feature detection).
* Met `retina: false` zet je het helemaal uit. Dit is de standaardwaarde.

De retina-parameter geef je mee in de vorm van een `data`-attribuut (voor een individuele afbeelding) of als onderdeel van het object met opties bij het aanroepen van de plugin (zie eerder).

## reloadOnResize

Bezoekers waarderen het dat websites netjes de breedte van hun appaaraat of de viewport van hun browser vullen en ze niet horizontaal hoeven te scrollen. Maar ze lopen heus niet als een gek hun browser te resizen of hun tablet in alle mogelijke richtingen te draaien om te kijken wat er dan gebeurt. Nee, dat is beroepsmisvorming; enkel _wij_ kicken erop om te kijken hoe leuk alles meeschaalt en wanneer de media queries hun uitwerking hebben.

Maar omdat het helemaal niet zo ingewikkeld bleek om de afbeeldingen ook bij het resizen van het venster opnieuw in te laden, heb ik er toch maar een optie in gestopt die dat toelaat. En stiekem vind ik het zelf ook wel cool.

# Ten slotte

Ik heb dit artikel (en het script) in de eerste plaats geschreven om m'n eigen gedachten op een rijtje te zetten. Ik pretendeer niet dat deze aanpak beter is dan eender welke andere aanpak, maar ik vond het vooral leuk om te doen. Als ik de tijd vind, lijkt het me leuk om Mingy te finetunen. En als jij het een leuk idee vindt, nodig ik je uit om het script te forken op [Github](https://github.com/roelvangils/mingy).

Ten slotte wil ik graag JavaScript-whizzkid [Mathias Bynens](https://mathiasbynens.be/) bedanken omdat hij zo vriendelijk was om het JavaScript-gedeelte van Mingy met een kritisch oog te bekijken en te optimaliseren. Want eigenlijk ben ik maar een wannabe-developer.

### Over Roel Van Gils
<img src="/archief/_img/2011/12/roel-van-gils.jpg" alt="Foto van roel van gils" class="floating-portrait">
Roel Van Gils noemt zichzelf webarchitect. Als zelfstandig consultant geeft hij advies en helpt bedrijven en overheden met het bouwen van efficiënte, toegankelijke en gebruiksvriendelijke websites en applicaties. Hij werkt voor het web sinds 2000 en is mede-initiatiefnemer van [AnySurfer](http://www.anysurfer.be/), een Belgische organisatie die ijvert voor een toegankelijker internet voor mensen met een handicap. Roel steekt ook graag een handje toe bij het organiseren van [Fronteers-bijeenkomsten](/bijeenkomsten) in Vlaanderen. Hij twittert als [@roelvangils](https://twitter.com/roelvangils).

Donatie: Belgisch Centrum voor Geleidehonden
In mijn omgeving heb ik zelf gezien hoe een geleidehond het leven van iemand die slechtziend of blind is helemaal kan veranderen. Ik ken jammer genoeg ook mensen die al jaren uitkijken naar een eigen geleidehond–of een opvolger voor een hond die te oud was geworden. Het opleiden van een hond is enorm tijdsintensief en daardoor is de wachtlijst lang. Ik steun het [Belgisch Centrum voor Geleidehonden](http://www.geleidehond.be/), een vzw die sinds 1990 alles in het werkt stelt om honden op te leiden en ze daarna kosteloos ter beschikking stelt aan wie ze echt nodig heeft.
