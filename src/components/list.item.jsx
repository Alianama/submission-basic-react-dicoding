import React from "react";
import { showFormattedDate } from "../utils";
import Button from "./button";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes, // Perubahan ini untuk menginisialisasi state dengan props notes yang diterima
    };
  }

  handleDelete = (id) => {
    const newData = this.state.notes.filter((item) => item.id !== id);
    this.setState({ notes: newData }); // Perubahan ini untuk mengupdate state dengan nama yang sesuai
  };

  handleIsArcived = (id) => {
    const newData = this.state.notes.map((item) => {
      if (item.id === id) {
        return { ...item, archived: true };
      }
      return item;
    });
    this.setState({ notes: newData }); // Perubahan ini untuk mengupdate state dengan nama yang sesuai
  };

  handleUnarcived = (id) => {
    const newData = this.state.notes.map((item) => {
      if (item.id === id) {
        return { ...item, archived: false };
      }
      return item;
    });
    this.setState({ notes: newData }); // Perubahan ini untuk mengupdate state dengan nama yang sesuai
  };

  render() {
    return (
      <div className="list-item-container">
        <div className="list-item">
          <div className="segment-container">
            <h1>catatan</h1>
          </div>

          {this.state.notes
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
                <p className="date">{showFormattedDate(item.createdAt)}</p>
                <p>{item.body}</p>
                <div className="button-container">
                  <Button
                    name="Delete"
                    onClick={() => this.handleDelete(item.id)}
                  />
                  <Button
                    name="Archived"
                    onClick={() => this.handleIsArcived(item.id)}
                  />
                </div>
              </div>
            ))}
          {this.state.notes.filter(
            (item) =>
              !item.archived &&
              item.title.toLowerCase().includes(this.props.search.toLowerCase())
          ).length === 0 && <p>Tidak ada catatan</p>}
        </div>
        <div className="list-item">
          <div className="segment-container">
            <h1>Archived</h1>
          </div>
          {this.state.notes
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
                    name="Hapus"
                    onClick={() => this.handleDelete(item.id)}
                  />
                  <Button
                    name="Unarchive"
                    onClick={() => this.handleUnarcived(item.id)}
                  />
                </div>
              </div>
            ))}
          {this.state.notes.filter(
            (item) =>
              item.archived &&
              item.title.toLowerCase().includes(this.props.search.toLowerCase())
          ).length === 0 && <p>Tidak ada catatan yang diarsipkan</p>}
        </div>
      </div>
    );
  }
}

export default Main;
