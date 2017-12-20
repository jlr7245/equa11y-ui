import React from "react";
import PropTypes from "prop-types";

const Pane = ({ title, isMaximized, maximize, children, index }) => (
  <div>
    <button onClick={() => maximize(index)} tabIndex="0">
      {title}
    </button>
    {isMaximized ? (
      <div>{React.Children.map(children, child => child)}</div>
    ) : null}
  </div>
);

Pane.propTypes = {
  title: PropTypes.string.isRequired,
  isMaximized: PropTypes.bool,
  maximize: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.node),
  index: PropTypes.number,
};

export { Pane };
