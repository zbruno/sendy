import React from 'react';
import renderer from 'react-test-renderer';

import Loader from './index';

describe('Loader UI snapshots', () => {
  test('renders purple', () => {
    const component = renderer.create(
      <Loader
        size={6}
        color="border-purple-500"
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
