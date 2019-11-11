# Fronteers website

This is the Fronteers website repository.

## Stack

- Hugo (Static site generator)
- Contentful (Headless CMS)
- Netlify (Hosting)

## Setup

When starting this project, it will/should do the following tasks:

1. Fetch content from Contentful
2. Convert content into static Markdown files
3. Build static pages with Hugo

## Getting up and running

1. Copy `.env.dist` to `.env`
2. Fill in the required ENV variables that you can get from the Contentful admin under Settings >
3. Run `npm install`
4. Run `npm start` to transpile the Contentful client for Node
5. Run `node dist/index.js` to fetch entries from Contentful and generate folders for each content type + Markdown files for each entry

## Docs

- [Contentful](docs/contentful.md)

## Creative Commons license

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

## Made possible by
<a href="https://www.contentful.com/" rel="nofollow" target="_blank" style="max-width:100px;width:100px"><img src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg" style="max-width:100px;width:100px;" width="150px" alt="Powered by Contentful" /></a>

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg"/>
</a>
