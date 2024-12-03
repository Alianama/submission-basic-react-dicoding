import React from "react";

const SearchInput = ({ value, onChange, onSubmit }) => {
  return (
    <>
      <input
        type="text"
        placeholder="search notes"
        name="search"
        id="search"
        value={value}
        onChange={onChange}
      />
      <button onClick={onSubmit} className="submit-button" type="submit">
        Search
      </button>
    </>
  );
};

export default SearchInput;
