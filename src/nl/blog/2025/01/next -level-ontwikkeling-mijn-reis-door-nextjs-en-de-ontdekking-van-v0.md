---
title: Next level ontwikkeling - Mijn reis door Nextjs en de ontdekking van V0
date: 2025-01-01
author: Rik van der Sar
summary: Nextjs is een fullstack oplossing voor je webapplicatie waarbij server-side rendering door middel van server components centraal staat. Op de website van Nextjs staat een goed uitgewerkt leerprogramma waarmee je jezelf snel de basiskennis eigen kunt maken. Van de makers van Nextjs en Vercel is er nu ook een AI-chatinterface beschikbaar genaamd V0. Met V0 maak je binnen 'no time' websites op basis van Nextjs.
categories:
  - Adventskalender
key: next-level-ontwikkeling
---

Door mijn huidige project ben ik zeer enthousiast geworden over Nextjs. Het is een fullstack React framework waarmee je snelle, robuuste websites kunt neerzetten. In dit artikel beschrijf ik kort mijn leerpad en deel ik leuke tips om Nextjs snel in de vingers te krijgen. Daarnaast nog een mega tip om binnen no time een hele website op basis van Nextjs uit de grond te stampen.

## Waarom Nextjs

Nextjs biedt een fullstack oplossing voor je webapplicatie. Server side rendering (SSR) is de default wat mede mogelijk gemaakt wordt door React Server Components. Communiceren met een server kan direct vanuit zo’n component waarbij een call (vanuit een frontend) niet eens meer nodig is. SSR maakt je webapplicatie zo sneller en beter vindbaar dan single page applications die puur in de browser geladen worden zoals bij React en andere client side frameworks. Daarnaast biedt Nextjs een heel scala aan componenten zoals next/image, dat voor een optimale snelheid en UX voor afbeeldingen zorgt. Neem vooral een kijkje op de website https://nextjs.org voor wat Nextjs nog meer te bieden heeft.

## Waar kun je het beste starten

Het is geen vereiste maar, het is handig als je al bekend bent met React. Zelf ben ik begonnen met een online cusus van Maximilian Schwarzmüller. Alhoewel dit een uitstekende cursus is, kan ik je aanraden om eerst op de website van Nextjs de leermodule te volgen (te vinden onder de ‘Learn’ button). In deze module leer je via een project alle belangrijke features kennen. Good to know: Nextjs maakt onderscheid tussen de ‘pages router’ en de ‘app router’. Dat slaat op de manier waarop de folderstructuur (en daarmee de routes) opgebouwd zijn. Een route is het pad naar een pagina welke voor de bezoeker te bereiken is via de URL. Een blogpagina zou bijvoorbeeld te vinden kunnen zijn onder www.example.com/blog. Met de Nextjs app router maak je simpelweg een folder aan met de naam blog en hierin plaats je een `page.tsx` bestand om deze route aan te maken. De pages router wordt nog wel onderhouden maar op den duur volledig vervangen voor de app router. De leermodules hebben `daarom betrekking op de app router maar in de docs zijn beiden terug te vinden.

## Get to the Next level faster!

Als je een fundament in Nextjs gelegd hebt of je houdt ervan om liever met een kanon afgeschoten te worden dan is het tijd om V0 in de arm te nemen. V0 is een AI-chatinterface zeer vergelijkbaar met ChatGPT te vinden en te proberen op https://v0.dev. V0 is specifiek getraind in Nextjs, Shadcn, Vercel en alle libraries die in combinatie met deze technieken goed werken. Je hebt een gratis account bij Vercel nodig om V0 te gebruiken. Daarna kun je direct aan de slag om code te generen. Dus wil je webapplicaties bouwen met de snelheid van AI en denk je dat Nextjs een tool is om dit te doen, dan is V0 de raket om in te stappen. Je geeft doormiddel van prompts een opdracht en V0 denkt mee, doet suggesties en schrijft de code. Prompts kunnen en het Engels maar ook in het Nederlands. Gooi onderstaande prompt maar eens in V0 om je webapp te lanceren:

“Schrijf op basis van Nextjs en met behulp van de app router de basis code voor een moderne website met een homepage, over ons pagina, blogpagina en een contactpagina. Op elke pagina mag wat voorbeeld content komen. Na het schrijven van de code wil ik graag instructies hoe ik deze website met Vercel kan deployen.

Vragen of meer weten over Nextjs? Stuur me gerust een berichtje, met voorkeur via LinkedIn.
