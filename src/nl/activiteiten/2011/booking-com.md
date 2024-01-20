---
title: 'Bijeenkomst bij Booking.com op 15 november 2011'
date: 2011-11-15
eventdate: 2011-11-15
location:
categories:
    - meetup
---

Arjan introduceert Fronteers en Alejandro vertelt kort iets over [Booking.com](http://booking.com), die vanavond voor de ruimte, het bier en het eten heeft gezorgd.

[Roy Tomeij](http://roytomeij.com/) van 80beans presenteert vanavond over versiebeheer, met name over Git. Bij versiebeheer heb je een backup en geschiedenis van alle bestanden, zodat je altijd terug kunt gaan naar een oude versie.

Git heeft gedecentraliseerde code, dus je hebt het project op je eigen computer en op de server. Deze kun je na verloop van tijd synchroniseren. Ook is Git anders in de zin dat het snapshots in plaats van veranderingen gebruikt. Zo kun je eventueel een commit er tussenuit halen zonder dat er iets breekt, handig als je per ongeluk een wachtwoord van de database naar de server pusht.

Branches maken het mogelijk dat je diverse verschillende versies van dezelfde bestanden kunt gebruiken. Zo kun je aan een feature werken terwijl ondertussen in de 'master'-branch bugs in dezelfde site kunt fixen. Deze verschillende branches kunnen gemakkelijk gemerged worden.

Met Git `push` en `pull` kun je commits tussen de lokale repository en die op de server uitwisselen. `git pull --rebase` zorgt ervoor dat je geen ongewenste merge krijgt, door te pullen en je commits daar overheen te draaien. `git commit --amend` voeg je iets toe aan een commit, en kan je de commitmessage veranderen, handig als je een kleine wijziging achteraf wilt doorvoeren. Doe dit niet na het pushen.

Git flow is een stukje software waardoor je gemakkelijker met Git kunt werken op de commandline. Zo kun je hotfixes gemakkelijk mergen met zowel master en de features.

Github is een community om code te bewaren en te delen. Je kunt publieke en gesloten repositories aanmaken. Met pullrequests kun je code aan een collega ter controle laten zien. Indien akkoord, kan de code vaak automatisch gemerged worden in de masterbranch.

[Fabio Venni](http://fabio.antanix.net/) gaat verder en presenteert over web typografie. Typografie is een mooie groep letters, en niet een groep mooie letters.

Serif is ontstaan uit de kloosters, waarbij de penselen die men gebruikte een dunne danwel dikke rand in de x en y richting genereren. Daaruit zijn diverse modernere typefaces ontstaan. Sans-Serif is expliciet met de computer gemaakt. Monospaced typefaces zijn _voor_ de computer gemaakt.

Tracking is de standaardbreedte tussen twee letters, en kerning lijkt daar veel op. Kerning is specifiek voor een bepaalde lettercombinatie, hoeveel ruimte tussen twee letters moet zijn. Leading is de verticale ruimte tussen de diverse regels.

## Overige materialen en verslagen

-   [Slides van de presentatie van Roy, op Speakerdeck](http://speakerdeck.com/u/roy/p/git-your-act-together)
-   [Slides van de presentatie van Febio, HTML](http://www.antanix.net/_presentation/typography/) (laadt langzaam)

## Aanwezigen

-   Sander Aarts
-   Isaac Andela
-   Anne
-   Danny Averdieck
-   Robert Beekman
-   Sander van den Berg
-   Hayo Bethlehem
-   Bjorn Boonen
-   Lee Boonstra
-   Niek Bosch
-   Matijs Brinkhuis
-   Daniël
-   Arjan Eising
-   Jules Ernst
-   Frank
-   Gvido Glazers
-   Guus Goossens
-   Tom Greuter
-   Peter van Grieken
-   Rein Groot
-   Krijn Hoetmer
-   Adriaan de Jonge
-   Patrick Kempff
-   Joris Ketelaar
-   Jeroen Kleuters
-   Ted de Koning
-   Anton Kouliavtsev
-   Jeff Kreeftmeijer
-   Peter Kruithof
-   Jorn Luiten
-   Mallory
-   Edwin Martin
-   Bran van der Meer
-   Jeroen Mulder
-   Willem Mol
-   Stephan van Opstal
-   Wes Oudshoorn
-   Lukas Pauka
-   Rowdy Rabouw
-   Thijs Reijgersberg
-   John Ripmeester
-   Anne Jan Roeleveld
-   Charis Rooda
-   Johan Schuyt
-   Ivana Setiawan
-   Koen Smeets
-   Virgil Spruit
-   Johan Sterenberg
-   Roy Tomeij
-   Tobias Urff
-   Fabio Venni
-   Paul Verbeek
-   Thijs van der Velden
-   Corné Verbruggen
-   Pascal Vree
-   Sybren Wartna
-   Maikel van der Zande
-   En nog 2 personen
