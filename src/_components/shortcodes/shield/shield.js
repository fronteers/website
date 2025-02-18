const fs = require("node:fs");
const path = require("node:path");
const { createHash } = require("node:crypto");

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

/**
 * Generate a shield based on the given parameters
 *
 * @typedef {'accolade' | 'rectangular' | 'rounded' | 'triangular'} ShieldShape
 * @typedef {'accolade' | 'checkerboard' | 'diagonal' | 'dot' | 'split-horizontal' | 'stripe' | 'thunder' } ShieldPattern
 * @typedef {'purple' | 'yellow' | 'lilac' | 'red'} ShieldColor
 *
 * @param {ShieldShape} shape
 * @param {ShieldPattern} pattern
 * @param {ShieldColor} colorPrimary
 * @param {ShieldColor} colorSecondary
 *
 * @returns
 */
function getShield(shape, pattern, colorPrimary, colorSecondary) {
  const shapePath = path.resolve(DIR_SHAPES, `${shape}.svg`);
  const shapeSvg = fs.readFileSync(shapePath).toString();

  colorPrimary = interpretColor(colorPrimary);
  colorSecondary = interpretColor(colorSecondary);

  const patternPath = path.resolve(DIR_PATTERNS, `${pattern}.svg`);
  const patternShape = fs
    .readFileSync(patternPath)
    .toString()
    .replace(/{{\s*primary\s*}}/gi, colorPrimary)
    .replace(/{{\s*secondary\s*}}/gi, colorSecondary);

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

function interpretColor(color) {
  if (color[0] == "#") {
    return color;
  }

  return `var(--${color}, '#0000007F)`;
}

/*
 * This shortcode generates a shield based on arbitrary strings.
 *
 * To avoid similarity of similar names (e.g. Erin and Erik), this function computes a hash of the
 * string and uses that to determine the shield properties.
 */
function generateShield(term, overrides = {}, excludes = {}) {
  if (term == "") {
    return getShield(SHAPES[0], PATTERNS[2], "#0000007F", "#FFFFFF7F");
  }

  const [pattern, shape, [colorPrimary, colorSecondary]] = pickPropsByString(
    createHash("md5")
      .update(String(overrides.term || term))
      .digest("hex"),
    [
      reject(PATTERNS, excludes.pattern),
      reject(SHAPES, excludes.shapes),
      reject(COLOR_SETS, excludes.color),
    ]
  );

  return getShield(
    overrides.shape || shape,
    overrides.pattern || pattern,
    overrides.colorPrimary || colorPrimary,
    overrides.colorSecondary || colorSecondary
  );
}

function reject(values, excludes) {
  if (!excludes) {
    return values;
  }

  return values.filter((value) =>
    Array.isArray(value)
      ? value.every((inner) => !excludes.includes(inner))
      : !excludes.includes(value)
  );
}

module.exports = {
  shield: getShield,
  generateShield,
};
