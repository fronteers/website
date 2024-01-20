---
title: 'Het is al goud wiens cursor blinkt'
date: 2011-12-12
author: Jan Moesen
categories:
    - Adventskalender
---

Een pijnlijk vergezochte titel voor een alledaags onderwerp: de opdrachtregel of terminal. Die tekstinterface voor je computer mag dan wel al meegaan van toen de mainframes nog op stoom werkten, tegenwoordig is hij hipper dan ooit. (Een zwart scherm is het nieuwe, euh, zwart.)

Wie al wat langer in dit wereldje meedraait (hier, neem nog een Werthers Echte), heeft de verandering van "slicer" naar "front-end developer" meegemaakt. Vroeger zat er vaak niemand tussen de designer en de ontwikkelaar van een website. Alles was mooi afgelijnd: de designer leverde een hoop geslicete afbeeldingen op en de ontwikkelaar trok er z'n plan mee. Nu komt daar steeds vaker nog een front-ender bij kijken, en die moet van alle markten thuis zijn. In de praktijk betekent dat bijvoorbeeld overweg kunnen met bronbeheersoftware als Subversion en Git, of met allerlei minifiers voor JS en CSS met tal van opties—allemaal uit te voeren op de opdrachtregel.

Om maar te zeggen: het is belangrijk dat je comfortabel je werk kan doen, zonder writer's block. Daarom enkele tips die je het leven in de terminal gemakkelijker maken. Mac- en Linux-gebruikers zitten goed; Windows-gebruikers installeren best eerst [Cygwin](http://www.cygwin.com/).

## 1. Word een TiEnErTyPeR

De Tab-toets is een van de toetsen die je het meest op prijs zal stellen bij het werken op de opdrachtregel. Autocomplete voor map- en bestandsnamen is onmisbaar om snel te werken. Alleen: standaard is die hoofdlettergevoelig, terwijl je Mac- of Windows-schijf daar niet flauw over doet, en je mappen en bestanden ook namen met Hoofdletters hebben. Dus als je `cd dow` typt, en dat vervolgens met `<Tab>` automatisch wil aanvullen tot `cd Downloads`, kom je bedrogen uit.

Bash, de standaardshell, gebruikt de Readline-bibliotheek om je invoer in te lezen. Wat dat precies inhoudt, is niet zo belangrijk. Je moet alleen weten dat je die bibliotheek kan configureren via een `.inputrc`-bestandje in je gebruikersmap. (De zogenaamde "dot files" zijn configuratiebestanden uit de UNIX-wereld. Je ziet ze standaard niet via de GUI of met een gewone `ls`, maar met bijvoorbeeld `ls -alF` wel.)

Zet de volgende regel in je `.inputrc` zodat `cd dOwN<Tab>` netjes wordt aangevuld tot `cd Downloads`:

```
set completion-ignore-case On
```

Daarbij aansluitend zet je dit in je `.bashrc`, zodat `ls -alF *.jpg` zowel `IMG_1234.JPG` als `Screenshot 2011-12-01.jpg` toont:

```
shopt -s nocaseglob
```

Als die bestandjes nog niet bestaan, kan je ze gewoon aanmaken. De volgende keer dat je je shell (of je terminal) start, worden ze ingelezen.

## 2. Word een geschiedenisprof

Hoe meer tijd je in de terminal doorbrengt, hoe vaker je bepaalde commando's zal herhalen. Gelukkig houdt Bash standaard een aardige geschiedenis bij. Je kan door die geschiedenis bewegen met de pijltjestoetsen: pijltje omhoog toont het vorige commando; pijltje omlaag het volgende. Je kan vorige commando's ook opzoeken door eerst `Ctrl+R` te drukken en dan een woord in te voeren. Als je bijvoorbeeld `Ctrl+R` drukt en dan `git com` typt, zie je je vorige `git commit`-commando verschijnen. Je kan dan nogmaals op `Ctrl+R` drukken voor het commando daarvoor, en zo blijven teruggaan in het verleden.

Ikzelf vind het wel gemakkelijk als de pijltjes omhoog en omlaag zich wat intelligenter gedragen. Als je onderstaande code toevoegt aan je `inputrc`, houdt Readline rekening met wat je al getypt hebt:

```
# Use more intelligent Up/Down behaviour: use the text that has already been
# typed as the prefix for searching through commands, like in Vim.
"\e[B": history-search-forward
"\e[A": history-search-backward)
```

Concreet: als je nu `git com` typt, en dan pijltje omhoog, heb je meteen je vorige `git commit` te pakken. Of `curl what` en je krijgt `curl whatismyip.org`—ervan uitgaande dat je dat al ooit getypt had. (Handige tip, overigens: zo zie je meteen je externe IP-adres.)

Ook in `.bashrc` voor geschiedenis zijn er enkele handige instellingen. Ik hou wel van deze:

```
# Als je twee keer `foo` typt, hoeft dat niet twee keer in de geschiedenis.
# Zo vervuil je minder en kan je sneller door de geschiedenis navigeren.
export HISTCONTROL=ignoredups;

## Als je ooit een uitroepteken gebruikt en een onbegrijpelijke foutmelding
# terugkrijgt, is dit commando een redder. Hiermee verschijnt je "foute"
# opdracht netjes opnieuw, zodat je hem gemakkelijk kan bewerken.
shopt -s histreedit;

## Standaard houdt Bash de laatste 500 opdrachten bij. Dat mag meer zijn.
export HISTSIZE=4096;)
```

## 3. Word een controlefreak

De shell biedt een heel krachtige manier om je computer te bedienen. Dat is erg prettig, maar missen is menselijk. Daarom, voor je eigen veiligheid, voeg je best een extra controle toe voor je bestanden onherroepelijk verneukt. Immers, als je een bestand kopieert naar een map waar al een bestand met dezelfde naam staat, zal een GUI je wel vragen of je zeker bent, maar de terminal niet. Je moet dat expliciet instellen. Voor `cp` ("copy"), `mv` ("move" en hernoem) en natuurlijk `rm` ("remove") doe je dat als volgt in `.bashrc`:

```
alias cp='cp -i';
alias mv='mv -i';
alias rm='rm -i';)
```

Als je nu een keer `rm final.css` doet, zal je deze vraag krijgen:

```
remove final.css?
```

Deze controle vereist dat je `y` ingeeft (of `yes`, of `you betcha!`, of eender wat met een `y` vanvoor), of het bestand wordt niet verwijderd.

## 4. Word vrolijk

De standaardprompt (het tekstje dat verschijnt voor jij kan beginnen typen) is niet bepaald geïnspireerd: `<computernaam>:<huidige map> <gebruikersnaam>`. Dat is op zijn zachtst gezegd beknopt. Het is ook niet handig om te zien waar de uitvoer van je commando's begint en eindigt. Daarom gebruik ik wat kleur. In je `.bashrc` ziet dat er zo uit:

```
export PS1="\[$(tput setaf 4; tput bold)\](\t) \u@\h \W\n\$ $(tput sgr0)"
```

Dat is een hele boterham, en in tegenstelling tot wat je moeder altijd zei tijdens het mosselen eten, is het wél nuttig om je voedsel te ontleden:

-   `PS1` is de omgevingsvariabele die je prompt instelt.
-   `tput setaf 4` zorgt ervoor dat de verdere tekst blauw wordt.
-   `tput bold` maakt de tekst vet, wat meestal neerkomt op helder gekleurd.
-   `\t` toont de huidige tijd, zodat je die niet uit het oog verliest.
-   `\u@\h` is de gebruikersnaam en de computernaam.
-   `\W` is de huidige map.
-   `\n` is een nieuwe regel: zo heb je meer plaats voor jouw commando.
-   `\$` toont de `$` voor jou en `#` voor de "root"-gebruiker.
-   `tput sgr0` zorgt ervoor dat je niet in het blauw zit te smurf—euh, typen.

Je kan veel verder dan dit gaan. En dat brengt me naadloos bij de laatste tip.

## 5. Word een profiteur

Deze en vele andere instellingen die je leven in de terminal verbeteren, zijn overal beschikbaar. Gebruik daarom het werk van mensen die je zijn voorgegaan. Enkele bekende voorbeelden van "dot files" beschikbaar op GitHub, zijn die van [Gianni Chiappetta](https://github.com/gf3/dotfiles), [Gary Bernhardt](https://github.com/garybernhardt/dotfiles), en [Mathias Bynens](https://github.com/mathiasbynens/dotfiles). Ondergetekende heeft ook zijn eigen, totaal onbekende verzameling, met de tips uit dit artikel, en veel meer: [Tilde](https://github.com/janmoesen/tilde).

"Good artists copy; great artists pull."

## Over Jan Moesen

<img src="/_img/2011/12/jan-moesen.jpg" alt="Foto van jan moesen uit 2011" class="floating-portrait" /> 
[Jan](https://twitter.com/janmoesen) is een webnerd die zich zowel in de browser als op de terminal thuis voelt, en mensen wil doen inzien dat die terminal echt efficiënt is. Dat doet hij op zijn dagtaak als webontwikkelaar, en vanaf begin 2012 ook [op bestelling bij jou](http://tervelo.com/).

Donatie: [APOPO](http://www.apopo.org/)
Vroeger vond ik ratten vieze ziekteverspreiders. APOPO heeft dat echter veranderd: zij leiden heroRATs op. Zo'n Rat 2.0 rédt mensenlevens. Ze worden opgeleid om tuberculose—tering!—vast te stellen of om landmijnen op te sporen. Ontmijnen zit er nog niet in, maar mits genoeg fondsen komt er misschien wel een RatGyver?
