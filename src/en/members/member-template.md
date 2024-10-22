---
draft: true
 # Your name
title: Anneke Sinnema
 # Make the key a unique slug (for example, your first and last name). This links the Dutch version to the English version of this page.
key: anneke-sinnema
date: 2020-11-10
 # If you add an image, link it to the correct location here:
graphic:
    src: /assets/images/member-avatars/anneke-sinnema.png
    alt:
# Your job title
jobtitle: front-end developer
# Are you a freelancer? Fill this in or remove it
freelancer: 
    desc: 'My explanation'
    availability: true
# Are you open to employment? Fill this in or remove it
lookingForEmployment: 
    desc: 'My explanation'
    availability: false
# Would you like to mentor (younger) colleagues? Fill this in or remove it
mentor: 
    desc: 'My explanation'
    availability: true
# Adjust these specialties or add your own!
specialties:
    - accessibility
    - ux design
---

{% if employer %}
{{ title }} is a {% if freelancer %}freelance{% endif %} {{ jobtitle }}{% if employer %}, at this moment making beautiful things for {{ employer }}{% endif %}.
{% endif %}
