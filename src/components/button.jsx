import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className={`button-primary ${this.props.className}`}
        onClick={this.props.onClick}
        type={this.props.type}
      >
        {this.props.name}
      </button>
    );
  }
}
export default Button;
