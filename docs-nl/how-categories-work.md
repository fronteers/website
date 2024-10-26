
# Hoe categorieën werken

Sommige inhoudstypen (activiteiten, vacatures, blogs) kunnen een categorie instellen in de frontmatter, bijvoorbeeld:

```
Categorieën  
    - categorie één
    - categorie twee
```

Op dezelfde manier kunnen leden 'specialiteiten' hebben, wat wordt gebruikt voor de lijst van freelancers.

```
Specialiteiten  
    - specialiteit één
    - specialiteit twee
```

Deze functionaliteit wordt vervolgens gebruikt om categorielijsten toe te voegen op de pagina's leden, werk, activiteiten en freelancers.

De sjablonen voor deze categoriepagina's zijn vrij complex en moeten `.liquid` extensies hebben vanwege de hoeveelheid logica die erin verwerkt is. Ze bevinden zich in de mappen, dicht bij de inhoud die ze filteren.

De functionaliteit zoals hier beschreven is grotendeels gebaseerd op [een blog van Jérôme Coupé](https://www.webstoemp.com/blog/basic-custom-taxonomies-with-eleventy/), een Belgische front-end designer en docent. Bedankt Jérôme!
