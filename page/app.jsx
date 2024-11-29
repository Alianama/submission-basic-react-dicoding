import React from "react";
import Header from "../src/components/header";
import Item from "../src/components/list.item";
import Add from "../src/components/add.item";

import "../src/styles/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  handleSearchSubmit = (searchTerm) => {
    this.setState({ search: searchTerm });
  };
  render() {
    return (
      <>
        <Header onSearchSubmit={this.handleSearchSubmit} />
        <Add />
        <Item search={this.state.search} />
      </>
    );
  }
}

export default App;
