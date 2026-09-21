# Jason Laurie website

Astro source for [jasonlaurie.com](https://jasonlaurie.com). The production site is built into `dist/`; that directory is generated and is not committed.

## Local development

```sh
npm ci
./node_modules/.bin/astro dev --background
./node_modules/.bin/astro dev status
./node_modules/.bin/astro dev stop
npm run build
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site when `master` is pushed. In this repository's **Settings → Pages**, select **GitHub Actions** as the publishing source. Set **jasonlaurie.com** as the custom domain in the same settings after removing it from the previous Pages repository. GitHub ignores `public/CNAME` for Actions deployments, so the Pages setting is required.

The site uses root-relative links and is configured for `https://jasonlaurie.com`. A preview at a repository subpath such as `/astro_webpage/` will need a matching Astro `base` setting and updated links, or a temporary custom subdomain.
