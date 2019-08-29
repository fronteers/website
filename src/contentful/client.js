import * as contentful from 'contentful';
import { table } from 'table';

export class ContentfulClient {
  constructor(space, accessToken) {
    this.client = contentful.createClient({
      space,
      accessToken,
    });
  }

  async getContentTypes(query) {
    const contentTypes = await this.client.getContentTypes(query);

    console.log('Fetched content types:\n');
    console.log(table([['Content type', 'ID'], ...contentTypes.items.map(type => [type.name, type.sys.id])]));

    return contentTypes;
  }

  async getLocales(query) {
    const locales = await this.client.getLocales(query);

    console.log('Fetched locales:\n');
    console.log(table([['Locales'], ...locales.items.map(locale => [locale.code])]));

    return locales;
  }

  async getEntries(query) {
    const entries = await this.client.getEntries(query);

    console.log(`Fetched entries of type ${query.content_type} in locale ${query.locale}:\n`);
    console.log(
      table([
        ['Title', 'Fields'],
        ...entries.items.map(entry => [entry.fields.title, Object.keys(entry.fields).join(', ')]),
      ])
    );

    return entries;
  }
}
