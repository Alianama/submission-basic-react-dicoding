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

  handleUnarcived = (id) => {
    const newData = this.state.data.map((item) => {
      if (item.id === id) {
        return { ...item, archived: false };
      }
      return item;
    });
    this.setState({ data: newData });
  };

  render() {
    return (
      <div className="list-item-container">
        <div className="list-item">
          <div className="segment-container">
            <h1>catatan</h1>
          </div>

          {this.state.data
            .filter(
              (item) =>
                !item.archived &&
                item.title
                  .toLowerCase()
                  .includes(this.props.search.toLowerCase())
            )
            .map((item) => (
              <div className="item" key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <p>{item.archived ? "true" : "false"}</p>
                <div className="button-container">
                  <Button
                    name="delete"
                    onClick={() => this.handleDelete(item.id)}
                  />
                  <Button
                    name="Archived"
                    onClick={() => this.handleIsArcived(item.id)}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="list-item">
          <div className="segment-container">
            <h1>Archived</h1>
          </div>
          {this.state.data
            .filter(
              (item) =>
                item.archived &&
                item.title
                  .toLowerCase()
                  .includes(this.props.search.toLowerCase())
            )
            .map((item) => (
              <div className="item" key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <p>{item.archived ? "true" : "false"}</p>
                <div className="button-container">
                  <Button
                    name="delete"
                    onClick={() => this.handleDelete(item.id)}
                  />
                  <Button
                    name="Unarchive"
                    onClick={() => this.handleUnarcived(item.id)}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Main;
