import dotenv from 'dotenv';
import { join } from 'path';

import { ContentfulClient } from './contentful/client';
import { FolderCreator } from './folders/creator';

// Init ENV variables
dotenv.config();
const { CONTENTFUL_SPACE, CONTENTFUL_TOKEN } = process.env;

// Setup Contentful client
const client = new ContentfulClient(CONTENTFUL_SPACE, CONTENTFUL_TOKEN);

// Init FolderCreator
const folderCreator = new FolderCreator(join(process.cwd(), 'content'));

const fetchLocales = async () => {
  const locales = await client.getLocales();
  const nonDefaultLocals = locales.items.filter(locale => locale.default === false);

  nonDefaultLocals.forEach(locale => folderCreator.createFolder(locale.code));
};

fetchLocales();
