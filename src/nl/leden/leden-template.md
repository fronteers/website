---
draft: true
 # Jouw naam
title: Anneke Sinnema
 # Maak van de key een unieke slug (je voor en achternaam bijvoorbeeld). Hiermee wordt de Nederlandse aan de Engelse versie van deze pagina gekoppeld.
key: anneke-sinnema
date: 2020-11-10
 # Als je een afbeelding toevoegt, link dan hier naar de juiste plek:
graphic:
    src: /assets/images/member-avatars/anneke-sinnema.png
    alt:
# Jouw functietitel
jobtitle: front-end developer
# Eventueel: jouw huidige werk- of opdrachtgever
employer: front-end developer
# Ben je freelancer? Vul dan dit in. Of verwijder het
freelancer: 
    desc: 'Mijn toelichting'
    availability: true
# Sta je open voor een baan? Vul dan dit in. Of verwijder het
lookingForEmployment: 
    desc: 'Mijn toelichting'
    availability: false
# Wil je (jongere) collega's mentoren? Vul dan dit in. Of verwijder het
mentor: 
    desc: 'Mijn toelichting'
    availability: true
# Pas deze specialiteiten aan of voeg de jouwe toe!
specialties:
    - accessibility
    - ux design
---

{% if employer %}
{{ title }} is een {% if freelancer %}freelance{% endif %} {{ jobtitle }}{% if employer %}, momenteel mooie dingen aan het maken voor {{ employer }}{% endif %}.
{% endif %}
