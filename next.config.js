const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  modifyVars: { "@primary-color": "#E0E1E1" },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    pageExtensions: ["page.tsx"],
  },
});

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = nextConfig;
