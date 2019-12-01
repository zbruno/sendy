import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prefer-stateless-function
class Field extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    label: PropTypes.string,
    labelFor: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    hasError: false,
    label: '',
    placeholder: '',
    type: 'text',
  };

  render() {
    const {
      disabled,
      hasError,
      label,
      labelFor,
      placeholder,
      value,
      onChange,
      type,
    } = this.props;

    const labelClasses = cx({
      'block text-gray-700 text-sm font-bold mb-2': true,
    });
    const inputClasses = cx({
      'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline': true,
      'disabled:cursor-not-allowed disabled:bg-gray-200': true,
      'border-red-500': hasError,
    });
    const errorIconClasses = cx({
      'opacity-0 absolute inset-0 left-auto h-100 flex justify-center items-center pointer-events-none mr-2': true,
      'opacity-100': hasError,
    });

    return (
      <div className="flex flex-col mb-6">
        <label className={labelClasses} htmlFor={labelFor}>
          {label}
        </label>
        <div className="relative">
          <div className={errorIconClasses}>
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="fill-current text-red-500"
              size="lg"
              fixedWidth
            />
          </div>
          <input
            className={inputClasses}
            id={labelFor}
            type={type}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
}

export default Field;
