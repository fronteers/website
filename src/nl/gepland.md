---
locale: nl
layout: scheduled.liquid
tags: utility
title: Verwachte publicaties
published: false
key: scheduled-posts
excludeFromCollection: true
---
{%- if collections.unpublished_posts.size > 0 -%}
<p>{{ translations[locale].scheduled_something }}</p>
{% else %}
<p>{{ translations[locale].scheduled_nothing }}</p>
{% endif %}
