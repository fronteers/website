---
title: How I stopped worrying and learned to love Docker
date: 2022-12-15
author: Anke Willems
summary: 'Developen is natuurlijk het leukste als de omgeving waarop je werkt ook zonder issues werkt. Dat scheelt veel frustratie en je hoeft alleen maar na te denken over het schrijven van mooie code. Zo werkten we op mijn werk eerst met VirtualBox / Vagrant. We gebruikten één virtual machine waarop alle sites draaiden. Om een website draaiend te krijgen moesten we na een Git clone nog best veel handelingen verrichten om een website daadwerkelijk te kunnen gebruiken. Werkte *oké-ish*, maar daarna zijn we overgestapt naar Docker, en dat vind ik dus een ontzettende verbetering van mijn workflow. Maar ik hoor ook veel geluiden van front-end developers die al beginnen te huilen als ze in de buurt van Docker komen. Dus ik heb besloten uit te leggen hoe wij het ingericht hebben, in de hoop dat andere developers er hun voordeel mee kunnen doen.'
categories:
    - Adventskalender
---

Developen is natuurlijk het leukste als de omgeving waarop je werkt ook zonder issues werkt. Dat scheelt veel frustratie en je hoeft alleen maar na te denken over het schrijven van mooie code. Zo werkten we op mijn werk eerst met VirtualBox / Vagrant. We gebruikten één virtual machine waarop alle sites draaiden. Om een website draaiend te krijgen moesten we na een Git clone nog best veel handelingen verrichten om een website daadwerkelijk te kunnen gebruiken. Werkte _oké-ish_, maar daarna zijn we overgestapt naar Docker, en dat vind ik dus een ontzettende verbetering van mijn workflow. Maar ik hoor ook veel geluiden van front-end developers die al beginnen te huilen als ze in de buurt van Docker komen. Dus ik heb besloten uit te leggen hoe wij het ingericht hebben, in de hoop dat andere developers er hun voordeel mee kunnen doen.

Twee disclaimers:

-   Eén: Er zijn veel manieren om Docker in te richten dus ik weet alleen dat onderstaande voor mij werkt met onze opzet.
-   Twee: ik ben geen back-end developer, dus ik weet niet exact waarom zaken zó ingericht zijn en of het beter of anders kan.

## Waarom gebruiken we Docker?

De marketing uitleg: Docker is een zogenoemd ‘containerization platform’ waarmee je sites en apps kan bouwen, deployen en onderhouden met behulp van containers.

Hoe werkt dat in de praktijk? Stel, je werkt met een team aan een site. Eén developer werkt op Windows, twee werken op Linux, en een ander weer op een macOS. Dan heb je op elk van deze computers in feite een andere omgeving, met evenveel variabelen waardoor zaken net weer anders kunnen werken. (En iedereen kent wel de uitdrukking: ‘Works on my machine’.)

Deze verschillen kan je elimineren door je site in te pakken in een Docker container. Dit kan je zien als een mini-virtual machine met dezelfde instellingen, die je commit in de repo. Dus iedereen die het project binnenhaalt kan aan de hand van deze instellingen dezelfde virtual machine aanmaken, en dus de site op exact dezelfde omgeving runnen.

Zo kunnen developers dus werken zonder zich druk te maken om de omgeving. Op mijn werk hebben we dit inmiddels _smooth_ aan de praat voor iedereen, en het bevalt prima!

## De Happy Path: Wat doe ik als front-ender als alles goed gaat

In het meest ideale geval verlopen de stappen als volgt:

-   `git clone` Ik clone de repo van onze git repository
-   Ik krijg een gezipte database (meestal vanuit de productie website, zodat deze lekker up-to-date is) aangeleverd, en zet die in de lege `/docker/database` directory. Voor multi-site systemen (meerdere websites die draaien op één codebase) zet ik de database een mapje dieper, maar het principe blijft hetzelfde.
-   In de root staat een /.env.example file met de Docker instellingen. Deze kopieer ik naar een nieuwe /.env file . Deze file staat in de .gitignore en wordt dus niet mee gecommit.
-   In een apart terminalvenster draai ik `docker compose up` en hops: mijn containers draaien! Dit venster laat ik open zodat ik eventuele foutmeldingen kan zien.
-   Bij mij betekenen bovenstaande stappen dat ik vervolgens my-website.localhost heb draaien, waar ik kan zien wat ik doe.

Naast het bovenstaande heb ik als GUI Docker Desktop draaien, waar ik een visueel overzicht heb welke containers draaien. Daar kan ik eventueel ook een enkele container snel weggooien en herstarten indien nodig.

![Het Docker Desktop overzichtsvenster. In het groen zijn de draaiende containers weergegeven met relevante info over versies en poorten erachter. In het grijs de containers die ook aanwezig zijn maar nu niet draaien. Het oranje label geeft overigens aan dat er één container is die nog niet op een versie draait die compatible is met de M1 MacBook.](/_img/blog-anke-1.png)

Het Docker Desktop overzichtsvenster. In het groen zijn de draaiende containers weergegeven met relevante info over versies en poorten erachter. In het grijs de containers die ook aanwezig zijn maar nu niet draaien. Het oranje label geeft overigens aan dat er één container is die nog niet op een versie draait die compatible is met de M1 MacBook.

Bovenstaande workflow vereist eigenlijk geen enkele Docker kennis. Als ik een database heb en de repository, dan krijg ik de boel draaiend.

Als ik klaar ben met mijn project, of switch van project, ga ik naar het terminalvenster met de draaiende Docker container, en stop ik met ctrl-c alle containers van het project.

## Hoe zit deze opzet in elkaar?

Wij ontwikkelen voornamelijk sites op het CMS Drupal, en onze opzet volgt het systeem van [Wodby](https://github.com/wodby/docker4drupal) .

Een Docker container is een “soort van” kleine virtual machine. Docker maakt gebruik van ‘images’. Dit zijn instructiesets / commando’s waarmee de containers worden ingericht. Zo heb je bijvoorbeeld een PHP image, een Nginx image etc. Een PHP image zal dus bijvoorbeeld zorgen dat de juiste versie van PHP geïnstalleerd wordt op de PHP container. Het basisprincipe van Docker is dat je probeert om elke container maar één verantwoordelijkheid te geven. De PHP container is dus bijvoorbeeld alléén maar verantwoordelijk voor PHP en de Mysql container is alléén maar verantwoordelijk voor het draaien van Mysql.

Om te zorgen dat alle containers goed samenwerken maken we gebruik van Docker Compose [https://docs.docker.com/compose/ ]. Bij Docker Compose maak je gebruik van een YAML file om alle services van je applicatie te configureren: `/docker-compose.yml`. Daarin staat bv welke services (PHP, Apache, Nginx, MariaDB, node, elastic etc) je site of applicatie gebruikt en op welke poort een service draait. Deze file importeert op zijn beurt weer de variabelen die per omgeving in de hierboven genoemde .env file gezet zijn. Hierin staat bv _welke_ versie van bovengenoemde service wordt gebruikt, en welke image moet worden binnen gehaald. Bij Flink maken we vaak ook gebruik van de images van [Wodby](https://hub.docker.com/u/wodby/#!), omdat deze goed configureerbaar zijn, over het algemeen goed up-to-date zijn en een volledig ecosysteem levert (PHP, Mysql, Nginx, etc.).

Bij het commando `docker compose up` worden de containers opgestart (en gedownload als ze nog niet beschikbaar waren), de services geïnstalleerd en samengevoegd tot een werkende omgeving. Er worden per Docker image commando’s uitgevoerd die in de docker-compose.yml staan. Zo wordt er voor de database container bijvoorbeeld gecheckt of er al een eerder gebruikte database container aanwezig is. Zo niet, dan bouwt Docker er eentje en importeert daarna de database die ik net in de /docker/database directory geplaatst heb.

## Deze Docker files hebben we in de root van onze sites staan

```
/docker
	/database
		/name-of-database.gzip
.env.example
.env ( = de door de gebruiker gemaakte kopie van .env. example)
docker-compose.yml
/web (de site)
+ de normale files die in de root van je repo staan
```

## Gaat alles dan altijd meteen goed?

Nee. Sterker nog, in het begin heb ik heel veel moeten troubleshooten om dingen werkend te krijgen. Waar liep ik tegenaan?

## Containers crashten bij opstarten

Ik was de eerste met een M1 MacBook op kantoor. En regelmatig werkte de specifieke versie van een container die in de .env file stond niet voor de M1. Deze heeft namelijk een nieuwe architectuur van de chip ten opzichte van oudere MacBooks, en dus ook aangepaste images nodig. Hier liep ik regelmatig tegen aan met bijvoorbeeld mariaDB en Nginx containers. Dus dat betekende zoeken tot je een versie had die wel op de M1 werkte en dat in je .env file aanpassen. En omdat de .env file in de .gitignore staat, blijft die wijziging alleen lokaal. (Ter referentie, dit geeft vaak de volgende error: `runtime: failed to create new OS thread (have 2 already; errno=22`)

## Geheugenproblemen

Daarnaast heeft mijn MacBook maar 8gb geheugen. En dat is eigenlijk te weinig voor Docker, dat bij default ongeveer 6gb geheugen wil. Je kan het lager instellen (via Docker Desktop) maar naar minder dan 6gb luistert ie eigenlijk niet. En dat betekent dus dat je nog maar 2 gb over hebt voor de rest van je systeem. Spoiler: Dat is te weinig. In mijn geval betekent dat regelmatig mijn PhpStorm en/of Firefox herstarten om wat geheugen vrij te maken. Maar zorg dus dat je in ieder geval 16gb geheugen hebt, als je op een MacBook ontwikkelt.

## Wat gebruik ik daarnaast nog?

In elke directory staat NVM ([Node Version Manager](https://github.com/nvm-sh/nvm)), die ons de juiste Node versie serveert. Daarnaast natuurlijk een `package.json` waardoor we met `npm install` meteen de juiste versies van de benodigde node modules kunnen installeren.

Wij draaien Grunt met Browsersync om mijn scss te compileren en live updates te zien in de browser. (Gezien de tijd dat Grunt al meegaat hebben mensen hier vast een mening over, maar het draait en het draait snel en stabiel. ) Bij onze Docker containers gebruiken we de volgende opties van browsersync in de Gruntfile.js:

```
options: {
              watchTask: true,
              proxy: '<http://www-mysite-nl.localhost>',
              host: 'www-mysite-nl.localhost',
              open: false
           }
```

En om browsersync zonder problemen te draaien heb ik in mijn hostfile op de mac (/etc/hosts) de volgende regel staan: `127.0.0.1    www-mysite-nl.localhost`

De `127.0.0.1` is op de Mac vooralsnog nodig, zonder deze extra aanwijzing werkt `www-mysite-nl.localhost:3000` niet als locatie voor de live update van browsersync.

Toelichting hierover van mijn back-end collega Paul: Windows / Docker op Windows kan tegenwoordig overweg gaan met subdomeinen van localhost. Mac kan dat (nog) niet. Een oplossing hiervoor kan zijn, om te werken op een daadwerkelijk domein die verwijst naar je localhost, bijv. een .dev domein. Voor nu plaatsen we op de Mac de domeinreferentie in de hosts file, wat het probleem ook oplost.

## Vergeet de README niet!

Er zijn natuurlijk veel verschillende manieren van het opzetten van je Docker structuur. En de bedoeling van Docker is dat iedereen die het project cloned dezelfde omgeving kan gebruiken en dat het hun leven _makkelijker_ maakt. Zorg dus dat je in de README van het project duidelijk omschrijft welke stappen er nodig zijn om deze Docker container aan de praat te krijgen. En dan liever teveel dan te weinig uitleg, want je wil ook je freelancers en stagiairs die minder kennis hebben van de ‘normale’ workflow in jullie bedrijf goed kunnen helpen.

## Docker compose HUP!

Inmiddels hebben wij alle omgevingen _flawless_ draaien op de computers van alle developers. Ik vind het onzettend fijn werken, omdat je met één command in de juiste directory, namelijk `docker compose up` , in een paar seconden exact de omgeving hebt die je eerder had draaien, totaal onafhankelijk van de andere projecten waar je aan werkt.

Ik hoop dat ik op deze manier een beetje inzicht heb kunnen geven in hoe ik met Docker werk, en de voordelen die het heeft als je het goed inricht. En het blijft een proces. Bij ons op het werk was het ook niet in één keer goed, maar omdat we er dagelijks gebruik van maken en tijd hebben gemaakt om de verbeteringen in alle sites door te voeren, hebben we nu een tamelijk _foolproof_ implementatie waar de feedback van al onze collega’s in meegenomen is. Succes met je eigen opzet, en hopelijk is dit het einde van minimaal één geval van ‘works on my machine’.

## Dank!

Veel dank aan mijn collega Paul Dudink, die bij ons op Flink de Docker omgevingen heeft ingericht en mij van veel extra informatie en aanvullingen voorzien heeft voor deze blogpost.

## Resources:

-   [kant en klare docker-compose.yml voorbeelden voor diverse omgevingen](https://github.com/docker/awesome-compose)
-   [Wodby documentatie Docker voor Drupal installaties](https://wodby.com/docs/1.0/stacks/drupal/local/)
