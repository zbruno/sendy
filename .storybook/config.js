import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import '@storybook/addon-knobs/register';
import { withKnobs } from '@storybook/addon-knobs';
import Sendy from './sendy-theme';
import '../src/index.css';

import results from '../.jest-test-results.json';

addParameters({
  backgrounds: [
    { name: 'light', value: '#fefefe', default: true },
    { name: 'dark', value: '#282c35' },
  ],
  options: {
    theme: Sendy,
    name: 'Sendy',
    url: '#',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: false,
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: true,
    selectedPanel: undefined,
    enableShortcuts: true,
    isToolshown: true,
  }
});

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(
  withTests({ results })
);

// automatically import all files ending in *.stories.js
configure(require.context('../src/components/', true, /\.story\.(js|mdx)$/), module);
