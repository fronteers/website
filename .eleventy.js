const glob = require("fast-glob");
const globcat = require("globcat");

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./content/css/");
  eleventyConfig.addPassthroughCopy({ "content/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "content/images": "assets/images" });

  glob.sync("components/paired/**/*.js").forEach((file) => {
    console.log("file", file);
    let shortcodes = require("./" + file);
    Object.keys(shortcodes).forEach((name) => {
      eleventyConfig.addPairedShortcode(name, shortcodes[name]);
    });
  });

  glob.sync("components/shortcodes/**/*.js").forEach((file) => {
    console.log("file", file);
    let shortcodes = require("./" + file);
    Object.keys(shortcodes).forEach((name) => {
      eleventyConfig.addShortcode(name, shortcodes[name]);
    });
  });

  eleventyConfig.addShortcode(
    "include-all",
    async (glob) => await globcat(glob)
  );

  return {
    dir: {
      input: "content",
      output: "dist",
    },
  };
};
