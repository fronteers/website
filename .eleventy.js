const { exec } = require("child_process");
const glob = require("fast-glob");
const { DateTime } = require("luxon"); 
const fs = require("fs");

const pluginAddIdToHeadings = require("@orchidjs/eleventy-plugin-ids");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const brokenLinksPlugin = require("eleventy-plugin-broken-links");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

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
        if (file.includes("wees-niet-slim")) {
          return;
        }

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

    // Custom date filter
    eleventyConfig.addFilter("localizedDate", function (dateObj, locale = "en") {
        return DateTime.fromJSDate(dateObj).setLocale(locale).toFormat("d LLLL yyyy");
    });
  eleventyConfig.addFilter("bust", (url) => {
    const [urlPart, paramPart] = url.split("?");
    const params = new URLSearchParams(paramPart || "");
    const relativeUrl = (urlPart.charAt(0) == "/") ? urlPart.substring(1) : urlPart;

    try {
      const fileStats = fs.statSync(relativeUrl);
      const dateTimeModified = new DateTime(fileStats.mtime).toFormat("X");
      params.set("v", dateTimeModified);
    } catch (error) { }

    return `${urlPart}?${params}`;
  });
  
  // Custom date filter
  eleventyConfig.addFilter("localizedDate", function (dateObj, locale = "en") {
    return DateTime.fromJSDate(dateObj)
      .setLocale(locale)
      .toFormat("d LLLL yyyy");
  });

  /* Add id to heading elements */
  eleventyConfig.addPlugin(pluginAddIdToHeadings);

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
      "http://meetup.com*",
      "https://github.com/fronteers/website*",
    ],
    excludeInputs: [],
    callback: null,
  });

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPlugin(syntaxHighlight);

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
    "src/_downloads": "downloads",
    "src/_assets/css/common": "assets/css/common",
    "src/_assets/css/elements": "assets/css/elements",
    "src/_assets/css/style.css": "assets/css/style.css",
    "src/_assets/favicon": "assets/favicon",
    "src/_assets/company-logos": "assets/company-logos/",
    "src/_assets/member-avatars": "assets/images/member-avatars/",
    "src/_assets/fonts": "assets/fonts",
    "src/_assets/images": "assets/images",
    "src/_assets/js": "assets/js",
    "_img/": "_img",
    "_redirects.conf": "_redirects",
  });
  eleventyConfig.addPassthroughCopy("src/{nl,en}/**/*.{pdf,zip}");

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
  Object.entries(require("./utils/collections.js")).forEach(
    ([collectionName, collection]) => {
      // console.debug(`[collection] ${collectionName}`);
      eleventyConfig.addCollection(collectionName, collection);
    }
  );

  /* Load all filters */
  Object.entries(require("./utils/filters.js")).forEach(
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
          'npx lightningcss --minify --bundle --targets ">= 0.25%" dist/assets/css/style.css -o dist/assets/css/style.css',
          (err) => {
            if (err) {
              console.error("[lightningcss] Failed to bundle the CSS");
              console.error(err);
              reject(err);
              return;
            }

            console.debug("[lightningcss] Successfully bundled the CSS");
            resolve();
          }
        );
      })
  );

  // Allows you to debug a json object in eleventy templates data | stringify
  eleventyConfig.addFilter("stringify", (data) => {
    return JSON.stringify(data, null, "\t");
  });

  // https://www.11ty.dev/docs/permalinks/#remove-trailing-slashes
  // Dropping these normalizes the URls between sitemap.xml and canonical, which is important for indexing.
  eleventyConfig.addUrlTransform((page) => {
    if (page.url.endsWith(".html")) {
      return page.url.slice(0, -1 * ".html".length);
    }
  });

  /* This log will appear before the first build. It is tied to the plugin that checks broken links. */
  console.debug(
    "Eleventy will now generate RSS feeds and then look for broken links. This may take a while. When its done, you should see logs appear."
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
