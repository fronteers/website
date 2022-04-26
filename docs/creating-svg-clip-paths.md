# How I got the svg path  

1) draw over a new shape in Sketch or other software (make it a path/vector), save it as SVG
2) clean up the svg generated through [svgomg](https://jakearchibald.github.io/svgomg/)
3) use [Yoksel's clip path converter](https://yoksel.github.io/relative-clip-path/) to clean the svg and get the relative clip-path 
4) Add it as a shape to shapes.svg