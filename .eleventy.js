const glob = require('fast-glob');

const { EleventyRenderPlugin } = require('@11ty/eleventy');
const EleventyPluginIds = require('@orchidjs/eleventy-plugin-ids');
const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite');
const EleventyPluginRss = require('@11ty/eleventy-plugin-rss');
const EleventyPluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 */
module.exports = function (eleventyConfig) {
    const quick = Boolean(process.env.BUILD_QUICK);

    // There is a quick build function (npm run start:quick) that only loads the
    // recent content (YTD and previous year), by excluding all year folders from
    // older content. We process this first so that any plugin doesn't even see
    // these files.
    if (quick) {
        const now = new Date();

        glob.sync(
            'src/{nl,en}/{activiteiten,activities,blog,congres,conference,werk-en-freelance}/**/*.md'
        ).forEach((file) => {
            const parts = file.split('/');

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
            console.debug('[ignore] ', file);
        });

        eleventyConfig.ignores.add('src/nl/vereniging/bestuur/notulen');
        eleventyConfig.ignores.add('src/rss-*');
    }

    /* Copy static assets to the dist directory */
    eleventyConfig.setServerPassthroughCopyBehavior('copy');
    eleventyConfig.addPassthroughCopy('_redirects');
    eleventyConfig.addPassthroughCopy('public');

    /* Copy files for asset pipeline */
    eleventyConfig.addPassthroughCopy('src/assets/css');
    eleventyConfig.addPassthroughCopy('src/assets/js');
    glob.sync('src/{_components,_includes}/**/*.css').forEach((file) => {
        const input = String(file).split('/').slice(0, -1).join('/');
        const output = input.replace(/^src\//, 'assets/');

        const mapping = {};
        mapping[`${input}/*.css`] = output;
        eleventyConfig.addPassthroughCopy(mapping);
    });

    // Enable renderTemplate and renderFile
    eleventyConfig.addPlugin(EleventyRenderPlugin);

    // Add id to heading elements
    eleventyConfig.addPlugin(EleventyPluginIds);

    // Enable asset bundling
    eleventyConfig.addPlugin(EleventyVitePlugin, {
        tempFolderName: '.11ty-vite',

        viteOptions: {
            publicDir: 'public',
            clearScreen: false,
            server: {
                mode: 'development',
                middlewareMode: true,
            },
            appType: 'custom',
            assetsInclude: ['**/*.xml', '**/*.txt'],
            build: {
                mode: 'production',
                sourcemap: 'true',
                manifest: true,
                rollupOptions: {
                    output: {
                        assetFileNames: 'assets/css/main.[hash].css',
                        chunkFileNames: 'assets/js/[name].[hash].js',
                        entryFileNames: 'assets/js/[name].[hash].js',
                    },
                },
            },
        },
    });

    // Add RSS feed for blog
    eleventyConfig.addPlugin(EleventyPluginRss);

    // Add Syntax highlighting to code blocks
    eleventyConfig.addPlugin(EleventyPluginSyntaxHighlight);

    // Rebuild when any of the files are changed
    eleventyConfig.addWatchTarget('./src/_includes/partials');

    // Filters
    Object.entries(require('./utils/filters.js')).forEach(
        ([filterName, filter]) => {
            console.debug(`[filter] ${filterName}`);
            eleventyConfig.addFilter(filterName, filter);
        }
    );

    // Transforms
    Object.entries(require('./utils/transforms.js')).forEach(
        ([transformName, transform]) => {
            console.debug(`[transform] ${transformName}`);
            eleventyConfig.addTransform(transformName, transform);
        }
    );

    // Shortcodes
    Object.entries(require('./utils/shortcodes.js')).forEach(
        ([shortcodeName, shortcode]) => {
            console.debug(`[shortcode] ${shortcodeName}`);
            eleventyConfig.addShortcode(shortcodeName, shortcode);
        }
    );

    // Paired Shortcodes
    Object.entries(require('./utils/paired.js')).forEach(
        ([shortcodeName, shortcode]) => {
            console.debug(`[shortcode] ${shortcodeName}`);
            eleventyConfig.addPairedShortcode(shortcodeName, shortcode);
        }
    );

    // Collections
    Object.entries(require('./utils/collections.js')).forEach(
        ([collectionName, collection]) => {
            console.debug(`[collection] ${collectionName}`);
            eleventyConfig.addCollection(collectionName, collection);
        }
    );

    eleventyConfig.setLiquidOptions({
        dynamicPartials: true,
        strictFilters: false,
    });

    /* All templates in the content directory are parsed and copied to the dist directory */
    return {
        // templateFormats: ['md', 'njk', 'html', 'liquid'],

        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes',
            layouts: '_layouts',
            data: '_data',
        },
    };
};
