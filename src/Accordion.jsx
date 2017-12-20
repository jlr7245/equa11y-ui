import React, { Component } from "react";

class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      currentlyMaximized: null,
    };
  }

  setMaximized = index => {
    if (this.state.currentlyMaximized === index) {
      index = null;
    }
    this.setState({ currentlyMaximized: index });
  };

  render() {
    const { isMultiPane, children } = this.props;
    return (
      <div>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            isMaximized: index === this.state.currentlyMaximized,
            setMaximized: this.setMaximized,
            index: index,
          });
        })}
      </div>
    );
  }
}

export { Accordion };
