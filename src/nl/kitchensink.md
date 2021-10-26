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

## Shield

\{\% shield "french" "split-horizontal" "red" "yellow" \%\}

<table>
  <thead>
    <tr>
      <td></td>
      <th scope="col" width="100">checkerboard</th>
      <th scope="col" width="100">diagonal</th>
      <th scope="col" width="100">dot</th>
      <th scope="col" width="100">french</th>
      <th scope="col" width="100">thunder</th>
      <th scope="col" width="100">split-horizontal</th>
      <th scope="col" width="100">stripe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">french</th>
      <td>{% shield "french" "checkerboard" "red" "yellow" %}</td>
      <td>{% shield "french" "diagonal" "red" "yellow" %}</td>
      <td>{% shield "french" "dot" "red" "yellow" %}</td>
      <td>{% shield "french" "french" "red" "yellow" %}</td>
      <td>{% shield "french" "thunder" "red" "yellow" %}</td>
      <td>{% shield "french" "split-horizontal" "red" "yellow" %}</td>
      <td>{% shield "french" "stripe" "red" "yellow" %}</td>
    </tr>
    <tr>
      <th scope="row">rectangular</th>
      <td>{% shield "rectangular" "checkerboard" "red" "yellow" %}</td>
      <td>{% shield "rectangular" "diagonal" "red" "yellow" %}</td>
      <td>{% shield "rectangular" "dot" "red" "yellow" %}</td>
      <td>{% shield "rectangular" "french" "red" "yellow" %}</td>
      <td>{% shield "rectangular" "thunder" "red" "yellow" %}</td>
      <td>{% shield "rectangular" "split-horizontal" "red" "yellow" %}</td>
      <td>{% shield "rectangular" "stripe" "red" "yellow" %}</td>
    </tr>
    <tr>
      <th scope="row">rounded</th>
      <td>{% shield "rounded" "checkerboard" "red" "yellow" %}</td>
      <td>{% shield "rounded" "diagonal" "red" "yellow" %}</td>
      <td>{% shield "rounded" "dot" "red" "yellow" %}</td>
      <td>{% shield "rounded" "french" "red" "yellow" %}</td>
      <td>{% shield "rounded" "thunder" "red" "yellow" %}</td>
      <td>{% shield "rounded" "split-horizontal" "red" "yellow" %}</td>
      <td>{% shield "rounded" "stripe" "red" "yellow" %}</td>
    </tr>
    <tr>
      <th scope="row">triangular</th>
      <td>{% shield "triangular" "checkerboard" "red" "yellow" %}</td>
      <td>{% shield "triangular" "diagonal" "red" "yellow" %}</td>
      <td>{% shield "triangular" "dot" "red" "yellow" %}</td>
      <td>{% shield "triangular" "french" "red" "yellow" %}</td>
      <td>{% shield "triangular" "thunder" "red" "yellow" %}</td>
      <td>{% shield "triangular" "split-horizontal" "red" "yellow" %}</td>
      <td>{% shield "triangular" "stripe" "red" "yellow" %}</td>
    </tr>
  </tbody>
</table>

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
