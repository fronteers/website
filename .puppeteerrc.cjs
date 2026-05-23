const { join } = require("path");

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Store Chrome inside the project so Netlify's build cache picks it up
  // between builds (Netlify caches ./node_modules and ./.cache by default).
  cacheDirectory: join(__dirname, ".cache", "puppeteer"),
};
