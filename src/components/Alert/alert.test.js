import React from 'react';
import renderer from 'react-test-renderer';

import Alert from './index';

const testAlert = {
  text: 'Your email address was updated successfully!',
  type: 'success',
  duration: 'sticky',
};

describe('Alert UI snapshots', () => {
  test('renders success type and text', () => {
    const component = renderer.create(
      <Alert
        title={testAlert.text}
        type="success"
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders danger type and text', () => {
    const component = renderer.create(
      <Alert
        title={testAlert.text}
        type="danger"
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders info type and text', () => {
    const component = renderer.create(
      <Alert
        title={testAlert.text}
        type="info"
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders container correctly', () => {
    const component = renderer.create(
      <Alert.Container />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders extra text', () => {
    const component = renderer.create(
      <Alert
        title={testAlert.text}
        type="info"
      >
        <Alert.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque interdum ipsum, ut feugiat libero iaculis nec. Vestibulum ut felis ante. In laoreet nulla quis ante porta pulvinar. Suspendisse vestibulum commodo dolor. Fusce at elit viverra, feugiat metus eu, varius lectus. Cras purus sapien, tristique eget dolor id, malesuada tincidunt velit. Nunc sit amet sapien tellus. Praesent vestibulum nulla vitae lorem malesuada, a vestibulum mi sagittis.</Alert.Text>
      </Alert>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
