---
title: Wees (niet) slim en gebruik webstandaarden
date: 2022-12-14
author: Derk-Jan Karrenbeld
categories:
    - Adventskalender
---

Aangezien dit een lang artikel is, eerst even in het kort:

-   Gebruik van webstandaarden kunnen je helpen keuzes te maken;
-   Slimmere mensen dan ik hebben allerlei manieren bedacht om het wereldwijde web te gebruiken, inclusief allerlei randvoorwaarden en afwegingen;
-   Er bestaat een voorstel voor alles wat je maar kan bedenken;
-   Het web is niet gemaakt voor de browser;
-   Jij gebruikt webstandaarden.

Ben je een front-end developer die meer wil weten over het internet of het wereldwijde web? Ben je een full-stack developer (in wat voor hoedanigheid dan ook) en wil je meer weten over webstandaarden? Wil je helpen met keuzes maken bij architectuur of design van een (web-)API (application programming interface)?

Als je op een van de bovenstaande vragen ja heb geantwoord, of je het een interessant onderwerp lijkt, dan is dit artikel voor jou!

_💡 Doorgaans worden webstandaarden geschreven en gepubliceerd in het Engels. Alle links naar zo'n standaard, een RFC (wat dat is volgt), of media type registratie wijzen naar pagina's in het Engels_.

## Wat is het wereldwijde web?

Om het over webstandaarden te hebben is het handig om eerst een aantal definities te benoemen en toe te lichten.

## HTTP

HTTP staat voor Hypertext Transfer Protocol.

Een protocol is doorgaans een set van regels om een doel te bereiken. In dit geval gaat het om een communicatie en overdrachts protocol en beschrijft de syntax, semantiek, foutdetectie en -correctie, synchronisatie om het volgende te bewerkstelligen:

> [_Wikipedia_](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

Ofwel: _hypertext_ documenten die _hyperlinks_ bevatten naar andere _resources_ die een _gebruiker_ eenvoudig kan raadplegen. Wat deze begrippen inhouden volgt.

## Hypertext, hyperlinks, hypermedia

"Hyper-" van de Griekse prefix "ὑπερ-", hetgeen _over_ of _super_, ofwel _meer dan_ betekent.

-   _Hypertext_ is tekst die digitaal wordt weergegeven, met referenties (jawel, de hyperlink) naar andere (hyper)tekst waar een gebruiker direct bij kan.
-   _Hyperlink_ is een link (een referentie) die een gebruiker toegang geeft tot de data achter die link.
-   _Hypermedia_ is een extensie van de term hypertext en beschrijft de non-lineaire (digitale) media dat platte tekst, hyperlinks, maar ook plaatjes, audio, en video bevat.

Een voorbeeld van een _hypermedium_ is het WereldWijde Web!

## HTML

[HTML](https://html.spec.whatwg.org/) staat voor HyperText Markup Language.

Dit betekent dus ook dat _hypertext_ niet hetzelfde is als _HTML_, maar een manier om hypertext _op te maken_ (te markeren) zodat de data (de tekst, en bij hypermedia ook de andere inhoud) kan worden weergegeven of gerefereerd kan worden (juist, met _hyperlinks_).

[De HTML standaard](https://html.spec.whatwg.org/) is bedoeld om documenten te annoteren zodat ze kunnen worden weergegeven in een web browser. Daarmee is het een manier om hypertekst interactief te maken. De web browser is daarmee (ook) een stuk gereedschap om hyperlinks te volgen.

HTTP helpt ons HTML documenten te versturen. Het is immers een Hypertext _Transfer Protocol_ voor documenten geschreven in Hypertext Markup Language.

## ...en andere media dan?

Als je het web surft, dan heb je doorgaans niet alleen met tekst — plat of opgemaakt — te maken. Je komt ook vaak genoeg andere inhoud tegen zoals plaatjes, audio, video, en andere niet-tekstuele inhoud.

De slimme mensen die HTTP tot leven hebben gebracht (en daarna verder hebben ontwikkeld), hebben een slimme manier bedacht om het mogelijk te maken dat HTTP meer beschrijft en aankan dan _alleen_ hypertext en hypertext-documenten versturen. Dit is ondersteund in HTTP door het gebruik van metadata die, samen met de inhoud waar je om hebt gevraagd, wordt mee gestuurd.

Voor de ondersteuning van andere media dan HTML (en hypertext) wordt meestal gebruik gemaakt van een _Media type (MIME TYPE)_.

## Mediatype

>

Op het web spreken we technisch van _representaties_ van een _resource_. Het formaat van zo'n representatie (dus de syntax, de regels, het gebruik, de beperkingen, enzovoorts) noemen we ook wel een _media type_.

Een aantal voorbeelden van media types zijn:

-   `text/html`
-   `image/png`
-   `application/json`

Er zijn regels over de syntax en het gebruik van deze media types. We hebben met elkaar afgesproken hoe bepaalde binaire data kan worden geïnterpreteerd (gelezen) of worden gearrangeerd (geschreven). Een PNG plaatje is een PNG plaatje als we de binaire data _interpreteren_ als PNG. Hoe dat voor PNG moet is opgeschreven en aangenomen als standaard alvorens het (publiek) te registreren.

## Het registeren van een media type?

Juist. Hier zijn nog drie voorbeelden van media types:

-   `application/vnd.ms-powerpoint`
-   `application/graphql`
-   `application/vnd.xpbytes.errors.v1+json`

Het eerste beschrijft Microsoft Powerpoint bestanden, het tweede was lang de standaard-niet-standaard manier om GraphQL queries en antwoorden te beschrijven, en de laatste is één van de vele _vendor (`vnd`) specifieke_ media types die intern op werk veel wordt gebruikt om foutmeldingen te beschrijven.

Er is een document (en standaard) dat beschrijft hoe je een media type kan registreren:

> [RFC 6838: Media Type Specifications and Registration Procedures](https://tools.ietf.org/html/rfc6838)

Het doel van het registreren van zo'n media type is dat het gebruikt kan worden op het internet, en dat we het er over eens kunnen worden hoe de data kan worden geïnterpreteerd. Er is geen verplichting (regel) om dit te doen voor media types die beginnen met `vnd.`, maar het process kan helpen met het schrijven, opschonen, en verbeteren van een specificatie.

Voor media types buiten de `vnd.` (vendor) en `prs.` (personal) boom — media types die niet beginnen met die prefix — bestaat de verplichting wel. Iets is officieel pas een media type als deze geregistreerd is.

## Request For Comments (RFC)

Dat laatste document voor het registreren van een media type is een RFC: een _request for comments_. Het is een publicatie van een technisch document dat als doel heeft een _nieuwe standaard_ te beschrijven of een _bestaande standaard_ aan te passen (waardoor er een nieuwe standaard ontstaat).

![XKCD 927: Standards. Strip met drie panelen. Koptekst boven de panelen: "How standards proliferate (see: A/C chargers, character encodings, instant messaging, etc.)". Eerste paneel: "Situation: there are 14 competing standards". Tweede paneel: Er wordt gesproken: "14?! Ridiculous! We need to develop one universal standard that covers everyone's use cases.". De reactie hierop is: "Yeah!". Derde paneel: "Soon: Situation. There are 15 competing standards."](https://fronteers.nl/_img/adventskalender/image.png)

Het is veelal de Internet Engineering Task Force (IETF) die zich hiermee bezig houdt. Deze _task force_ die zal na dat een publicatie is beoordeeld door meerdere mensen, en commentaar is geleverd, er voor kunnen kiezen om een voorstel te publiceren als _internet standaard_.

En my oh my... er is een RFC voor écht alles.

## RFC voor alles

Zojuist zijn al wat media types genoemd. Deze bestaan als gepubliceerde RFCs (en daarmee zijn het dus ook internet standaarden). Voorbeelden hiervan zijn:

-   [_image/png_ registratie](https://www.iana.org/assignments/media-types/image/png): specificatie [RFC 2083](https://www.rfc-editor.org/rfc/rfc2083);
-   [_text/html_ registratie](https://www.iana.org/assignments/media-types/text/html): specificatie [RFC 2854](https://www.rfc-editor.org/rfc/rfc2854) (voorheen [RFC 1866](https://www.rfc-editor.org/rfc/rfc1866));
-   [_application/json_ registratie](https://www.iana.org/assignments/media-types/application/json): specificatie [RFC 8259](https://www.rfc-editor.org/rfc/rfc8259) (voorheen [RFC 4627](https://www.rfc-editor.org/rfc/rfc4627))

Ontzettend handig, want als je wil weten of je iets wel of niet kan doen, hoe je dat dan doet, en wat de afspraken zijn, dan kan je deze documenten dus bestuderen en bijna altijd het antwoord er in terug vinden.

Met alles bedoel ik overigens wel écht _alles_. Hoe we platte text beschrijven vind je terug in [RFC 822](https://www.rfc-editor.org/rfc/rfc822), en dat stamt uit de tijd dat _het internet nog niet bestond_ maar we nog spraken van [ARPANET](https://en.wikipedia.org/wiki/ARPANET). Hoe je tekst kan versturen over het internet (over HTTP) is te lezen in [RFC 1521](https://www.rfc-editor.org/rfc/rfc1521#section-7.1), maar ook HTTP zelf is beschreven in RFCs, waaronder:

-   [RFC 1945: Hypertext Transfer Protocol -- HTTP/1.0](https://datatracker.ietf.org/doc/html/rfc1945)
-   [RFC 9110: HTTP Semantics](https://datatracker.ietf.org/doc/html/rfc9110)
-   [RFC 9111: HTTP Caching](https://datatracker.ietf.org/doc/html/rfc9111)
-   [RFC 9112: HTTP/1.1](https://datatracker.ietf.org/doc/html/rfc9112)
-   [RFC 9113: HTTP/2](https://datatracker.ietf.org/doc/html/rfc9113)
-   [RFC 9114: HTTP/3](https://datatracker.ietf.org/doc/html/rfc9114)

(Hidden)

## RFC voor _van alles_

Dat er voor allerlei technische aspecten RFCs bestaan (die dus veelal worden aangenomen als Internet Standaard) is voor mij niet raar. Maar toen ik zei dat er een RFC bestaat voor alles bedoelde ik (nóg) meer. Dus om nog heel even door te ratelen heb ik nog drie voorbeelden.

### RFC 1121

> [RFC 1121](https://www.rfc-editor.org/rfc/rfc1121)

_Een verzameling gedichten_.

### [RFC 1925](https://www.rfc-editor.org/rfc/rfc1925)

```
This memo documents the fundamental truths of networking for the Internet community.
[...]
**The Fundamental Truths**
(1) It Has To Work.
[...]
(3) With sufficient thrust, pigs fly just fine.
```

Twee waarheden:

1. Een fundamentele waarheid over communicatie over en gebruikmakend van het internet: "Het moet werken"
2. Met voldoende stuwkracht kunnen varkens prima vliegen.

### [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119)

Maar ook randzaken die ontzettend belangrijk zijn als we het hebben over standaarden zijn terug te vinden in een RFC.

Degene die het meest voor komt is [RFC 2119: Key words for use in RFCs to Indicate Requirement Levels](https://www.rfc-editor.org/rfc/rfc2119):

>

Er zijn nauwe definities voor de sleutelwoorden hier genoemd, en weten wat die definitie is helpt bij zowel het opstellen van als het lezen van een RFC en subsequent ook een Internet Standaard.

(Hidden)

## Maar wat heb ik hieraan?

Laten we beginnen met de vraag: _Voor wie is HTTP bedoeld?_. Je hebt het woord _gebruiker_ een aantal maal gelezen, zonder dat ik heb gedefinieerd wie of _wat_ een gebruiker is. Wat is dat, een gebruiker?

Het antwoord hierop kunnen we terug vinden in [RFC 2616: Hypertext Transfer Protocol -- HTTP/1.1](https://www.rfc-editor.org/rfc/rfc2616):

>

Eerst wordt beschreven waarvoor HTTP kan worden gebruikt. En verderop staat de definitie:

```
**user agent**

The client which initiates a request.

These are often browsers, editors, spiders (web-traversing robots), or other end user tools.
```

Hieruit volgt dat de HTTP standaard niet _alleen_ bedoeld is voor mensen, en ook niet alleen voor browsers.

(Hidden)

## HTTP: waar is het voor?

Als het protocol niet alleen voor browsers of eind-gebruikers is, dan is er meer aan de hand. Deze standaard wil ons helpen meer te bereiken dan alleen hypertext en andere hypermedia over de netwerkkabel versturen naar onze computerschermen.

We hoeven niet lang te zoeken om erachter te komen welke problemen HTTP probeert te verhelpen of hoe het probeert te faciliteren. Dit artikel is niet de plek om in elke een diepe duik te nemen, maar weet dat er meer is dan de lijst die nu volgt. Slimme mensen hebben bekeken wat de moeilijkheden zijn bij communicatie over het internet, en welke uitdagingen er liggen op om te lossen. HTTP is het resultaat.

## ⚡ HTTP is de oplossing voor zogenoemde _hard problems_

-   Caching (veel user agents, één server);
-   Consistentie (data format, fouten, en het scheiden van data en fouten);
-   Interoperabiliteit (tussen verschillende implementaties);
-   (en meer).

## Het wiel uitvinden

Het is bij veel mensen bekend dat het over het algemeen een _heel_ slecht idee is om zelf een versleuteling te verzinnen voor zaken die echt privé moeten worden. We zeggen dan ook wel "Don't roll your own Encryption/Cryptography/Security". Op de security stackexchange zijn [verschillende](https://security.stackexchange.com/questions/6740/flaw-in-encryption-through-pseudorandom-number-stream-from-pgp-documentation) [vragen](https://security.stackexchange.com/questions/18197/why-shouldnt-we-roll-our-own) te vinden over dit wel doen of waarom je dit niet doet en één van de beste antwoorden vind ik:

> If you are not convinced of "Don't Roll Your Own [Cryptography/Security]", then you probably are not an expert and there are many mistakes you likely will make.

"Als je er niet van overtuigd bent dat het zelf verzinnen van een manier om te versleutelen of te beveiligen, dan ben je _waarschijnlijk_ geen expert en zullen er veel fouten zijn die je gaat maken."

### Hoe relateert dat tot een webstandaard?

Je hebt wellicht weleens de uitdrukking "there's a package for that" of "there's a gem for that" gehoord. Hetzelfde is bijna altijd waar voor meer abstracte problemen: "there's a spec for that". Zelfs als er geen spec is, dan is er vaak wel een _proposal_ of een _draft_. Dit betekent daardoor ook dat het onnodig is om het wiel uit te moeten vinden. Er is al iemand of een groep mensen geweest die over je probleem heeft nagedacht, en daar (hopelijk) wat slimme dingen over heeft opgeschreven.

En als je er _toch_ voor kiest om zelf iets te verzinnen, dan kan je of leren van wat er al is, of je informatie opschrijven in een RFC formaat zodat _anderen_ je standaard kunnen gebruiken. Dit maakt het weer makkelijker.

En als je met front-end (of back-end, of wat dan ook) te maken hebt, dan gebruik je _elke dag_ al webstandaarden!

### Hoe voorkom ik dat het wiel opnieuw wordt uitgevonden?

Er is helaas geen makkelijk antwoord op deze vraag, omdat je eigenlijk moet weten of inschatten of er voor iets een standaard bestaat. Het moment dat ik zelf kijk of er een standaard bestaat is tweevoudig: iets voelt _tegendraads_ (moeilijker dan nodig), of iets klinkt complex.

Een aantal voorbeelden die hopelijk een tipje van de sluier kunnen oplichten:

### a. Interactie toevoegen aan HTML elementen\*

Ook ik heb voorheen gebruik gemaakt van `onclick=""` attributen of het equivalent in JavaScript. Ik leerde daarna over het web gebruiken zonder muis (en ben zelf een veel-gebruiker van toetsenbord navigatie geworden), en om dan een "knop" klikbaar te maken is best wel wat extra JavaScript nodig. In de laatste jaren ben ik veel bezig geweest met toegankelijkheid. Om screenreaders een `div` te laten herkennen als knop, heb je _nog_ meer code en markup nodig. Oef.

```
<!-- iets toegankelijker dan onclick="" -->
<div
	class="button"
	role="button"
	aria-pressed="false"
	tabindex="0"
>
	My action
</div>
<script>
// [...]
myActionElement.addEventListener("keydown", e => {
  if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
    e.target.setAttribute('aria-pressed', 'true')
  }
});
// [...] up handler om te activeren als ie pressed was
// [...] blur handler om pressed weer weg te halen zonder activatie
// [...] disabled implementatie via aria-disabled
</script>
```

De [HTML standaard](https://html.spec.whatwg.org/) heeft een aantal hulpmiddelen om HTML interactief te maken, waaronder [het button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). Dit element heeft ondersteuning voor allerlei manieren van interactie. Volgens de MDN (Mozilla Developer Network) beschrijving is het `button` element een interactief element geactiveerd door een gebruiker met een muis, toetsenbord, vinger, spraakcommando, of andere toegankelijkheidtechnologie.

Daarnaast kan de actie ook worden geblokkeerd door het `disabled` attribuut te gebruiken, heeft het standaard een kenmerkende rol (namelijk `button`), is deze standaard focusbaar zonder `tabindex` en is geen custom CSS _nodig_ om het er als een knop uit te laten zien.

Voordat ik een `div` gebruik is mijn regel dus: ben bekend met de huidig gangbare HTML elementen en hun doel.

### b. Veel gebruikers aankunnen met weinig serverkracht

Ik heb gewerkt aan meerdere producten die dagelijks honderden, duizenden, of zelfs miljoenen gebruikers hadden. Servers zijn kostbaar, bandbreedte in _the cloud_ al helemaal, en het aantal gebruikers is niet consistent.

Dit is een moeilijke uitdaging.

Als je zoekt hoe je het consistentie probleem kan oplossen kom je al gauw terecht op een techniek die auto-scaling heet: het semi-automatisch op en afschalen van servers om meer gebruikers tegelijk aan te kunnen wanneer het nodig is, en minder servers online te hebben wanneer dat niet nodig is. Als je iets langer doorzoekt zie je ook dat auto-scaling op zichzelf ontzettend moeilijk is om goed te doen. Bijvoorbeeld: wat zijn goede regels voor het op-en- afschalen? Wat is het limiet? Hoe ga je om met het langzaam opstarten van de servers (waardoor de regel om bij te schalen actief blijft)? De antwoorden variëren van "it depends" tot "thoughts and prayers".

Nee, er moest een betere (en vooral stabielere) manier zijn om meer gebruikers aan te kunnen zonder dat dat heel veel geld kost.

Onze applicatie had meer gebruikers die pagina's wilden lezen dan bewerken. In HTTP termen, het meest voorkomende _werkwoord_ was GET. Dat biedt mogelijkheden, want hoewel sommige pagina's gebruiker specifieke informatie bevatte, het meeste van de inhoud, en vooral ook de website voor het inloggen was voor iedereen hetzelfde. Ik had al vaker gebruik gemaakt van een Content Delivery Network (CDN) om media (plaatjes, videos, enzovoorts) sneller bij de bezoeker te brengen, waaronder Cloudflare. Amazon Web Services (AWS) heeft een eigen variant genaamd CloudFront, en zo zijn er nog velen. Wellicht kond ik hier gebruik van maken.

Alle CDNs hebben een variant van _caching_: het tijdelijk opslaan van informatie zodat je deze informatie niet opnieuw hoeft te berekenen of op te halen bij een opvolgend verzoek. Hoewel ze allemaal hun eigen implementatie hebben, ze ondersteunen (bijna) allemaal een gestandaardiseerde vorm: [_HTTP Caching_](https://datatracker.ietf.org/doc/html/rfc9111). (Dit heet vaak _Origin Cache Control_ mocht je het zoeken in jouw CDN). [Het MDN artikel hierover](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) beschrijf veel van de opties, maar hier zijn er een aantal die wij gebruikten om de CDNs onze inhoud te laten cachen:

```
# Je mag de pagina echt niet cachen. Ook niet in de browser. Elk
# verzoek moet een nieuw antwoord genereren en tonen.

Cache-Control: no-store
```

```
# Bewaar dit voor 1 jaar in de cache.  Dit wordt gebruikt voor
# bestanden met een hash / versie "identifier" die veranderd
# als het bestand wordt bijgewerkt, waardoor er een nieuwe
# url is.
#
# immutable zorgt ervoor dat browsers niet meer proberen
# conditionele verzoeken te doen om te kijken of de URL toch
# is bijgewerkt.
#
# public zorgt ervoor dat een verzoek's antwoord kan worden
# gedeeld. Oftewel: als iemand anders dit verzoek al heeft
# gedaan, dat kan dat gecachede antwoord worden gebruikt.

Cache-Control: public, max-age=31536000, immutable
```

```
# Bewaar dit voor 5 minuten, en markeer het daarna als muf.
# Dit wordt gebruikt voor paginas die niet elke seconde
# nieuwe informatie moeten laten zien, en waarbij het
# belangrijker is om wat oudere informatie te laten zien
# dan dat je niets laat zien.
#
# Dit is vaak waar, voor heel veel informatie op het
# internet!
#
# Gebruik het muffe opgeslagen antwoord nog maximaal 60
# seconden terwijl je op de achtergrond een vers antwoord
# ophaald. Gebruik het muffe opgeslagen antwoord nog een
# uur, als er een foutmelding is gegeneerd bij het ophalen.

Cache-Control: private, max-age=300, stale-while-revalidate=60, stale-if-error=3600
```

Ik kwam er ook achter dat sommige implementaties van HTTP Caching niet _spec-compliant_ zijn. Ofwel: ze volgen niet de standaard. Cloudflare, bijvoorbeeld, respecteerd de [Vary header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) niet. Omdat ik wist dat er een standaard was en konden lezen wat de implicaties waren van het niet respecteren van deze header, hebb ik bewuste keuzes kunnen maken.

{% note "Noot: Ga niet overal caching headers toevoegen. Vooral het gebruik van `max-age` op paginas die worden bijgewerkt kan problemen opleveren als je niet oplet dat dat verwijzingen naar oudere inhoud (zoals CSS en JavaScript bestanden) nog steeds werken tijdens "de max-age" periode. [Jake Archibald heeft mooie dingen geschreven over HTTP Caching](https://jakearchibald.com/2016/caching-best-practices/). Lees dus eerst verder, maar sla je slag!" %}

Oh en die performance? Bedenk je dat als je `public, max-age=60` toevoegt wat voor effect dat kan hebben op het aantal bezoekers op de server:

| [Situatie]   | [Bezoekers per minuut] | [Verzoeken per minuut] |
| ------------ | ---------------------- | ---------------------- |
| Geen caching | 1000                   | 1000                   |
| `max-age=5`  | 1000                   | ~12                    |
| `max-age=60` | 1000                   | ~1                     |

Zelfs voor privé content die gemarkeerd was als `must-revalidate` (je moet de server vragen om te kijken of wat je in de cache hebt fris is of verouderd is), met een `max-age=0` (het antwoord is voor 0 seconden vers, en daarna muf), kan helpen. Als de server namelijk aangeeft dat wat de cache heeft nog steeds hetzelfde is (door middel van bijvoorbeeld een [ETag vergelijking](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag)) dan bespaar je nog steeds alle bandbreedte en tijd die het kost om die data te versturen en ontvangen.

Voordat ik dus een moeilijk uitdaging zelf probeer op te lossen kijk ik eerst of er een standaard voor bestaat. In dit geval was de oplossing die afdoende werkte de HTTP Caching standaard.

### c. Oude software accepteren terwijl de API (veel) is veranderd

Dit is niet een frontend punt, maar full-stackers die bezig zijn met APIs schrijven of bedenken, kunnen hier wellicht ook iets aan hebben.

Het probleem is als volgt:

Ik schreef mee aan een systeem dat aan de server kant een API publiek beschikbaar stelde en die werd aangeroepen door allerlei andere systemen, waaronder een mobiele SDK (Software Development Kit). Zo'n SDK wordt dan onderdeel van één of meerdere apps en die apps worden gedistribueerd, meestal via de Google Play Store en Apple iTunes store. Dit betekent dat als er een wijziging nodig is in de API (in de server code), dat deze wijziging moet worden doorgevoerd in de SDK. De SDK update moet dan worden doorgevoerd in alle apps, en deze apps moeten worden gepubliceerd. Tot slot moeten de mensen die de app hebben geïnstalleerd de app bijwerken.

In andere woorden: je hebt een probleem, ofwel een moeilijke uitdaging!

[Roy Fielding](https://roy.gbiv.com/), is een ontzettend slim persoon die heeft meegewerkt aan onder andere [URI Templates](https://www.rfc-editor.org/rfc/rfc6570), en was ook [editor van de "Do No Track" working group](https://www.w3.org/TR/tracking-dnt/). In 2013 zei Roy [tijdens een talk](https://www.slideshare.net/evolve_conference/201308-fielding-evolve/31) dat de best practice voor het hanteren van een versie in een API is om _geen_ versie te hanteren voor de gehele API. Ja, nou en, denk je misschien? Roy schreef zijn dissertatie over [Architectuur stijlen en het ontwerp van netwerk-gebaseerde software architectuur](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm). Wij kennen dit nu als _REST_ (Representational State Transfer) en dat is eigenlijk de ruggengraat geworden van ontzettend veel moderne web interfaces.

Het leuke voor mij is dat Roy een vervolg heeft geschreven op zijn visie van REST, en dat heeft gepubliceerd als, jawel, een [RFC](https://www.rfc-editor.org/rfc/rfc9205), die is aangenomen als current best practice.

Ik zal niet teveel in details treden wat we hier allemaal van hebben gebruikt om ons probleem op te lossen, want dat is meerdere artikelen an sich, maar het komt samengevat neer op:

-   Gebruik versies in media types (dus `application/vnd.fronteers.config.v1+json`);
-   Doe aan [content-negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation): een tactiek waarbij de server kijkt naar de [Accept header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept) van het verzoek en gebaseerd daarop een antwoord geeft met desbetreffende [Content-Type header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type);
-   Valideer antwoorden van de server in de server, en geef een foutmelding als het antwoord niet overeenkomt met een contract. In andere woorden: bepaal van te voren hoe een antwoord met een bepaalde `Content-Type` er uit gaat zien en forceer dat gedrag;
-   Ondersteun zo lang mogelijk een media type. Het is bijna altijd dezelfde informatie net iets anders gerepresenteerd, dus dit is vaak goedkoop om te doen. Je hoeft namelijk de code voor de oudere versies bijna nooit aan te raken.

Om deze interessante uitdaging op te lossen kon ik dus gebruik maken van het denk werk van meerdere slimmen mensen (iedereen die heeft bijgedragen aan de RFC die uiteindelijk _best practice werd_) hetgeen er ook toe heeft geleid dat ik nu, vijf jaar later, nog steeds apps kan ondersteunen die versie 1 draaien van de API. Daarnaast konden de mobiele app developers _gradueel_ upgraden: ze konden voor elk verzoek bepalen of ze het nieuwe gedrag wilden ondersteunen door met de _Accept_ en _Content-Type_ headers te spelen. Hier hebben een hele reeks web standaarden aan bijgedragen.

### d. Onenigheid over foutmeldingen

Bij deze uitdaging was ik de frontender die een API moest gebruiken om een mobiele app én web applicatie te bouwen. Ik had invloed op de API omdat die werd geschreven door de klant! De uitdaging hier was drievoudig:

1. De API gaf een _500 Server Error_ als er iets mis ging, ook al was het een fout van mij.
2. De API gaf niet een consistente manier van fouten terug. Soms als een regel tekst (maar gemarkeerd als JSON, hoe dan?), soms als een JSON object met een key "error", en soms weer wat totaal anders.
3. De API gaf foutmeldingen terug die niet duidelijk waren of niet hielpen bij het verhelpen van die foutmelding.

Het eerste probleem was echt erg vervelend. Standaard schrijf ik mijn interactieve frontend code zo dat als het een `5xx` status code krijgt, dat ook echt wordt gezien als [server gerelateerd probleem](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses). Bij het ophalen van informatie betekent dat ook dat ik automatisch nog een aantal pogingen deed. De klant klaagde erover dat ik "veel verzoeken deed".

[RFC 9110](https://httpwg.org/specs/rfc9110.html#status.500) gaat over semantiek, waaronder ook de HTTP status codes. Omdat de foutcode 500 niet veel zegt en ook niet aangeeft of het een permanent of tijdelijk probleem is, en omdat de foutmeldingen in het antwoord ook niet hielp, koos ik ervoor om altijd opnieuw te proberen bij een 5xx code. Bij een 4xx code, hetgeen aangeeft dat er iets mis is met het verzoek zelf, deed ik dat niet.

Na ze te wijzen op de beschrijvingen in de standaard is de API bijgewerkt en gebruikt het zowel 4xx als 5xx codes, en dat was mooi, want het loste probleem 1 op en hielp ontzettend voor probleem 3.

Voor probleem 2 hadden we allebei geen goede ideeën. Uiteindelijk heb ik voorgesteld om een voorstel van iemand anders te gebruiken, en wel [RFC 7807: Problem Details for HTTP APIs](https://datatracker.ietf.org/doc/html/rfc7807).

Deze RFC introduceert een standaard formaat (geregistreerd met een media type `application/problem+json`) en hierdoor zien _alle_ foutmeldingen er min of meer zo uit:

```
HTTP/1.1 403 Forbidden
Content-Type: application/problem+json
Content-Language: en
{
    "type": "https://example.com/probs/out-of-credit",
    "title": "You do not have enough credit.",
    "detail": "Your current balance is 30, but that costs 50.",
    "instance": "/account/12345/msgs/abc",
    "balance": 30,
    "accounts": ["/account/12345",
                 "/account/67890"]
}
```

In het kort:

-   `type` is altijd een URI die het type probleem identificeert. Het wordt sterk aangeraden om deze URI "browsebaar" te maken en dat deze wijst naar documentatie over de fout.
-   `title` is een tekstuele samenvatting voor mensen! Deze kan worden vertaald door middel van [Content-Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) (aangeven welke talen je zou willen via `Accept-Language`, en de server kiest dan een ander antwoord gebaseerd op je verzoek).
-   `detail`: is een tekstuele uitleg van het probleem, voor mensen! Dus geen computer bliep-die-bloep of SQL statements, of een _verbatim_ foutmelding.
-   `instance`: is een URI voor dit specifieke geval van deze fout.

Doordat de `title` en `detail` velden verplicht zijn, werd de klant nu ook verplicht om de API betere foutmeldingen te laten geven (en hier heb ik ook bij geholpen).

Tot slot konden ze ook nog gradueel hun API bijwerken, omdat ik kon zien of iets in het juiste formaat zou moeten staan door de `Content-Type` van de foutmelding.

In dit geval heb ik dus meerdere standaarden gebruikt om tot een besluit te komen waarbij iedereen weet waar ze aan toe zijn, en anders dan "hier is een idee, dit is al uitgewerkt" hoefde ik het niet te beargumenteren, want het alternatief was de status quo die niet werkbaar was.

### e. Toegankelijke emails?

Tot slot heb ik een voorbeeld waarbij een klant graag wilde dat ik een nieuwe gebruikersoptie implementeerde. Deze klant gaf aan dat leden niet allemaal de nieuwsbrief en updates konden lezen die per e-mail werden verstuurd.

Het verzoek was:

>

Het was relatief makkelijk voor mij om dit verzoek in te willigen, en zo gezegd, zo gedaan.

Twee weken later kreeg ik een belletje dat de oplossing niet werkte. Waarom niet? Een van de leden had in het profiel de e-mail op tekst gezet, maar klaagde nu dat de email overal alleen maar tekst was.

Wat was het echte probleem? Deze persoon gebruikte een tekst-only email client op sommige apparaten en kon HTML emails wel aan op andere apparaten. Ook gaf deze persoon aan dat dit probleem zich wel vaker voor deed, maar liet ook een paar voorbeelden zien van e-mails die het op alle apparaten correct deden.

Ik ben op zoek gegaan naar de webstandaard, want als meerdere applicaties allemaal het correcte gedrag laten zien, moet er bijna wel een standaard aan te pas zijn gekomen.

De oplossing vond ik in [RFC 2046: Multipurpose Internet Mail Extensions (MIME) Part Two](https://www.rfc-editor.org/rfc/rfc2046.html#section-5.1.4). Hierin staat beschreven hoe e-mails in elkaar zitten en hoe e-mail _readers_ ze moeten behandelen. Hierin is ook beschreven hoe een speciale mediatype `multipart` kan worden gebruikt om een bericht te maken dat uit meerdere delen bestaat, en in het bijzonder `multipart/alternative`.

{% note "Noot: `Multipart/alternative` may be used, for example, to send a message in a fancy text format in such a way that it can easily be displayed anywhere." %}

En dat was ook exact wat de e-mails deden die het lid liet zien.

```
From: sender@example.com
To: recipient@example.com
Subject: Multipart Email Example
Content-Type: multipart/alternative; boundary="boundary-string"

--your-boundary
Content-Type: text/plain; charset="utf-8"
Content-Transfer-Encoding: quoted-printable
Content-Disposition: inline

Platte tekst email hier! Dit wordt gebruikt
als text/html niet werkt.

--boundary-string
Content-Type: text/html; charset="utf-8"
Content-Transfer-Encoding: quoted-printable
Content-Disposition: inline

<h1>Woopdiedoo html werkt!</h1>
<p>Hier dan de HTML variant</p>

--boundary-string--
```

Het was eenvoudig om de instelling weer weg te halen uit het gebruikersprofiel, en alle emails automatisch ook als platte tekst te laten zien.

Helaas is er niet veel meer ondersteuning dan `text/plain` en `text/html`, maar onlangs heeft Apple een nieuwe variant geïntroduceerd die `text/watch-html` gebruikt. Dit is speciaal voor de Apple Watch!

Enfin, de makkelijke oplossing hier was uiteindelijk niet de juiste. Hierbij was het dus zo dat de standaard veel meer gebruikscasussen had dan mijn simpele implementatie.

(Hidden)

## Webstandaarden voor Fronteers

Pakweg 2300 woorden verder en ik vertel je nu dat je al gebruik maakt van webstandaarden. En dan heb ik het niet eens over HTTP, of tools die gebruik maken van standaarden zoals formatters en linters.

## Produceer je HTML?

Dan heb je te maken de [HTML specificatie](https://html.spec.whatwg.org/)

## Schrijf je CSS?

Dan heb je te maken met de vele CSS specificaties zoals [mediaqueries](https://www.w3.org/TR/mediaqueries-3/), [selectors](https://www.w3.org/TR/selectors-3/), en het [box-model](https://www.w3.org/TR/css-box-3/);

Interactiviteit via een taal zoals JavaScript of TypeScript?
Je houdt je waarschijnlijk zoveel mogelijk aan de [ECMAScript standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/);

## Roep jij een API aan in JavaScript?

Het is dan handig om te weten dat er een standaard is voor [`fetch`](https://fetch.spec.whatwg.org/) en ook voor [`xhr` (XMLHttpRequest)](https://xhr.spec.whatwg.org/);

## Bestanden uploaden via een formulier?

Dan gebruik je [`multipart/form-data`](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

## Stuur je e-mails?

Hallo daar [*S*imple *M*ail *T*ransfer *P*rotocol](https://www.rfc-editor.org/rfc/rfc5321.html). Lezen kan bijvoorbeeld via het oude [*P*ost *O*ffice *P*rotocol](https://tools.ietf.org/html/rfc1939) of via het [*I*nternet *M*essage *A*ccess *P*rotocol](https://www.rfc-editor.org/rfc/rfc3501.html). De content en headers volgen [RFC 2822: Internet Message Format](https://www.rfc-editor.org/rfc/rfc2822), DomainKeys Identified Mail (DKIM) is [RFC 6375](https://www.rfc-editor.org/rfc/rfc6376), en het sturen van een e-mail als _zowel_ HTML _als_ platte tekst is mede mogelijk gemaakt door [`multipart/alternative`](https://www.rfc-editor.org/rfc/rfc2046.html#section-5.1.4).

## Te maken met 3D graphics?

De standaard die je gebruikt is waarschijnlijk beschreven en onderhouden door de [Khronos Group](https://www.khronos.org/developers)

## Testen op toegankelijkheid?

Je volgt hoogstwaarschijnlijk de _Web Content Accessibility Guidelines_, zoals beschreven in [de specificatie](https://www.w3.org/TR/WCAG21/) van het W3C (World Wide Web Consortium).

Bovenstaande is maar een klein onderdeel van de vele vele standaarden waar je al met regelmaat gebruik van maakt, waar je op bouwt, waar je van profiteert. Hoe URLs werken, en wat de regels zijn voor een e-mail adres.

(Hidden)

## Meedoen met het ontwikkelen van ons WWW

Interesseert dit alles je en heb je ideeën over het web door-ontwikkelen? Ben je ergens tegen aan gelopen die een huidige standaard niet beschrijft? Er zijn ontzettend veel manieren om mee te doen.

1. Veel van de organisaties die standaarden ontwikkelen en onderhouden kan je terug vinden op sites als GitHub.com. Voorbeelden hiervan zijn het [WC3](https://github.com/w3c), [WICG](https://github.com/WICG), [WhatWG](https://github.com/whatwg) en [TC39](https://github.com/tc39). Ze hebben allemaal andere regels en richtlijnen, veelal beschreven in hun README en/of Code of Conduct. Dit is een van de eenvoudigste manieren om te zien welke discussies op dit moment leven.
2. Het WC3 heeft [een eigen website](https://www.w3.org/). Hier kan je alle werkgroepen en ander-soort samenkomen vinden. Lid worden van een groep is vaak ontzettend eenvoudig en als je het eenmaal bent, ben je vaak direct van harte welkom bij veel van de discussies.
3. De Web Incubator Community Group (WICG) heb ik nog niet genoemd. Deze groep ontwikkeld voorstellen voor nieuwe _features_! Je kan veel van deze features terug vinden op [hun website](https://wicg.io/), alsmede een link naar hun Discourse.
4. Dan hebben we de Web Hypertext Application Technology Working Group (WHATWG). Deze groep onderhoudt en ontwikkelt de HTML standaard! Hoe je daar mee aan kan doen staat uitgelegd op [hun website](https://whatwg.org/).
5. Voor JavaScript (en gerelateerde) is er [de TC39 standaard](https://tc39.github.io/ecma262/). De website zelf geeft aan dat eigenlijk alle contributies lopen via [hun GitHub](https://github.com/tc39/ecma262), maar er staat wel wat extra informatie op de website.

## Is onderdeel worden van zo'n groep dan de enige manier?

_NEE!_. Je kan als individu reageren op issues, nieuwe voorstellen indienen, maar ook deelnemen aan evenementen gehost door de IETF. Er is een [Datatracker](https://datatracker.ietf.org/) die _alle_ voorstellen (aangenomen, klad, verlopen, enzovoorts) bijhoudt en beschrijft welke vragen open staan. Ook kan je hier terug vinden wanneer het volgende synchrone moment is om vragen te stellen over zo'n voorstel. Zelf heb ik hier een aantal keer aan meegedaan.

Er zijn leden van Fronteers die actief meewerken aan of hebben meegewerkt aan voorstellen van specificaties. Zij kunnen je waarschijnlijk net als ik vertellen dat dit niet altijd zonder _uitdagingen_ gaat. Ontwikkeling duurt vaak lang en consensus bereiken is niet altijd mogelijk. Het zijn relatief logge machines. Aan de andere kant is het wel zo dat alles waar wij digitaal, online van genieten mede mogelijk is gemaakt door deze standaarden.

## Tot slot

Door het gebruik van webstandaarden was het voor ons mogelijk om voor een klant met behulp van 5 developers in totaal (in de hele stack) een applicatie neer te zetten met meer dan 15 miljoen requests elke avond, 2.2 TB data per dag, met een _gemiddelde (en mediaan)_ laadtijd van 35 ms gebruikmakende van één (relatief krachtige) server.

Door het gebruik van webstandaarden konden we tegen een andere klant zeggen: "Jullie hebben klanten die screenreaders gebruiken? Dat is geen probleem. Daar zijn geen extra kosten aan verbonden." waarna ze erachter kwamen dat vrijwel de hele applicatie al enigszins tot goed toegankelijk was.

Door het gebruik van webstandaarden kunnen we veel eindeloze discussies voorkomen omdat we (bijna) altijd iets hebben om op terug te vallen en naar te refereren, en zo ook achterhalen of er een programmeer- of denkfout zit in onze code, of dat er een fout is gemaakt bij het _implementeren van een specificatie_ in bijvoorbeeld een browser.

Ook jij gebruikt webstandaarden en dat is slim, dus ga zo door.
