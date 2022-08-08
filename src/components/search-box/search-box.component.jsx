import { Component } from "react";
import "./search-box.component.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search-box"
        type="search"
        placeholder="search monster"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
