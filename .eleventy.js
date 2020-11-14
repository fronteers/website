const glob = require("fast-glob");
const globcat = require("globcat");

module.exports = function(eleventyConfig) {
  /* Rebuild when CSS is changed */
  eleventyConfig.addWatchTarget("./content/css/");
  /* Copy fonts to the dist directory */
  eleventyConfig.addPassthroughCopy({ "content/fonts": "assets/fonts" });
  /* Copy images to the dist directory */
  eleventyConfig.addPassthroughCopy({ "content/images": "assets/images" });

  /* Load all paired shortcodes */
  glob.sync("components/paired/**/*.js").forEach((file) => {
    let shortcodes = require(`./${file}`);
    Object.keys(shortcodes).forEach((name) => {
      eleventyConfig.addPairedShortcode(name, shortcodes[name]);
    });
  });

  /* Load all shortcodes */
  glob.sync("components/shortcodes/**/*.js").forEach((file) => {
    let shortcodes = require(`./${file}`);
    Object.keys(shortcodes).forEach((name) => {
      eleventyConfig.addShortcode(name, shortcodes[name]);
    });
  });

  const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
  module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
  };

  /* Add 'include-all' shortcodes for loading all CSS (used in style.liquid) */
  eleventyConfig.addShortcode(
    "include-all",
    async (glob) => await globcat(glob)
  );

  /* All templates in the content directory are parsed and copied to the dist directory */
  return {
    dir: {
      input: "content",
      output: "dist",
    },
  };
};
