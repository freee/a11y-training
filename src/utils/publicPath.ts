import getConfig from 'next/config';

export const publicPath = (filename: string): string => {
  const { publicRuntimeConfig } = getConfig();
  return `${publicRuntimeConfig.urlPrefix}/${filename}`;
};
