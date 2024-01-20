---
title: Een mobile app maken met JavaScript
date: 2022-12-08
author: Josee Wouters
summary: 'Je hebt op je telefoon vast ontelbare apps staan. Misschien heb je wel Netflix, Instagram, de app van Burger King, of de fitness app Sworkit. Wat hebben deze apps met elkaar gemeen? Ze zijn allemaal gemaakt met JavaScript. Verschillende JavaScript frameworks maken het nu mogelijk om ‘gewoon’ met JavaScript, HTML en CSS een mobile app te maken voor bijvoorbeeld iOS of Android. Maar wat komt er nog meer bij kijken als je jouw met JavaScript gemaakte app ook echt wil uitbrengen in de verschillende app stores? Dat probeer ik in deze blog uit te leggen.'
categories:
    - Adventskalender
---

Je hebt op je telefoon vast ontelbare apps staan. Misschien heb je wel Netflix, Instagram, de app van Burger King, of de fitness app Sworkit. Wat hebben deze apps met elkaar gemeen? Ze zijn allemaal gemaakt met JavaScript. Verschillende JavaScript frameworks maken het nu mogelijk om ‘gewoon’ met JavaScript, HTML en CSS een mobile app te maken voor bijvoorbeeld iOS of Android. Maar wat komt er nog meer bij kijken als je jouw met JavaScript gemaakte app ook echt wil uitbrengen in de verschillende app stores? Dat probeer ik in deze blog uit te leggen.

## Swift, Kotlin of JavaScript

Doorgaans worden apps voor iOS geschreven in Swift (dit gebeurde voorheen in Objective-C) en in Kotlin voor Android (voorheen Java). Natuurlijk kun je een van deze talen leren om een native app te maken. Zo heeft Apple bijvoorbeeld leermateriaal voor Swift ontwikkeld, speciaal voor kinderen.

Wil je liever geen nieuwe programmeertaal leren? Zoals gezegd hoeft dat ook niet. Netflix en Instagram bijvoorbeeld zijn gemaakt met React Native. De app van Burger King en Sworkit zijn gemaakt met Ionic en/of Capacitor. Met Ionic en Capacitor ben je zelfs niet eens afhankelijk van een specifiek JS-framework.

## Capacitor en NativeScript

Capacitor is ontwikkeld door het team achter Ionic en kun je beschouwen als de opvolger van Cordova (wat weer de opvolger van Adobe's Phonegap was). Met Capacitor is het nog makkelijker geworden om een mobile app te maken, want je kunt dit integreren in elk modern front-end project. Of je nu Vue, React of Angular gebruikt. Je kunt zelfs vanilla JS schrijven.

Een ander framework dat je kunt gebruiken en vergelijkbaar is met Capacitor, is Nativescript. Wil je hiermee werken, dan kun je het beste de _get started_ documentatie gebruiken van de desbetreffende frameworks. Die zijn beter en uitgebreider dan ik het kan uitleggen nu.

## En nu?

Je hebt een app gemaakt met het JavaScript framework van je keuze. Het werkt in de browser, wat nu? Je eerste stap is om je app te testen in een emulator of op je eigen device. Zo weet je zeker dat de app die je wilt publiceren, ook daadwerkelijk werkt buiten de browser om.

## Xcode en Android Studio

Met Xcode kun je je app testen voor alle Apple devices, voor Android heb je Android Studio nodig. Belangrijke opmerking hierbij is wel dat Xcode alleen beschikbaar is voor MacOS. Android Studio kun je voor meerdere besturingssystemen downloaden. Een extra tip is om altijd te testen op een echt toestel en niet volledig op een emulator te vertrouwen. Zo is het mij meerdere malen overkomen dat een app het in de emulator niet deed, maar op een telefoon wel zonder problemen werkte.

## App icons en splash screens

Werkt je app? Gefeliciteerd! Het belangrijkste heb je nu gehad, maar je bent er helaas nog niet. Je app heeft een icon nodig dat op verschillende formaten en voor verschillende devices gemaakt moet worden. Dit geldt ook voor een _splash screen_\*, het laadscherm dat je ziet voordat een app opent. Helaas hanteren zowel Android als iOS verschillende formaten voor zowel splash screens als icons, waardoor dit best wel een klus kan zijn. Gelukkig zijn er [verschillende online tools](https://appicon.co/) die je daarbij kunnen helpen. Als zo’n tool ook de juiste folderstructuur aanhoudt, hoef je alleen de default icons in de desbetreffende directories te vervangen voor je eigen nieuwe afbeeldingen.

Een splash screen is iets ingewikkelder, voornamelijk door de grote verschillen tussen telefoons en tablets. Als je hierbij ervoor kiest om vanuit een bronbestand de verschillende formaten te genereren, is het belangrijk om je content te centreren in het design omdat je anders de kans hebt dat een deel niet zichtbaar is. Er zijn [tools](https://apetools.webprofusion.com/#/tools/imagegorilla) die daar ook rekening mee kunnen houden, zodat je ook hierbij in een handomdraai de juiste bestanden kunt maken. Vervolgens is het toevoegen van de splash screens aan je app ook een kwestie van de default afbeeldingen vervangen. Je hoeft gelukkig niet met alle mogelijke formaten rekening te houden. Zowel Apple als Google gaan uit van een aantal vaste formaten.

## Google Play Console en App Store Connect

Je hebt een werkende app, een app icon en een splash screen: je bent klaar om je app te uploaden naar de platforms van Google en Apple om je app te publiceren. Voor Android telefoons gebruik je Google Play Console, voor iOS is er App Store Connect. Bij beide platforms heb je een developer account nodig. Ook hierbij zou ik aanraden om de documentatie van de platforms zelf te lezen, omdat deze het wederom beter kunnen uitleggen dan ik dat kan. Belangrijk om te weten is dat een developer account bij Apple 99 euro per jaar kost, voor een Google Play Developer account ben je eenmalig 25 dollar kwijt. Voor beide heb je een credit card nodig.

## Testen

Zowel App Store Connect als Google Play Console bieden je de mogelijkheid om gebruikerstests uit te voeren via de platforms. Je kunt hiervoor zelf mensen uitnodigen. Wat je nodig hebt is het e-mailadres van je proefpersonen. Alleen zij kunnen dan de versie van je app downloaden en gebruiken. Het is zelfs mogelijk om via deze platforms feedback te verzamelen, zodat je precies weet welke dingen je gebruikers tegen aan lopen.

## Previews, screenshots en feature graphics

Nu je app getest is - en hopelijk goed bevonden - ben je er bijna. Je kunt nu het proces volgen om je app in te dienen voor beide app winkels en ook hierbij zijn weer een aantal dingen om aan te denken. Zo moet je een website opgeven, onder andere voor bijvoorbeeld een privacyverklaring. Ook heb je afbeeldingen nodig die bij je app getoond worden.

Ook voor deze previews en screenshots moet je verschillende formaten voorbereiden. Voor iOS bijvoorbeeld is op het moment van schrijven een screenshot van een 6.5” iPhone verplicht en een 12.9” iPad. Daarnaast heeft Google een “feature graphic”, een soort promotiebanner voor je app. Om dit soort previews te genereren zou ik ook aanraden om gebruik te maken van [(online) software](https://appscreens.com/). Zo’n tool kan automatisch alle formaten voor je genereren, zonder dat je voor elk device een apart design moet maken.

## Je app publiceren

Als je alle afbeeldingen gemaakt hebt, ben je nu echt klaar om je app in te dienen. Dit is voornamelijk een kwestie van alle stappen doorlopen en gevraagde velden invullen. Vervolgens dien je je app in ter goedkeuring. Als je alle informatie hebt ingevuld, afbeeldingen geüpload en je app natuurlijk goed werkt en aan de voorwaarden voldoet, zou dit alleen nog een formaliteit zijn. Bij Apple wordt je app in de meeste gevallen binnen 24 uur gekeurd en gekeken of je app aan de richtlijnen van Apple voldoet. En dan staat je app die je helemaal met JavaScript gemaakt hebt, in de app stores!
