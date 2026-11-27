import type { StorybookConfig } from '@storybook/nextjs-vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/nextjs-vite",
  async viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), tailwindcss()];
    return config;
  },
  // Served under /storybook on Vercel, where a request without the
  // trailing slash resolves relative asset URLs against "/" instead of
  // "/storybook/" and breaks the build. A <base> tag pins it regardless.
  managerHead: (head) => `${head}\n<base href="/storybook/" />`,
  previewHead: (head) => `${head}\n<base href="/storybook/" />`
};
export default config;