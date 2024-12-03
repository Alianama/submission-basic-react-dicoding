import React from "react";
import Button from "./button";
import { getInitialData } from "../utils";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      archived: false,
      isModalOpen: false,
      titleLimit: 50,
    };
  }

  onTitlesChanged = (event) => {
    if (event.target.value.length <= this.state.titleLimit) {
      this.setState({ title: event.target.value });
    }
  };

  onBodyChanged = (event) => this.setState({ body: event.target.value });
  onArchivedChanged = (event) =>
    this.setState({ archived: event.target.checked });

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addNotes({
      title: this.state.title,
      body: this.state.body,
      archived: this.state.archived,
    });
    this.setState({ title: "", body: "", archived: false, isModalOpen: false });
  };

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
              <p className="limit-countdown">
                limit title {this.state.titleLimit - this.state.title.length}
              </p>
              <input
                onChange={this.onTitlesChanged}
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={this.state.title}
                required
              />
              <input
                onChange={this.onBodyChanged}
                type="text"
                name="body"
                id="body"
                placeholder="Body"
                value={this.state.body}
                required
              />
              <div className="archive-btn-container">
                <input
                  type="checkbox"
                  name="isArchived"
                  id="isArchived"
                  onChange={this.onArchivedChanged}
                  checked={this.state.archived}
                  s
                />
                <p>Archived?</p>
              </div>
              <button onClick={this.modalIsOpen} className="close-modal-btn">
                X
              </button>
              <Button name={"Add"} type={"submit"} />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Add;
