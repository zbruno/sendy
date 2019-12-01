import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ color, size, utilityClasses }) => (
  <div className={`inline-block h-${size} w-${size} ${utilityClasses}`}>
    <div className={`absolute opacity-100 ${color} border-2 rounded-full animation-ripple-4 animation-1s animation-cubic-bezier animation-infinite`} />
    <div className={`absolute opacity-100 ${color} border-2 rounded-full animation-ripple-4 animation-1s animation-cubic-bezier animation-infinite animation-delay-.5s`} />
  </div>
);

Loader.propTypes = {
  size: PropTypes.number,
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
