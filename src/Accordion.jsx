import React, { Component } from "react";
import PropTypes from "prop-types";

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyMaximized: props.isMultiPane ? [] : null,
    };
  }

  setMaximized = index => {
    if (this.state.currentlyMaximized === index) {
      index = null;
    }
    this.setState({ currentlyMaximized: index });
  };

  addToMaximized = index => {
    const { currentlyMaximized } = this.state;
    const newArr = currentlyMaximized.includes(index)
      ? currentlyMaximized.filter(elem => elem !== index)
      : currentlyMaximized.concat(index);
    this.setState({ currentlyMaximized: newArr });
  };

  render() {
    const { isMultiPane, children } = this.props;
    const { currentlyMaximized } = this.state;
    return (
      <div>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            isMaximized: isMultiPane
              ? currentlyMaximized.includes(index)
              : index === currentlyMaximized,
            maximize: isMultiPane ? this.addToMaximized : this.setMaximized,
            index,
          });
        })}
      </div>
    );
  }
}

Accordion.propTypes = {
  isMultiPane: PropTypes.bool.isRequired,
};

export { Accordion };
