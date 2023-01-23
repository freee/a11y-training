/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: '@mdx-js/react',
  },
});

const urlPrefix = process.env.URL_PREFIX ? `/${process.env.URL_PREFIX}` : '';

module.exports = withMDX({
  reactStrictMode: true,
  assetPrefix: urlPrefix || '/',
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: {
    urlPrefix,
  },
});
