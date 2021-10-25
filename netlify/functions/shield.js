const { promisify } = require("util");
const fs = require("fs");
const path = require("path");

const createNumberGenerator = require("seed-random");

const loadFile = promisify(fs.readFile);

function getRandomItem(array, { getRandomNumber = Math.random }) {
  const index = Math.floor(getRandomNumber() * array.length);

  return array[index];
}

async function loadMask({ getRandomNumber }) {
  const masks = ["test-1.svg", "test-2.svg"];

  const maskFile = getRandomItem(masks, { getRandomNumber });
  const maskPath = path.resolve(__dirname, "masks", maskFile);

  return (await loadFile(maskPath)).toString();
}

async function loadPattern({ getRandomNumber }) {
  const masks = ["bars.svg", "diagonal.svg", "dot.svg"];

  const maskFile = getRandomItem(masks, { getRandomNumber });
  const maskPath = path.resolve(__dirname, "patterns", maskFile);

  return (await loadFile(maskPath)).toString();
}

module.exports.handler = async (event) => {
  const seed = event.path.substring(event.path.indexOf("/shield/") + 8);
  const getRandomNumber = createNumberGenerator(seed);

  const mask = await loadMask({ getRandomNumber });
  const pattern = await loadPattern({ getRandomNumber });

  return {
    body: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">
            <mask id="mask">
                <rect x="0" y="0" width="100%" height="100%" fill="black" />
                ${mask}
            </mask>
            ${pattern}
        </svg>`,
    statusCode: 200,
    headers: {
      "Content-Type": "image/svg+xml",
    },
  };
};
