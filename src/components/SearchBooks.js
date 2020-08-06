import React from "react";
import { Select, MenuItem } from "@material-ui/core";
import BookList from "./BookList";
import "../styles/SearchBooks.css";

class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], books: [], category: "" };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.category === "") {
      return;
    }
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/${this.state.category}.json?api-key=OGDK7aGVDlAT6L8KaYnfASlYi6ydHveG`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState(() => {
          return {
            ...this.state,
            books: data.results.books
          };
        });
      })
      .catch(console.log);
  }

  handleCategoryChange(e) {
    this.setState({ category: e.target.value });
  }
  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=OGDK7aGVDlAT6L8KaYnfASlYi6ydHveG"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ categories: data.results });
      })
      .catch(console.log);
  }

  render() {
    return (
      <React.Fragment>
        <form className="form" onSubmit={this.handleSubmit}>
          <Select
            className="select"
            labelId="category"
            id="category"
            value={this.state.category}
            onChange={this.handleCategoryChange}
          >
            {this.state.categories.map(
              ({ list_name_encoded, display_name }) => (
                <MenuItem value={list_name_encoded} key={list_name_encoded}>{display_name}</MenuItem>
              )
            )}
          </Select>
          <button className="button" type="submit">
            Search
          </button>
        </form>
        <BookList books={this.state.books} />
      </React.Fragment>
    );
  }
}
export default SearchBooks;
