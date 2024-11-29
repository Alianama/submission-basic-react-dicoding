import React from "react";

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
            <input
              type="text"
              placeholder="search notes"
              name="search"
              id="search"
              value={this.state.search}
              onChange={this.handleSearchChange}
            />
            <button
              onClick={this.handleSubmit}
              className="submit-button"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
