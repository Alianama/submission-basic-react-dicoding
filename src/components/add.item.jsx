import React from "react";
import Button from "./button";
import { getInitialData } from "../utils";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      body: "",
      createdAt: "",
      archived: false,
      isModalOpen: false,
    };
    this.onTitlesChanged = this.onTitlesChanged.bind(this);
    this.onBodyChanged = this.onBodyChanged.bind(this);
    this.onArchivedChanged = this.onArchivedChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitlesChanged(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChanged(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onArchivedChanged(event) {
    this.setState(() => {
      return {
        archived: event.target.checked,
      };
    });
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  modalIsOpen = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    return (
      <div className="add-item-container">
        <Button
          name={"Add Notes "}
          onClick={this.modalIsOpen}
          className={"btn-add-item"}
        />

        {this.state.isModalOpen && (
          <div className="modal-overlay">
            <form className="add-form-container" onSubmit={this.onSubmit}>
              <input
                onChange={this.onTitlesChanged}
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={this.state.title}
              />
              <input
                onChange={this.onBodyChanged}
                type="text"
                name="body"
                id="body"
                placeholder="Body"
                value={this.state.body}
              />
              <div className="archive-btn-container">
                <input
                  type="checkbox"
                  name="isArchived"
                  id="isArchived"
                  onChange={this.onArchivedChanged}
                  checked={this.state.archived}
                />
                <p>Archived?</p>
              </div>
              <button onClick={this.modalIsOpen} className="close-modal-btn">
                X
              </button>
              <Button name={"Add"} onClick={this.onSubmit} />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Add;
