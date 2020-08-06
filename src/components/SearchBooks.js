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

  async handleSubmit(event) {
    event.preventDefault();
    if (this.state.category === "") {
      return;
    }
    try {
      const url = `https://api.nytimes.com/svc/books/v3/lists/current/${this.state.category}.json?api-key=OGDK7aGVDlAT6L8KaYnfASlYi6ydHveG`;
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();

      this.setState(() => {
        return {
          ...this.state,
          books: data.results.books,
        };
      });
    } catch (error) { console.error(error)}
  }

  handleCategoryChange(e) {
    this.setState({ category: e.target.value });
  }
  async componentDidMount() {
    try {
      const url =
        "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=OGDK7aGVDlAT6L8KaYnfASlYi6ydHveG";
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      this.setState({ categories: data.results });
    } catch (error) { console.error(error)}
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
                <MenuItem value={list_name_encoded} key={list_name_encoded}>
                  {display_name}
                </MenuItem>
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
