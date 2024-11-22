import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div  >
        <div className="" >
          <h1>APLIKASI CATATAN</h1>
        </div>
        <div>
          <form action="submit">
            <input
              type="text"
              placeholder="search notes"
              name="search"
              id="search"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Header;
