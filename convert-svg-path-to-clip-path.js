// why do this? clip-path accepts a `url` reference to an svg element, right?
// the difference is that anything defined as a `basic-shape` can be animated:
// https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path

const input = `M1,0.004 H0.001 v0.283 C0.001,0.563,0.071,0.718,0.157,0.718 h0.214 c0.029,0,0.073,0.023,0.083,0.285 h0.094 C0.558,0.75,0.6,0.722,0.629,0.718 h0.216 c0.087,0,0.156,-0.155,0.156,-0.433`;

const viewBoxScale = 4;

const stringPairs = input
  .split(/[ \t\n]/)
  .map((s) => s.trim())
  .filter((s) => s.length > 0);

const res = stringPairs
  .map((s) => {
    const [x, y] = s
      .split(",")
      .map((n) => parseFloat(n, 10) / viewBoxScale)
      .map((n) => n.toFixed(2));
    return `${x}% ${y}%`;
  })
  .join(", ");

console.log(`clip-path: polygon(${res});`);
