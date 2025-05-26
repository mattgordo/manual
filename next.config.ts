import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "compilerOptions": {
    "baseUrl": "."
  },
  sassOptions: {
    prependData: '@import "./styles/mixins.scss"; @import "./styles/colours.scss";',
    quietDeps: true,
    silenceDeprecations: ['mixed-decls', 'import', 'legacy-js-api']
  }
};

export default nextConfig;
