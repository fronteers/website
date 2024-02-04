const { exec } = require("child_process");
const glob = require("fast-glob");
const pluginAddIdToHeadings = require("@orchidjs/eleventy-plugin-ids");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const brokenLinksPlugin = require("eleventy-plugin-broken-links");
const { strToSlug, getAllKeyValues } = require('./utils/helpers');


module.exports = function (eleventyConfig) {
  const quick = Boolean(process.env.BUILD_QUICK);
  const now = new Date();

  /**
   * There is a quick build function (npm run start:quick) that only loads the
   * recent content (YTD and previous year), by excluding all year folders from
   * older content. We process this first so that any plugin doesn't even see
   * these files.
   */
  if (quick) {
    glob
      .sync(
        "src/{nl,en}/{activiteiten,activities,blog,congres,conference,werk-en-freelance}/**/*.md"
      )
      .forEach((file) => {
        const parts = file.split("/");

        let year = Number(parts[parts.length - 3]);
        if (isNaN(year)) {
          // Sometimes there is no "month" directory
          year = Number(parts[parts.length - 2]);
          if (isNaN(year)) {
            return;
          }
        }

        if (year >= now.getFullYear() - 1) {
          return;
        }

        eleventyConfig.ignores.add(file);
        console.debug("[ignore] ", file);
      });

    eleventyConfig.ignores.add("src/nl/vereniging/bestuur/notulen");
  }

  /* Add id to heading elements */
  eleventyConfig.addPlugin(pluginAddIdToHeadings);

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPlugin(brokenLinksPlugin, {
    redirect: "warn",
    broken: "warn",
    cacheDuration: "1d",
    loggingLevel: 1,
    excludeUrls: [
      "https://www.openstreetmap.org*",
      "https://www.youtube.com*",
      "http://www.example.com*",
      "https://codepen.io*",
      "https://twitter.com*",
      "http://api.dojotoolkit.org*",
      "http://www.webdesignermagazine.nl/*",
      "http://80beans.com*",
    ],
    excludeInputs: [],
    callback: null,
  });

  /**
   * Rebuild when any of the files are changed, but exclude css because that is
   * handled by the asset pipeline.
   * This seemed to cause a bug on refreshing liquid files?
   * eleventyConfig.addWatchTarget("./src/");
   * 
   * Setup the pass through rules for CSS files. This way we can use regular
   * CSS imports without any magic, and later use a minification and/or purge
   * step on the result.
   * Why do it this way? We want to preserve the directory structure so that the
   * import paths are traversable in your IDE.
   */

  /* Copy static assets to the dist directory */
  eleventyConfig.addPassthroughCopy({
    "src/_assets/css/common": "assets/css/common",
    "src/_assets/css/elements": "assets/css/elements",
    "src/_assets/css/style.css": "assets/css/style.css",
    "src/_assets/favicon": "assets/favicon",
    "src/_assets/company-logos": "assets/company-logos/",
    "src/_assets/member-avatars": "assets/member-avatars/",
    "src/_assets/fonts": "assets/fonts",
    "src/_assets/images": "assets/images",
    "src/_assets/js": "assets/js",
    "_img/": "_img",
    "_redirects" : "_redirects"
  });

  glob.sync("src/{_components,_includes}/**/*.css").forEach((file) => {
    const input = String(file).split("/").slice(0, -1).join("/");
    const output = input.replace(/^src\//, "assets/");

    const mapping = {};
    mapping[`${input}/*.css`] = output;
    eleventyConfig.addPassthroughCopy(mapping);
  });

  /* Load all paired shortcodes */
  glob.sync("src/_components/paired/**/*.js").forEach((file) => {
    let shortcodes = require(`./${file}`);
    Object.keys(shortcodes).forEach((name) => {
      eleventyConfig.addPairedShortcode(name, shortcodes[name]);
    });
  });

  /* Load all shortcodes */
  glob.sync("src/_components/shortcodes/**/*.js").forEach((file) => {
    let shortcodes = require(`./${file}`);
    Object.keys(shortcodes).forEach((name) => {
      eleventyConfig.addShortcode(name, shortcodes[name]);
    });
  });

  /* Load all Collections */
  Object.entries(require('./utils/collections.js')).forEach(
    ([collectionName, collection]) => {
        // console.debug(`[collection] ${collectionName}`);
        eleventyConfig.addCollection(collectionName, collection);
    }
  );
  
  /* Load all filters */
  Object.entries(require('./utils/filters.js')).forEach(
    ([filterName, filter]) => {
        // console.debug(`[filter] ${filterName}`);
        eleventyConfig.addFilter(filterName, filter);
    }
  );

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false,
  });

  /* This bundles all the css after the build */
  eleventyConfig.on(
    "eleventy.after",
    async ({ dir, results, runMode, outputMode }) =>
      new Promise((resolve, reject) => {
        exec(
          "npx lightningcss --minify --bundle --targets '>= 0.25%' dist/assets/css/style.css -o dist/assets/css/style.css",
          (err) => {
            if (err) {
              console.error(err);
              reject(err);
            }
            console.log("Successfully bundled the CSS");
            resolve();
          }
        );
      })
  );

  /* All templates in the content directory are parsed and copied to the dist directory */
  return {
    // templateFormats: ['md', 'njk', 'html', 'liquid'],

    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
    },
  };
};
