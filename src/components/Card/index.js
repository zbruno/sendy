import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children }) => (
  <div className="flex flex-col break-words bg-white border border-2 rounded shadow-md">
    <div className="font-semibold bg-purple-500 text-white py-3 px-6 mb-0 rounded-t">{title}</div>
    <div className="w-full py-4 px-6">
      {children}
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
