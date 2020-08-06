import React, { useState, useEffect } from "react";
import { Select, MenuItem } from "@material-ui/core";
import BookList from "./BookList";
import "../styles/SearchBooks.css";

function SearchBooks() {
  const [menu, setMenu] = useState([]);
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=OGDK7aGVDlAT6L8KaYnfASlYi6ydHveG");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const data = await response.json();
        data.results.books ? setBooks(data.results.books) : setMenu(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [url]);


  const handleOnSubmit = event => {
    event.preventDefault();
    category !== '' ? setUrl(`https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=OGDK7aGVDlAT6L8KaYnfASlYi6ydHveG`) : alert("Category cannot be empty!!!");
  }

  return (
    <React.Fragment>
      <form className="form" onSubmit={handleOnSubmit} >
        <Select
          className="select"
          labelId="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {menu.map(({ list_name_encoded, display_name }) => (
            <MenuItem value={list_name_encoded} key={list_name_encoded}>
              {display_name}
            </MenuItem>
          ))}
        </Select>
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <BookList books={books} />
    </React.Fragment>
  );
}
export default SearchBooks;
