import dotenv from "dotenv";
import { join } from "path";

import { ContentfulClient } from "./contentful/client";
import { FolderCreator } from "./folders/creator";

// Init ENV variables
dotenv.config();
const { CONTENTFUL_SPACE, CONTENTFUL_TOKEN } = process.env;

// Setup Contentful client
const client = new ContentfulClient(CONTENTFUL_SPACE, CONTENTFUL_TOKEN);

// Init FolderCreator
const folderCreator = new FolderCreator(join(process.cwd(), "content"));

const fetchLocales = async () => {
  const locales = await client.getLocales();
  const nonDefaultLocals = locales.items.filter(
    (locale) => locale.default === false
  );

  nonDefaultLocals.forEach((locale) => folderCreator.createFolder(locale.code));

  return locales.items;
};

const fetchContentTypes = async (locales) => {
  const contentTypes = await client.getContentTypes();

  return contentTypes.items;
};

const fetchContent = async (locales, contentTypes) => {
  locales.forEach((locale) => {
    contentTypes.forEach(async (contentType) => {
      const contentOfType = await client.getEntries({
        locale: locale.code,
        content_type: contentType.sys.id,
      });
    });
  });
};

const convertContent = async () => {};

// Fetch all teh things!
Promise.all([fetchLocales(), fetchContentTypes()])
  .then(([locales, contentTypes]) => fetchContent(locales, contentTypes))
  .catch((err) => {
    console.error(err);
    console.trace(err.message || err.trace || err);
  });
