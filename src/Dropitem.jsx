import React from "react";
import PropTypes from "prop-types";

const Dropitem = ({ children }) => <p>{children}</p>;

Dropitem.propTypes = {
  children: PropTypes.any,
}

export { Dropitem };
