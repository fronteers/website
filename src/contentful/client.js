import * as contentful from 'contentful';

export class ContentfulClient {
  constructor(space, accessToken) {
    this.client = contentful.createClient({
      space,
      accessToken,
    });
  }

  getContentTypes() {
    return this.client.getContentTypes();
  }

  getLocales() {
    return this.client.getLocales();
  }

  getEntries() {
    return this.client.getEntries();
  }
}
