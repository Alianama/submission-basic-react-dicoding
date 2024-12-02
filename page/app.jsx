import React from "react";
import Header from "../src/components/header";
import Item from "../src/components/list.item";
import Add from "../src/components/add.item";
import { getInitialData } from "../src/utils";

import "../src/styles/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      notes: getInitialData(),
    };
    this.addNotesHandler = this.addNotesHandler.bind(this);
  }

  addNotesHandler({ title, body, archived }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toLocaleString("id-ID"),
            archived,
          },
        ],
      };
    });
  }
  handleSearchSubmit = (searchTerm) => {
    this.setState({ search: searchTerm });
  };
  render() {
    return (
      <>
        <Header onSearchSubmit={this.handleSearchSubmit} />
        <Add addNotes={this.addNotesHandler} />
        <Item search={this.state.search} notes={this.state.notes} />
      </>
    );
  }
}

export default App;
