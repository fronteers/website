const fs = require("fs");
const path = require("path");
const { createHash } = require("crypto");

const DIR_PATTERNS = path.resolve(__dirname, "patterns");
const DIR_SHAPES = path.resolve(__dirname, "shapes");

const PATTERNS = fs
  .readdirSync(DIR_PATTERNS)
  .map((p) => path.basename(p, path.extname(p)));

const SHAPES = fs
  .readdirSync(DIR_SHAPES)
  .map((p) => path.basename(p, path.extname(p)));

// List of curated color combinations
// See: src/_assets/css/common/colors.css
const COLOR_SETS = [
  ["lilac", "purple"],
  ["purple", "lilac"],
  ["purple", "red"],
  ["purple", "yellow"],
  ["red", "purple"],
  ["red", "yellow"],
  ["yellow", "purple"],
  ["yellow", "red"],
];

function getCharacterRangeForProps(props, radix = 16) {
  const charactersLengths = props.map((arr) => Math.ceil(arr.length / radix));

  return charactersLengths.map((length, index, array) => {
    const offset = array.slice(0, index).reduce((x, y) => x + y, 0);

    return {
      length,
      end: offset + length,
      start: offset,
    };
  });
}

function pickPropsByString(string, props, radix = 16) {
  const ranges = getCharacterRangeForProps(props, radix);

  if (ranges.reduce((sum, { length }) => sum + length, 0) > string.length) {
    throw new Error("Hexadecimal string is too short");
  }

  return props.map((prop, index) => {
    const { start, end } = ranges[index];
    const propIndex = Number.parseInt(string.substring(start, end), radix);

    return prop[propIndex % prop.length];
  });
}

let maskId = 0;

function getShield(shape, pattern, colorPrimary, colorSecondary) {
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
}

exports.shield = getShield;

/*
 * This shortcode generates a shield based on arbitrary strings.
 *
 * To avoid similarity of similar names (e.g. Erin and Erik), this function computes a hash of the
 * string and uses that to determine the shield properties.
 */
exports.generateShield = (term) => {
  const [pattern, shape, [colorPrimary, colorSecondary]] = pickPropsByString(
    createHash("md5").update(term.toString()).digest("hex"),
    [PATTERNS, SHAPES, COLOR_SETS]
  );

  return getShield(shape, pattern, colorPrimary, colorSecondary);
};
