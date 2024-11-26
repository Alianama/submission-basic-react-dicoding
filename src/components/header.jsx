import React from "react";

class Header extends React.Component {
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
            />
            <button className="submit-button" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
