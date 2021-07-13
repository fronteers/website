const glob = require("fast-glob");
const globcat = require("globcat"); 
const lodash = require("lodash");
const slugify = require("slugify");

/**
 * Get all unique key values from a collection
 *
 * @param {Array} collectionArray - collection to loop through
 * @param {String} key - key to get values from
 */
function getAllKeyValues(collectionArray, key) {
  // get all values from collection
  let allValues = collectionArray.map((post) => {
    let values = post.data[key] ? post.data[key] : [];
    return values;
  });

  // flatten values array
  allValues = lodash.flattenDeep(allValues);
  // to lowercase
  allValues = allValues.map((post) => post.toLowerCase());
  // remove duplicates
  allValues = [...new Set(allValues)];
  // order alphabetically
  allValues = allValues.sort(function (a, b) {
    return a.localeCompare(b, "en", { sensitivity: "base" });
  });
  // return
  return allValues;
}

/**
 * Transform a string into a slug
 * Uses slugify package
 *
 * @param {String} str - string to slugify
 */
function strToSlug(str) {
  const options = {
    replacement: "-",
    remove: /[&,+()$~%.'":*?<>{}]/g,
    lower: true
  };

  return slugify(str, options);
}

module.exports = function (eleventyConfig) {
  /* Rebuild when CSS is changed */
  eleventyConfig.addWatchTarget("./src/_assets/css/");
  /* Copy fonts to the dist directory */
  eleventyConfig.addPassthroughCopy({
    "src/_assets/fonts": "assets/fonts",
  });
  /* Copy images to the dist directory */
  eleventyConfig.addPassthroughCopy({
    "src/_assets/images": "assets/images",
  });
  eleventyConfig.addPassthroughCopy({
    "src/_assets/company-logos": "assets/company-logos/",
  });
  eleventyConfig.addPassthroughCopy({
    "src/_assets/member-avatars": "assets/member-avatars/",
  });
  /* Copy js to the dist directory */
  eleventyConfig.addPassthroughCopy({ "src/_assets/js": "assets/js" });

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

  const now = new Date();

  eleventyConfig.addCollection("canonical", function(collection) {
    return collection.getFilteredByTag("pages")
      .filter((post) => Boolean(post.data.key))
      .filter((post) => Boolean(post.date <= now))
      .filter((post) => Boolean(post.data.locale == "nl"))
  });

  eleventyConfig.addCollection("header_navigation", function(collection) {
    return collection.getFilteredByTag("pages")
      .filter((post) => Boolean(post.data.header_navigation_top))
      .filter((post) => Boolean(post.date <= now))
      .sort((a, b) => b.data.order - a.data.order)
      .reverse();
  });

  eleventyConfig.addCollection("sub_navigation", function(collection) {
    return collection.getFilteredByTag("pages")
      .filter((post) => Boolean(!post.data.header_navigation_top))
      .filter((post) => Boolean(!post.data.footer_navigation))
      .filter((post) => Boolean(!post.data.hide_from_navigation))
      .filter((post) => Boolean(post.date <= now))
      .filter((post) => Boolean(post.data.parent))
      .sort((a, b) => b.data.order - a.data.order)
      .reverse();
  });

  eleventyConfig.addCollection("footer_navigation", function(collection) {
    return collection.getFilteredByTag("pages")
      .filter((post) => Boolean(post.data.footer_navigation))
      .sort((a, b) => b.data.order - a.data.order)
      .reverse();
  });
  
  eleventyConfig.addCollection("published_posts", function(collection) {
    return collection
      .getFilteredByTag("posts")
      .filter((post) => Boolean(!post.data.draft))
      .filter((post) => Boolean(post.date <= now))
      .filter((post) => Boolean(!post.data.parent))
      .reverse();
  });
            
        eleventyConfig.addCollection("published_posts_nl", function(collection) {
            return collection
            .getFilteredByTag("posts")
            .filter((post) => Boolean(!post.data.draft))
            .filter((post) => Boolean(post.date <= now))
            .filter((post) => Boolean(!post.data.parent))
            .filter((post) => Boolean(post.data.locale == "nl"))
            .reverse();
            });
            
            eleventyConfig.addCollection("published_posts_en", function(collection) {
            return collection
            .getFilteredByTag("posts")
            .filter((post) => Boolean(!post.data.draft))
            .filter((post) => Boolean(post.date <= now))
            .filter((post) => Boolean(!post.data.parent))
            .filter((post) => Boolean(post.data.locale == "en"))
            .reverse();
        });

  eleventyConfig.addCollection("published_activities", function(collection) {
    return collection
      .getFilteredByTag("activities")
      .filter((post) => Boolean(!post.data.draft))
      .filter((post) => Boolean(post.date <= now))
      .filter((post) => Boolean(!post.data.parent))
      .sort((a, b) => a.data.eventdate - b.data.eventdate);
  });
            
        eleventyConfig.addCollection("published_activities_nl", function(collection) {
            return collection
            .getFilteredByTag("activities")
            .filter((post) => Boolean(!post.data.draft))
            .filter((post) => Boolean(post.date <= now))
            .filter((post) => Boolean(!post.data.parent))
            .filter((post) => Boolean(post.data.locale == "nl"))
            .sort((a, b) => a.data.eventdate - b.data.eventdate);
        });
            
        eleventyConfig.addCollection("published_activities_en", function(collection) {
            return collection
            .getFilteredByTag("activities")
            .filter((post) => Boolean(!post.data.draft))
            .filter((post) => Boolean(post.date <= now))
            .filter((post) => Boolean(!post.data.parent))
            .filter((post) => Boolean(post.data.locale == "en"))
            .sort((a, b) => a.data.eventdate - b.data.eventdate);
        });

  eleventyConfig.addCollection("published_jobs", function (collection) {
    return collection
      .getFilteredByTag("jobs")
      .filter((post) => Boolean(!post.data.draft))
      .filter((post) => Boolean(post.date <= now))
      .filter((post) => Boolean(!post.data.parent))
      .reverse();
  });
            
        eleventyConfig.addCollection("published_jobs_nl", function (collection) {
            return collection
                .getFilteredByTag("jobs")
                .filter((post) => Boolean(!post.data.draft))
                .filter((post) => Boolean(post.date <= now))
                .filter((post) => Boolean(!post.data.parent))
                .filter((post) => Boolean(post.data.locale == "nl"))
                .reverse();
        });
            
        eleventyConfig.addCollection("published_jobs_en", function (collection) {
            return collection
                .getFilteredByTag("jobs")
                .filter((post) => Boolean(!post.data.draft))
                .filter((post) => Boolean(post.date <= now))
                .filter((post) => Boolean(!post.data.parent))
                .filter((post) => Boolean(post.data.locale == "en"))
                .reverse();
        });

  eleventyConfig.addCollection("published_members", function(collection) {
    return collection
      .getFilteredByTag("members")
      .filter((post) => Boolean(post.date <= now))
      .filter((post) => Boolean(!post.data.draft));
  });
            
        eleventyConfig.addCollection("published_members_nl", function(collection) {
            return collection
                .getFilteredByTag("members")
                .filter((post) => Boolean(post.date <= now))
                .filter((post) => Boolean(!post.data.draft))
                .filter((post) => Boolean(post.data.locale == "nl"));
        });
            
        eleventyConfig.addCollection("published_members_en", function(collection) {
            return collection
                .getFilteredByTag("members")
                .filter((post) => Boolean(post.date <= now))
                .filter((post) => Boolean(!post.data.draft))
                .filter((post) => Boolean(post.data.locale == "en"));
        });

  eleventyConfig.addCollection("freelancers", function(collection) {
    return collection
      .getFilteredByTag("members")
      .filter((post) => Boolean(post.date <= now))
      .filter((post) => Boolean(post.data.freelancer))
      .filter((post) => Boolean(!post.data.draft));
  });
            
        eleventyConfig.addCollection("freelancers_nl", function(collection) {
            return collection
            .getFilteredByTag("members")
            .filter((post) => Boolean(post.date <= now))
            .filter((post) => Boolean(post.data.freelancer))
            .filter((post) => Boolean(post.data.locale == "nl"))
            .filter((post) => Boolean(!post.data.draft));
        });
            
        eleventyConfig.addCollection("freelancers_en", function(collection) {
            return collection
            .getFilteredByTag("members")
            .filter((post) => Boolean(post.date <= now))
            .filter((post) => Boolean(post.data.freelancer))
            .filter((post) => Boolean(post.data.locale == "en"))
            .filter((post) => Boolean(!post.data.draft));
        });
            

  eleventyConfig.addCollection("drafts", function(collection) {
    return collection.getAll().filter((post) => Boolean(post.data.draft));
  });
 
  eleventyConfig.addCollection("memberSpecialties", function (collection) {
    let allSpecialties = getAllKeyValues(
      collection.getFilteredByTag("members")
        .filter((post) => Boolean(post.data.freelancer)),
      "specialties"
    );

    let memberSpecialties = allSpecialties.map((category) => ({
      title: category,
      slug: strToSlug(category),
    }));

    return memberSpecialties;
  });

  eleventyConfig.addCollection("activityCategories", function (collection) {
    let allCategories = getAllKeyValues(
      collection.getFilteredByTag("activities"),
      "categories"
    );

    let eventCategories = allCategories.map((category) => ({
      title: category,
      slug: strToSlug(category),
    }));

    return eventCategories;
  });

  eleventyConfig.addCollection("blogCategories", function (collection) {
    let allCategories = getAllKeyValues(
      collection.getFilteredByTag("posts"),
      "categories"
    );

    let blogCategories = allCategories.map((category) => ({
      title: category,
      slug: strToSlug(category),
    }));

    return blogCategories;
  });

  eleventyConfig.addCollection("jobCategories", function (collection) {
    let allCategories = getAllKeyValues(
      collection.getFilteredByTag("jobs"),
      "categories"
    );

    let jobCategories = allCategories.map((category) => ({
      title: category,
      slug: strToSlug(category),
    }));

    return jobCategories;
  });

  /* Add 'include-all' shortcodes for loading all CSS (used in style.liquid) */
  eleventyConfig.addShortcode(
    "include-all",
    async (glob) => await globcat(glob)
  );

  eleventyConfig.addFilter("getLocale", function (collection, locale) {
    return collection.filter((post) => Boolean(post.data.locale == locale));
  });

  eleventyConfig.addFilter("slugify", function (string) {
    return strToSlug(string)
  });

  /* All templates in the content directory are parsed and copied to the dist directory */
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };

};
