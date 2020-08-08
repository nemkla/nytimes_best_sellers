import React, { useState, useEffect, useContext } from "react";
import BookList from "./BookList";
import "../styles/SearchBooks.css";
import { AppContext } from "../contexts/AppContext";

function SearchBooks() {
  const [state, dispatch] = useContext(AppContext);
  const { categories, books } = state;
  const URL =
    "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=OGDK7aGVDlAT6L8KaYnfASlYi6ydHveG";
  const [url, setUrl] = useState(URL);

  useEffect(() => {
    async function fetchData() {
      try {
        let didCancel = false;
        const fetchData = async () => {
          let actionInit =
            url === URL
              ? { type: "FETCH_INIT_CATEGORY" }
              : { type: "FETCH_INIT_BOOK" };
          let actionFailure =
            url === URL
              ? { type: "FETCH_FAILURE_CATEGORY" }
              : { type: "FETCH_FAILURE_BOOK" };

          dispatch(actionInit);
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw Error(response.statusText);
            }
            const data = await response.json();

            if (!didCancel) {
              let actionSuccess =
                url === URL
                  ? { type: "FETCH_SUCCESS_CATEGORY", payload: data.results }
                  : { type: "FETCH_SUCCESS_BOOK", payload: data.results.books };

              dispatch(actionSuccess);
            }
          } catch (error) {
            if (!didCancel) {
              dispatch(actionFailure);
            }
          }
        };

        fetchData();
        return () => {
          didCancel = true;
        };
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [url]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    selectedCategory !== ""
      ? setUrl(
          `https://api.nytimes.com/svc/books/v3/lists/current/${selectedCategory}.json?api-key=OGDK7aGVDlAT6L8KaYnfASlYi6ydHveG`
        )
      : alert("Category cannot be empty!!!");
  };

  const handleOnChange = (name) => {
    dispatch({ type: "SELECTED_CATEGORY", payload: name });
  };

  const selectedCategory = categories.selected;

  console.log('Render: SearchBooks');
  return (

    <React.Fragment>
      <form className="form" onSubmit={handleOnSubmit}>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => handleOnChange(e.target.value)}
        >
          <option value="" key="" />
          {categories.data.map(({ list_name_encoded, display_name }) => (
            <option value={list_name_encoded} key={list_name_encoded}>
              {display_name}
            </option>
          ))}
        </select>
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <BookList books={books.data} />
    </React.Fragment>
  );
}
export default SearchBooks;
