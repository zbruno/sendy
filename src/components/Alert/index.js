import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

// Have to do it this way for Purge CSS to work
// https://tailwindcss.com/docs/controlling-file-size/
const alertMapping = {
  success: {
    colors: {
      bg: 'bg-green-100',
      border: 'border-green-500',
      title: 'text-green-900',
      icon: 'text-green-500',
    },
    icon: faCheckCircle,
  },
  danger: {
    colors: {
      bg: 'bg-red-100',
      border: 'border-red-500',
      title: 'text-red-900',
      icon: 'text-red-500',
    },
    icon: faTimesCircle,
  },
  info: {
    colors: {
      bg: 'bg-teal-100',
      border: 'border-teal-500',
      title: 'text-teal-900',
      icon: 'text-teal-500',
    },
    icon: faInfoCircle,
  },
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
    const alertData = alertMapping[type];
    const alertClasses = cx({
      alert: true,
      [alertData.colors.bg]: true,
      [alertData.colors.border]: true,
    });

    return (
      <div className={alertClasses} role="alert">
        <div className={`inner-container ${alertData.colors.title}`}>
          <FontAwesomeIcon
            icon={alertData.icon}
            className={`alert-icon ${alertData.colors.icon}`}
            size="lg"
            fixedWidth
          />
          <span className="alert-text">{title}</span>
        </div>
        {children && (
          <div className={`alert-child ${alertData.colors.title}`}>
            {children}
          </div>
        )}
      </div>
    );
  }
}

export default Alert;
