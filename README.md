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

- [Code of Conduct](docs/code-of-conduct.md)
- [Contentful](docs/contentful.md)

## Open Source

This project is licensed under the terms of the MIT license, with the exception of the design.

## Made possible by
<a href="https://www.contentful.com/" rel="nofollow" target="_blank" style="max-width:100px;width:100px"><img src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg" style="max-width:100px;width:100px;" width="150px" alt="Powered by Contentful" /></a>

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg"/>
</a>
