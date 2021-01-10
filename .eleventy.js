const glob = require("fast-glob");
const globcat = require("globcat"); 

module.exports = function (eleventyConfig) {
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

  eleventyConfig.addCollection("header_navigation", function(collection) {
    return collection.getFilteredByTag("pages")
      .filter((item) => Boolean(item.data.header_navigation_top))
      .sort((a, b) => b.data.order - a.data.order)
      .reverse();
  });

  eleventyConfig.addCollection("sub_navigation", function(collection) {
    return collection.getFilteredByTag("pages")
      .filter((item) => Boolean(!item.data.header_navigation_top))
      .filter((item) => Boolean(!item.data.footer_navigation))
      .filter((item) => Boolean(item.data.parent))
      .sort((a, b) => b.data.order - a.data.order)
      .reverse();
  });

  eleventyConfig.addCollection("footer_navigation", function(collection) {
    return collection.getFilteredByTag("pages")
      .filter((item) => Boolean(item.data.footer_navigation))
      .sort((a, b) => b.data.order - a.data.order)
      .reverse();
  });
  
  eleventyConfig.addCollection("published_posts", function(collection) {
    return collection
      .getFilteredByTag("posts")
      .filter((post) => Boolean(!post.data.draft))
      .filter((item) => Boolean(!item.data.parent))
      .reverse();
  });

  eleventyConfig.addCollection("published_activities", function(collection) {
    return collection
      .getFilteredByTag("activities")
      .filter((post) => Boolean(!post.data.draft))
      .filter((item) => Boolean(!item.data.parent));
  });

  eleventyConfig.addCollection("published_jobs", function(collection) {
    return collection
      .getFilteredByTag("jobs")
      .filter((post) => Boolean(!post.data.draft))
      .filter((item) => Boolean(!item.data.parent))
      .reverse();
  });

  eleventyConfig.addCollection("published_members", function(collection) {
    return collection
      .getFilteredByTag("members")
      .filter((post) => Boolean(!post.data.draft));
  });

  eleventyConfig.addCollection("freelancers", function(collection) {
    return collection
      .getFilteredByTag("members")
      .filter((post) => Boolean(post.data.freelancer))
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

  eleventyConfig.addFilter("getDutch", function (value) {
    return value.filter((post) => Boolean(post.data.locale == "nl"));
  });

  eleventyConfig.addFilter("getEnglish", function (collection) {
    return collection.filter((post) => Boolean(post.data.locale == "en"));
  });
 
  /* All templates in the content directory are parsed and copied to the dist directory */
  return {
    dir: {
      input: "content",
      output: "dist",
    },
  };

};
