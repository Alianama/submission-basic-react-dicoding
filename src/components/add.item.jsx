import React from "react";
import Button from "./button";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      body: "",
      createdAt: "",
      archived: false,
    };
  }
  render() {
    return (
      <div>
        <Button name={"Add Notes"} className={"colorblack"} />
      </div>
    );
  }
}

export default Add;
