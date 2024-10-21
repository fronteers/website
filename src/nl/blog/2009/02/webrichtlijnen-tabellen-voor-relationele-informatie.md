---
title: 'Webrichtlijn 72: Tabellen voor relationele informatie'
date: 2009-02-03
author: Krijn Hoetmer
categories: 
  - Webrichtlijnen
---
Gebruik tabellen voor het weergeven van relationele informatie en niet voor lay-out. ([R-pd.11.1](http://www.webrichtlijnen.nl/handleiding/ontwikkeling/productie/tabellen/relationele-informatie/#r-pd-11-1))

Zojuist is er weer [een hevige discussie](http://rondam.blogspot.com/2009/02/why-css-should-not-be-used-for-layout.html#comments) over [het gebruik van tabellen voor layout](http://www.flownet.com/ron/css-rant.html) losgebarsten. Dat kunnen wij natuurlijk ook, met deze richtlijn!

Wie is het eens met de stelling "CSS should be used for styling, tables should be used for layout"? Zit wel wat in, toch? :-)

Gaan [CSS tables](http://www.sitepoint.com/books/csswrong1/) (`display: table;`, etc.) een einde maken aan deze discussie, of heeft dat hetzelfde probleem? Het idee is toch dat je markup en layout van elkaar wilt scheiden? Is het volgende echt zoveel beter dan een table layout?

```
<style>
 #main { display: table-row; }
  #nav { display: table-cell; }
  #content { display: table-cell; }
</style>

<div id="main">
 <div id="nav">
  <ul>
   <li><a href="/">Home</a></li>
   <li><a href="/over">Over</a></li>
   <li><a href="/contact">Contact</a></li>
  </ul>
 </div> <!-- #nav -->
 <div id="content">
  <h1>Over</h1>
  <p>Over ons...</p>
  <p>Etc.</p>
 </div> <!-- #content -->
</div> <!-- #main -->
```

Hiermee zit je toch net zo vast aan je layout als met het volgende:

```
<table>
 <tr>
  <td>
   <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/over">Over</a></li>
    <li><a href="/contact">Contact</a></li>
   </ul>
  </td>
  <td>
   <h1>Over</h1>
   <p>Over ons...</p>
   <p>Etc.</p>
  </td>
 </tr>
</table>
```

Maar nu even zonder gekheid: wie weet er überhaupt nog hoe je tabellen gebruikt voor layout? Moet je deze discussie ooit nog aangaan in je werk, en zo ja, welke argumenten hoor je daar?
