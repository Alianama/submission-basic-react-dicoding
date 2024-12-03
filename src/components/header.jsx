import React from "react";
import SearchInput from "./search.Input";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
    event.preventDefault();
    if (this.props.onSearchSubmit) {
      this.props.onSearchSubmit(this.state.search);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.onSearchSubmit) {
      this.props.onSearchSubmit(this.state.search);
    }
  };

  render() {
    return (
      <div className="header-container">
        <div className="title">
          <h1>APLIKASI CATATAN</h1>
        </div>
        <div className="form-search-container">
          <form className="input-form" action="submit">
            <SearchInput
              value={this.state.search}
              onChange={this.handleSearchChange}
              onSubmit={this.handleSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
