---
title: "Content management door de ogen van een vrolijke front-end fröbelaar"
date: 2011-12-24
author: Krijn Hoetmer
categories: 
  - Adventskalender
---
"[Dat kan beter.](/blog/2011/12/het-platform-bouwen "Het platform bouwen")" Zo dacht ik in 2004 ook toen ik het zoveelste op maat gemaakte BeheerDing in elkaar geknutseld had en ontevreden was met het resultaat.

Na het klooien met een Enterprise Content Management System (Magnolia 2.0) tijdens een stage begin 2005 en het klagen over de markup die mijn toenmalige blog (WordPress 1.5) uitkakte, had ik het door: "Dit moet beter." Niet omdat het Web het nodig had, niet omdat [klanten](/blog/2011/12/clients-from-heaven "Clients from heaven") er om vroegen en niet omdat ik een gat in de markt zag, maar gewoon omdat ik het nodig vond. Ik was klaar met steeds opnieuw het wiel uitvinden en uitvinden dat ik aan het eind van de rit eigenlijk maar een klein rondje gemaakt had. Ik had een missie: het bouwen van een CMS dat ik steeds opnieuw weer in kon zetten en dat toch met me mee kon [groeien](/blog/2011/12/patronen-voor-de-groei "Patronen voor de groei") door de jaren heen. En iets wat perfect ingesprongen HTML uitspuwde natuurlijk, als ik dan toch bezig was. Wat volgt, is een vrij samengeraapt en toch onsamenhangend verhaal over mijn zoektocht naar het ideaal dat ik voor ogen had, en nog steeds heb, gecombineerd met de afsluiting van een in mijn ogen [geslaagd idee van Arjan](/blog/2011/11/adventskalender "Adventskalender 2011").

Het allereerste probleem bij een CMS is natuurlijk de vraag: wat is content? Volgens Van Dale heeft het iets te maken met tevredenheid, maar als je eens rondvraagt bij een willekeurig aantal inhoudsbestuurders om je heen, merk je dat het eigenlijk niet echt heel leuk werk is, dat content managen. Vreemd, als je bedenkt dat [de bijbel voor content management](http://www.amazon.com/Content-Management-Bible-Bob-Boiko/dp/0764573713/ "http://www.amazon.com/Content-Management-Bible-Bob-Boiko/dp/0764573713/") qua diepgang en dikte [de bijbel voor ringheren](http://www.amazon.com/Lord-Rings-J-R-R-Tolkien/dp/0618260587 "The Lord of the Rings") benadert. Vanzelfsprekend, als je bedenkt dat een groot deel (van dat eerste boek) over [XML](/blog/2011/12/waarom-standaarden-essentieel-zijn "Waarom standaarden essentieel zijn") gaat. En verontrustend, als je bedenkt dat [de bijbel voor validatienazi's](http://www.amazon.com/XML-Bible-Elliotte-Rusty-Harold/dp/0764549863/ "XML 1.1 Bible") eenzelfde hoeveelheid pagina's telt. Ruim drieduizend bladzijden, waarvan slechts 33% [filmmateriaal](/blog/2011/12/dr-strangescope "Dr. Strangescope or: How I Learned to Stop Worrying and Love the Closure") bleek. Nee, al vrij snel wordt duidelijk dat je, met oog op het verlangen naar een vrolijkheidsfactor, de beerput die content heet fijn dicht moet laten.

(TODO: Overigens heeft de werkversie van het laatste deel van The Lord of the Rings een tijdje 'Return of the Content 1.0' geheten, maar is in de jaren daarna door een werkgroep voor een andere naam gekozen; 'The Return of the King', afgekort tot LOTR5. Tegenwoordig spreekt men gewoon van 'The Living Hobbit', omdat in de praktijk blijkt dat deze hele ringzoekexercitie maar om één persoon gaat. Afijn, naast op het grote doek zien we deze geschiedenis in ons vege en vage vakgebied vandaag de dag mooi samengevat terug als het welbekende 'Content is King'. Als je je dus afvroeg waar dat vandaan kwam; je las het hier voor het eerst.)

Iedere stinkende hoop kan een hoop lekkerder gemaakt worden door het te prefixen met 'Web'. Developers zijn doorgaans door wereldvreemdheid opvallende mensen, maar zodra je er Web voor zet, zijn ze opeens mondig (kijk naar de rellen rondom [24 ways](http://24ways.org/) op Twitter de afgelopen weken). Zet daar nog eens [Front-end](/) voor en je hebt een heel [nieuw vakgebied](/blog/2011/12/waarom-een-slicer-een-front-end-developer-is-geworden "Waarom een slicer een front-end developer is geworden") gecreëerd (met succes overigens, _hulde aan alle vrijwilligers_ die hier aan hebben meegeholpen!). Ooit gehoord van [Cd-video](http://nl.wikipedia.org/wiki/Cd-video)? Maak er [Web-video](/blog/2011/12/html5-video-een-overzicht) van en je hebt [een hit](http://youtube-global.blogspot.com/2011/12/what-were-we-watching-this-year-lets.html "In total, there were more than 1,000,000,000,000 playbacks on YouTube this year."). Met [sommige workers](http://www.mturk.com/ "Mechanical Turk") communiceer je helemaal niet, terwijl je met [Web workers](http://www.whatwg.org/specs/web-apps/current-work/multipage/workers.html) wel _moet_ praten. Zelfs bij het _Semantic Web_ werkt dit fixeren op een pre: Web 3.0 is _zoveel_ sexyer… Hmm, nee, inderdaad, bij deze strontvlieg gaat die vlieger niet op, naar mijn idee. Een mening die niet uit de lucht gegrepen is trouwens; wij HTML'ers snappen gewoon niet wat _hidden metadata_ is, wat je er mee moet, en hoe je het behapbaar moet houden. Google [heeft dit voor een groot deel door](http://support.google.com/webmasters/bin/answer.py?hl=en&answer=146898 "In general, Google won't display content that is not visible to the user."), anderen [hebben andere dingen door](http://tech.burningbird.net/article/w3c-html-wg-decisions-hidden-longdesc-table-summary-and-myth-hidden-metadata "There is no "hidden" metadata—all the data in the web page is "visible" to some audience."). Wellicht dat een Web Semantics 5 specificatie dit probleem ooit op gaat lossen. Of misschien lost het zichzelf wel op, zoals een _acidic_ reactie op een post (die hieronder overigens gewoon welkom zijn).

De term content beperken tot het Web lijkt dus een keuze die leidt tot [goud en bling-bling](/blog/2011/12/het-is-al-goud-wiens-cursor-blinkt "Het is al goud wiens cursor blinkt"). Zelfs [Wikipedia](http://en.wikipedia.org/wiki/Web_content "Web content") heeft hier een pagina over, dus dan is het waar—een [gedrochtreden](http://nl.wikipedia.org/wiki/Drogreden "Drogreden"), ik weet het. Maar om het nog simpeler te maken: met Web content bedoel _ik_ tastbare 'dingen' op een website, [zoals bijvoorbeeld](http://nl.wikipedia.org/wiki/Tautologie_%28stijlfiguur%29 "Tenenkrommende tautologie is tenenkrommend!") pagina's, nieuwsberichten, reacties, alinea's, tabellen, afbeeldingen, kaarten en video's. En dan heb ik het dus _niet_ over `onze-voorpagina-met-achtergrondinformatie.html`, `Nieuws%20brief%20%28september%202011%29.doc`, `<li>First! [LOL](http://ragefac.es/23)</li>`, `<p>ee<p>ee`, [`<table><tr><td><table>`...](http://www.hotdesign.com/seybold/ "Herinnert iemand zich deze nog?"), `<img src="please-4.gif" alt="Please forgive!">`, `<iframe src="http://maps.yahoo.com/embed#q=Amsterdam&amp;conf=1&amp;start=1&amp;lat=52.373089&amp;lon=4.8933&amp;zoom=12&amp;mvt=m&amp;trf=0&amp;tt="></iframe>` of `<embed type="application/x-shockwave-flash" src="https://www.youtube.com/v/XSGBVzeBUbk" width="425" height="350" pluginspage="http://www.macromedia.com/go/getflashplayer">`. Dat is het idee dat wij nerds van content hebben, maar waar je verder ([bijna](/blog/2011/12/acteurs-schilders-en-technici "Acteurs, schilders en technici")) _niemand_ mee moet vermoeien. Die _implementatiedetails_ (de tagkoek die voor ons gesneden soep is) zijn niet wat die dingen uniek en bruikbaar maken. Over een jaar wil je misschien de achtergrondinformatie ook op een andere pagina gebruiken, nieuwsberichten of reacties in een feed terug laten komen, tabulaire data als [taartdiagram weergeven](http://code.google.com/apis/chart/ "Google Chart Tools"), [bepaalde plaatjes voor iets anders gebruiken](http://www.sitepoint.com/forums/showthread.php?428205-Frequently-Asked-Questions-about-HTML#q30 "So what is a good text equivalent for a given image? That depends on the context in which the image is used! It's not like there is a single 'perfect' text equivalent for each image."), overstappen naar Google Maps (omdat die fijn met [3D](/blog/2011/12/3d-graphics "3D-graphics") aan het pielen zijn), of in [één tik](/blog/2011/12/een-tik-op-de-neus "Een tik op de neus") de iPad ondersteunen. Sla de dingen dus zo klein en specifiek mogelijk op; je gaat hier later [pret mee hebben](/blog/2011/12/javascript-pret-met-alle-karakters-in-een-string "JavaScript-pret met alle karakters in een string"). Dit lijkt logisch,  maar de eerste grote fout bij de meeste CMS'en is dat ze content en HTML als hetzelfde ding zien.

Het woord 'management' [belooft](/blog/2011/12/deferred-en-promise-in-jquery "Deferred en promise in jQuery") niet veel goeds. Hierbij denk ik, vrijblijvende knutselaar die ik ben, aan [een keurslijf](/blog/2011/12/geharnast-javascript "Geharnast JavaScript"), regeltjes naleven en een pedante stropdas dragen. Hoe erg ik ook gruwel van die ideeën; als ik als HTML-freak graag wil dat mijn open- en sluit-tags inspringen als perfecte pendanten en niet de spuigaten uit spuiten qua [hoeveelheid en nesteldrang](http://krijnhoetmer.nl/zooi/screenshots/out.png "Markup die ik ooit terugkreeg van een back-end partij die mijn HTML had geïmplementeerd."), zal er ergens een bepaalde vorm van structuur geforceerd moeten worden. Een web developer is [geen magiër](http://vimeo.com/33650934 "Chris Heilmann | The prestige of being a web developer | Fronteers 2011") en je kunt maar tot op zekere hoogte bijsturen. Volgens mij ligt een groot deel van het beheersbaar maken, voor zowel de developer(s) als degene(n) die met het CMS moet(en) gaan werken, bij de basis.

Je hebt vast wel eens te maken gehad met een gammele WYSIWYG-editor, die een hoop details wegpoetst en een website zogenaamd beheersbaar maakt. Het lijkt aan de oppervlakte een perfect concept en het verkoopt makkelijk. De structuur die wij kennen (HTML) wordt vertaald naar een structuur die de gebruiker kent (een visuele representatie van die HTML), en andersom. Voordat we ook maar een front-end hebben waar we trots op kunnen zijn, is er dus al een vertaalslag geweest. En met een beetje ongeluk zit je je in allerlei bochten te wringen om twee compleet verschillende omgevingen (de publieke website én het CMS) van misschien wel dezelfde CSS te voorzien. Respect voor iedereen die daar overdag mee bezig is!

(TODO: Met WYSIWYG-editor hierboven bedoel ik trouwens een HTML-editor. Een editor als [Xopus](http://xopus.com/) is wat mij betreft iets totaal anders, aangezien die tot op het laagste niveau iets van de structuur weet, en dus de echte content beheert. Helaas zijn er maar weinig [goden](http://q42.nl/ "Q42, maar ik bedoel natuurlijk ook de mensen van Silk.") op de wereld, moeten de meeste baksels het gewoon met HTML doen en gaat er nog steeds een hoop fout.)

Tuurlijk, er zijn tegenwoordig perfecte editors die schone HTML teruggeven, maar ik heb ooit voor het meeste simpele model gekozen, waar ik geen spijt van heb. Een WYSIWYG-editor is niet eens mogelijk, aangezien bij de content _geen_ HTML wordt opgeslagen en het CMS niet weet hoe bepaalde _dingen_ verrijkt worden. Het uitleggen van deze kluif aan klanten lijkt misschien een grote, maar in de praktijk blijkt dit één van de makkelijkste punten te zijn. Het belang van een WYSIWYG-editor wordt volgens mij enorm overschat, terwijl het één van de grootste pijnpunten voor vrolijke front-enders is. Ik hoop dat [de mobiele tsunami](/blog/2011/12/klaar-voor-de-mobiele-tsunami "Klaar voor de mobiele tsunami") en misschien de [nieuwe Webrichtlijnen](/blog/2011/12/webrichtlijnen-2-de-nieuwe-standaard "Webrichtlijnen 2: de nieuwe standaard") dit de komende jaren duidelijk gaan maken, maar we moeten [loslaten en met betere oplossingen komen](http://vimeo.com/27182344 "Bryan Rieger | Muddling Through the Mobile Web | Mobilism 2011"). Het beheersbaar maken van [verschillende formaten afbeeldingen](/blog/2011/12/responsive-images-een-experiment "Responsive images; een experiment") op dezelfde pagina is een goed voorbeeld dat het WYSIWYG-probleem meteen al op de proef gaat stellen.

Eén van de grote voordelen van het hebben van aparte stukjes inhoud, is dat je per inhoudstype een specifieke _user interface_ kunt aanbieden. Wat je inlevert aan What You See Is What You Get, krijg je ruimschoots terug bij What You Want Is What You'll Get. Een [lijst met uitslagen](http://www.bvalmere.nl/nieuws/2011/12/speelweek-11)? Gewoon een begin- en einddatum vragen. Een [speelschema voor een team](http://www.bvalmere.nl/team-1/2011-2012)? Een seizoen, afdeling en team vragen. Een [Google Map](/congres/2011/venue)? Een adres, zoals je die ook invoert op [maps.google.nl](http://maps.google.nl/). Het beheren van dit soort content kan niet veel makkelijker voor de gebruiker. En het later aankleden van die content ligt helemaal in handen van de front-end developer, die zo door de jaren heen met [steeds minder markup](/blog/2011/12/kijk-mama-zonder-afbeeldingen-grafische-elementen-maken-met-css "Kijk mama, zonder afbeeldingen! Grafische elementen maken met CSS") uit de voeten kan. Voor beide partijen is 'managen' opeens een leuk woord geworden.

(TODO: Natuurlijk zijn er ook andere voorbeelden te bedenken, die lastiger zijn. Complexe tabellen onderhouden is nog steeds een ramp, niet alleen in een online editor, maar eigenlijk ook in Excel. Aan de andere kant kun je stellen dat als een tabel te complex is om te onderhouden, deze waarschijnlijk ook te complex is om aan de voorkant te begrijpen. [Dezelfde uitleg](http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2008-March/014245.html "[whatwg] several messages about tables and related subjects") wordt ook gegeven als de discussie over het via extra markup (`headers=""`, `scope=""`, `summary=""`, etc.) toegankelijk maken van tabellen weer eens oplaait binnen de HTML Working Group. De informatie opsplitsen lijkt dus sowieso geen gek idee, en ik steek mijn tijd liever in het maken van een begrijpelijke front-end, dan in het maken van de perfecte tabel-editor.)

De vertaling naar ons favoriete formaat (HTML, voor de duidelijkheid) is makkelijk; ieder type content krijgt van de server een stukje logica mee wat 'm in een kaal jasje steekt. Alle _alinea's_ krijgen een `<p>`- en `</p>`-paartje. Iedere _lijst_ wordt verpakt in een `<ul>` en iedere regel van die lijst krijgt een `<li>`-omhulsel voor z'n kiezen. Een _notitie_ krijgt een `<p class="note">`, een blok code krijgt `<pre><code>…</code></pre>`, enz. Grootste voordeel hiervan: dit maakt de belofte [die CSS ooit maakte](http://www.csszengarden.com/ "css Zen Garden: The Beauty in CSS Design") beter mogelijk. Bij een redesign van een site kun je bepaalde inhoud net even wat andere HTML [laten genereren](/blog/2011/12/front-end-meta-languages "Front-end meta languages"). En dat is nodig, want HTML en CSS zijn _niet_ los van elkaar te zien, ondanks dat we onszelf continu voorhouden dat dit wel zo is. "Ja, maar, heiden! Als ik m'n stylesheet weggooi in Firebug, kan ik nog steeds een duidelijke structuur zien. En dat is omdat ik semantische HTML gebruik. You suck." Nee, dat is omdat je browser dan eindelijk 'ns [haar eigen schitterende stylesheet](http://www.whatwg.org/specs/web-apps/current-work/multipage/rendering.html#the-css-user-agent-style-sheet-and-presentational-hints "The CSS user agent style sheet and presentational hints") mag laten zien.

(TODO: Ja, ik heb wel eens van XSLT gehoord. En nee, ik ken het niet goed genoeg om het een fijne techniek te vinden. Van de extra complexiteit die deze laag introduceert, blijf ik zo ver mogelijk vandaan. Vooral omdat ik met XML en XSLT geen enkel probleem oplos, maar alleen maar voor buzzword compliance zou gaan. In de korte tijd die we hebben op deze aardkloot wil ik de dingen zo simpel mogelijk houden. Daarnaast, stel dat we ooit Hixie op [ons congres](/congres "Fronteers Conference") krijgen, dan wil ik hem zonder schaamte aan kunnen kijken.)

Om al die kleine vertaalblokjes overzichtelijk te houden, heb ik ooit gekozen om mijn CMS op één server te laten draaien, met een gedeelde codebase voor al mijn klanten. Aangezien elk van de ongeveer 100 sites die er nu op draaien het concept 'Alinea' implementeert, is het logisch om de drie regels code die een `<p>` genereert te delen. En vindt een [bepaalde klant](http://37signals.com/svn/archives/001053.php ""Hire" the right clients") het nodig om [zich groter voor te doen](http://enterprise-html.com/ "Enterprise HTML - Provides proven high performance, enterprise-level and scalable HTML tips and best practices.") dan 'ie is, dan is het mogelijk om specifiek voor diegene een nieuwe vertaling te maken, die voor `<div class="paragraph">` zorgt ;) Zonder flauwekul: ook deze keuze heeft me veel vrolijkheid opgeleverd, naast het feit dat het lekker [schaalt](/blog/2011/12/scalable-vector-graphics-en-responsive-web "Scalable Vector Graphics en responsive web"). Ja, je kunt waarschijnlijk meer geld verdienen door klanten een SLA aan te smeren en de zoveelste security update tegen betaling door hun strot te duwen. Genoeg Joomla-boeren die hier hun brood mee verdienen. Niets mis mee natuurlijk, maar ik doe er niet aan mee. Niet omdat ik denk dat Vespasianus gelijk had toen 'ie tijdens het zeiken een goed idee kreeg, maar omdat ik niet Caligula achterna wil qua krankzinnigheid; ik wil leuk werk doen. Wat dat betreft zijn wij developers wel magiërs; we _kunnen_ ons eigen werk beïnvloeden.

Los van de kleine blokjes content waar wij tags voor kennen, zijn er ook grotere concepten, zoals pagina's, secties, nieuwsberichten en producten. Deze moeten ook allemaal zonder moeite uitgelegd kunnen worden aan iemand, dus het is het handigst om zo dicht mogelijk bij het tastbare ding te blijven en zoveel mogelijk structuur af te dwingen. Zo hangt een pagina bij mij altijd onder een andere pagina, en komt deze altijd voor of na een andere pagina. Een regel die het makkelijk maakt om menu's te genereren en [URLs netjes leesbaar en gestructureerd](http://css-tricks.com/guidelines-for-uri-design/ "Guidelines for URI Design") te houden. Bij nieuwsberichten is er bijvoorbeeld altijd een auteur en datum, bij producten altijd een naam en prijs. Probeer per concept een stramien te bedenken waarin je net genoeg vrijheid biedt en al het andere dichttimmert. En hou daarbij rekening met het veranderlijke karakter van het web; er gaat _sowieso_ ooit nog wat overhoop gehaald worden. Paginastructuren worden omgegooid, producten krijgen nieuwe eigenschappen, etc. Een CMS dat hier niet [flexibel](/blog/2011/12/learn-you-a-flexbox-for-great-good "Learn you a Flexbox for Great Good!") op kan inspelen, is niet gemaakt voor het Web. Iets wat niet betekent dat een CMS [alles](http://nl.wikipedia.org/wiki/Paretoprincipe "Paretoprincipe") moet kunnen.

(TODO: Een belangrijk deel van veel CMS'en is workflow management en gebruikersrechten. Ik ben zelf van mening dat deze vooral in het leven zijn geroepen om bepaalde mensen zich niet verantwoordelijk te hoeven laten voelen voor het werk dat ze doen, of om een organisatie een gevoel van veiligheid te geven. Ik hoop de komende jaren wat milder te worden, maar voorlopig zit het er niet in. Ook hier geldt voor mij de complexiteit die het oplevert, maar ook het vertrouwen in het goede van de mens. Geef iemand de controle over iets en de kans is vrij groot dat diegene zijn of haar best daar ook voor gaat doen. In de afgelopen maand hebben een paar schrijvers bijvoorbeeld gevraagd of ze toegang mochten krijgen tot het CMS achter deze site, zodat ze zelf nog hun post konden aanpassen, wat perfect werkt.)

Een hoop ontwikkelaars zijn nog steeds [gillend](/blog/2011/12/welkom-op-het-audiologische-internet "Welkom op het Audiologische Internet") op zoek naar het ideale CMS, en een hoop CMS'en proberen alles te doen, tot aan [koffie](http://cms.com.au/ "Coffee Machines Services") zetten toe. [Volgens mij](/blog/2011/12/closure-tools "Closure Tools") bestaat die combinatie niet, en moeten we ons gaan beperken tot plezier hebben in het werk dat we doen. Ik weet dat ik met mijn geknutsel nooit de grote massa ga bereiken ([een](http://gall.qontent.nl/) [prototype](/blog/2011/12/prototype-in-javascript "Prototype in JavaScript") daargelaten), maar ik weet ook dat ik het heerlijk vind om te neuzelen in de marge die HTML-indenting heet. De realiteit is toch dat alles wat we online doen over een paar jaar weer compleet vernieuwd wordt.

Het enige nadeel van werken op het Web? Het kan _altijd_ beter. En dat is ook meteen het voordeel.

Aan iedereen die deze maand heeft meegelezen: bedankt voor je overlevend overlezend vermogen. Beleef de komende dagen feestelijk en het nieuwe jaar vooral gelukkig!

(TODO: Over Krijn Hoetmer
2011/12/krijn-hoetmer.jpg
Krijgt door dit soort stukjes _alweer_ zin om [kronkels.net](http://kronkels.net/) nieuw leven in te blazen, maar gaat er waarschijnlijk niet aan toekomen door tijdgebrek. Iets wat in 2012 gaat veranderen.
Donatie: Wikipedia
Omdat deze site het bewijs is dat je nooit uitgeleerd kunt zijn.)