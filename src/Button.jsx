import React from "react";
import PropTypes from 'prop-types';

const Button = ({ title, onClick }) => (
  <button className="Button" onClick={onClick}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { Button };
