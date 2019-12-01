import React from 'react';

import Alert from '.';

export default {
  title: 'Alert',
  component: Alert,
  parameters: {
    jest: [],
  },
};

export const alerts = () => (
  <React.Fragment>
    <Alert
      title="Wow something went well!"
      type="success"
    >
      <Alert.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque interdum ipsum, ut feugiat libero iaculis nec. Vestibulum ut felis ante. In laoreet nulla quis ante porta pulvinar. Suspendisse vestibulum commodo dolor. Fusce at elit viverra, feugiat metus eu, varius lectus. Cras purus sapien, tristique eget dolor id, malesuada tincidunt velit. Nunc sit amet sapien tellus. Praesent vestibulum nulla vitae lorem malesuada, a vestibulum mi sagittis.
      </Alert.Text>
    </Alert>
    <Alert
      title="Something you should know..."
      type="info"
    />
    <Alert
      title="Oh boy. Not looking good."
      type="danger"
    />
  </React.Fragment>
);
