import React from "react";
import PropTypes from "prop-types";

const Pane = ({ title, isMaximized, maximize, children, index }) => (
  <div className={isMaximized ? "eui__acc-pane eui__max" : "eui__acc-pane"}>
    <button onClick={() => maximize(index)} tabIndex="0">
      {title}
    </button>
    {isMaximized ? <div>{children}</div> : null}
  </div>
);

Pane.propTypes = {
  title: PropTypes.string.isRequired,
  isMaximized: PropTypes.bool,
  maximize: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  index: PropTypes.number,
};

export { Pane };
