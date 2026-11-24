import type { Preview } from '@storybook/nextjs-vite';
import React from 'react';
import { istokWeb, wixMadeforText } from '../src/app/fonts';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${istokWeb.variable} ${wixMadeforText.variable} bg-canvas text-ink antialiased`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
