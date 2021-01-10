# Contribute

## Documentation

We are using Eleventy as a static site generator. Write pages in Markdown and
templates in Liquid.

You can find the documentation here:

- [Eleventy](https://www.11ty.dev/docs/)
- [Markdown (CommonMark spec)](https://spec.commonmark.org/0.29/)
- [Liquid](https://shopify.github.io/liquid/)

## Kitchensink

When writing pages, check out the [Kitchensink](https://fronteers-beta.netlify.app/nl/kitchensink/) for available components and how to use them.

## Components

You can add components in the `components` directory. Within this directory are two directories:

- shortcodes: here you can add components with no or one line content.
- paired: here you can add components with a start and end tag and content in between.

TBD: filters, for filtering content

Add both the shortcode JavaScript and the CSS file, both with the name of the component.
Use the existing components as examples.

## Definition of done

Before committing to the repo, make sure you've checked the following:

- Responsive: make sure pages and components work on all device formats.

- Accessible: We want to be WCAG 2.1 AAA compliant. Don't forget: do images have an alt-attribute? Is everything accessible using only a keyboard? Is the contrast high enough?

- Progressive enhancement: all main content should be accessible with JavaScript turned off.

- Add components to the [Kitchensink](https://fronteers-beta.netlify.app/nl/kitchensink/) with various states, so editors know how to use them.
