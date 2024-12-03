import React from "react";
import { getInitialData } from "../src/utils/index";
import List from "../src/components/list.item";
import Add from "../src/components/add.item";
import Header from "../src/components/header";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };
  }

  handleAddNote = (newNote) => {
    const updatedNotes = [
      ...this.state.notes,
      { ...newNote, id: +new Date(), createdAt: new Date() },
    ];
    this.setState({ notes: updatedNotes });
  };

  handleDelete = (id) => {
    const updatedNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: updatedNotes });
  };

  handleArchive = (id) => {
    const updatedNotes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    );
    this.setState({ notes: updatedNotes });
  };

  handleUnarchive = (id) => {
    const updatedNotes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    );
    this.setState({ notes: updatedNotes });
  };

  handleSearchSubmit = (searchTerm) => {
    this.setState({ search: searchTerm });
  };

  render() {
    return (
      <div>
        <Header onSearchSubmit={this.handleSearchSubmit} />
        <Add addNotes={this.handleAddNote} />
        <List
          notes={this.state.notes}
          search={this.state.search}
          onDelete={this.handleDelete}
          onArchive={this.handleArchive}
          onUnarchive={this.handleUnarchive}
        />
      </div>
    );
  }
}

export default Main;
