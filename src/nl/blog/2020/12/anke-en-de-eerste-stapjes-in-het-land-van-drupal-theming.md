---
title: 'Anke en de eerste stapjes in het land van Drupal Theming'
date: 2020-12-26
author: Anke Willems
categories:
    - Adventskalender
---

Halverwege 2020 switchte ik van baan, en begon ik als front-ender bij een webbureau dat voornamelijk met het CMS Drupal werkt. Ik heb nooit veel met Drupal gewerkt, maar front-end is front-end, toch?

Wrong!

[Deze cartoon](https://benchmarks.it.unt.edu/sites/default/files/drupal-humor1_0.gif) over de Drupal learning curve had me al genoeg moeten waarschuwen. :) Drupal is groot, massief, en kan ontzettend veel. Maar alles zit er dus ook in, op een grote en massieve manier. Niks lean en snel. Maar als je het Drupal-beest eenmaal een beetje doorhebt, valt het best te temmen. In dit artikel deel ik een aantal dingen die ik de afgelopen maanden heb geleerd.

## Drupal dicteert je templates.

_Om te beginnen een disclaimer: Dit gaat over Drupal 8. Eerdere versies van Drupal werkten wat anders met de templates._

De basis van Drupal is als elk ander CMS: de redactie managed de content in het CMS, en aan de voorkant komt er een mooie site uitrollen. Maar bij Drupal wordt ook de functionaliteit grotendeels binnen het CMS opgezet, deels ondersteund door modules. De templates voor de voorkant staan daar weer als losse laag op.

Bij ons op het werk bestaat een team uit een ontwerper, een front-ender en een back-ender. De back-ender bouwt de functionaliteit, en ik zet daar de voorkant tegenaan. Deze functionaliteit kan bijvoorbeeld één, of een combinatie van de volgende dingen zijn:

-   Node (Een 'entity')
-   User (Ook een 'entity')
-   Taxonomy (Een hierarchische onderverdeling van elementen)
-   Block (Losse elementen. Dit kan ook een onderdeel van bovenstaande elementen zijn)
-   View (Een bepaalde weergave van één van bovenstaande elementen)
-   Paragraph (De redactie kan content stapelen in verschillende paragraphs. Dit komt uit de paragraph module, maar wordt heel veel gebruikt.)

Deze lijst is niet compleet, maar geeft wel een goed beeld van de mogelijkheden. Als je bijvoorbeeld gebruik maakt van custom modules, horen daar weer eigen elementen bij.

Alles in deze lijst heeft zijn eigen template. De pagina die je uiteindelijk ziet, is dus een combinatie van heel veel geneste templates, die door Drupal op volgorde gezet worden.

In tegenstelling tot andere CMS'sen waarmee ik gewerkt heb, begin je dus _niet_ met het bouwen van een template waar je later functionaliteit in zet, maar beter werk je andersom. Drupal zet de templates voor je neer.

## Welke template gebruiken?

Je start met uitzoeken welke van de templates op de pagina je moet hebben. Hoe je daar achter komt? Kijk in je broncode!

![Een screenshot van de Drupal template suggesties. Een lijstje templates in de inspector, waarvan eentje als actief is aangeduid met een kruisje.](/_img/adventskalender/2020/twig-debug.png)

_De Drupal template suggesties in je inspector. De onderste is het minst specifiek, de bovenste het meest. Het kruisje geeft de gebruikte template aan._

De [Twig debugging](https://www.drupal.org/docs/theming-drupal/twig-in-drupal/debugging-twig-templates) optie binnen Drupal geeft voor elke template een aantal templatenamen, van breed `( node.html.twig)` naar heel specifiek `(node--agenda-detail--full.html.twig)`. Maak de template aan die je nodig hebt, kopieer de twig uit de standaard gebruikte core-template, en ga hierin aan de slag met je eigen HTML!

## Template voorbeeld

Een voorbeeld van de vereenvoudigde template `node--agenda-detail--full.html.twig` voor een fictieve agenda pagina:

```
{% raw %}
{# We zetten een aantal praktische basisclasses #}
    {\% set classes = [
        'node',
        'node--type-' ~ node.bundle|clean_class,
        'agenda-detail',
        node.isPromoted() ? 'node--promoted',
        node.isSticky() ? 'node--sticky',
        not node.isPublished() ? 'node--unpublished',
        view_mode ? 'node--view-mode-' ~ view_mode|clean_class,
    ] %}

    <article{{ attributes.addClass(classes) }}>

        {# De titel #}
        <h1 class="agenda-detail__page-title">{{ node.title() }}</h1>
        {# De organisator + een labeltje dat we vertalen met de 't' functie #}
        <p class="agenda-detail__organizer">
            {{ 'Organized by:'|t }} {{ content.field_organizer.0 }}
        </p>

        {# De output van de optionele introductie #}
        {%- if content.field_intro.0 -%}
            <div class="agenda-detail__intro">
                {{ content.field_intro.0 }}
            </div>
        {%- endif -%}

        {# De output van de (agenda)data #}
        {{ content.field_agenda_data }}

        {# De output van de content, in dit geval in de module 'paragraphs' #}
        {{ content.field_paragraphs }}

        {# De output van een contactveld #}
        {{ content.field_contact }}

        {# Een knop om je in te schrijven, mits je ingelogd bent #}
        {%- if logged_in == false -%}
            <a href="/login?destination={{ url }}">
                {{ 'Log in to sign up'|t }}
            </a>
        {%- else -%}
            <a target="{{ button.target }}" class="button" href="{{ button.url }}">
                {{ button.text|t }}
            </a>
        {%- endif -%}

    </article>
{% endraw %}
```

In bovenstaande template heb je alle ruimte om je eigen CSS en HTML toe te voegen.

## Geen logica in templates

Bijna alle logica gebeurt in Drupal. Hoewel de Twig prima logica kan afhandelen, worden de templates in Drupal puur voor output gebruikt. Je gebruikt hoogstens een eenvoudig _if-statement_ voor een check.

Logica aanpassen doe je binnen het CMS, of liever nog: binnen een custom module. Bij ons wordt dit laatste gedaan door de back-ender. Custom modules zijn eenvoudiger te lezen dan wanneer de logica bijvoorbeeld in Drupal zelf zou zitten (en daarmee in de database). Dit kan een groot voordeel zijn voor support achteraf. Bijvoorbeeld: Een kleurselector toevoegen aan een taxonomieterm kan prima in het CMS zelf, maar wil je die kleur vervolgens gebruiken in alle artikelen die die term hebben, dan is het verstandiger om die logica in een custom module te zetten. In de templates heb je dan een simpele variable en geen logica in de database. Op basis van die module maak je dan de html voor de toonbare site in je templates.

Het klinkt ontzettend rigide, en dat is het ook. Maar het heeft ook een groot voordeel: Het is namelijk superconsequent.

## Superconsequent en modulair

Omdat het zo consequent is in de templates, zijn herhalende onderdelen ook heel snel op andere plekken in te zetten. Alles wat je al eens gebouwd hebt, kan overal gebruikt worden. En ziet er ook hetzelfde uit. _Als_ je tenminste je CSS ook goed modulair gehouden hebt.

Elk onderdeeltje in Drupal heeft een eigen onderscheidende class, naast de algemene classes. Een paragraaf heeft bijvoorbeeld:

```
paragraph paragraph--text paragraph--text-button paragraph--type--paragraph-text-button paragraph--view-mode--default
```

...

I know, I know.

Sommige classes komen uit Drupal zelf, sommige heb ik gezet. Maar ook dit _hoeft_ niet en alles kan je overschrijven in de template. Maar het is wél bruikbaar! Doordat het zo modulair is opgezet, dwingt het je je CSS ook modulair op te zetten. Maak bijvoorbeeld een `paragraphs/paragraph--text-button.scss` en importeer die in je stylesheet. Dit herhaal je voor de andere onderdelen en je hebt een supernette directory met allemaal losse stylesheetjes per onderdeel. Mijn directories met SCSS zijn bijvoorbeeld 'base, layout, paragraphs, nodes'. Overzichtelijk, en fijn voor je collega's en future-me.

Zoals je net vast al gespot hebt, wordt er gebruik gemaakt van de BEM methode voor naamgeving (Block Element Modifier). BEM is ook modulair en ook consequent, en leent zich goed voor styling in Drupal. ([Meer over BEM](http://getbem.com/).)

Drupal splitst alles graag op in aparte stylesheets en scripts. Als je in je ontwikkelsite naar de broncode kijkt zie je daar ook een ontzettende lijst aan css en js staan, afkomstig van modules en onderdelen. Voor de productiesite kan je dit samenvoegen en cachen. Maar niet alleen voor je productiesite wordt gecached, wat ons brengt bij het volgende punt:

## Let op de caching

De kans dat je minutenlang aan het refreshen bent en er dan achter komt dat je naar een gecachte pagina zit te kijken is bij Drupal groot. Drupal cached alles heel hard. Standaard wordt ook voor niet ingelogde bezoekers alles gecached. De JS, de CSS en ook je templates.

Let dus goed op dat je wel ingelogd bent bij het developen. Daarnaast zijn er soms verschillende views voor niet-ingelogde en wel-ingelogde bezoekers, zoals bijvoorbeeld het inlogscherm voor een 'mijn' omgeving. Dan is het dus weer handig om tussendoor in- en uit te loggen of in ieder geval een _incognitoscherm_ ernaast te houden. Het clearen van de cache doe je in dat geval tussendoor via Drupal in je andere tab, of je gebruikt daarvoor _Drush_ op de commandline.

## Werken met git? Drush is je vriend!

Zoals met bijna alles dat je tegenwoordig ontwikkelt, kan je bij Drupal ook goed werken met versiebeheer, zoals bijvoorbeeld git.

[_Drush_](https://www.drush.org/) is de commandline shell voor Drupal, en is onontbeerlijk als je met collega's aan hetzelfde project werkt. Zo wil je om de cache te clearen regelmatig even een `drush cr` (cache:rebuild) uitvoeren om zeker te zijn dat alles goed staat na een pull.

Een ander voorbeeld: Drupal slaat configuratie op in de database. Dat komt dus niet in git. Als je een lokale database hebt draaien, maar je collega heeft nieuwe functionaliteit toegevoegd, kan je dat met drush in jouw database importeren. Je collega exporteert de configs met `drush cex` (config:export), deze maakt nette .yml files die je in git kan zetten. Jij importeert met `drush cim` (config:import) deze configs uit deze .yml files in jouw database en je kan aan het werk.

Een paar andere handige drush commands:

-   `drush status` ( geeft de status van de site, welke db gebruikt wordt en meer)
-   `drush updatedb` (update je database na een drupal update)
-   `drush locale:check` / `locale:update` (check voor nieuwe vertalingen / importeer deze vertalingen)

## Twig als templatetaal

Ik noemde het net al. Drupal gebruikt vanaf versie 8 standaard de templatetaal [Twig](https://twig.symfony.com/)! Twig is cool! Twig is leesbaar! Twig is mijn lievelingstemplatetaal, vanwege de leesbaarheid en alle mogelijkheden.

```
    {\% if node.keyvisual.0 is empty %} Doe iets {\% endif %}
```

Hoe leesbaar wil je het hebben? Twig zorgt voor prettige overzichtelijke templates. Als je het nodig zou hebben zou je ook eenvoudige logica in Twig kunnen uitvoeren, maar zoals ik net al uitlegde, wordt de meeste logica binnen Drupal afgehandeld.

Als je meer wil lezen: Twig heeft [superfijne documentatie](https://twig.symfony.com/doc/2.x/) én een leuk plantje als mascotte. Just saying.

## Het CMS en de leercurve

Bovenstaande lijst is bij lange na niet volledig, en is slechts een snelle conclusie na een paar maanden werken met Drupal. Ik hoop dat het wel een goed beeld geeft van hoe anders het werken is met Drupal dan met andere CMS'en.

Het is een flinke leercurve, maar ik merk dat ik door de consequentheid van het CMS zelf ook gedwongen wordt om mijn code strakker en beter op te zetten, en dat het me een betere front-ender heeft gemaakt. Een aanrader om eens mee te werken!
