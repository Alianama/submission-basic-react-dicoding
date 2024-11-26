import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="button-primary" onClick={this.props.onClick}>
        {this.props.name}
      </button>
    );
  }
}
export default Button;
