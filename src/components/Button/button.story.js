import React from 'react';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import Button from './index';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    jest: [],
  },
};

export const buttons = () => (
  <div className="flex flex-col items-start">
    <Button utilityClasses="mb-4">
      Primary Button
    </Button>
    <Button icon={faSignInAlt} utilityClasses="mb-4">
      Primary Icon
    </Button>
    <Button isLoading utilityClasses="mb-4">
      Loading
    </Button>
    <Button icon={faSignInAlt} isLoading utilityClasses="mb-4">
      Icon Loading
    </Button>
    <Button buttonType="secondary" utilityClasses="mb-4">
      Secondary Button
    </Button>
    <Button buttonType="secondary" icon={faSignInAlt} utilityClasses="mb-4">
      Secondary Icon
    </Button>
  </div>
);
