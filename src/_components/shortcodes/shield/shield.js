const fs = require("fs");
const path = require("path");

const DIR_PATTERNS = path.resolve(__dirname, "patterns");
const DIR_SHAPES = path.resolve(__dirname, "shapes");

let maskId = 0;

exports.shield = (shape, pattern, colorPrimary, colorSecondary) => {
  const shapePath = path.resolve(DIR_SHAPES, `${shape}.svg`);
  const shapeSvg = fs.readFileSync(shapePath).toString();

  const patternPath = path.resolve(DIR_PATTERNS, `${pattern}.svg`);
  const patternShape = fs
    .readFileSync(patternPath)
    .toString()
    .replace(/{{\s*primary\s*}}/gi, `var(--${colorPrimary})`)
    .replace(/{{\s*secondary\s*}}/gi, `var(--${colorSecondary})`);

  maskId++;

  // DO NOT INDENT; it'll be interpreted as a code block
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 154">
<mask id="shield-mask-${maskId}">
<rect x="0" y="0" width="100%" height="100%" fill="black" />
${shapeSvg}
</mask>
<g mask="url(#shield-mask-${maskId})">${patternShape}</g>
</svg>`;
};
