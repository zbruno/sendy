import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

const alertMapping = {
  success: { color: 'green', icon: faCheckCircle },
  danger: { color: 'red', icon: faTimesCircle },
  info: { color: 'teal', icon: faInfoCircle },
};

class Alert extends React.Component {
  static Container = ({ children }) => (
    <div className="alert-container">
      {children}
    </div>
  );

  static Text = ({ children }) => (
    <p className="alert-text">{children}</p>
  );

  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'danger', 'info']).isRequired,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { children, type, title } = this.props;
    const alert = alertMapping[type];
    const alertClasses = cx({
      alert: true,
      [`bg-${alert.color}-100`]: true,
      [`border-${alert.color}-500`]: true,
    });

    return (
      <div className={alertClasses} role="alert">
        <div className={`inner-container text-${alert.color}-900`}>
          <FontAwesomeIcon
            icon={alert.icon}
            className={`alert-icon text-${alert.color}-500`}
            size="lg"
            fixedWidth
          />
          <span className="alert-text">{title}</span>
        </div>
        {children && (
          <div className={`alert-child text-${alert.color}-900`}>
            {children}
          </div>
        )}
      </div>
    );
  }
}

export default Alert;
