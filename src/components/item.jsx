import React from "react";
import { getInitialData } from "../utils";
import Button from "./button";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
    };
  }

  handleDelete = (id) => {
    const newData = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: newData });
  };

  handleIsArcived = (id) => {
    const newData = this.state.data.map((item) => {
      if (item.id === id) {
        return { ...item, archived: true };
      }
      return item;
    });
    this.setState({ data: newData });
  };

  render() {
    return (
      <>
        <div>
          <h1>catatan</h1>
          {this.state.data
            .filter((item) => !item.archived)
            .map((item) => (
              <div className="flex" key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <p>{item.archived ? "true" : "false"}</p>

                <Button
                  name="delete"
                  onClick={() => this.handleDelete(item.id)}
                />
                <Button
                  name="Archived"
                  onClick={() => this.handleIsArcived(item.id)}
                />
              </div>
            ))}
        </div>
        <div>
          <h1>Arcived</h1>
          {this.state.data
            .filter((item) => item.archived)
            .map((item) => (
              <div className="flex" key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <p>{item.archived ? "true" : "false"}</p>
                <Button
                  name="delete"
                  onClick={() => this.handleDelete(item.id)}
                />
                <Button
                  name="Archived"
                  onClick={() => this.handleIsArcived(item.id)}
                />
              </div>
            ))}
        </div>
      </>
    );
  }
}

export default Main;
