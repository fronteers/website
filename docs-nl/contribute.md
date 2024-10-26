# Bijdragen

Wil je ons helpen? Geweldig! Lees eerst dit document door om een ​​idee te krijgen van de manier waarop je kunt bijdragen. Er zijn verschillende manieren waarop je kunt helpen:

- door ons advies te geven over tooling
- door [componenten te bouwen](https://github.com/fronteers/website/issues?q=is%3Aissue+component+is%3Aopen).
- door componenten te verbeteren (ze slanker, sneller, slimmer, robuuster of mobielvriendelijker te maken)
- door functionaliteit voor de website te bouwen (er is veel gedaan, maar er kan misschien nog wat aan worden gesleuteld)
- door [geavanceerde functionaliteit](https://github.com/fronteers/website/issues?q=is%3Aissue+is%3Aopen+label%3Achallenge) te bouwen

Benieuwd hoe de site er nu uitziet? Bekijk [de Fronteers website beta op Netlify](https://fronteers.netlify.app/)! :)

## 👯 Ontwikkelingsprincipes

Voordat je begint met bijdragen, moet je de volgende principes overwegen:

**1. Dit is voor iedereen**
Zorg ervoor dat iedereen zich welkom voelt om bij te dragen aan fronteers.nl. Houd je feedback of probleembeschrijvingen beleefd en to the point.

**2. Drie zien meer dan twee, zien meer dan één**
Er zijn veel slimme mensen in onze community, dus vraag om feedback op je idee en laten we van elkaar leren!

**3. Houd het simpel, lieverd**
We zijn allemaal vrijwilligers met beperkte tijd, dus houd je bijdragen klein en simpel, zodat mensen gemakkelijk kunnen doorgaan waar je was gebleven.

**4. Er is geen kwaad om te vragen**
Als je vastzit of aan de slag wilt met een probleem, maar niet helemaal zeker weet hoe, vraag dan rond in Fronteers Slack. Er is altijd wel iemand bereid om te helpen. Als je nog geen lid bent van onze Slack-community, kun je je [hier registreren](https://fronteers-slack.herokuapp.com/).

## 🏗 Goede eerste problemen

We hebben problemen die goede eerste problemen kunnen zijn om mee te helpen, gelabeld als [Goede eerste problemen](https://github.com/fronteers/website/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
Dit zijn meestal problemen waarvoor je hulp nodig hebt met de styling.

## ✨ Uitdagende problemen

Problemen waarvoor je back-end-expertise, kennis/ervaring met Liquid of kennis van een bepaalde technische oplossing nodig hebt die we graag aan de website willen toevoegen en die UX enorm zou helpen.

Waarom kijk je er niet eens naar? [Bekijk alle uitdagende problemen](https://github.com/fronteers/website/issues?q=is%3Aissue+is%3Aopen+label%3Achallenge).

## 💡 Problemen die wat onderzoek nodig hebben naar de beste optie

We weten nog niet zeker hoe we een aantal dingen moeten aanpakken en we hebben die gemarkeerd als [vragen](https://github.com/fronteers/website/issues?q=is%3Aissue+is%3Aopen+label%3Aquestion). Wat is jouw advies over hoe je dit kunt doen? Heb je een website gezien waar iets super soepel lijkt te werken?

## 🤔 Heb je een vraag voor onze ontwerpers?

We verzamelen vragen en feedback in batches, zodat de ontwerpers één aanspreekpunt hebben en 100% gefocust aan dit project kunnen werken. [Laat je vraag/feedback achter in dit probleem](https://github.com/fronteers/website/issues/79)

## 🐛 Heb je gewoon een mening of zie je iets buggy?

Omdat we allemaal vrijwilligers zijn die hieraan werken, zou het voor ons het meest nuttig zijn als je een pull-request zou kunnen openen. Maar we begrijpen het als je een beetje afgeschrikt bent door dit alles, of niet genoeg thuis bent in de code om vol vertrouwen een verandering door te voeren. We snappen het!

Je kunt [een bug-rapport openen](https://github.com/fronteers/website/issues/new?assignees=&labels=&template=bug_report.md&title=🐛) hier op GitHub
of als je denkt dat meer discussie nuttig zou zijn [doe mee op Slack](https://fronteers-slack.herokuapp.com/) in het kanaal `#nieuwe-website`.

# Hoe te beginnen met ontwikkelen

De website is gebouwd met [Eleventy](https://www.11ty.dev/) (Statische sitegenerator) en gehost op [Netlify](https://www.netlify.com/).

Elke keer dat er een nieuwe pull-request wordt gemaakt, zie je onderaan de pull-request detailpagina een link van Netlify waar reviewers kunnen zien hoe alles eruitziet als de wijzigingen zouden worden samengevoegd. De `main`-branch heeft ook een [preview-link](https://fronteers.netlify.app/) als je wilt zien wat er tot nu toe is gebouwd!

In de meeste problemen vermelden we een link naar het ontwerpbestand. Onze ontwerpers delen [het ontwerp](https://xd.adobe.com/view/bd533314-bf05-4cbe-b634-499f8f25dbbc-e800/grid) rechtstreeks met ons via het AdobeXD-platform.
De meeste problemen hebben ook een checklist, zodat je vakjes kunt afvinken als je werk hebt gedaan dat is samengevoegd, of als je ziet dat het is gedaan. Zo kan de volgende persoon zien wat er nog moet gebeuren.

Wil je zelf aan de slag? Volg de onderstaande stappen!

> Begrijp je een van deze stappen niet of wil je dat het anders wordt uitgelegd? [Doe mee op Slack](https://fronteers-slack.herokuapp.com/) in het kanaal `#nieuwe-website`. We brainstormen met je over hoe we je het beste op de hoogte kunnen brengen!

## Stap 1: Fork de repository op GitHub

Voordat je de repository kloont, moet je een fork maken. Een fork is een persoonlijke kopie van de repository waaraan je vrij kunt werken zonder dat het oorspronkelijke project wordt beïnvloed. Ga hiervoor naar de [Fronteers GitHub-repository](https://github.com/fronteers/website) en klik op de knop "Fork" in de rechterbovenhoek. Hiermee wordt een kopie van de repository gemaakt onder uw eigen GitHub-account.

## Stap 2: Kloon de repository op uw computer

Zodra je de repository hebt geforkt, ben je klaar om deze te klonen naar uw lokale machine. Als je deze nog niet hebt geïnstalleerd, [download en installeer Git](https://git-scm.com/downloads) voor uw computer. Git is een versiebeheertool. Tijdens het coderen maak je "save points" (commits genoemd), wat het erg handig maakt als je met andere mensen codeert. Ze kunnen zien wat je hebt gedaan en waarom, omdat je een beschrijvende 'commit-melding' toevoegt. En als je beiden een bestand hebt bewerkt, helpt het je ervoor te zorgen dat je de code van de andere persoon niet overschrijft. Dit [Dit artikel over Git door Milu Franz is een geweldige uitleg](https://dev.to/milu_franz/git-explained-the-basics-igc). [Roger Dudler's git guide](https://rogerdudler.github.io/git-guide/) geeft een lijst met alle nuttige opdrachten. Git-artikelen en -video's online kunnen een beetje intimiderend zijn. Het kan helpen om een ​​goede [Git grafische gebruikersinterface](https://git-scm.com/downloads/guis) te installeren.

Zodra je Git hebt, open je een opdrachtregel en ga je naar een map op je harde schijf waar je een kopie van je geforkte Fronteers-websitecode wilt bewaren.
**Bijvoorbeeld:** Ga naar een map als `your-username/github/` en voer de volgende opdracht uit om je geforkte repository te klonen. Het zal dan de Fronteers website code aanmaken in `your-username/github/website` :)

```bash
git clone https://github.com/fronteers/website.git
```

Dit maakt een kopie van alle code op je harde schijf. Blijf op deze locatie op de opdrachtregel, we zullen hier verder werken.

## Stap 3: Installeer node modules

Zorg er eerst voor dat je alle benodigde modules installeert met NPM:

```bash
npm install
```

Als deze opdracht vreemd voor je lijkt, bekijk dan dit artikel: "[A beginner's guide to NPM](https://www.stackchief.com/tutorials/A%20Beginner%27s%20Guide%20to%20NPM)". Samenvattend, het zal alle benodigde modules installeren om Eleventy te draaien.
Als je er nog niet eerder mee hebt gewerkt, moet je ook [Node.js en npm installeren](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-installer-to-install-nodejs-and-npm) ([Als je iOS of Windows hebt, deze link](https://nodejs.org/en/download/)).

## Stap 4: Maak een git-branch om aan te werken

We maken een branch, een soort kopie van de code waarin je al je wijzigingen (`commits`) opslaat. Dit helpt om al je wijzigingen bij het maken van een nieuw onderdeel of een bugfix bij elkaar te houden. Nadat je klaar bent met coderen, maak je een `pull-request`, wat in feite de expressie is die we gebruiken om feedback van het team en toestemming te vragen om je wijzigingen aan het project toe te voegen.

```bash
git checkout -b [branch-name]
```

Vervang [branch-name] in de bovenstaande opdracht door een naam die het eindresultaat uitlegt. Hier zijn enkele voorbeelden:

```
git checkout -b feature/about-hero-element

git checkout -b bugfix/fix-typos-on-homepage

git checkout -b content/add-my-meetup
```

## Stap 5: Eleventy uitvoeren

Nadat je alle benodigde node-modules hebt geïnstalleerd, voert je uit

```bash
npm start
```

Deze opdracht vertelt Eleventy om alle bestanden in de map `src` te doorlopen. Wanneer deze wordt uitgevoerd, genereert deze eerst de site in de map `dist`. Nadat dit is voltooid, vertelt deze je op welk adres in de browser je een actieve versie van de website kunt vinden. Vervolgens gaat deze in de `watch`-modus, wat betekent dat deze de bestanden die je bewerkt en opslaat in de gaten houdt. Als het ziet dat je wijzigingen aanbrengt in een `.md`, `.html` of `.liquid` bestand, zal het alle bestanden opnieuw genereren en automatisch de browser vernieuwen.

![Voorbeeld van wat je krijgt als je de opdracht npm run start uitvoert](https://github.com/fronteers/website/blob/main/docs/afterrunningnpmstart.png?raw=true)

> Sidenote
> Dit is allemaal heel slim, maar het is niet _zo_ slim. Als je een html-pagina hebt gegenereerd, die je in de browser bekijkt, en je verwijdert deze zodat de pagina in de browser niet meer zou moeten bestaan, dan lijkt het alsof er niets verandert. Dit komt omdat Eleventy niet alle bestanden in de `dist` map verwijdert voordat het alle pagina's opnieuw genereert. Het opnieuw uitvoeren van npm `start` lost dit probleem echter op.

### Snelle build

Als je werkt met bestanden die een volledige herbouw activeren, zoals `.liquid`-bestanden, wilt je waarschijnlijk niet wachten tot alle bestanden opnieuw zijn gegenereerd. Voer in dat geval `npm run start:quick` uit om alle oudere content uit te sluiten.

### Alleen de site genereren

Als je niet aan het ontwikkelen bent, maar alleen wilt dat Eleventy een kopie van de website genereert, kunt je de volgende opdracht gebruiken.
U hoeft dit niet echt te doen, omdat we de site hosten op Netlify, en het doet dit voor ons door de GitHub-hoofdbranch te downloaden en vervolgens dit uit te voeren. (Je kunt het zien op [onze Netlify bètaversie](https://fronteers.netlify.app/))

```bash
npm run build
```

## Stap 5: Begin met coderen

Elk probleem dat openstaat op de [probleempagina](https://github.com/fronteers/website/issues) heeft een kleine checklist die laat zien wat er nog moet gebeuren om het als voltooid te beschouwen. Dit weerspiegelt onze definitie van voltooid:

- Responsief: we zorgen ervoor dat pagina's en componenten op alle apparaatformaten werken.
- Toegankelijk: we willen voldoen aan WCAG 2.1 AAA. Vergeet niet: hebben afbeeldingen een alt-attribuut? Is alles toegankelijk met alleen een toetsenbord? Is het contrast hoog genoeg?
- Progressieve verbetering: alle hoofdinhoud moet toegankelijk zijn met JavaScript uitgeschakeld.
- Documenteer de dingen die je doet: voeg componenten toe aan de [Kitchensink](https://fronteers.netlify.app/nl/kitchensink/) met verschillende statussen, zodat editors weten hoe ze deze moeten gebruiken.

## Componenten maken

Op dit moment maken we niet zoveel gebruik van deze functionaliteit als we zouden kunnen, omdat we in principe liquid includes gebruiken. Maar we hebben de optie om ze tot echte componenten te maken. Kom in [onze Slack](https://fronteers-slack.herokuapp.com/) in het kanaal `#nieuwe-website` discussiëren!
