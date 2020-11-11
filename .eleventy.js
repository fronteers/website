module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./content/css/");
  eleventyConfig.addPassthroughCopy({ "content/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "content/images": "assets/images" });

  eleventyConfig.addShortcode("tag", (tag) => `<div class="tag">${tag}</div>`);

  return {
    dir: {
      input: "content",
      output: "dist",
    },
  };
};
