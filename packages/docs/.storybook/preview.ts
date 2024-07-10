import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      theme: themes.dark,
    }
  },
  tags: ['autodocs']
};

export default preview;
