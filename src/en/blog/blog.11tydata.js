module.exports = {
  eleventyComputed: {
    // A `key` in the front matter links a post to its translation. Otherwise the
    // URL without the language prefix is used, which is unique per language and
    // still matches a translation published at the same path.
    key: (data) =>
      data.key || (data.page.url || "").replace(/^\/[a-z]{2}\//, "/"),
  },
};
