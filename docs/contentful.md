# Contentful

## Intro

The main source of content for this website is Contentful. Contentful is a Headless CMS that offers superior content editing features for content editors and a great API for developers.

## Fetching entries

The way content is fetched in this website, is in the file `src/index.js`:

1. First we initiate the Contentful client
2. Then we fetch locals and content types for the Contentful Space
3. For every content type + locale combination, we fetch the entries from Contentful
4. Convert every entry to a Markdown file with the fields converted to YAML Frontmatter

## Converting entries

Every entry from the Contentful Space should get its own place in the `/content` folder. The plan is to make subfolders for each content type and generate Markdown files there for each entry of those types.

Example:

Suppose we have a `Page` content type, with three entries called "Home", "About" and "Contact". These three entries would be converted into a folder structure like this:

```
content/                # Root content structure
└── page/               # Folder for content type Page
    ├── home.md         # File for entry Home
    ├── about.md        # File for entry About
    └── contact.md      # File for entry Contact
```
