import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Loader } from '../../index';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    buttonType: PropTypes.oneOf(['primary', 'secondary']),
    isLoading: PropTypes.bool,
    icon: PropTypes.shape({}),
    utilityClasses: PropTypes.string,
  };

  static defaultProps = {
    isDisabled: false,
    buttonType: 'primary',
    isLoading: false,
    onClick() {},
    icon: null,
    utilityClasses: '',
  };

  render() {
    const {
      onClick,
      isDisabled,
      children,
      buttonType,
      isLoading,
      icon,
      utilityClasses,
    } = this.props;
    const shouldAppearDisabled = isDisabled || isLoading;
    const btnClasses = cx({
      btn: true,
      [buttonType]: true,
      loading: isLoading,
      disabled: shouldAppearDisabled,
      [utilityClasses]: true,
    });
    const colorClass = cx({
      'border-white': buttonType === 'primary' && !shouldAppearDisabled,
      'border-purple-500': buttonType === 'secondary' && !shouldAppearDisabled,
      'border-gray-500': shouldAppearDisabled,
    });

    return (
      <button
        className={btnClasses}
        disabled={shouldAppearDisabled}
        type="button"
        onClick={
          !shouldAppearDisabled ? onClick : event => event.preventDefault()
        }
      >
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="btn-icon"
            size="1x"
            fixedWidth
          />
        )}
        <span className="btn-text">
          {children}
        </span>
        <Loader
          size={6}
          color={colorClass}
          utilityClasses="btn-loader"
        />
      </button>
    );
  }
}

export default Button;
