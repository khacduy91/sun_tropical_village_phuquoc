const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreDuringBuilds: true,
  },
  axios: {
    ignoreDuringBuilds: true,
  },
  gsap: {
    ignoreDuringBuilds: true,
  },
  remixicon: {
    ignoreDuringBuilds: true,
  },
  sass: {
    ignoreDuringBuilds: true,
  },
  scrollreveal: {
    ignoreDuringBuilds: true,
  },
  tailwindcss: {
    ignoreDuringBuilds: true,
  },
};
