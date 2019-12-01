import React from 'react';
import PropTypes from 'prop-types';

import Field from './field';
import Card from '../Card';

class Form extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
  };

  static Field = props => (
    <Field {...props} />
  );

  render() {
    const { children, title } = this.props;
    return (
      <Card title={title}>
        <form>
          {children}
        </form>
      </Card>
    );
  }
}

export default Form;
