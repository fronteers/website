const { exec } = require("child_process");
const glob = require("fast-glob");
const { DateTime } = require("luxon");
const slugify = require('slugify');
const fs = require("fs");
const puppeteer = require('puppeteer');
const path = require('path');
require('dotenv').config(); // Load environment variables

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

  // Import listmonkUtilities
  const listmonkUtils = require('./utils/listmonk.js');

  eleventyConfig.on('afterBuild', async () => {
    const postsDir = path.join(__dirname, 'src/nl/activiteiten'); // Root folder
    const outputFile = path.join(__dirname, 'dist/latest-post.json'); // Output file

    // Ensure output directory exists
    if (!fs.existsSync(path.dirname(outputFile))) {
      fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    }

    // Find all markdown files recursively
    const files = await glob([`${postsDir}/**/*.md`]); // Traverse all subdirectories for .md files

    // Parse files and extract front matter date
    const filteredFiles = files
      .filter(file => path.basename(file) !== 'index.md') // Exclude index.md
      .map(file => {
        const content = fs.readFileSync(file, 'utf-8'); // Read file content
        const metadata = listmonkUtils.extractFrontMatter(content); // Extract front matter
        const date = metadata.date ? new Date(metadata.date) : new Date(0); // Parse date or fallback
        return { file, metadata, date }; // Store file data
      })
      .sort((a, b) => b.date - a.date); // Sort by date (most recent first)

    if (filteredFiles.length > 0) {
      const latestPost = filteredFiles[0]; // Get the most recent post
      console.log('Latest Post Metadata:', latestPost.metadata); // Debugging log

      // Write latest post metadata to JSON
      fs.writeFileSync(outputFile, JSON.stringify(latestPost.metadata, null, 2));
      console.log('Latest post JSON generated:', latestPost.metadata);

      // Check and send campaign (you already have this function)
      listmonkUtils.checkAndSendCampaign(latestPost.metadata);
    } else {
      console.log('No valid posts found.');
    }
  });

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

  if (!quick) {
    eleventyConfig.on('afterBuild', async () => {
      async function convertSvgToJpeg(inputDir, outputDir) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Read all files in the input directory
        const files = fs.readdirSync(inputDir);

        for (const filename of files) {
          if (filename.endsWith(".svg")) {
            const inputPath = path.join(inputDir, filename);
            const outputPath = path.join(outputDir, filename.replace('.svg', '.jpg'));

            // Read the SVG content
            const svgContent = fs.readFileSync(inputPath, 'utf8');

            // Extract width and height from SVG (Optional: If SVG has explicit size)
            const matchWidth = svgContent.match(/width="([0-9]+)"/);
            const matchHeight = svgContent.match(/height="([0-9]+)"/);

            const width = matchWidth ? parseInt(matchWidth[1], 10) : 1200; // Default to 1200px
            const height = matchHeight ? parseInt(matchHeight[1], 10) : 675; // Default to 630px

            // Set the viewport size to match SVG size
            await page.setViewport({ width, height });

            // Set SVG content inside an HTML wrapper
            await page.setContent(`
                      <html>
                          <body style="margin:0;padding:0;overflow:hidden;">
                              <div style="width:${width}px; height:${height}px;">
                                  ${svgContent}
                              </div>
                          </body>
                      </html>
                  `);

            // Take a screenshot and save as JPEG
            await page.screenshot({
              path: outputPath,
              type: 'jpeg',
              quality: 100,
              clip: { x: 0, y: 0, width, height } // Ensure clipping matches viewport
            });

            console.log(`Converted: ${filename} -> ${outputPath}`);
          }
        }

        await browser.close();
      }

      // Execute conversion
      const inputDir = 'dist/assets/images/social-preview-images/';
      const outputDir = 'dist/assets/images/social-preview-images/';
      await convertSvgToJpeg(inputDir, outputDir);
    });
  }
  
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
