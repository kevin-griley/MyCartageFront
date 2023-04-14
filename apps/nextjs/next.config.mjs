/** @typedef {import('next').NextConfig} NextConfig */
/** @typedef {import('webpack').Configuration} WebpackConfig */

import nextMDX from "@next/mdx";
import { withContentlayer } from "next-contentlayer";

import { recmaPlugins } from "./src/mdx/recma.mjs";
import { rehypePlugins } from "./src/mdx/rehype.mjs";
import { remarkPlugins } from "./src/mdx/remark.mjs";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {NextConfig} */
const config = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

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

  experimental: {
    scrollRestoration: true,
  },
};

/** @type {Array<(config: NextConfig) => NextConfig>} */
const plugins = [withContentlayer, withMDX];

export default plugins.reduce((config, plugin) => {
  return plugin(config);
}, config);
