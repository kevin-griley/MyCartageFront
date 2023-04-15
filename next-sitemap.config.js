/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL,
  generateRobotsTxt: true,
  sourceDir: "apps/nextjs/.next/",
  outDir: "apps/nextjs/public/",
};
