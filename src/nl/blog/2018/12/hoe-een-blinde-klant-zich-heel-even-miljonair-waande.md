---
title: "Hoe een blinde klant zich heel even miljonair waande"
date: 2018-12-14
author: Roel van Gils
categories: 
  - Adventskalender
---
Tijdens een screenreader demo zorgt het wel eens voor verwarring (of hilariteit) als een Engelse afkorting met een sappig Vlaams accent wordt opgelezen, of wanneer een screenreader iets onverstaanbaars uitkraamt. In uitzonderlijke gevallen leest een screenreader ook iets voor wat er helemaal niet lijkt te staan. _Weird_!

Front-endontwikkelaars die hun werk testen met een screenreader — dat is een prima gewoonte — komen hierdoor wel eens in de verleiding om 'ter verduidelijking' verborgen stukjes tekst toe te voegen, of te vervangen door iets anders (bijvoorbeeld met behulp van een `aria-label`).

Is dat nou echt nodig? Of maakt het je webinhoud juist minder toegankelijk? Dat onderzoek ik voor je in dit artikel.

![Collage: stapel eurobiljetten en icoon van een luidspreker](/_img/adventskalender/euros-full.jpg)





# What the FAQ?

Wat volgt, is een eerder extreem voorbeeld, maar het zet de toon. Een tijd geleden stootte ik op deze vraag in een discussiegroep:

"Help! Jaws (een populaire screenreader) leest de link 'FAQ' in onze navigatie voor als _f*ck_. Dat wil ik niet. Hoe los ik dat op?"

Behulpzame mensen suggereerden vervolgens vanalles, gaande van het toevoegen van een `<abbr title="Veelgestelde vragen">` tot het vervangen van het woord _FAQ_ door _F.A.Q._ (waardoor de letters afzonderlijk worden uitgesproken). Het slechtste advies was wellicht om het woord FAQ met behulp van een `aria-label` te vervangen door het fonetische _F E Cue_ (omdat dat met een Nederlandse stem dan net zo klinkt als FAQ in het Engels).

De tipgevers leken ervan uit te gaan dat iedere screenreader _dezelfde_ text-to-speech (TTS) engine gebruikt (met dezelfde uitspraakregels) en dat TTS de _enige_ manier is waarop blinde gebruikers tekst en webinhoud consumeren.

Wat ze ook over het hoofd zagen, is dat _F E Cue_ in (refreshable) braille vast nog meer wenkbrauwen doet fronsen dan wanneer FAQ als _F*ck_ wordt uitgesproken. De meeste blinden gebruiken TTS en braille immers naast (en door) elkaar, bijvoorbeeld voor het invullen van formulieren en het verbeteren van teksten (een dt-fout kan je immers niet horen).

# Wat is dan de juiste aanpak?

Een goede raad is om je niet al te druk te maken om zo'n _slip of the (synthetic) tongue_. Ik zou hoogstens adviseren het woordje FAQ te voorzien van een `lang="en"` attribuut. Hierdoor zal een screenreader in de meeste gevallen tijdelijk omschakelen naar een Engelstalige TTS engine voor het oplezen van dat ene woordje. Dat zou je overigens ook kunnen doen wanneer je een Engelse uitdrukking gebruikt, zoals _a slip of the tongue_ dus.

In theorie zou je er ook met CSS voor kunnen zorgen dat een string uitgespeld wordt, bijvoorbeeld door een eenvoudige helper class te gebruiken:

```
.speak-literal {
    speak: literal-punctuation;
}
```

Helaas werkt dat dan weer enkel op iOS, dus ook daar kan je niet op vertrouwen.

Maar, omdat je aandringt: hier zijn drie verschillende manieren waarop FAQ kan weerklinken door de speakers van je gebruiker:

* FAQ wordt netjes (als een letterwoord) gespeld door *Alex* (een Amerikaanse mannenstem die standaard bij macOS zit).
* FAQ wordt (voluit) opgelezen als 'Frequently Asked Questions' door *Nora* of *Samantha* (populaire stemmen in VoiceOver op iOS).
* FAQ klinkt _inderdaad_ als _F*ck_ uit de (synthetische) mond van de meeste Nederlandse stemmen van fabrikant Nuance, die bijvoorbeeld populair zijn bij Windows-gebruikers.

# Let it go

Je kunt nooit met zekerheid weten welke synthetische stem je gebruiker verkiest of geïnstalleerd heeft, laat staan hoe geavanceerd de _voice heuristics_ zijn die de TTS engine hanteert bij het omzetten van tekst naar kunstmatige spraak. Straks meer over de werking van die heuristics.

Je kan bijgevolg helemaal niet voorspellen hoe _FAQ_ (of een ander woord) zal klinken op het device van jouw gebruiker.

# Hoe werkt dat dan?

Windows, macOS, iOS en Android hebben een ingebakken Speech API. Die zorgt ervoor dat software-ontwikkelaars gemakkelijk een stem kunnen geven aan hun applicaties. Ook screenreaders als Jaws en VoiceOver maken gebruik van die functionaliteit.

Zo'n Speech API werkt maar in één richting: de screenreader stuurt strings (woorden of lappen tekst) naar de Speech API en geeft hierbij hoogstens aan met *welke stem* (en dus ook in welke taal) en met *welke spreeksnelheid of toonhoogte* die fragmenten voorgelezen moeten worden. Dat doet zo'n kunstmatige stem vervolgens plichtsgetrouw, zonder zich bewust te zijn van de context.

(Die stukjes tekst haalt de screenreader overigens eerst — via een Platform API — op uit de _accessibility tree_ van je browser, maar dat is een verhaal voor een andere keer.)

# Stephen Hawking on steroids?

Kunstmatige stemmen (in alle mogelijke talen) worden tegenwoordig gewoon meegeleverd met het OS. Voor Windows, macOS en Android zijn bovendien diverse _third party_ stemmen te koop die ontwikkelaars via dezelfde API’s kunnen aanspreken. Sommige van die stemmen klinken tegenwoordig verbazend natuurgetrouw ([Google Wavenet](https://deepmind.com/blog/wavenet-generative-model-raw-audio/), anyone?), maar dat is niet per se wat een screenreadergebruiker wil.

Screenreadergebruikers bepalen helemaal _zelf_ welke stemmen hen het meeste comfort bieden. De meeste gebruikers verkiezen hierbij efficiëntie boven 'menselijkheid'.

Een vriend van me is blind. Hij zweert bij een (stokoude) robotische stem met een erg hoge spreeksnelheid (Stephen Hawking on steroids, zeg maar). Voor een ongetraind oor klinkt dat als een onverstaanbaar geratel, maar voor hem is het een uiterst effectieve manier om snel informatie te 'op te nemen'. Het gaat immers veel sneller dan braille lezen, en misschien zelfs sneller dan 'gewoon' lezen (met je ogen dus).

# Voice Heuristics

TTS engines zitten vol met regeltjes of 'heuristics'. Die zijn bedoeld om de stem zo natuurlijk mogelijk te doen klinken, en zijn verschillend naargelang de stem, de taal, de fabrikant en de versie van de stem (yes, ook stemmen krijgen wel eens een update).

Als een TTS engine té slim wordt, loopt het wel eens mis. Straks meer, maar eerst: speeltijd.

# Tem die stem!

Om een idee te krijgen hoe die 'regeltjes' werken, is het leuk om zelf wat te experimenteren met hoe verschillende strings voorgelezen worden met verschillende stemmen.

Op macOS kan je in een Terminal-venster het `say` commando uitvoeren. Met `-v` kies je de stem. Ga naar *Systeemvoorkeuren → Spraak* om te zien welke stemmen beschikbaar zijn op jouw computer (of tik `say -v ?` in de Terminal).

## Enkele leuke voorbeelden:

```
say "Lodewijk IV" -v Xander	# klinkt als "Lodewijk Vier"
say "Louis IV" -v Alex		# klinkt als "Louis The Fourth"
```

## Hé, wat is ie slim! Of toch niet?

```
say ":-)" -v Alex	# klinkt als "" (stilte)
say ":-)" -v Ellen	# klinkt als "Blije smiley"
say "(*)" -v Alex	# klinkt als "Asterisk"
say "(*)" -v Ellen	# klinkt als "" (stilte)
```

Je leest (hoort) het goed: de Vlaamse stem Ellen negeert deze drie opeenvolgende karakters (haakje open, asterisk,  sluitend haakje) gek genoeg helemaal. Best lastig wanneer je wilt aangeven wanneer iets verplicht in te vullen is. Hier zou een `aria-label="Verplicht"` bijvoorbeeld uitkomst kunnen bieden.

## Maar, wat denk je van deze?

```
say "1/12/2018" -v Xander	# klinkt als "1 december 2018"
say "1/12/2018" -v Alex		# klinkt als "January 12, 2018"
```

Wacht, wat? Dit zijn toch precies dezelfde strings? Probeert de TTS Engine ons te slim af te zijn?

Xander is een Nederlandse stem, Alex een Amerikaanse. Als je een Amerikaan van vlees en bloed zou vragen om "1/12/2018" voor te lezen, zou hij het net zo interpreteren (en voorlezen) als Alex. Als 12 januari dus. Slim toch, van die computerstem?

En toch zie je dat developers in meertalige applicaties helemaal overboord gaan met dynamisch gegenereerde `aria-label`'s om ervoor te zorgen dat datums, prijzen, tijdstippen etc. 'juist' opgelezen worden. Helemaal niet nodig, en een vorm van over-engineering waarmee ze het zich enkel lastig maken.

Als je hierop let, gaat het vanzelf goed:

* Zorg ervoor dat je de (natuurlijke) taal goed aangeeft (bv. met een `lang` attribuut op het `<html>` element) zodat de screenreader een TTS engine aanspreekt die de juiste taal spreekt.
* Respecteer simpelweg lokale regels over de notatie van datums: als je applicatie in het Nederlands wordt weergegeven, gebruik je `dd/mm/jjjj`. In het Engels wordt dat `mm/dd/yyyy`. Dan gaat het vanzelf goed.

# Hoe een blinde klant zich heel even miljonair waande

Ik sluit af met een _true story_. Deze (sterk vereenvoudigde) markup oogt onschuldig, zeg nu zelf. (Ik heb het stukje HTML geplukt uit de webapplicatie van een bank.)

```
<h1>Transacties</h1>
<ul>
  <li>
    <span class="date">1/12/2018</span>
    <span class="amount">€ 50</span>
    <span class="from">R. Van Gils</span>
  </li>
  <li>
    <span class="date">31/11/2018</span>
    <span class="amount">€ 25</span>
    <span class="from">M. Rutte</span>
  </li>
</ul>
```

Je weet natuurlijk dat `<span>`'s _inline level_ HTML-elementen zonder semantische eigenschappen zijn. Daarom worden het bedrag en de naam in de accessibility tree 'versmolten' tot de strings `€ 50 R. Van Gils` en `€ 25 M. Rutte`. Dat gebeurt overigens ook wanneer de `<span>`'s met `display: flex` of `display: block` worden uitgelijnd (of anderszins opgesmukt), want daar heeft een screenreader lak aan.

De TTS engine zal opnieuw zijn (of haar) beste beentje voorzetten om de aangeleverde strings zo menselijk mogelijk voor te lezen. Dat is immers haar (of zijn) enige taak.

Voor bovenstaand voorbeeld klinkt dat (alweer afhankelijk van de gebruikte TTS engine) ongeveer zo:

* Kopniveau 1: Transacties
* Lijst met 2 items
* *Vijftig euro R. Van Gils*
* *Vijfentwintig miljoen euro Rutte*
* Einde van lijst

Wat? 🙆‍♀️  Vijfentwintig miljoen? Dat klopt natuurlijk niet. De helpdesk van deze bank reageerde met ongeloof toen een blinde klant dit probleem meldde, en ook de testers wisten er in eerste instantie geen raad mee.

Maar, je begrijpt intussen waar het aan ligt: een gebrek aan semantiek in combinatie met 'slimme' voice heuristics. De voorletter 'M.' zorgt er namelijk voor dat de string `€ 25 M. Rutte` geïnterpreteerd (en opgelezen) wordt als *Vijfentwintig miljoen euro Rutte*.

Is het een edge case? Tja, wel eentje die zich voordoet bij alle mensen die M. als voorletter hebben in hun naam. Is het makkelijk te voorkomen? Zeker! Je hoeft dit niet te patchen met `aria-label`'s. Je lost het simpelweg op door headings, paragrafen en lijsten te gebruiken in plaats van `<span>`'s. Of wat had je gedacht?

# Conclusie

Je zal het altijd zien: als je paginasemantiek fout zit (of ontbreekt), gaat de accessibility van je website ook de mist in. Niet enkel omdat het dan lastig navigeren wordt voor screenreadergebruikers, maar dus ook omdat TTS Engines de plank dan vaker misslaan.

Dat neemt niet weg dat het altijd de moeite loont om je website te testen met een _echte_ screenreader. Zo kan je gênante situaties voorkomen.

En, oh ja: maak je niet al te druk over iedere synthetische _slip of the tongue_, want dat doen jouw gebruikers ook niet.

### Over Roel van Gils
<img src="/_img/adventskalender/roel.jpg" alt="Foto van Roel van Gils" class="floating-portrait" /> 
Roel noemt zichzelf een Digital Accessibility Nerd. Met zijn bedrijf Eleven Ways (gevestigd in Gent) helpt hij overheden en bedrijven die hun websites en apps voor zoveel mogelijk mensen toegankelijk willen maken. Roel steekt ook wel eens een handje toe bij het organiseren van Fronteers-bijeenkomsten in Vlaanderen. Hij twittert als [@roelvangils](https://twitter.com/roelvangils).

Donatie: Belgisch Centrum voor Geleidehonden
In mijn omgeving heb ik zelf gezien hoe een geleidehond het leven van iemand die slechtziend of blind is helemaal kan veranderen. Ik ken jammer genoeg ook mensen die al jaren uitkijken naar een eigen geleidehond–of een opvolger voor een hond die te oud was geworden. Het opleiden van een hond is enorm tijdsintensief en daardoor is de wachtlijst lang. Ik steun het Belgisch Centrum voor Geleidehonden, een vzw die sinds 1990 alles in het werkt stelt om honden op te leiden en ze daarna kosteloos ter beschikking stelt aan wie ze echt nodig heeft.
