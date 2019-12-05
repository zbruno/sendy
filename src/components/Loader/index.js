import React from 'react';
import PropTypes from 'prop-types';

const sizeClass = { 6: 'h-6 w-6', 20: 'h-20 w-20' };

const Loader = ({ color, size, utilityClasses }) => (
  <div className={`inline-block ${sizeClass[size]} ${utilityClasses}`}>
    <div className={`inner-loader ${color}`} />
    <div className={`inner-loader ${color} animation-delay-.5s`} />
  </div>
);

Loader.propTypes = {
  size: PropTypes.oneOf([6, 20]),
  utilityClasses: PropTypes.string,
  color: PropTypes.oneOf([
    'border-purple-500',
    'border-white',
    'border-gray-500',
  ]),
};

Loader.defaultProps = {
  size: 20,
  color: 'border-purple-500',
  utilityClasses: '',
};

export default Loader;
