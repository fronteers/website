module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./content/css/");

  eleventyConfig.addShortcode("tag", (tag) => `<div class="tag">${tag}</div>`);

  return {
    dir: {
      input: "content",
      output: "dist",
    },
  };
};
