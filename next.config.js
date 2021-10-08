/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')();

const urlPrefix = process.env.URL_PREFIX ? `/${process.env.URL_PREFIX}` : '';

module.exports = withMDX({
  reactStrictMode: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: {
    urlPrefix,
  },
});
