module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./content/css/");

  return {
    dir: {
      input: "content",
      output: "dist",
    },
  };
};
