// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jasonlaurie.com',
  redirects: {
    '/warwick2017': '/sigwt/warwick2017.html',
    '/aston2017': '/sigwt/aston2017.html',
    '/newcastle2018': '/sigwt/newcastle2018.html',
    '/uea2019': '/sigwt/uea2019.html'
  },
  build: {
    format: 'file'
  }
});
