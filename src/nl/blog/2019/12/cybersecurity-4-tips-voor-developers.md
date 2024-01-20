---
title: 'Cybersecurity: 4 tips voor developers'
date: 2019-12-23
author: Melle Wynia
categories:
    - Adventskalender
---

Denk je het volgende hypothetische scenario eens in: maandagochtend kom je op je werk. Je bent wat vroeger dan normaal, vandaag zelfs de eerste van je team. Terwijl de koffiemachine druk aan het malen is, maalt jouw hoofd ook. Deadlines, volle backlogs, sprintmeetings. Drukke dag. Je opent je e-mail. Een bericht valt op: vannacht om 02:47:35 was het systeem een minuut heel langzaam. Hoewel het niet jouw taak is, besluit je toch even te gaan kijken.

“Dit is wel heel vreemd”, denk je bij jezelf. Je hart begint harder te kloppen en je denkt: “met één medewerkeraccount zijn betaalinformatie en andere privé-gegevens van klanten bekeken in minder dan 53 seconden?” Je realiseert direct dat Herman dit niet zelf zou kunnen hebben gedaan. Sterker nog, hij zou niet eens toegang tot dit deel van de applicatie moeten hebben.

Het kleinste datalek kan een bedrijf al in een zeer slecht daglicht zetten. Als front-end developer heb je zeker invloed op welke beveiligingsmaatregelen genomen worden en kun je concrete voorstellen aan je projectmanager voorleggen. Maak in deze blog kennis met de basisterminologie en leer een aantal maatregelen die je kunt nemen. Inclusief kant-en-klare user stories.

## Wat is hier gebeurd?

Uit het onderzoek in ons hypothetische scenario is gebleken dat Herman in de gedeelde kantine gebruik heeft gemaakt van de openbare wifi. Wat hij niet door had, is dat zijn laptop net overgeschakeld was naar dit netwerk. Wat hij ook niet wist, was dat er op dat moment een aanvaller op het netwerk zat met een proxy wifi station en al het verkeer erlangs leidde. En laat het nou ook zo zijn, dat Herman opnieuw moest inloggen, omdat hij op het nieuwe netwerk zat. Hij waande zich veilig op het bedrijfsnetwerk en dacht nog: "ik kan nog geen koffie halen of ik moet alweer inloggen".

In de tussentijd zit de aanvaller klaar: zij heeft haar aanval zo opgezet dat het doelwit niets door heeft. Ze kan alle pagina's zien en zodoende ook de logingegevens achterhalen. Zo kwam de aanvaller aan de logingegevens van Herman. En daar stopte het niet. Zij kon het verkeer onderscheppen en dat gaf haar inzicht in de opzet van applicatie.

Hoewel de rol van Herman maar klein was, laat de directeur er beslist geen gras over heen groeien: hij wordt bij binnenkomst direct apart genomen en op non-actief gezet.

## Wat ging er wel goed?

Goede punten zijn er ook. Uit dit verhaal blijkt dat bepaalde acties gelogd worden met het bijbehorende account en dat er monitoring is van bijzonderheden, zoals errors, laadtijden en dergelijke.

Hieronder volgen een aantal suggesties die je kunt uitvoeren waardoor een dergelijke aanval veel lastiger succesvol uit te voeren is.

## Begrippen

De browser doet bij een bezoek van een website een _HTTP request_ en daarop volgt bij succes dan een reponse die verdeeld is in _response headers_ en een _reponse body_ (bijv. HTML, CSS en JS). In deze headers kun je informatie kwijt die de browser gebruikt om bepaalde maatregelen in te schakelen.

_Mitigatie:_ [Mitigatie](https://nl.wikipedia.org/wiki/Mitigatie) is matiging, verzachting, vermindering. Of een aanval(ler) succesvol is, ligt aan veel factoren. In de context van cybersecurity betekent dit dat een beveiligingsmaatregel ervoor zorgt dat een mogelijk aanval minder succesvol, moeilijker of helemaal onmogelijk wordt.

## 1. Bescherm je cookie

User story: bescherm gebruikers tegen session hijacking

De eerste tip is cookie-hygiëne. Zorg ervoor dat (sessie)cookies beschermd zijn met deze extra (los van elkaar te gebruiken) instellingen: HttpOnly, Secure en SameSite. Hiermee wordt session hijacking en CSRF (Cross Site Request Fogery) lastig voor een aanvaller.

HttpOnly cookies hebben een bijzondere eigenschap: ze kunnen niet worden uitgelezen of bewerkt door de browser. Dus ook niet door third-party scripts. HttpOnly cookies kunnen alleen worden ingesteld door de server en worden alleen automatisch meegestuurd bij elke HTTP-request. Dit is handig voor sessiecookies.

Door een cookie de Secure-flag te geven, wordt deze alleen verstuurd over HTTPS-verbindingen door de browser.

De SameSite-flag is relatief nieuw en daarin kun je aangeven dat een cookie uitsluitend naar zijn eigen domein verstuurd mag worden: `SameSite=strict`. Zo voorkom je dat jouw cookies bij HTTP-requests naar andere domeinen meegestuur worden. [Lees meer over SameSite cookies](https://web.dev/samesite-cookies-explained/).

## 2. Gebruik een XSRF-cookie

User story: bescherm gebruikers tegen CSRF

Een moderne browser geeft een XSRF-cookie alleen mee aan POST-, PUT-, DELETE-requests die naar dezelfde domein gaan. Dit biedt zo een extra check om CSRF-aanvallen te voorkomen. Als deze cookie niet aanwezig is, is de gebruiker niet geauthenticeerd.

```
X-CSRF-Token: value
```

De naam token suggereert dat hier een token voor gegenereerd moet worden, dit is echter optioneel. Hier kan elke value worden gebruikt. Uiteraard kun je er natuurlijk wel een token inzetten, als je dat zo wenst.

## 3. Content Security Policy, in kort: CSP

User story: gebruikers moeten maximaal beschermd zijn tegen XSS (Cross Site Scripting)

-   Browsers bevatten steeds meer features, variërend van toegang tot de camera en microfoon tot het sturen van notificaties.
-   Stel dat een aanvaller het voor elkaar krijgt om een klein stukje JavaScript aan een pagina toe te voegen, dan heeft hij of zij toegang tot alle features, formulieren en andere acties van een gebruiker. De verkregen gegevens kunnen dan weer doorgestuurd worden naar een andere website.
-   Zo kan een aanvaller potentieel gevoelige gegevens skimmen (ofwel ‘steelt’). Denk bijvoorbeeld aan creditcard-gegevens op een checkout-pagina, logingegevens of BSN-nummers op een pagina van een zorgverzekeraar. Een gebruiker heeft dit niet door en kan zich hier nauwelijks tegen wapenen.

Gelukkig is dit te mitigeren met behulp van Content Security Policy (CSP). Moderne browsers ondersteunen dit sinds kort.
Met behulp van CSP kun je exact specificeren bij het inladen van de pagina welke onderdelen van de browser gebruikt mogen worden, vanaf welke domein en zelf met welke hash. Als de websites dan toch een van deze features aanroept of een script probeert in te laden, dan faalt dit. Zo wordt het voor aanvallers iets lastiger: voordat ze een script kunnen uitvoeren moet eerst CSP worden uitgeschakeld.

Implementatie van CSP kan op twee manieren: je kunt een HTTP-header toevoegen of in de HTTP-reponse een `<meta>`-tag toevoegen. Op de website van MDN kun je [uitstekende voorbeelden](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) vinden.

Soms is de implementatie hiervan niet eenvoudig. Het is bijvoorbeeld lastig als je website veel third party scripts inlaadt of vanaf meerdere domeinen api calls moet doen. Wat je dan als tussenmaatregel zou kunnen doen is het beschermen van bepaalde pagina's met gevoelige gegevens. Op een login- of betaalpagina bijvoorbeeld wil je geen third party scripts draaien.

Doel: Voorkom dat een pagina iets kan doen wat je niet nodig hebt, maar een aanvaller wellicht wel. Door exact te specificeren welke features een browser mag gebruiken, kun je bepaalde aanvalsvectoren onmogelijk maken of het effect ervan beperken.

## 4. Mitigeer downgrade aanval

User story: als gebruiker wil ik _altijd_ een HTTPS-verbinding.

-   Veel websites met een HTTPS-verbinding kunnen ook nog bereikt worden via HTTP.
-   Een aanvaller kan proberen om de gebruiker om te leiden naar de HTTP-versie en zo het verkeer monitoren of zelf bewerken, zoals bij Herman in ons hypothetische verhaal.
-   Dit heet een **downgrade aanval**. Hier kun je twee maatregelen tegen nemen om dit (deels) te voorkomen.

_A._ Gebruik HSTS (HTTP Strict Transport Security) door dit HTTP-responseveld toe te voegen: `Strict-Transport-Security: max-age=60000`. Als een browser dit detecteert, onthoudt deze voor een bepaalde periode dat altijd de HTTPS-website geopend moet worden.

_B._ Mochten er nou toch nog non-HTTPS verbindingen worden gemaakt, zorg er dan voor dat elk HTTP-request automatisch wordt geredirect naar HTTPS. Dit kun bij Apache in de .htaccess ingestellen of bijv. met Express (Node.js webserver) met middleware.

## Hier stopt het niet... een paar tips

De hierboven genoemde maatregelen zijn maar een kleine selectie van acties die je zelf concreet kunt nemen. Er is nog veel meer mogelijk. Kijk bijvoorbeeld eens naar onderstaande tips.

-   Luister naar de podcast [Darknet Diaries](https://darknetdiaries.com).
-   Voeg 2FA toe met bijvoorbeeld een time-based one-time password.
-   Laat een penetration test uitvoeren. Probeer maximaal te leren van zo'n team dat langs komt en lees het verslag van top tot teen.
-   Leer meer over [Same Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).
-   Leer meer over [Subresource Integrity](https://developer.mozilla.org/nl/docs/Web/Security/Subresource_Integrity).
-   Lees [Security Droplets](https://www.securitydrops.com/)
-   Pas op met deze header `Access-Control-Allow-Origin: *`. Een aantal van de hierboven beschreven maatregelen kunnen minder effectief gemaakt worden.
-   Bespreek het onderwerp ‘cybersecurity’ in je team. Er is een goede kans dat er iemand bij zit die direct wat verbeterpunten weet om Herman te redden.

Op naar een veiliger decennium!

## Over Melle Wynia

<img src="/_img/adventskalender/melle.jpg" alt="Foto van Melle Wynia" class="floating-portrait" /> 
Melle Wynia werkt als freelance front-end developer/consultant/architect. Voor zijn klanten sluit hij aan bij hun teams om kennis over te dragen, de kwaliteit te waarborgen, beveiliging op peil te brengen en nieuwe features te realiseren. Tot zijn tools behoren onder andere Node, Angular en Vue.js.
Melles donatie gaat naar de Hersenstichting.
