import React from 'react';

import Loader from '.';

export default {
  title: 'Loader',
  component: Loader,
  parameters: {
    jest: [],
  },
};

export const loaders = () => (
  <div className="relative flex flex-col items-start">
    <Loader size={6} color="border-purple-500" />
  </div>
);
