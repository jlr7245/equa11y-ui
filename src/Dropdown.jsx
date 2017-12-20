import React, { Component } from "react";
import PropTypes from 'prop-types';

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      isDropped: false,
    };
  }

  handleHover = () => {
    this.setState(prevState => ({ isDropped: true }));
  };

  handleClick = () => {
    this.setState(prevState => ({ isDropped: !prevState.isDropped }));
  };

  render() {
    const { id, isHoverable, title, children } = this.props;
    const { isDropped } = this.state;

    return (
      <React.Fragment>
        <button
          className="Button"
          id={id}
          onFocus={isHoverable ? this.handleHover : null}
          onMouseOver={isHoverable ? this.handleHover : null}
          onClick={this.handleClick}
        >
          {this.props.title}
        </button>
        {isDropped && (
          <ul>{React.Children.map(children, child => <li>{child}</li>)}</ul>
        )}
      </React.Fragment>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isHoverable: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};

export { Dropdown };
