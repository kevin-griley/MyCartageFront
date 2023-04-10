/** @typedef {import('next').NextConfig} NextConfig */
/** @typedef {import('webpack').Configuration} WebpackConfig */

import { withContentlayer } from "next-contentlayer";

/** @type {NextConfig} */
const config = {
  reactStrictMode: true,

  webpack(/** @type {WebpackConfig} */ config) {
    config.infrastructureLogging = { level: "error" };
    return config;
  },

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  typescript: { ignoreBuildErrors: !!process.env.CI },
};

/** @type {Array<(config: NextConfig) => NextConfig>} */
const plugins = [withContentlayer];

export default plugins.reduce((config, plugin) => {
  return plugin(config);
}, config);
