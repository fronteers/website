---
key: kitchensink
title: Kitchensink
layout: kitchensink
---

This kitchen sink shows common elements used and usable on this website.

# Headings

The heading "Headings" is an example of a third level heading (h3).

## This is a fourth level heading (h4)
### This is a fifth level heading (h5)
#### This is a sixth level heading (h6)

# Paragraphs

This is a paragraph. One morning, when **Gregor Samsa** woke from troubled
dreams, he found himself transformed in his bed into a horrible vermin. He lay
on his _armour-like_ back, and if he [lifted his head](#) a little he could see
his brown belly, slightly domed and divided by arches into stiff sections.

Words and word groups can be marked as **bold**, _italic_, ~~strikken through~~.

# Table

<div class="table-responsive">

| Left aligned syntax | Centered Description | Right align Text |
| :------------------ | :------------------: | ---------------: |
| Header              |        Title         |      Here's this |
| Paragraph           |         Text         |         And more |
| Header              |        Title         |      Here's this |
| Paragraph           |         Text         |         And more |

</div>

Wrap the table in `<div class="table-responsive">` to make it responsive.

# Tags

Tags can be displayed using the following liquid syntax:

<!-- {% raw %} -->

```liquid
{% tag "Online" %}
```

<!-- {% endraw %} -->

Examples are:

{% tag "Online" %}
{% tag "Marketingcommissie" %}

# Links

Links can be created and formatted as follows:

<!-- {% raw %} -->

```liquid
{% link "http://example.com" "Klik mij" %}
{% link "http://example.com" "Klik mij" "curly-braces" %}
{% link "http://example.com" "Klik mij" "greater-than" %}
```

<!-- {% endraw %} -->

{% link "http://example.com/123" "Klik mij" %}
{% link "http://example.com/123" "Klik mij" "curly-braces" %}
{% link "http://example.com/123" "Klik mij" "greater-than" %}

# Buttons

<!-- {% raw %} -->

```liquid
{% button "button" "Klik mij" %}
```

<!-- {% endraw %} -->

{% button "button" "Klik mij" %}

# Embedding objects

There are various short-tags to embed objects using liquid templating.

## Vimeo

<!-- {% raw %} -->

```liquid
{% vimeo "15982903" %}
```

<!-- {% endraw %} -->

{% vimeo "15982903" %}

## Video (inline)

<!-- {% raw %} -->

```liquid
{% inlineVideo "480" "270" "/_downloads/2010/fronteers-2010-compilatie" "webm" %}
```

<!-- {% endraw %} -->

{% inlineVideo "480" "270" "/_downloads/2010/fronteers-2010-compilatie" "webm" %}

## Youtube

<!-- {% raw %} -->

```liquid
{% youtube "rhgwIhB58PA" %}
```

<!-- {% endraw %} -->

{% youtube "rhgwIhB58PA" %}

## Codepen

<!-- {% raw %} -->

```liquid
{% codepen "MWmBYog" "Pool rules" %}
```

<!-- {% endraw %} -->

{% codepen "MWmBYog" "Pool rules" %}

## Google Maps

<!-- {% raw %} -->

```liquid
{% googlemaps "Marconilaan 8, Weert, nl" %}
```

<!-- {% endraw %} -->

{% googlemaps "Marconilaan 8, Weert, nl" %}

## JSfiddle

<!-- {% raw %} -->

```liquid
{% jsfiddle "lensco" "yYQdf" "Een voorbeeld van een div" %}
```

<!-- {% endraw %} -->

{% jsfiddle "lensco" "yYQdf" "Een voorbeeld van een div" %}

## Slideshare

<!-- {% raw %} -->

```liquid
{% slideshare "2hNXWKt7JGPKpi" %}
```

<!-- {% endraw %} -->

{% slideshare "2hNXWKt7JGPKpi" %}

## Slides.com

<!-- {% raw %} -->

```liquid
{% slides "sdrasner" "functional-fronteers" %}
```

<!-- {% endraw %} -->

{% slides "sdrasner" "functional-fronteers" %}

## Speakerdeck

<!-- {% raw %} -->

```liquid
{% speakerdeck "g00glen00b" "fronteers-javascript-at-your-enterprise-dutch" "View Javascript at your enterprise" %}
```

<!-- {% endraw %} -->

{% speakerdeck "g00glen00b" "fronteers-javascript-at-your-enterprise-dutch" "View Javascript at your enterprise" %}

## Mailchimp signup form

<!-- {% raw %} -->

```liquid
{% mailchimp %}
```

<!-- {% endraw %} -->

{% mailchimp %}

# Embedding Fronteers elements

There are also various elements that can be embedded /included directly. The common ones are listed here:

## About Us Hero

<!-- {% raw %} -->

```liquid
{% aboutushero "We are a proud union" %}
Test Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
{% endaboutushero %}
```

<!-- {% endraw %} -->

{% aboutushero "We are a proud union" %}
Test Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
{% endaboutushero %}

# Quote

<!-- {% raw %} -->

```liquid
{% quote "Anneke Sinnema" %}
This is a quote
{% endquote %}
```

<!-- {% endraw %} -->

{% quote "Anneke Sinnema" %}
This is a quote
{% endquote %}

# Member Quote

<!-- {% raw %} -->

(Remove newlines):

```liquid
{% memberquote
  "Member"
  "Jobtitle"
  "/path/to/avatar"
  "Shield value"
%}Member Quote{% endmemberquote %}
```

For example (remove newlines):

```liquid
{% memberquote
  "Anneke Sinnema"
  "Frontender"
  "/assets/member-avatars/anneke-sinnema.png"
  "annekesinnema" %}
  To all users of technology who are willing to take a chance, make a choice, and try a new way of doing things so that we can nurture and enjoy a happy, healthy planet.
{% endmemberquote %}
```

<!-- {% endraw %} -->

{% memberquote "Anneke Sinnema" "Frontender" "/assets/member-avatars/anneke-sinnema.png" "annekesinnema" %}
To all users of technology who are willing to take a chance, make a choice, and try a new way of doing things so that we can nurture and enjoy a happy, healthy planet.
{% endmemberquote %}

By default the full name will be used to generate the shield (see below), but some members may prefer you to use a
changed name, chosen name, nick name, or even email address to generate their flag. In this case, especially if the name
on display is not the same as the value to generate the flag, provide it as the final argument.

<div class="table-responsive">

| #   | Positional argument            | Expected value                      | Required |
| --- | ------------------------------ | ----------------------------------- | -------- |
| 1   | Name (given, chosen, nickname) | A string                            | Yes      |
| 2   | (Job) title                    | A string or empty string            | Yes      |
| 3   | Avatar source                  | A path (string)                     | Yes      |
| 4   | Shield value                   | A consistent string for this member | No       |

</div>

The quote itself is the content inside the paired tag.

# Shields

{% assign shield_color_primary = "purple" %}
{% assign shield_color_secondary = "red" %}

<!-- {% raw %} -->

```liquid
{% shield "accolade" "split-horizontal" "{{shield_color_primary}}" "{{shield_color_secondary}}" %}
```

<!-- {% endraw %} -->

<div class="table-responsive">
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
      <td><div style="max-width: 48px; width: 48px">{% shield "accolade" "accolade" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "accolade" "checkerboard" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "accolade" "diagonal" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "accolade" "dot" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "accolade" "thunder" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "accolade" "split-horizontal" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "accolade" "stripe" shield_color_primary shield_color_secondary %}</div></td>
    </tr>
    <tr>
      <th scope="row">rectangular</th>
      <td><div style="max-width: 48px; width: 48px">{% shield "rectangular" "accolade" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "rectangular" "checkerboard" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "rectangular" "diagonal" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "rectangular" "dot" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "rectangular" "thunder" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "rectangular" "split-horizontal" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "rectangular" "stripe" shield_color_primary shield_color_secondary %}</div></td>
    </tr>
    <tr>
      <th scope="row">rounded</th>
      <td><div style="max-width: 48px; width: 48px">{% shield "rounded" "accolade" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "rounded" "checkerboard" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "rounded" "diagonal" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "rounded" "dot" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "rounded" "thunder" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "rounded" "split-horizontal" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "rounded" "stripe" shield_color_primary shield_color_secondary %}</div></td>
    </tr>
    <tr>
      <th scope="row">triangular</th>
      <td><div style="max-width: 48px; width: 48px">{% shield "triangular" "accolade" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "triangular" "checkerboard" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "triangular" "diagonal" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "triangular" "dot" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "triangular" "thunder" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "triangular" "split-horizontal" shield_color_primary shield_color_secondary %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% shield "triangular" "stripe" shield_color_primary shield_color_secondary %}</div></td>
    </tr>
  </tbody>
</table>
</div>

## Generate Shield

It is also possible to generate a shield for an arbitary string. This is the
basis of having an identicon for our members.

<!-- {% raw %} -->

```liquid
{% generateShield "An arbitrary string" %}
```

<!-- {% endraw %} -->

<div class="table-responsive">
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
      <td><div style="max-width: 48px; width: 48px">{% generateShield "Alice" %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% generateShield "Bob" %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% generateShield "Charlie" %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% generateShield "Dave" %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% generateShield "Erin" %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% generateShield "Frank" %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% generateShield "Grace" %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% generateShield "Heidi" %}</div></td>
      <td><div style="max-width: 48px; width: 48px">{% generateShield "Ivan" %}</div></td>
    </tr>
  </tbody>
</table>
</div>

# Banners

Banners are desgin elements that can link to another page and look like you can
click them.

<!-- {% raw %} -->

(remove newlines)

```liquid
{% banner
  "style"
  "Heading"
  "https://example.com/"
  "/_img/path/to/image"
  "link target"
  "heading html element"
  "link visually hidden label"
%}
```

For example (remove newlines):

```liquid
{% banner
  "greater"
  "Banner with short code! (greater style)"
  "https://github.com/"
  "/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg"
  "_blank"
  "h3"
  "Go to GitHub"
%}
```

<!-- {% endraw %} -->

{% banner "greater" "Banner with short code! (greater style)" "https://github.com/" "/_img/adventskalender/2020/thats-all-folks/porky.jpeg-full.jpg" "_blank" "h3" "Go to GitHub" %}

Style can be `greater`, `curly`, `parentheses`, or `none`.

# Blocks

<!-- {% raw %} -->

```liquid
{% block "Title" %}
This is content
{% endblock %}
```

<!-- {% endraw %} -->

{% block "Title" %}
This is content
{% endblock %}

# Shapes

You can also use `include` directly, for example to draw shapes (remove newlines from `include`):

<!-- {% raw %} -->

```liquid
<section class="inner-wrapper">
    <div class="greater-than-bg">
        {% include partials/utility/dynamic-headerlevel
          level: "h3"
          title: "My greater than shape" %}
    </div>
    <div class="curly-braces-bg">
        {% include partials/utility/dynamic-headerlevel
          level: "h4"
          title: "My curly braces shape" %}
    </div>
    <div class="parentheses-bg">
        {% include partials/utility/dynamic-headerlevel
          level: "h5"
          title: "My parentheses shape" %}
    </div>
</section>
```

<!-- {% endraw %} -->

<section class="inner-wrapper">
    <div class="greater-than-bg">
        {% include partials/utility/dynamic-headerlevel level: "h3" title: "My greater than shape" %}
    </div>
    <div class="curly-braces-bg">
        {% include partials/utility/dynamic-headerlevel level: "h4" title: "My curly braces shape" %}
    </div>
    <div class="parentheses-bg">
        {% include partials/utility/dynamic-headerlevel level: "h5" title: "My parentheses shape" %}
    </div>
</section>
