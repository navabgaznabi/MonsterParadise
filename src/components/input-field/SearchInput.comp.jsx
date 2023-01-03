import React, { Component } from "react";

class SearchInput extends Component {
  render() {
    const { inputSearchHandler } = this.props;
    return (
      <input
        className="search-box"
        type="search"
        placeholder="Search"
        onChange={inputSearchHandler}
      ></input>
    );
  }
}
export default SearchInput;
