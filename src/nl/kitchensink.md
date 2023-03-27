---
key: kitchensink
title: Kitchensink
---

## Headings, paragraphs and links

## Second level heading

### This is a third level heading

#### This a fourth

This is a paragraph. One morning, when **Gregor Samsa** woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his _armour-like_ back, and if he [lifted his head](#) a little he could see his brown belly, slightly domed and divided by arches into stiff sections.


| Left aligned syntax      | Centered Description | Right align Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

[Learn more](https://fronteers.nl)

## Tags

\{\% tag "Online" \%\}

{%- tag "Online" -%}
{%- tag "Marketingcommissie" -%}

## Links

\{\% link "http://example.com" "Klik mij" \%\}

{%- link "http://example.com/123" "Klik mij" -%}

\{\% link "http://example.com" "Klik mij" "curly-braces" \%\}

{%- link "http://example.com/123" "Klik mij" "curly-braces" -%}

\{\% link "http://example.com" "Klik mij" "greater-than" \%\}

{%- link "http://example.com/123" "Klik mij" "greater-than" -%}

## Buttons

\{\% button "button" "Klik mij" \%\}

{%- button "button" "Klik mij" -%}

## Vimeo

\{\% vimeo "15982903" \%\}

{%- vimeo "15982903" -%}

## InlineVideo
 
\{\% InlineVideo "480" "270" "/_downloads/2010/fronteers-2010-compilatie" "webm" \%\}

{%- InlineVideo "480" "270" "/_downloads/2010/fronteers-2010-compilatie" "webm -%} 
 
## Youtube

\{\% youtube "rhgwIhB58PA" \%\}

{%- youtube "rhgwIhB58PA" -%}

## Codepen

\{\% codepen "MWmBYog" "Pool rules" \%\}

{%- codepen "MWmBYog" "Pool rules" -%}

## Google Maps

\{\% googlemaps "Marconilaan 8, Weert, nl" \%\}

{%- googlemaps "Marconilaan 8, Weert, nl" -%}

## JSfiddle

\{\% jsfiddle "lensco" "yYQdf" "Een voorbeeld van een div" \%\}

{%- jsfiddle "lensco" "yYQdf" "Een voorbeeld van een div" -%}

## Slideshare

\{\% slideshare "2hNXWKt7JGPKpi" \%\}

{%- slideshare "2hNXWKt7JGPKpi" -%}

## Slides.com

\{\% slides "sdrasner" "functional-fronteers" \%\}

{%- slides "sdrasner" "functional-fronteers" -%}

## Speakerdeck

\{\% speakerdeck "g00glen00b" "fronteers-javascript-at-your-enterprise-dutch" "View Javascript at your enterprise" \%\}

{%- speakerdeck "g00glen00b" "fronteers-javascript-at-your-enterprise-dutch" "View Javascript at your enterprise" -%}

## Mailchimp signup form

\{\% mailchimp \%\}

{%- mailchimp -%}

## About Us Hero

\{\% aboutushero "We are a proud union" "Test Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." \%\}

{%- aboutushero "We are a proud union" "Test Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." -%}

## Quote

\{\% quote "Anneke Sinnema" "This is a quote" \%\}

{%- quote "Anneke Sinnema" "This is a quote" -%}

## Memberquote

\{\% memberquote "Member" "Jobtitle" "Avatar Source" "Member Quote" \%\}

{%- memberquote "Anneke Sinnema" "Frontender" "/assets/member-avatars/anneke-sinnema.png" "To all users of technology who are willing to take a chance, make a choice, and try a new way of doing things so that we can nurture and enjoy a happy, healthy planet." -%}

## Shield

{% assign shield_color_primary = "purple" %}
{% assign shield_color_secondary = "red" %}

\{\% shield "accolade" "split-horizontal" "{{shield_color_primary}}" "{{shield_color_secondary}}" \%\}

<table>
  <thead>
    <tr>
      <td></td>
      <th scope="col" width="100">accolade</th>
      <th scope="col" width="100">checkerboard</th>
      <th scope="col" width="100">diagonal</th>
      <th scope="col" width="100">dot</th>
      <th scope="col" width="100">thunder</th>
      <th scope="col" width="100">split-horizontal</th>
      <th scope="col" width="100">stripe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">accolade</th>
      <td>{% shield "accolade" "accolade" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "accolade" "checkerboard" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "accolade" "diagonal" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "accolade" "dot" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "accolade" "thunder" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "accolade" "split-horizontal" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "accolade" "stripe" shield_color_primary shield_color_secondary %}</td>
    </tr>
    <tr>
      <th scope="row">rectangular</th>
      <td>{% shield "rectangular" "accolade" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "rectangular" "checkerboard" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "rectangular" "diagonal" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "rectangular" "dot" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "rectangular" "thunder" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "rectangular" "split-horizontal" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "rectangular" "stripe" shield_color_primary shield_color_secondary %}</td>
    </tr>
    <tr>
      <th scope="row">rounded</th>
      <td>{% shield "rounded" "accolade" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "rounded" "checkerboard" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "rounded" "diagonal" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "rounded" "dot" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "rounded" "thunder" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "rounded" "split-horizontal" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "rounded" "stripe" shield_color_primary shield_color_secondary %}</td>
    </tr>
    <tr>
      <th scope="row">triangular</th>
      <td>{% shield "triangular" "accolade" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "triangular" "checkerboard" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "triangular" "diagonal" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "triangular" "dot" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "triangular" "thunder" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "triangular" "split-horizontal" shield_color_primary shield_color_secondary %}</td>
      <td>{% shield "triangular" "stripe" shield_color_primary shield_color_secondary %}</td>
    </tr>
  </tbody>
</table>

## Generate Shield

\{\% generateShield "An arbitrary string" \%\}

<table>
  <thead>
  <tr> 
    <th scope="col" width="100">Alice</th>
    <th scope="col" width="100">Bob</th>
    <th scope="col" width="100">Charlie</th>
    <th scope="col" width="100">Dave</th>
    <th scope="col" width="100">Erin</th>
    <th scope="col" width="100">Frank</th>
    <th scope="col" width="100">Grace</th>
    <th scope="col" width="100">Heidi</th>
    <th scope="col" width="100">Ivan</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>{% generateShield "Alice" %}</td>
      <td>{% generateShield "Bob" %}</td>
      <td>{% generateShield "Charlie" %}</td>
      <td>{% generateShield "Dave" %}</td>
      <td>{% generateShield "Erin" %}</td>
      <td>{% generateShield "Frank" %}</td>
      <td>{% generateShield "Grace" %}</td>
      <td>{% generateShield "Heidi" %}</td>
      <td>{% generateShield "Ivan" %}</td>
    </tr>
  </tbody>
</table>

## Banners

\{\% banner "greater" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "\_blank" "h3" "go to vimeo" %\}

{%- banner "greater" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "_blank" "h3" "go to vimeo" -%}

\{\% banner "curly" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "\_blank" "h3" "go to vimeo" %\}

{%- banner "curly" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "_blank" "h3" "go to vimeo" -%}

\{\% banner "parentheses" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "\_blank" "h3" "go to vimeo" %\}

{%- banner "parentheses" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "_blank" "h3" "go to vimeo" -%}

\{\% banner "none" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "\_blank" "h3" "go to vimeo" %\}

{%- banner "none" "Banner with short code!" "https://github.com/" "https://fronteers.nl/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "_blank" "h3" "go to vimeo" -%}

## POC paired shortcode

\{\% block "Title" \%\}
This is content
\{\% endblock \%\}

{%- block "Title" -%}
This is content
{%- endblock -%}

## Using shapes

<section class="inner-wrapper">
    <div class="greater-than-bg">
        {%- include partials/utility/dynamic-headerlevel level: headerlvl title: partialTitle -%}
    </div>
    <div class="curly-braces-bg">
        {%- include partials/utility/dynamic-headerlevel level: headerlvl title: partialTitle -%}
    </div>
    <div class="parentheses-bg">
        {%- include partials/utility/dynamic-headerlevel level: headerlvl title: partialTitle -%}
    </div>
</section>
