---
title: "HTML5 Video | Een overzicht"
date: 2011-12-02
author: Jeroen Wijering
categories: 
  - Adventskalender
---
HTML5 introduceert verschillende nieuwe tools voor het bouwen van dynamische websites en applicaties. Eén hiervan is het `<video>` element. In theorie maakt dit het invoegen van video's in websites net zo simpel als het invoegen van afbeeldingen met het `<img>` element.

In de praktijk is HTML5 video [nog volop in ontwikkeling](http://www.longtailvideo.com/support/blog/11887/html5-video-not-quite-there-yet). Belangrijke opties ontbreken nog, niet alle browsers herkennen `<video>` en de browsers die dat wel doen ondersteunen verschillende formaten. HTML5 video werkt echter uitstekend op smartphones en tablets (iOS en Android). Al met al kan het, met enig denkwerk, vandaag al gebruikt worden in productie.

# Waarom HTML5 video?

Het invoegen van video gebeurt nu meestal met de Adobe Flash plugin. Dit werkt uitstekend, dus waarom moet het nu opeens in HTML? Er zijn twee praktische redenen:

1. [Flash wordt niet ondersteund op iOS](http://www.apple.com/hotnews/thoughts-on-flash/), het populaire mobiele platform van Apple. HTML5 is de enige manier om webvideo af te spelen op de iPad/iPhone.
2. [Het invoegen van een HTML5 video is makkelijk](http://www.longtailvideo.com/support/jw-player/jw-player-for-flash-v5/22644/using-the-html5-video-tag). De video tag is kort en bondig, en ontwikkelaars kunnen hun bestaande CSS en JavaScript vaardigheden gebruiken.

Er is ook een belangrijkere, maar minder concrete reden. Om online video echt succesvol te laten zijn, moet het een [First Class Web Citizen](https://dev.opera.com/articles/view/a-call-for-video-on-the-web-opera-vid/) worden. Dit maakt het:

* Toegankelijker, zowel voor (gehandicapte) personen als (exotische) apparaten.
* Vindbaarder, bijvoorbeeld vinden via zoekmachines of archieven.
* Stabieler en veiliger, omdat de plugin "laag" verdwijnt.
* Beter presterend, zowel aan de browser (CPU/GPU) als aan de netwerk (TCP/HTTP) kant.

# Browser ondersteuning

Wie ondersteunt HTML5 video vandaag? Hier is [een overzichtje](http://gs.statcounter.com/) (oktober 2011), met daarin de desktop-browsers en mobiele apparaten gemixt:

(TODO: [Browser]	[Marktaandeel]	[HTML5 ondersteuning]	[Flash ondersteuning]
Internet Explorer 6/7/8	 30%	 Nee	 Ja
Firefox	 25%	 Ja (WebM)	 Ja
Chrome	 20%	 Ja (MP4 + WebM)¹	 Ja
Internet Explorer 9	 10%	 Ja (MP4)	 Ja
Safari	 4%	 Ja (MP4)	 Ja
iOS	 3%	 Ja (MP4)	 Nee
Opera	 2%	 Ja (WebM)	 Ja
Android	 1%	 Ja (MP4)	 Ja²
Windows Phone	 0%	 Ja (MP4)	 Nee
Overig ("dumbphones")	 5%	 Nee	 Nee)

1. Chrome heeft afgelopen januari aangekondigd MP4 ["binnenkort" te verwijderen](http://blog.chromium.org/2011/01/html-video-codec-support-in-chrome.html). Tot dusver werkt het nog.
2. Adobe is [gestopt met het ontwikkelen](http://blogs.adobe.com/conversations/2011/11/flash-focus.html) van Flash voor mobiel. Android 4.0 is de laatste versie met Flash ondersteuning.

Tweederde van de markt kan dus HTML5 video afspelen. Uiteraard kunnen oude versies van IE (6/7/8) dit niet, maar zij draaien wel Flash (als fallback optie). Het aandeel van mobiele browsers (iOS en Android) is nog klein (5%), maar snel groeiend.

In de HTML5 kolom worden de ondersteunde video formaten vermeld. Sommige browsers ondersteunen _MP4_, anderen weer _WebM_. Alleen Chrome ondersteunt beide. Dit gebrek aan een standaard video formaat is het grootste probleem voor HTML5 video.

# Het codec probleem

Eerst een korte uitleg van video formaten. Ze bestaan grofweg uit drie bouwstenen:

1. De [container](http://en.wikipedia.org/wiki/Container_format) bevat alle metadata inclusief de audio/video codec info, maar niet de frames/samples zelf.
2. De [video codec](http://en.wikipedia.org/wiki/Video_codec) bevat de eigenlijke, gecodeerde video frames.
3. De [audio codec](http://en.wikipedia.org/wiki/Audio_codec) bevat de eigenlijke, gecodeerde audio samples.

Hoe beter de video en audio codecs zijn, hoe beter (kleinere bestanden, eenvoudiger te coderen) het video formaat is. Op dit moment worden er twee (uitstekende) formaten gebruikt in HTML5:

* Het [MP4-formaat](http://en.wikipedia.org/wiki/MP4), met daarin de [H.264 video codec](http://en.wikipedia.org/wiki/H264) en de [AAC audio codec](http://en.wikipedia.org/wiki/Aac).
* Het [WebM formaat](http://en.wikipedia.org/wiki/Webm), met daarin de [VP8 video codec](http://en.wikipedia.org/wiki/VP8) en de [Vorbis audio codec](http://en.wikipedia.org/wiki/Vorbis).

Qua kwaliteit doen de twee formaten [niet veel onder voor elkaar](http://www.streamingmedia.com/Articles/Editorial/Featured-Articles/WebM-vs.-H.264-A-Closer-Look-68594.aspx). Het grote verschil zit hem in hun IP:

* MP4 (H264/AAC) wordt breed ondersteund in de video-industrie, maar is volledig dicht gepatenteerd. [Zowel voor encoderen, publiceren als decoderen](http://www.streamingmedia.com/Articles/ReadArticle.aspx?ArticleID=65403) zijn licenties nodig.
* WebM (VP8/Vorbis) is daarentegen [patent-vrij en open source](http://www.webmproject.org/) (net als alle andere W3C technologieën). Het formaat is vrij nieuw, met een klein ecosysteem van encoders en decoders.

In deze afweging tussen pragmatisme en patenten hebben sommige browsers gekozen voor het eerste (MP4) en anderen voor het laatste (WebM). Het resultaat is dat je nu je video twee keer moet encoderen om alle HTML5 browsers te ondersteunen. Als WebM op termijn meer tractie krijgt, zal dat veranderen, maar dit is een langzaam proces.

(TODO: Er is trouwens nog een derde HTML5 formaat: [Ogg](http://en.wikipedia.org/wiki/Ogg). Het is kwalitatief stukken minder dan MP4/WebM, maar werd ondersteund door Firefox en Opera voordat [Google WebM vrijgaf](http://www.longtailvideo.com/support/blog/12120/googles-vp8webm-and-what-it-means-for-you). De enige browser die nog Ogg vereist, is [het snel verdwijnende](http://gs.statcounter.com/#browser_version-ww-monthly-201101-201112) Firefox 3.6.)

# Video en sources

Nu door naar de video tag zelf. Kort en bondig, als beloofd:

```
<video
  controls
  height="360"
  poster="/files/bunny.jpg"
  src="/files/bunny.mp4"
  width="640">
</video>
```

De `controls` optie rendert een ingebouwde navigatiebalk, de `height` en `width` bepalen de dimensies van de video, de `poster` linkt naar een screenshot van de video en de `src` linkt naar de video zelf. Daarnaast zijn er nog de `autoplay`, `preload` en `loop` opties om het [afspelen te controleren](http://www.longtailvideo.com/support/jw-player/jw-player-for-flash-v5/22644/using-the-html5-video-tag).

Om het twee-codec-probleem te faciliteren bevat HTML5 een tweede element: `<source>`. Meerdere source elementen kunnen worden genest in één video. HTML5 browsers inspecteren de source elementen en spelen de eerste die ze ondersteunen:

```
<video controls height="360" poster="/files/bunny.jpg" width="640">
  <source src="/files/bunny.mp4" type="video/mp4" />
  <source src="/files/bunny.webm" type="video/webm" />
</video>
```

(TODO: De [HTML5 specificatie](http://www.w3.org/TR/html5/video.html) beschrijft ook het toevoegen van de audio/video codecs aan de type optie. In de praktijk is dit niet nodig, omdat alle browsers deze waardes negeren en codecs detecteren tijdens het downloaden van de video.)

Bovenstaand stukje HTML resulteert in theorie in een consistente video weergave in alle HTML5 browsers. In de praktijk zijn er echter nog allerlei [bugs en gaten in implementatie](http://camendesign.com/code/video_for_everybody#notes). Het handmatig omzeilen van deze issues is een rotklus. Een HTML5 Video Player kan daarbij helpen.

# HTML5 video players

Een HTML5 Video Player is een aparte JavaScript bibliotheek die zowel de video's op een pagina als de browser ondersteuning detecteert. De bibliotheek werkt vervolgens om de tekortkomingen van de browser heen. De term Video Player is dus enigszins misleidend, want het is nog steeds de browser die de video afspeelt.

Er zijn [behoorlijk wat](http://praegnanz.de/html5video/) van deze bibliotheken in ontwikkeling. Ze bieden meestal:

* Het corrigeren voor browser bugs. Vooral Android en iOS hebben kritieke bugs in hun parsing en rendering van video elementen.
* Het terugvallen op de Flash-plugin. Dit is nodig voor oude browsers (IE 6/7/8), en voor Firefox/Opera als je [alleen MP4 gebruikt](http://www.longtailvideo.com/support/blog/17843/browser-video-codec-support-does-it-matter).
* Het renderen van een consistente navigatie. De ingebouwde navigatie van iedere HTML5 browser ziet er namelijk anders uit, en kan niet gestyled worden.
* Het aanbieden van een pseudo-fullscreen-optie, door de video naar het volledig browservenster te vergroten. In tegenstelling tot Flash is er nog geen daadwerkelijk fullscreen in HTML5, [maar daar wordt aan gewerkt](https://wiki.mozilla.org/index.php?title=Gecko:FullScreenAPI).

Naast deze functies ondersteunen sommige Video Players zaken als afspeellijsten, ondertiteling of in-video adverteren. Eén belangrijke video functie kunnen ze niet via scripting ondersteunen: *streaming*. Dit zal ingebouwd moeten worden door de browsers zelf.

# Video streaming

Het grootste obstakel voor snelle adoptie van HTML5 is het ontbreken van één enkel formaat. Dit heeft als direct gevolg dat HTML5 video's 2x geëncodeerd en 2x opgeslagen moeten worden. Dit heeft echter ook als gevolg dat er [geen standaard streaming mechanisme is](http://www.longtailvideo.com/support/blog/18059/w3c-webtv-adaptive-streaming-content-protection):

* Video wordt dus altijd geleverd als een "download", waarbij veel data wordt gedownload maar niet bekeken.
* Het aanpassen van de kwaliteit midden in een video is niet mogelijk, net nu dat zo belangrijk is voor mobiel.
* Het live streaming van evenementen en kanalen is niet mogelijk, omdat dit geen te downloaden files zijn.
* Beveiliging door middel van encryptie (meestal deel van het streaming protocol) bestaat niet in HTML5.

Hierdoor is [HTML5 video geen optie](http://www.longtailvideo.com/support/blog/11887/html5-video-not-quite-there-yet) voor media bedrijven. Zij hebben Flash (of Silverlight) nodig tot een HTML5 video streaming protocol is gestandaardiseerd.

Op iOS is er echter wél een streaming protocol, volledig door Apple bedacht en geïmplementeerd bovenop HTML5. Het heet [HTTP Live Streaming](http://developer.apple.com/resources/http-streaming/) (HLS) en wordt ondersteund door alle iPads en iPhones. Een HLS stream kan worden geladen in een video-tag, net als een MP4-of WebM video:

```
<video controls height="360" poster="/files/bunny.jpg" width="640"> 
  <source src="/files/bunny.m3u8" type="application/vnd.apple.mpegurl" />
  <source src="/files/bunny.mp4" type="video/mp4" />
  <source src="/files/bunny.webm" type="video/webm" />
</video>
```

Door de populariteit van iOS (en de afwezigheid van alternatieven) is het HLS protocol flink gegroeid:

* Alle _pro_ video op de iPad gebruikt HLS (voor in-app video [is HLS zelfs vereist](http://developer.apple.com/news/index.php?id=02162010a)).
* Alle streaming servers (Adobe, Microsoft, Real, Wowza) ondersteunen tegenwoordig HLS.
* Alle IPTV set-top boxes (XBox, PS3, Apple TV, Roku, Boxee) ondersteunen tegenwoordig ook HLS.
* Zelfs Android doet HLS, [vanaf versie 3.0](http://developer.android.com/sdk/android-3.0-highlights.html) (Honeycomb).

Ondanks dit succes is HLS (nog) niet deel van een web-standaard. Bredere ondersteuning, bijvoorbeeld door Internet Explorer, zou nuttig zijn, maar is onzeker. Betekent dit dan dat HTML5 video vooral leuk is voor korte clipjes en iPads? Absoluut niet. Hoewel streaming nog niet is gefixt, is er een andere ontwikkeling die HTML5 een groot voordeel geeft ten opzichte van Flash.

# Track en WebVTT

Naast `<video>` en `<source>` definieert de [HTML5 video specificatie](http://www.w3.org/TR/html5/video.html) een derde nieuwe element: `<track>`. Met dit element is het mogelijk om verschillende soorten data te synchroniseren met de video:

* *Ondertiteling* van dialogen in andere talen.
* *Ondertitels* van de audio, zowel spraak als anders. Dit voor slechthorenden, of situaties zonder geluid.
* *Audio descripties* van de visuele elementen. Bedoeld voor audio synthese voor slechtzienden, of situaties zonder beeld.
* *Hoofdstuk markeringen*, voor het snel navigeren door langere videos.
* *Metadata*, zelf in te vullen data voor gebruik in scripts.

De data van deze tracks wordt opgeslagen in het [nieuwe WebVTT bestandsformaat](http://blog.gingertech.net/2011/06/27/recent-developments-around-webvtt/), een eenvoudige tekst formaat vergelijkbaar met [SRT](http://en.wikipedia.org/wiki/SubRip). Hier is een fragment, met twee ondertitels:

```
1
00:13:45.250 -> 00:13:48.000
Hello world!

2
00:13:49.910 -> 00:13:56.500
Well, hello to you too!
- Thanks. Any coffee left?
```

Deze WebVTT bestanden worden ingeladen in de `<track>` elementen net als videos in `<source>` elementen:

```
<video controls height="360" poster="/files/bunny.jpg" width="640">
  <source src="/files/bunny.mp4" type="video/mp4" />
  <source src="/files/bunny.webm" type="video/webm" />
  <track label="Closed Captions" kind="captions" src="/files/bunny-cc.vtt" />
  <track label="Auf Deutsch" kind="subtitles" src="/files/bunny-de.vtt" />
</video>
```

Met tracks en WebVTT kan HTML5 video eenvoudig toegankelijk gemaakt worden, voor zowel buitenlandse sprekers als mensen met een beperking. In Flash was dit [altijd erg lastig](http://www.longtailvideo.com/support/jw-player/22/making-video-accessible), doordat een standaard methode ontbrak. Daarnaast zullen andere toepassingen profiteren van de metadata in WebVTT bestanden. Denk aan video SEO en in-video search, het targeten van advertenties op bepaalde scènes, of de interactie tussen de [webpagina en video tijdlijn](http://popcornjs.org/).

Er is nog één probleempje: zowel `<track>` als WebVTT *bestaan nog niet in browsers*. De specificatie is wel [zo goed als af](http://www.w3.org/community/texttracks/) en browser-implementaties komen eraan. Waarschijnlijk zullen alle browsers dit eind 2012 ondersteunen.

# Wanneer HTML5?

Op de lange termijn vervangt HTML5 Flash voor het afspelen van video. Momenteel biedt Flash echter nog een betere gebruikservaring op de desktop. Dus op welk punt heeft het zin om _HTML5 first_ te gaan? Dat hangt af van de manier waarop je video gebruikt:

* Als video een core business is en je afhankelijk bent van streamen en beveiliging, wordt het wachten totdat er een streaming mechanisme komt. Dat kan nog jaren duren.
* Als video gebruikt wordt voor marketing/educatie en bereik, gebruiksgemak en toegankelijkheid belangrijk zijn, wordt het wachten op een hogere dekking (90%) en de beschikbaarheid van `<track>`. Beiden zitten er aan te komen in 2012.
* Als video geen core business is, maar webdesign wel, kun je vandaag al aan de slag met HTML5. Je moet wel je video's dubbel encoderen en je HTML regelmatig bijwerken voor nieuwe features en bugs. Je kunt echter ook meteen met CSS en JavaScript aan de slag om eigen video players te maken.

Voor mobiele apparaten is het sowieso nu het best om HTML5 te gebruiken (hetzij integraal, hetzij als fallback). Android en iOS ondersteunen beide HTML5, terwijl Flash op Android aan het verdwijnen is. Bovendien ondersteunen ze, in tegenstelling tot desktop browsers, beiden één formaat (MP4).

(TODO: Over Jeroen Wijering
2011/12/jeroen-wijering.jpg
Jeroen Wijering is de ontwikkelaar [achter de succesvolle JW Player](http://www.whoisjw.tv/), die wordt gebruikt op miljoenen websites wereldwijd. Zijn bedrijf [LongTail Video](http://www.longtailvideo.com/) beheert ook een gratis online platform waarbinnen bedrijven hun video's kunnen encoderen en publiceren.
Jeroen is te vinden [op twitter](https://twitter.com/jeroenw) en schrijft af en toe een artikel op [www.longtailvideo.com/blog](http://www.longtailvideo.com/blog).

**Donatie:** Stichting Aap
[Stichting Aap](http://www.aap.nl/) is een sympathiek en kleinschalig opvangcentrum voor uitheemse dieren. De dieren die er terecht komen zijn afkomstig van proefdierlaboratoria, circussen, louche dierentuinen of particulieren. Belangrijker is dat ze ook campagnes voeren voor preventie en gewaarwording, zowel in de politiek als bij het publiek.)
