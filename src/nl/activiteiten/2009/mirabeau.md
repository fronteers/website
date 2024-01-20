---
title: 'Bijeenkomst bij Mirabeau Eindhoven op 8 mei 2009'
date: 2009-05-08
eventdate: 2009-05-08
location:
categories:
    - meetup
---

Op vrijdag 8 mei was het zuidelijkste puntje ooit voor een Fronteers bijeenkomst een feit: [Mirabeau Eindhoven](http://www.mirabeau.nl/) organiseerde deze avond (en de dag ervoor de [Docentendag](/docentendag)) en Martin Savelkoul begon met een presentatie over Mirabeau, en de projecten die ze doen. Met name interessant was het stuk over hoe zij [Object Oriented CSS](http://wiki.github.com/stubbornella/oocss) gebruiken en dit een erg prettige methode vinden voor grote projecten. Wellicht dat we hierover meer gaan horen dit jaar. Is het niet van Martin zelf, dan wel van iemand anders.

## Kilian Valkhof, over CSS frameworks

Kilians missie voor de avond was ons al zeeziek wordend bekend te maken met client-side en server-side CSS frameworks. Zijn presentatie was een experimentje, gemaakt met [Prezi](http://prezi.com/); weer eens wat anders dan een Powerpoint of een saai HTML bestand ;)

De meesten hadden wel eens gehoord van [Blueprint](http://www.blueprintcss.org/), [960 Grid System](http://960.gs/) en het door Kilian zelf gemaakte CSS framework [SenCSs](http://sencss.kilianvalkhof.com/ 'SenCSs - the sensible standards CSS framework'). Toch gebruikt de meerderheid geen framework, waarschijnlijk voornamelijk omdat het je semantische HTML niet ten goede komt. Iets wat natuurlijk een hoop discussie op gang bracht. Niet-semantische HTML schrijven is een hoofdzonde, niet?

Interessanter was het deel over server-side CSS frameworks. Mogelijkheden waar front-enders op dit moment alleen maar over dromen, zoals variabelen/constanten en het rekenen met waardes (en hexadecimale kleurcodes!), maar ook principes als Don't Repeat Yourself, zijn in de meeste server-side frameworks vaste kost. Kilian gaf enkele voorbeelden van frameworks die een compleet nieuwe syntax bedacht hebben, zoals Sass en CleverCSS, en die enkele toevoegingen mogelijk maakten, zoals CSScaffold en Moonfall. Of de voordelen van deze frameworks (extra awesomeness), opwegen tegen de nadelen (extra gedoe), zal iedere ontwikkelaar voor zichzelf moeten bepalen.

Kilian sloot af met het noemen van [eCSStender](http://ecsstender.org/), een framework van Aaron Gustafson dat we in de gaten moeten gaan houden!

## Arjan Eising, over WAI-ARIA

[WAI-ARIA](http://www.w3.org/WAI/intro/aria.php) is een relatief nieuwe manier om webapplicaties "toegankelijk" te maken. ARIA _(Accessible Rich Internet Applications)_ biedt onder andere HTML-attributen om te zeggen wat een interface element is en wat het doet. Een voorbeeld is het `role`-attribuut. Met `<div role="toolbar"></div>` declareer je een toolbar. De attributen kan je met JavaScript toevoegen, als je validatie belangrijk vindt.

Naast attributen zijn er ook [best-practices](http://www.w3.org/TR/wai-aria-practices/ 'WAI-ARIA Best Practices') opgesteld. Die best-practices schrijven voor hoe bepaalde interface-elementen moeten werken. Bijvoorbeeld wat er moet gebeuren als men op de spatiebalk drukt.

Uit het publiek kwamen enkele vragen naar voren met betrekking tot [de overlap met HTML 5](http://hsivonen.iki.fi/html5-roles/ 'Built-in Accessibility Roles in HTML5'). Moet je `<input type="range">` of `role="slider">` gebruiken? Een ander probleem van ARIA is dat het niet specificeert wat er moet gebeuren als je een fout maakt en `<input type="checkbox" role="radio">` schrijft. Ondanks dat verschillende browsers, screenreaders en JavaScript libraries de specificatie al implementeren, zijn er dus nog wel wat onduidelijkheden.

Ondanks dat hij wat zenuwachtig was en JAWS niet helemaal werkte, heeft Arjan ons toch een interessante introductie gegeven van een techniek die voor een hoop ontwikkelaars (nog) niet echt tastbaar is.

## Overige materialen en verslagen

-   Presentatie Kilian Valkhof over CSS frameworks
-   Presentatie Arjan Eising over WAI-ARIA (arjaneising.nl, HTML)

Vragen over deze bijeenkomst? Stel ze gerust op [het blog](/blog/2009/04/bijeenkomst-mei#reageer).
