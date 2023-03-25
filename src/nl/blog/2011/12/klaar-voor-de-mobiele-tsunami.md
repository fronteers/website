---
title: "Klaar voor de mobiele tsunami"
date: 2011-12-17
author: Peter-Paul Koch
categories: 
  - Adventskalender
---
Als ze het niet nu al doen, wordt 2012 het jaar waarin je klanten je gaan vragen om een mobiele website. Hier zijn wat snelle wenken voor diegenen onder ons die mobiel nog niet echt goed bestudeerd hebben.

# Eerste testen

Je hebt waarschijnlijk al een smartphone voor prive-gebruik. Kijk er eens op naar je recente projecten. Waarschijnlijk zie je al direct enige zaken die voor verbetering vatbaar zijn. Maak een lijstje, en spreek met jezelf af dat je hier in je volgende project iets aan gaat doen.

Let op: ik zeg hier *smartphone*, en niet tablet! Voor je eerste tests is een tablet minder geschikt, omdat het scherm niet voldoende afwijkt van dat van desktopcomputers. Een extreem verschil in schermgrootte zet je sneller op het goede spoor dan schermen die slechts iets kleiner dan het gemiddelde desktopscherm zijn.

Maak je nog niet teveel zorgen over representativiteit van je smartphone: zelfs als je uitsluitend een iPhone of Android bezit, kan een snelle test je toch al iets nuttigs vertellen over mobiele websites. De belangrijkste wijziging ten opzichte van een ouderwetse desktop-site is het kleine scherm. Bedenk wat je er qua design en interactie aan wilt doen; later in dit artikel vind je de technische tip die je hiervoor nodig hebt.

# Eén site of meerdere sites?

Idealiter vraagt je klant je om een geheel nieuwe website die zowel op desktop als op tablet en mobiel werkt. Op deze manier kan je direct aan de slag met nieuwe methodes en technieken—en wordt 't nog betaald ook.

Helaas zullen sommige klanten, vooral de kleinere, je vragen om hun site snel geschikt te maken voor mobiel. Lage kosten zijn hierbij belangrijk, dus je kunt je nog niet betaald wekenlang gaan uitleven.

Er zijn twee basiskeuzes: of met behulp van media queries (die we zodadelijk zullen bespreken) enkele extra CSS-regels voor kleine schermen toevoegen, of een geheel aparte mobiele website opzetten, en mobiele browsers middels een server-side browser detect daar naartoe doorsturen.

# Geen van beide oplossingen is ideaal:

* Als je met media queries wat extra CSS invoegt, zorgt dat er wel voor dat de site er acceptabel uitziet, maar kan de site te zwaar blijven voor mobiele connecties. Immers, je kunt een groot plaatje of een video die niet geschikt is voor mobiel wel een snelle `display: none;` meegeven, maar daarmee voorkom je niet dat de browser het bestand downloadt.
* Als je een aparte mobiele website maakt, zondig je tegen het One Web-principe. Het is zelden echt nodig om een aparte site voor mobiel te maken, en het bijhouden van twee sites in plaats van een zorgt ook voor de nodige administratieve traagheid. Een goed CMS kan hier uitkomst bieden, maar ... naja, we weten allemaal hoe het met CMS'en gesteld is.
* Bovendien is er voor deze oplossing ook nog een goede browser detect nodig. En die zijn dun gezaaid.

Niettemin zullen deze twee tussenoplossingen waarschijnlijk je enige alternatieven zijn tijdens je eerste mobiele opdrachten. Klanten hebben nou eenmaal niet altijd het budget dat eigenlijk nodig is.

# De grote truc

Het maken van een mobiele site kent vele technische trucs en eigenaardigheden, maar één daarvan steekt met kop en schouders boven de rest uit: de combinatie van 'meta viewport' en `width` media queries.

Dit werkt als volgt. Allereerst voeg je in de `<head>` van het document de volgende tag toe:

```
<meta name="viewport" content="width=device-width">
```

Dit beveelt de browser de website zo te tonen dat hij precies op het scherm past en de gebruiker niet hoeft in te zoomen om de inhoud te lezen. De exacte breedte van de site hangt af van het apparaat: een iPhone maakt de site 320 pixels breed, terwijl de verschillende Androids kunnen varieren van 240 tot 480. Tablets nemen meestal een breedte tussen de 600 en 1000 pixels.

De truc hier is dat deze breedte gekozen is door de fabrikant van het apparaat (of de browser), en dat alle fabrikanten tegenwoordig de moeite nemen om deze breedte goed af te stellen. De meta viewport wordt immers al op behoorlijk veel sites gebruikt, en nieuwe apparaten en browsers moeten zorgen dat ze deze sites goed tonen.

Nu krijgt je site dus de ideale breedte op (bijna) alle apparaten. Hierna wordt het tijd voor de tweede grote truc: `width` media queries. Dat gaat als volgt:

```
@media all and (min-width: 600px) {
  #sidebar {
    float: left;
    width: 20%;
  }
}
```

Nu krijgt het element `#sidebar` een `float: left;` en een breedte van 20%, maar alleen als de schermgrootte tenminste 600 pixels is. Is dat niet het geval, dan wordt de CSS rule nooit uitgevoerd.

Je zou ook het omgekeerde kunnen doen:

```
#sidebar {
  float: left;
  width: 20%;
}
@media all and (max-width: 600px) {
  #sidebar {
    float: none;
    width: auto;
  }
}
```

Nu wordt in eerste instantie de eerste rule uitgevoerd, maar als de breedte van de site `600px` of minder is, wordt bij nader inzien `float` uitgezet en komt de `width` weer op `auto` te staan.

Technisch gezien is er geen verschil tussen de twee methodes, maar uit oogpunt van beheersbaarheid verdient de eerste de voorkeur.

De grens van `600px` is hier slechts een voorbeeld: het zou goed kunnen dat jouw design om net een andere grens vraagt. Ook kan je meerdere grenzen gebruiken; bijvoorbeeld 600 en 900 pixels.

Het is het beste om deze grenzen proefondervindelijk vast te stellen: maak een (ruw) ontwerp, verklein je browservenster, en kijk wanneer het ontwerp echt te lelijk of te onoverzichtelijk wordt. Als dat gebeurt, wordt het tijd een nieuwe grens te definiëren en extra instructies in een media query te zetten.

Als je de meta viewport combineert met de `width` media query, heb je de voornaamste CSS-stap op weg naar een universele site gezet.

# Browsers

Zodra je mobile webontwikkelen serieus gaat aanpakken, kom je op de vraag in welke browsers je moet testen. De leidraad is uiteraard de browserverdeling die het statistiekenpakket van je klant laat zien, maar als dat pakket niet zo goed is, geen aparte mobiele statistieken bijhoudt, of helemaal afwezig is, moet je een gok nemen.

Deze gok dien je uiteraard te baseren op algemene Nederlandse mobiele browserstatistieken, en de enige bron hiervoor is [StatCounter](http://gs.statcounter.com/#mobile_browser-NL-yearly-2011-2011-bar). Hieruit blijkt dat iPhone en Android overweldigend dominant zijn: samen hebben ze ruim 80% van de markt in handen. Op grote afstand volgen Nokia, BlackBerry en Opera.

Dus je eerste prioriteit is Safari voor iOS en Android WebKit—waarvan de laatste helaas niet zo'n geweldige browser is. Beide zijn gebaseerd op WebKit en beide ondersteunen CSS en JavaScript goed, maar je zult snel merken dat Android WebKit wat houteriger omgaat met dingen als touch events en animaties.

Wat goed nieuws: Internet Explorer doet er niet toe op mobiel. Het zou kunnen dat de nieuwe Nokia Windows Phones een succes worden, en dan zal je gedwongen worden weer IE tests te doen, maar dat is dan in elk geval op IE9.

Ik raad je ten sterkste aan aan je iPhone/Android basispakket ook [Opera Mini](http://www.opera.com/mobile/) toe te voegen: hoewel deze browser niet zo vreselijk populair is in Nederland, leert het webontwikkelen voor Opera Mini je heel veel over het mobiele web.

Opera Mini is een zogenaame proxy browser, wat betekent dat een HTTP request niet direct naar de opgevraagde site gaat, maar naar een Opera Mini-server. Deze server vraagt alle noodzakelijke bestanden op, bouwt de pagina op en stuurt daarna in essentie een plaatje door naar de Opera Mini-client op de telefoon. Het grote voordeel is dat de browser op de telefoon bijna niets hoeft te kunnen, wat betekent dat hij ook kan draaien op een oude (en dus technisch inferieure) telefoon. Bovendien is de data die naar de telefoon gezonden wordt, zeer sterk gecomprimeerd, wat de gebruiker behoorlijk in datakosten kan schelen. Vooral voor mensen die op roaming zijn aangewezen, is Opera Mini een uitkomst. (Ikzelf gebruik hem altijd in het buitenland, en tegenwoordig meestal ook terwijl ik in Nederland ben. Zelfs op mijn iPhone.)

Opera Mini ondersteunt wel JavaScript, maar elke JavaScript function call vereist een nieuw request aan de Opera Mini-server, die berekent hoe de nieuwe pagina er uit komt te zien en het resultaat weer doorstuurt. Er is dus geen client-side interactiviteit mogelijk.

Dit alles zorgt er voor dat je van het ontwikkelen voor Opera Mini meer leert dan van ontwikkelen voor iPhone en Android, en daarom raad ik iedereen aan deze browser in hun lijstje op te nemen.

BlackBerry heeft vanaf OS6 een nieuwe, uitstekende browser die op WebKit gebaseerd is. Hij is, na Safari, de beste mobiele browser die er is, dus hier hoef je geen problemen te verwachten. Helaas geldt dit niet voor de oude BlackBerry browser op OS5 en lager: vooral JavaScript is hier vrijwel niet mogelijk wegens volstrekte afwezigheid van performance. Mocht je een complex script schrijven, gebruik dan een harde browser detect om het script voor BlackBerry 5 en lager geheel uit te schakelen.

De Nokia-browser, tenslotte, is ook op WebKit gebaseerd, en is redelijk, maar niet overweldigend goed. Als deze browser voor je van belang is, zorg er dan voor dat je zowel oude als nieuwe Nokia-toestellen tot je beschikking hebt.

# Toestellen kopen

Dat brengt ons op het laatste onderwerp: welke toestellen moet je hebben?

Je moet daadwerkelijke mobiele telefoons hebben. Hoewel emulators je kunnen helpen, zijn ze *niet goed genoeg* voor serieuze mobiele webontwikkelaars. Je moet een telefoon in je handen hebben en er mee werken zoals een gebruiker dat doet, anders kan je je site niet afdoende testen.

Je dient dus budget in te plannen voor de aanschaf van mobiele telefoons. Dit is gewoon een zakelijke uitgave die je uiteindelijk weer aan je mobiele klanten terugverdient.

Als eerste raad ik je aan je te concentreren op iPhone en Android. Waarschijnlijk heb je er daar al een van als je eigen mobiele telefoon.

Het beste is om meteen twee Androids te nemen, aangezien er wat subtiele verschillen zijn tussen de Androids van de verschillende merken. Je kunt bijvoorbeeld een Samsung en een HTC nemen. Zorg er ook voor dat ze verschillende schermgroottes hebben, en dat ze beide verschillen van de iPhone.

Installeer Opera Mini op deze toestellen: de browser is beschikbaar voor iPhone, Android, en nog een boel andere platforms.

Heb je daarna nog geld over, dan is het verstandig aan een Nokia te gaan denken. Kies een redelijk populair Symbian model: veel mensen hebben zo'n telefoon nog op zak, hoewel ze er lang niet allemaal mee surfen. Of je kan gelijk in het diepe springen en een gloednieuwe Windows Phone kopen.

Tenslotte zou je aan een BlackBerry kunnen denken. Koop dan een nieuwe (OS6 of hoger), en je hebt direct de op een na beste mobiele browser tot je beschikking.

Koop ook eens een toestel dat niet alleen maar een touchscreen heeft, maar ook (of alleen maar) een toetsenbord of four-way navigation. Niet alle mobiele gebruikers navigeren per touchscreen, en je zal ook andere input modes moeten leren kennen. Oudere Nokia's en BlackBerry's zijn hier prima geschikt voor.

Ook een tablet zou geen gekke investering zijn. Uiteraard ligt een iPad het meest voor de hand, maar je hebt hier uit testoogpunt niet zo heel veel aan. De browser is exact dezelfde als op de iPhone, dus het enige verschil is de schermgrootte, en dat is iets wat elke tablet je geeft. Denk ook eens aan een Android-tablet (hoewel die niet heel erg fantastisch in het gebruik zijn) of aan een BlackBerry PlayBook (uitstekende browser, en verder helemaal niet slecht, al zou de batterijduur wel wat beter mogen).

Probeer er voor te zorgen dat je tenminste elk half jaar of zo een nieuw apparaat kunt kopen. Niet alleen breid je zo gestaag je collectie uit, maar je kunt ook inspelen op veranderingen in de mobiele markt. Wat als webOS ineens door een grote partij wordt gelanceerd? Of als het mysterieuze Tizen-project toch iets blijkt voor te stellen? In dat geval moet je je kunnen veroorloven een nieuw testapparaat te kopen.

# Tot slot

Ik hoop dat deze collectie tips je helpt je eerste schreden naar webontwikkeling voor alle apparaten te zetten.

En zeg nou zelf, een dynamisch nieuw ecosysteem met tien operating systems en vijftien browsers is toch veel interessanter dan altijd maar diezelfde vijf saaie desktop-browsers waarvan we ondertussen elk bugje en hikje kennen?

(TODO: Over Peter-Paul Koch
2011/12/peter-paul-koch.jpg
Peter-Paul Koch is oprichter en voorzitter van Fronteers, en houdt de stand van zaken in de chaotische mobiele browsermarkt bij op [QuirksMode.org](http://quirksmode.org/). Hij spreekt in binnen- en buitenland, doet wat consultancy, en werkt gestaag aan zijn mobiele telefooncollectie, die op dit moment uit tweeëntwintig prachtexemplaren bestaat. Zijn volgende leerproces wordt het op het gehoor leren herkennen van mobiele telefoons aan de hand van het geluid dat ze maken als ze op de grond vallen.

**Donatie:** [Bits of Freedom](https://www.bof.nl/)
Waarom Bits of Freedom? Omdat digitale burgerrechten steeds belangrijker worden.)
