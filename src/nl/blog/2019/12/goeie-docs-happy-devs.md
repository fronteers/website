---
title: "Goeie docs = Happy devs"
date: 2019-12-03
author: Anke Willems
categories: 
  - Adventskalender
---
Je hebt een geweldige app gemaakt, een mooie site gebouwd of een stevig CMS in elkaar gezet. Maanden werk. Je snapt zelf helemaal hoe het in elkaar zit. En dan komen ze: de vragen. Vragen van anderen die met jouw product aan de slag gaan.

Een draagvlak krijgen voor je app, script, plugin of anderszins, valt of staat bij goede documentatie. Gebruikers zijn ongeduldig, ze zoeken iets dat snel werkt. En als ze zich in de steek gelaten voelen zonder goede documentatie, zoeken ze door naar de volgende app. Want: als iets niet meteen werkt én je snapt ook nog eens de documentatie niet, voel je je dom of vind je de app dom. Niemand wil zich dom voelen, dus als er geen (goede) docs zijn en iemand worstelt met het starten met je app raak je die gebruiker snel kwijt. Dit zegt niks over hoe goed je applicatie is, maar de waarheid is dat niets zichzelf verkoopt, hoe goed het ook is.

Zorg je echter voor goede documentatie — met een goede ‘getting started’ en een paar stap-voor-stap secties — dan krijgt je gebruiker snel resultaat. Ze hebben iets werkend in no-time, hun initiële probleem of behoefte is opgelost en ze voelen zich succesvol en blij. En blije gebruikers zijn goede ambassadeurs voor je product.

Wellicht heb je al documentatie geschreven (goed zo!), of moet je er nog aan beginnen. Net zoals het bouwen van je app een vak is, is het maken van duidelijke documentatie ook een specialiteit op zich. In deze blog wil ik je wat tips geven om je op weg te helpen. Ik zal ingaan op code comments, READMEs en uitgebreidere documentatie.

# Denkers en doeners

Niet iedereen neemt op dezelfde manier informatie op. Sommige mensen proberen graag eerst zelf wat, terwijl anderen zich liever eerst goed inlezen. En weer een derde groep kijkt graag juist een video met uitleg. In de didactiek worden dit leerstijlen genoemd. Er wordt uitgegaan van vier verschillende leerstijlen. Eenvoudig gezegd zijn dit ‘waarnemen’, ‘ervaren’, ‘denken’ en ‘doen’. Als je dit in gedachten neemt is het niet gek dat jouw manier van uitleggen misschien niet bij iedereen aansluit die iets wil leren over jouw product. En dat het geen gek idee is om bepaalde informatie op meerdere manieren aan te bieden.

# Geen documentatie

Laten we bij het begin beginnen. De beste documentatie is _geen documentatie_. Dit lijkt een open deur, maar als je applicatie zo duidelijk is dat er geen extra uitleg nodig is dan is dat natuurlijk een _win_. Zorg dus dat je bij de basis, het ontwerp en het opzetten van je applicatie, al rekening houdt met je gebruikers en kijkt wat de logische stappen zijn die mensen doen. Test regelmatig in het wild, en als mensen steeds dezelfde fout maken of je dezelfde vraag stellen kan je op die plek vast iets verbeteren.

# Code comments

Een eenvoudige en snelle versie van documentatie zijn comments in de code. Je hebt bijvoorbeeld een open source applicatie gebouwd waarmee anderen ook aan de slag moeten. Of je hebt gewerkt aan een project dat jij en je team langere tijd moeten onderhouden. Dan wil je in de code ook comments opnemen om zaken uit te leggen. Het is verrassend hoeveel je in de toekomst vergeten kan zijn van het project dat je nu uit je hoofd kent.

Vrijwel iedereen compileert zijn JS en CSS, dus comments nemen geen ruimte meer in op je productieserver. Er is niet zoiets als ‘teveel comments’ als dat nodig is voor je code.

```
/* Theme colors, defined by corporate identity (version 1.3, august 2019) */
root: {
    --themecolor-primary: #ff0099;
    --themecolor-secondary: #ff6600;
}
```

Houd het leesbaar, kort en bondig. Je schrijft comments die door een mens gelezen moeten worden. Gebruik duidelijke taal en korte zinnen.

```
/* Run initial checks for page setup. Checks the viewport width
 * and does some actions for the UI based on screen size
 */
preLoadChecks();
```

Magic numbers? Het liefst gebruik je zo min mogelijk _magic numbers_ in je code. Toch gebruikt? Leg uit waarom.

```
width: 200px; /* Magic number, needs fixing! Exact width of logo, 
                 looks best on mobile like this */
```

Vraag jezelf af wat er zo ingewikkeld is aan dit stukje code, en probeer dat in ‘leken’-taal te verwoorden. Ook voor _future you_.

```
/* First, get the height of the viewport. Use this value to calculate
 * the color using the script from github.com/awesome-script. Second,
 * create the variables of the theme based on these colors.
 */
```

# READMEs

Een goede README in je git repository laat je project opvallen in de massa andere projecten op GitHub. Dus je schrijft een kickass README die net zo goed is als je repo. Het is ook is een manier om te zorgen dat mensen betrokken worden bij je project. Het gebruik van screenshots en beeld trekt snel de aandacht omdat dat een manier is om snel informatie over te brengen. En een verzorgde README wijst ook op een net, verzorgd project.

Je README moet voldoende info bevatten om mensen snel op weg te helpen. Denk daarbij aan:

* Een introductie. Wat voor project is dit? Wat doet het en voor wie is het? Hou het simpel met heldere taal en korte zinnen. 
* Wat maakt dit project zo uniek en speciaal? Bezoekers die op GitHub zoeken naar een geschikte app of plugin, willen snel kunnen vergelijken. 
* Screenshots en/of code voorbeelden.
* Welke specs zijn nodig? 
* Welke stappen zijn nodig voor de installatie? 
* Hoe kan je meehelpen? Laat mensen weten hoe ze kunnen bijdragen aan je project. 
* Credits! Wie hebben er meegebouwd? 
* Is er een licentie, en zo ja, welke?

# Documentatiesites

Voor de grotere projecten maak je een documentatie-website. Een handleiding waarin je je gebruiker bij de hand neemt om de applicatie zo goed mogelijk te gebruiken. Met de verschillende leerstijlen in gedachten kan je verschillende ingangen maken voor gebruikers. Bijvoorbeeld - Een stap-voor-stap uitleg. Voor het opzetten van een installatie of een eerste demo. De doeners in je doelgroep worden hier blij van! - Via een inhoudsopgave op kernwoorden. - Een serie video tutorials

* Een stap-voor-stap uitleg. Voor het opzetten van een installatie of een eerste demo. De doeners in je doelgroep worden hier blij van! 
* Via een inhoudsopgave op kernwoorden. 
* Een serie video tutorials

Veel mensen starten met **doen**. Ze installeren je applicatie en klikken er in rond. Als het goed is zit je applicatie duidelijk in elkaar en snappen mensen direct wat ze moeten doen. Komen ze een hobbel tegen, dan gaan ze op zoek naar de docs.

# Schrijftips

Geen enkele gebruiker die ik ken pakt eerst de docs om te lezen, om daarna pas te starten. Mensen komen pas bij je documentatie uit als er een probleem is. Ze zoeken op een kernwoord naar een oplossing. Spreek deze bezoekers daarom aan met de volgende punten in gedachten:

Gebruik kernwoorden die ook in de applicatie gebruikt worden. Let op de exacte bewoordingen van onderdelen en knoppen.

Maak de pagina snel scanbaar met tussenkopjes. Niet meer dan één of twee paragrafen per kopje. Toch te lang? Verdeel je tekst dan onder in delen.

Focus niet op het _happy path_: het scenario waarbij alles vlekkeloos verloopt in je applicatie. Immers, gaat alles goed, dan komen mensen in eerste instantie niet bij je docs kijken. Geef bij elke stap een paar voorkomende problemen en hoe die op te lossen.

Gebruik de exacte bewoording van foutmeldingen. Gebruikers _google-en_ immers vaak de melding en komen zo direct op jouw site waar de oplossing staat.

Vermijd wollig taalgebruik en schrijf actief. ‘_You will see the big red button on the top. Press this to go to the configuration page where you can edit the settings_’ wordt: ‘_Edit the configuration settings by pressing the ’config’ button_’. 
Eenvoudig: Hoe kortere zinnen (én woorden!), hoe makkelijker leesbaar. En geen enkele gebruiker heeft ooit geklaagd dat iets ‘te makkelijk leesbaar’ was.

Mensen leren van fouten van anderen. Kom je zelf een foutmelding tegen die niet gedocumenteerd is? Draag bij aan de documentatie door bijvoorbeeld een pull request.

Teveel uitleg nodig? Dat kan een hint zijn dat je code of app op die plek niet helemaal lekker loopt. Kijk altijd of je applicatie zelf op dat punt wellicht verbeterd kan worden.

Geef codevoorbeelden die direct knip- en plakbaar zijn, en een basis zijn om uit te werken. Voeg eventueel uitgecommentarieerde opties toe in deze voorbeeldcode.

```
var myColorpicker = new Colorpicker ('.colorpicker-container', {
    // Optional parameters
    swatches: 'large', // small, medium, large, huge
    name: true // true: shows names, false: swatch only
})
```

# Voeg beeld en video toe

Om weer even terug te komen op de leerstijlen: Als je je documentatie kan voorzien van beeldmateriaal, zoals video of screenshots, maak je het voor veel mensen bruikbaarder en sneller te snappen. Zorg ook voor goede alt-teksten van je beeld en captions bij je video’s om rekening te houden met toegankelijkheid. Op de Mac kan je tegenwoordig binnen iOS en OSX een schermvideo opnemen, of je gebruikt een app zoals [Recordit](https://recordit.co/).

En als uitsmijter: vraag hulp. Je hoeft niet alles zelf te doen en anderen helpen je graag een handje bij proeflezen of testen. De frisse blik van een ander kan je zeker helpen bij het verbeteren van je docs, want sommige zaken zijn voor jou wel logisch maar hebben voor een ander juist wat toelichting nodig.

Dit waren mijn tips. Hopelijk helpt deze blog je op weg als je de volgende keer aan de slag gaat met het schrijven van een README of documentatie. Succes!

# Meer informatie?

* Tips voor code comments op Hongkiat: [Source Code Comment Styling: Tips and Best Practices](https://www.hongkiat.com/blog/source-code-comment-styling-tips/)
* Tips voor een goede README op Medium: [A Beginners Guide to writing a Kickass README](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)
* Hoe schermvideo’s opnemen op de Mac: [Apple: How to record the screen on your iPhone, iPad, or iPod touch](https://support.apple.com/en-us/HT207935) [Apple: How to record the screen on your Mac](https://support.apple.com/en-us/HT208721)

### Over Anke Willems
<img src="/archief/_img/adventskalender/anke.jpeg" alt="Foto van anke" class="floating-portrait">
Anke is webdesigner en front-end developer bij Two Kings. In een eerder leven was ze grafisch ontwerper (met drukwerk en papier en zo), maar digitaal vind ze toch echt leuker. Heeft een grote liefde voor het maken van kleine gebruiksaanwijzingen die op een post-it moeten passen. Maakte de afgelopen twee jaar ook de sketch notes van de Fronteers Conferentie.
Ankes donatie gaat naar Stem op een vrouw.
