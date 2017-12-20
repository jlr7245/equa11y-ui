import React from "react";

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

export { Pane };
