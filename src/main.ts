
import type { StorybookConfig } from '@storybook/angular';
const config: StorybookConfig = {
 stories: ['../src/app/components/**/*.stories.@(ts|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-actions'
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;