import dotenv from 'dotenv';
import { ContentfulClient } from './contentful/client';

// Init ENV variables
dotenv.config();
const { CONTENTFUL_SPACE, CONTENTFUL_TOKEN } = process.env;

// Setup Contentful client
const client = new ContentfulClient(CONTENTFUL_SPACE, CONTENTFUL_TOKEN);

const fetchLocales = async () => {
  const locales = await client.getLocales();
  console.log(locales);
};

fetchLocales();
