const glob = require("fast-glob");
const globcat = require("globcat");

module.exports = function(eleventyConfig) {
  /* Rebuild when CSS is changed */
  eleventyConfig.addWatchTarget("./content/_assets/css/");
  /* Copy fonts to the dist directory */
  eleventyConfig.addPassthroughCopy({
    "content/_assets/fonts": "assets/fonts",
  });
  /* Copy images to the dist directory */
  eleventyConfig.addPassthroughCopy({
    "content/_assets/images": "assets/images",
  });
  /* Copy images to the dist directory */
  eleventyConfig.addPassthroughCopy({
    "content/nl/jobs/company-logos": "assets/company-logos/",
  });
  /* Copy js to the dist directory */
  eleventyConfig.addPassthroughCopy({ "content/_assets/js": "assets/js" });

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

  eleventyConfig.addCollection("pages", function(collection) {
    return collection
      .getFilteredByTag("pages")
      .sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addCollection("published_posts_nl", function(collection) {
    return collection
      .getFilteredByTag("posts_nl")
      .filter((post) => Boolean(!post.data.draft))
      .reverse();
  });

  eleventyConfig.addCollection("published_activities_nl", function(collection) {
    return collection
      .getFilteredByTag("activities_nl")
      .filter((post) => Boolean(!post.data.draft));
  });

  eleventyConfig.addCollection("published_jobs_nl", function(collection) {
    return collection
      .getFilteredByTag("jobs_nl")
      .filter((post) => Boolean(!post.data.draft))
      .reverse();
  });

  eleventyConfig.addCollection("published_members_nl", function(collection) {
    return collection
      .getFilteredByTag("members_nl")
      .filter((post) => Boolean(!post.data.draft));
  });

  eleventyConfig.addCollection("published_posts_en", function(collection) {
    return collection
      .getFilteredByTag("posts_en")
      .filter((post) => Boolean(!post.data.draft))
      .reverse();
  });

  eleventyConfig.addCollection("published_activities_en", function(collection) {
    return collection
      .getFilteredByTag("activities_en")
      .filter((post) => Boolean(!post.data.draft));
  });

  eleventyConfig.addCollection("published_jobs_en", function(collection) {
    return collection
      .getFilteredByTag("jobs_en")
      .filter((post) => Boolean(!post.data.draft))
      .reverse();
  });

  eleventyConfig.addCollection("published_members_en", function(collection) {
    return collection
      .getFilteredByTag("members_en")
      .filter((post) => Boolean(!post.data.draft));
  });

  eleventyConfig.addCollection("drafts", function(collection) {
    return collection.getAll().filter((post) => Boolean(post.data.draft));
  });

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
