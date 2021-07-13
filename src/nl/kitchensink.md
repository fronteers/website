---
# navigation
footer_navigation: true
key: kitchensink
order: "99"

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


## Navigation

\{\% include partials/navigation 
where:"header" 
description:"Main navigation" 
toplevelloop:header_navigation 
sublevelloop:header_sub_navigation \%\}

Renders the navigation bars in the header and the footer.


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
