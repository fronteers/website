---
key: kitchensink
title: Kitchensink
---

## Headings, paragraphs and links

## Second level heading

### This is a third level heading

#### This a fourth

This is a paragraph. One morning, when **Gregor Samsa** woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his _armour-like_ back, and if he [lifted his head](#) a little he could see his brown belly, slightly domed and divided by arches into stiff sections.

[Learn more](https://fronteers.nl)

## Tags

\{\% tag "Online" \%\}

{% tag "Online" %}
{% tag "Marketingcommissie" %}

## Links

\{\% link "http://example.com" "Klik mij" \%\}

{% link "http://example.com/123" "Klik mij" %}

\{\% link "http://example.com" "Klik mij" "curly-braces" \%\}

{% link "http://example.com/123" "Klik mij" "curly-braces" %}

\{\% link "http://example.com" "Klik mij" "greater-than" \%\}

{% link "http://example.com/123" "Klik mij" "greater-than" %}

## Buttons

\{\% button "button" "Klik mij" \%\}

{% button "button" "Klik mij" %}

## Vimeo

\{\% vimeo "15982903" \%\}

{% vimeo "15982903" %}

## Youtube

\{\% youtube "rhgwIhB58PA" \%\}

{% youtube "rhgwIhB58PA" %}

## Codepen

\{\% codepen "MWmBYog" "Pool rules" \%\}

{% codepen "MWmBYog" "Pool rules" %}

## Google Maps

\{\% googlemaps "Marconilaan 8, Weert, nl" \%\}

{% googlemaps "Marconilaan 8, Weert, nl" %}

## JSfiddle

\{\% jsfiddle "lensco" "yYQdf" "Een voorbeeld van een div" \%\}

{% jsfiddle "lensco" "yYQdf" "Een voorbeeld van een div" %}

## Slideshare

\{\% slideshare "2hNXWKt7JGPKpi" \%\}

{% slideshare "2hNXWKt7JGPKpi" %}

## Slides.com

\{\% slides "sdrasner" "functional-fronteers" \%\}

{% slides "sdrasner" "functional-fronteers" %}

## Speakerdeck

\{\% speakerdeck "g00glen00b" "fronteers-javascript-at-your-enterprise-dutch" "View Javascript at your enterprise" \%\}

{% speakerdeck "g00glen00b" "fronteers-javascript-at-your-enterprise-dutch" "View Javascript at your enterprise" %}

## Mailchimp signup form

\{\% mailchimp \%\}

{% mailchimp %}

## Quote

\{\% quote "Anneke Sinnema" "This is a quote" \%\}

{% quote "Anneke Sinnema" "This is a quote" %}

## Banners

\{\% banner "greater" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "\_blank" "h3" "go to vimeo" %\}

{% banner "greater" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "_blank" "h3" "go to vimeo" %}

\{\% banner "curly" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "\_blank" "h3" "go to vimeo" %\}

{% banner "curly" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "_blank" "h3" "go to vimeo" %}

\{\% banner "parentheses" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "\_blank" "h3" "go to vimeo" %\}

{% banner "parentheses" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "_blank" "h3" "go to vimeo" %}

\{\% banner "none" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "\_blank" "h3" "go to vimeo" %\}

{% banner "none" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "_blank" "h3" "go to vimeo" %}

## POC paired shortcode

\{\% block "Title" \%\}
This is content
\{\% endblock \%\}

{% block "Title" %}
This is content
{% endblock %}

## Using shapes

<section class="inner-wrapper">
    <div class="greater-than-bg">
        {% include partials/utility/dynamic-headerlevel level:headerlvl title:partialTitle %}
    </div>
    <div class="curly-braces-bg">
        {% include partials/utility/dynamic-headerlevel level:headerlvl title:partialTitle %}
    </div>
    <div class="parentheses-bg">
        {% include partials/utility/dynamic-headerlevel level:headerlvl title:partialTitle %}
    </div>
</section>
