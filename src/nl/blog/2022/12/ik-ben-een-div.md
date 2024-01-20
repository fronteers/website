---
title: Ik ben een div
date: 2022-12-03
author: Petra Knip
summary: 'Stond er wekenlang als werktitel in de planning. Klinkt niet echt veelbelovend. Ronduit saai eigenlijk.'
categories:
    - Adventskalender
---

Stond er wekenlang als werktitel in de planning. Klinkt niet echt veelbelovend. Ronduit saai eigenlijk.

Een div is vaag, en vooral nikszeggend.

'Does not inherently represent anything'.

```
<div></div>
```

Daar kun je natuurlijk niet echt veel mee. En ook eigenlijk alles. Je kunt er van alles instoppen net als een kerstpakket, je kunt het een thema (of type) meegeven, en versiering, maar het blijft een ‘domme doos’.

Een div kun je overal voor gebruiken, het werkt altijd en doet wat je ervan verwacht. Oppervlakkig gezien. Want de div is ook onzichtbaar en betekenisloos.

```
<div
    type="hidden"
    id="whatever"
    style="background-color:grey; background-position: inherit;">
</div>
```

En ik kan het weten, want ik ben er een.

Al jaren lang ben ik de Div van de afdeling. Ik doe mijn best om me aan te passen, <span> me best in, maar neem niet echt stelling. Het liefst zet ik mijzelf op een onopvallende background-position en doe zoveel mogelijk de dingen die van me verwacht worden.

Dat is de weg van de minste weerstand, maar ook risicoloos. Voor je het weet hoor je bij het onopvallende meubilair die niemand meer opmerkt, maar waar ook weinig collega's moeite mee hebben. Zoals een kantoorplant.

```
<div type="text" id="succulent-plant">Ik ben een kantoorplant</div>
```

Het heeft met mijn persoonlijkheid te maken, en ook met een generatiekloofje. Als ouwe lul ben ik niet opgegroeid met computers, ook nog niet tijdens mijn opleiding tot grafisch vormgever. Op de kunstacademie werd eind jaren 80 ineens een zolderruimte ingericht met een aantal Apple computertjes en Aldus Freehand 2.0, en daar mochten we een uurtje per week mee klooien.
Pas rond mijn vijfigste ben ik web development in gerold, nu 6 jaar geleden. Dankzij een erfenis kon ik mezelf om laten scholen, en ik vond het allemaal geweldig.

Maar om als vrouw en 50 plusser nu het vak in te rollen, ervaar ik als een kleine cultuurshock. Een onzekere
persoonlijkheid maakt niet alleen dat je jezelf op de achtergrond houdt, maar ook dat als je vindt dat je een punt
hebt of ergens meer van weet dan je collega's, dat je toch gaat twijfelen aan je ideeën, want waarom zou ik in m'n eentje iets vinden waar al mijn jonge hoog opgeleide collega's anders over denken? Kom dan maar eens overtuigend uit de hoek. Een div die z'n mond open doet is op z'n zachtst gezegd even wennen.

Er werd ook een beetje lacherig op gereageerd. 'We hebben het al veel te druk, en het werkt toch? Het feit dat we iets opleveren is veel belangrijker. Dit heeft geen prioriteit.' Geef ze maar eens ongelijk. Dit is hun wereld, dus willen ze graag de div houden. In de code en in het team.

Maar vanaf dat moment begon ik ook serieus te twijfelen of ik dit soort werk wel wil doen. En dan bedoel ik het werken aan de technische kant van de frontend van een grote app, waar de kwaliteit van de HTML en CSS een ondergeschikte rol hebben. Misschien hou ik het vol omdat ik mezelf niet wil laten kennen en mensen om me heen trots op me zijn, en ik niemand teleur wil stellen. Misschien omdat ik eindelijk een volwaardig salaris kan verdienen. Misschien omdat ik al jaren mijn geld en vrije tijd besteed aan het leren programmeren, en ik niet durf toe te geven dat het mij misschien niet echt ligt. Maar om eerlijk te zijn word ik er ongelukkig van. Ik kom regelmatig thuis van mijn werk en trek een flesje open. Of mijn man vraagt hoe het gaat en dan voel ik ineens de tranen stromen. En ik ben alleen nog maar moe.

Ik ga de div hier niet uit de code halen maar wel uit mezelf.

En hopelijk ergens anders uit de code.

Want ik weet best wel waar ik wel gelukkig van word. En mijn zelfvertrouwen en energie weer terugkrijg. Van concepten bedenken en mooie dingen maken, van CSS, HTML en JavaScript, van design, van websites, illustraties en animaties. Dan ben ik geen div en stel me ook niet zo op. Dat maakt me ook veel toegankelijker.

Advent is, net als welke periode dan ook, een perfect moment om na te denken over het vervangen van een oude `<jas>` en in een andere rol te kruipen, eentje die beter bij me past en met betekenis. De geboorte van een `<article>`, voor onder de kerstboom. Bij deze. Of in dit geval; erin, voor wie de code reviewt. Of hang 'm in de kantoorplant, wie weet wat daar nog uit voortkomt.

```
<main>
    <article>
        <h1>Fijne feestdagen!</h1>
    </article>
</main>
```

## En om de vooruitzichten nog iets mooier te maken:

```
body {
    margin: 0;
    height: 100vh;
    color: gold;
}

main {
    display: block;
    margin: 0 auto;
    padding: 3.125rem 1.875rem 0;
}

main article {
    position: relative;
    margin: 10% auto;
    width: 12.5rem;
		height: 12.5rem;
    border-radius: 100%;
    background-color: rgba(255,255,255,.75);
    box-shadow: inset -2.5rem -3.75rem 2.5rem -1.875rem rgba(0,0,0,.4),
		inset -3.125rem -2.5rem 15px 80px currentColor;
    transition: 1s box-shadow;
}

h1 {
    position: absolute;
    top: 14rem;
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: darkgrey;
}

main article::before {
    content: "";
    position: absolute;
    left: 5.313rem;
    top: -2.75rem;
    width: 1.25rem;
    height: 1.25rem;
    border: solid 5px lightgrey;
    border-radius: 100%;
}

main article::after {
    content: "";
    position: absolute;
    left: 4.625rem;
    top: -1.375rem;
    width: 2.5rem;
    height: 1.25rem;
    background: linear-gradient(80deg,#F7F7F7,silver) content-box;
    border-style: solid;
    border-width: 0 5px 7px;
    border-color: lightgrey  transparent;
    border-radius: 100% / 25%;
}
```

Met dank aan [Kseso op Codepen](https://codepen.io/Kseso/pen/wMvOxb)
