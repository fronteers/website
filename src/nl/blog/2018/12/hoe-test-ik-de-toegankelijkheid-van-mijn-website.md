---
title: "Hoe test ik de toegankelijkheid van mijn website?"
date: 2018-12-10
author: Erik Kroes
categories: 
  - Adventskalender
---
Top! Je wil testen of je website toegankelijk is voor iedereen. Daarmee help je niet alleen de mensen met een beperking, waarvan er steeds meer zijn in onze vergrijzende maatschappij. Een toegankelijke website is voor iedereen fijner in gebruik, en er zijn nog veel meer [goede redenen](https://www.w3.org/WAI/bcase/Overview) om met toegankelijkheid aan de slag te gaan.

![Twee drempels met opgangen voor rolstoelen, maar in het midden een bord “”Keep clear for wheelchair users” dat de toegang verspert](https://fronteers.nl/_img/adventskalender/toegankelijkheid-testen/keep-clear-accessibility-fail.jpg)

# Geef mij maar een uitdaging!

Je zou de [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG/) (WCAG) door kunnen nemen. Deze richtlijn van het W3C is verankerd in [regelgeving](https://www.w3.org/WAI/policies/) en is internationaal de standaard voor toegankelijkheid. Als je dit document tot je wil nemen ben je wel even bezig. WCAG bestaat uit 4 principles met 13 guidelines die onderverdeeld zijn in 78 success criteria. En die gaan dan weer gepaard met een paar honderd "techniques and failures". Je voelt hem misschien al aankomen: de meest gebruikte richtlijn is niet het meest toegankelijke startpunt.

![Driehoekig waarschuwingsbord met rolstoel die van helling af glijdt](https://fronteers.nl/_img/adventskalender/toegankelijkheid-testen/wheelchair-sign.jpg)

# Vijf simpele tests om de toegankelijkheid van mijn website testen

Er zijn vijf relatief simpele checks die veel op kunnen leveren. Deze testjes zorgen ervoor dat je met weinig moeite heel wat problemen kunt onderscheppen. Gebruik hierbij de termen "quick wins" en "laaghangend fruit" en iedereen zal je begripvol aankijken.

# Simpele test 1: Kleur en contrast

De tekst op je pagina moet leesbaar zijn voor iedereen. Een goed contrast helpt niet alleen mensen die slechtziend of kleurenblind zijn, maar bijvoorbeeld ook bezoekers die met hun mobieltje in de zon staan of hun scherm gedimd hebben. Het testen van kleur en contrast is dan ook een waardevolle stap naar toegankelijkheid.

WCAG laat voor grote tekst een lagere contrastwaarde toe dan voor kleine tekst. Grote tekst is in dit geval minimaal 24px, of minimaal 19px en bold. Voor grote tekst moet het contrast minimaal 3.0:1 zijn, en voor normale tekst 4.5:1.

Nu kan ik me voorstellen dat je je bij deze getallen niks kan voorstellen. Gelukkig zijn er tal van tools die je precies kunnen vertellen hoeveel contrast er tussen twee kleuren zit. Je kunt twee kleuren invoeren op de website [contrast-ratio.com](https://contrast-ratio.com/), je [Chrome developer tools](https://developers.google.com/web/updates/2018/01/devtools#contrast) gebruiken, of een los programma zoals [Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/) downloaden.

Als je eenmaal een tool gekozen hebt kun je alle teksten op je website nagaan.

![Rolstoelopgang die begint met 1 traptrede](https://fronteers.nl/_img/adventskalender/toegankelijkheid-testen/ally.jpg)

# Simpele test 2: Zoom in en uit

Heel veel mensen zijn erbij gebaat als er fatsoenlijk in te zoomen is op je website. De site mag dan best overspringen naar een tablet of mobiele versie als die er is. De basis van toegankelijkheid is dat iedereen dezelfde inhoud en functionaliteit kan gebruiken, dus let wel op dat je responsive website een volwaardig alternatief is! Dit kun je gemakkelijk testen met de zoomopties in je browser.

# Simpele test 3: Gebruik je toetsenbord

Een deel van je bezoekers zal gebruiken maken van zogenaamde assistive technology (AT), ondersteunende technologie. Veel van die technologie communiceert met de browser via de toetsenbord API. Kort gezegd: als je website met een toetsenbord te bedienen is maak je veel mensen blij. Daarbij horen ook bezoekers met een kapotte muis, een gebroken arm en power users.

Test dus even met je toetsenbord of alles werkt. Ga met TAB door je pagina, en weer terug met SHIFT-TAB. Kijk of je al je interactieve elementen (knoppen, links, formulieren, etc) kan bereiken, en of je ze kan bedienen. Let ook goed op of het altijd zichtbaar is welk element de focus van je toetsenbord heeft.

![Trap met latten die eroverheen liggen](https://fronteers.nl/_img/adventskalender/toegankelijkheid-testen/lb-prague-kunta-hora-14.jpg)

# Simpele test 4: Doe een automatische test

Misschien vraag je je af, waarom testen we niet alles automatisch? Een beetje gezonde luiheid kan geen kwaad. Helaas is alles automatisch testen bij toegankelijkheid geen optie. Een test kan bijvoorbeeld wel zien of een afbeelding een tekstalternatief heeft, maar niet of de tekst ook daadwerkelijk de lading dekt.

Het exacte getal varieert afhankelijk van wie je het vraagt, maar ga er van uit dat zo'n 30% van alle issues automatisch getest kan worden. Gelukkig zitten daar wel een aantal veel voorkomende tussen, dus de winst is alsnog flink.

Er zijn verschillende tools die je kan gebruiken. Zelf ben ik een erg tevreden gebruiker van [aXe](https://www.deque.com/axe/). Deze Javascript library kun je overal in de developer workflow inzetten. Bijvoorbeeld in je [linting tool](https://webhint.io/docs/user-guide/hints/hint-axe/), [bij je andere tests](https://github.com/dequelabs/axe-core/tree/develop/doc/examples), of als [browser extension](http://bitly.com/aXe-Chrome).

De laatste optie is misschien wel de makkelijkste om mee te beginnen. De aXe extensie geeft je developer tools een nieuw tabje met een mooie analyze-knop. Na een druk op de knop krijg je alle issues te zien. Ik zou eerst filteren op "Violations" in plaats van "All issues", dat maakt het een stuk praktischer. Vervolgens krijg je een overzichtelijke lijst met issues inclusief omschrijving, locatie, oplossing en een hele waardevolle "Learn more"-link waar enorm veel nuttige informatie achter zit.

![Bord weelchair ramp available pleas ask at counter](https://fronteers.nl/_img/adventskalender/toegankelijkheid-testen/1514154-408320525965919-1541568371-n-grande.jpg)

# Simpele test 5: Screen reader

Bij assistive technology denken men al snel aan screen readers. Een screen reader is software die kan voorlezen wat er op een scherm te zien is, en hier doorheen kan navigeren. Deze software wordt onder andere door blinden en slechtzienden gebruikt. Zo'n screen reader is een flink andere gebruikerservaring dan de meeste mensen hebben. Zeker als je de eerste keer een screen reader start en je computer begint een heel verhaal, dan kan dat even wennen zijn.

Ervaring leert echter dat je helemaal niet veel van een screen reader hoef te snappen om er praktisch mee te testen. Eigenlijk wil je ongeveer hetzelfde doen als eerder met je toetsenbord. Je navigeert door de pagina om te zien (of horen) of je alles kan bereiken, en of je alles kan bedienen. Extra controlepunt is nu of alle onderdelen die je bereikt een logische naam en rol hebben. Een knop moet bijvoorbeeld voorgelezen worden als "button" en niet als "clickable" of "link". Daarnaast moet de button een naam hebben die past bij de functie. Een menu knop kan bijvoorbeeld voorgelezen worden als "Menu, button".

Wat je met een screen reader hoort, moet overeenkomen met wat visueel aanwezig is.

Op MacOS heb je [VoiceOver](https://www.apple.com/lae/accessibility/mac/vision/) dat het beste resultaat geeft met Safari. Bekijk de [VoiceOver cheatsheet bij Deque](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts).

Op Windows heb je onder andere [NVDA](https://www.nvaccess.org/) dat het beste werkt met Firefox. Bekijk de [NVDA cheatsheet bij Deque](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts).

![zeer steile trap met daarnaast even steile helling met daarop bord voor rolstoepgebruikers](https://fronteers.nl/_img/adventskalender/toegankelijkheid-testen/m3ed6g0adn001.jpg)

# Ok, dan ben ik klaar!

Nee helaas, zo simpel is het niet. Maar je hebt nu wel een stevige basis. Zorg dat je semantische HTML gebruikt, volg standaarden en denk bij alles wat je maakt na of het mogelijk mensen met een beperking beïnvloedt.

En om af te sluiten nog een aantal praktische bronnen voor als je nog meer wil weten toegankelijkheid.

# Bronnen

[W3C - WAI - Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)

[W3C - WAI - Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/)

[Udacity - Web Accessibility](https://www.udacity.com/course/web-accessibility--ud891)

[edX - ICT Accessibility](https://www.edx.org/course/information-communication-technology-ict-gtx-ict100x)

[Future Learn - Digital Accessibility](https://www.futurelearn.com/courses/digital-accessibility)

[GOV.UK - Dos and don'ts on designing for accessibility](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/)

[W3C - WAI - How to Meet WCAG 2 (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/)

![](https://fronteers.nl/_img/adventskalender/toegankelijkheid-testen/title-describes-topic-or-purpose.jpeg)

### Over Erik Kroes
<!-- <img src="/archief/_img/adventskalender/erik.jpg" alt="Foto van Erik Kroes" class="floating-portrait"> -->
Erik is onderdeel van het accessibility team van ING. Elke dag probeert hij weer zijn steentje bij te dragen aan de digitale toegankelijkheid van de apps en websites. Daarnaast is hij creatief actief en maakt hij onder andere illustraties voor de Volkskrant.

Donatie: de Hersenstichting
