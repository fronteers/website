In the Fronteers website, we have the following content types: 

- Pages (can be referred to from the navigation bars)
- Blogs
- Activities 
- Jobs 
- Members

These are created by adding "tags" in the frontmatter of a markdown file. Once a page has a value for "tags" (can be one, can be multiple), the page is filed away as part of a collection.

For example, check out the homepage: `src/index.md`:

```
---
layout: layouts/home.liquid
locale: nl

key: home
title: Homepage
---

## We unite front-end developers! <br /> And we do it with pride.

<a href="{{locale}}/join-us/" class="button button-parentheses">Learn more 
  <span class="visually-hidden">about Fronteers</span></a>
```

At the top of the document, we define the settings of the page. Most [frontmatter for pages is pre-configured](#pre-configuration-of-pages), and we try to set as little frontmatter in each page as possible for maintainability and readability.

Let's go through the frontmatter settings as shown above:

- *layout*: sets which layout file will be used for this page's layout
- *locale*: sets the language of the page
- *tags*: sets which collection this page belongs to.

Then there are some settings to make this page show up in the navigation bars in the header and footer:

- *footer_navigation*: is a boolean value. Can also be `header_navigation`, if you want the current page to be linked to from the header navigation bar. If you don't use this in the frontmatter, the link is not shown in a navigation bar.
- *key*: Is a unique key that identifies this page in the website. It is used for three things:
    - it is used to set a canonical link tag in the `<head>` (which you can find in the file `src/_includes/partials/utility/html-head.liquid`);
    - it is also used for translating the page; in `src/_includes/partials/page-header/translate.liquid` the key is checked accross other pages who have the same key, so when the site visitor clicks on the NL or ENG link top-right of the site, they land on the same page, but the translated version. If no corresponding key is found, the visitor is referred back to the root of the other language version instead;
    - lastly it is used to refer this page in another page's frontmatter as a parent of that page. 
- *order*: A string with in it a number value (it needs to be in quotation marks!). The number will instruct Eleventy to set this navigation item in the place in the order we want.
- *parent*: when set, the value of this setting will refer to another page on the website which is shown in a navigation bar, to turn the current page into a sub-item in the navigation.

## Generic frontmatter settings

- *permalink*: the URL Eleventy should generate for the page, useful for making one-off landingpages. Is used to overwrite the URL for the page to something more reader friendly. Most permalinks are automatically generated following the file structure. For example, `src/nl/jobs/archief` will render to `https://fronteers.nl/nl/jobs/archief/index.html . 
- *title*: The page title. If exists, is used in the `<title></title>` tag and meta tags
- *date*: should be either a date in the `YYYY-MM-DD` format, or the literal string "Last Modified" to let it be the build time. If you add a date in the future, it will be scheduled for that date.
- *author*: the name of the page author. Use the full name of the person, firstname and lastname, and this will link to the author's member page if it exists.

## 'Blogs' frontmatter settings

- *summary*: Add a manual (short) summary for the blogpost
- *categories*: can be one or multiple. Values are added to an array, which we use to show page tags to 'jobs', 'activities' and 'blogposts'. <span id="categories-syntax">Syntax:</span>

```
# single category
categories: Junior

# also valid
categories:
  - Junior

# multiple categories:
categories:
  - Medior
  - UX Developer
```

## 'Jobs' frontmatter settings

- *backgroundcolor*: Set a color. This can be a value like `skyblue` but also one of our CSS properties, like `var(--lilac);`
- *summary*: Add a manual (short) summary for the job opening
- *categories*: can be one or multiple. Values are added to an array, which we use to show page tags to 'jobs', 'activities' and 'blogposts'. [See above for syntax](#categories-syntax)

## Adding graphics to 'blogs' and 'jobs'

Blogs and jobs use an image in their layouts. This is how you set a graphic:

```
graphic:
  src: /assets/images/banner-conference.jpg
  alt:
```

If you only want to upload a company logo, you can add it in the `nl/jobs/company-logos` folder and refer to it with the graphic src `/assets/company-logos/eagerly-internet-logo.png` 


## 'Activities' frontmatter settings

These are unique fields to the `activities` type:

- *eventdate*: should be a date in the `YYYY-MM-DD` format. This is the date an event will take place. Activities are sorted using this value.
- *summary*: Add a manual (short) summary for the activity 
- *categories*: can be one or multiple. Values are added to an array, which we use to show page tags to 'jobs', 'activities' and 'blogposts'. [See above for syntax](#categories-syntax)


## 'Members' frontmatter settings

These are unique fields to the `members` type:
- *summary*: Add a manual (short) summary for the members
- *freelancer*: A boolean value. Determines if this member is added to the collection 'freelancers'. 
- *specialties*: Is just a string, not an array of items.


## Pre-configuration of pages' frontmatter

<span id="pre-configuration-of-pages">&nbsp;</span>

In some folders, like `src/nl/jobs/` you'll find a `.JSON` file. This file contains the defaults for the pages (whether they have the `.liquid` or `.md` extensions) in the same folder, and those in the subfolders. 
