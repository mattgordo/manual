import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "compilerOptions": {
    "baseUrl": "."
  },
  sassOptions: {
    prependData: `@import "./styles/mixins.scss";`,
    quietDeps: true
  }
};

export default nextConfig;
