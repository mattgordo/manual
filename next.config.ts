import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "compilerOptions": {
    "baseUrl": "."
  },
  sassOptions: {
    prependData: '@use "sass:color"; @import "./styles/mixins.scss"; @import "./styles/colours.scss";',
    quietDeps: true,
    silenceDeprecations: ['mixed-decls', 'import', 'legacy-js-api']
  },
  devIndicators: false,
};

export default nextConfig;
