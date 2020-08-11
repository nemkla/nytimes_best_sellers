import React from "react";
import { connect } from "react-redux";
import { doSelectCategory } from "../actions/category";
import fetchBooks from "../features/fetchBooks";
import withConditionalRenderings from "../features/withConditionalRenderings";
import BookList from "./BookList";
import CategoryForm from "./CategoryForm";

import "../styles/SearchBooks.css";

import { CATEGORIES, BOOKS } from "../constants/stateKeys";

function SearchBooks({
  books,
  categories,
  fetchState,
  doSelectCategory,
  doFetchBooks,
  getIsLoadingBooks,
}) {
  const { isLoading, isError } = fetchState;
  const API_KEY = "6xpMY2BGw0tx5vACoxw8YNBq3NqHo4mo";

  const handleOnSubmit = (event) => {
    event.preventDefault();
    categories.selected !== ""
      ? doFetchBooks(
          `https://api.nytimes.com/svc/books/v3/lists/current/${categories.selected}.json?api-key=${API_KEY}`
        )
      : alert("Category cannot be empty!!!");
  };

  const handleOnChange = (name) => doSelectCategory(name);
  const FormWithConditionalRendering = withConditionalRenderings(CategoryForm);
  const BookListWithConditionalRendering = withConditionalRenderings(BookList);

  console.log("Render: SearchBooks");
  return (
    <>
      <FormWithConditionalRendering
        {...categories}
        isLoading={isLoading[CATEGORIES]}
        isError={isError[CATEGORIES]}
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
      />
      <BookListWithConditionalRendering
        {...books}
        isLoading={isLoading[BOOKS]}
        isError={isError[BOOKS]}
      />
    </>
  );
}

const mapStateToProps = ({ bookState, categoryState, fetchState }) => ({
  books: bookState,
  categories: categoryState,
  fetchState: fetchState,
});

const mapDispatchToProps = (dispatch) => ({
  doSelectCategory: (query) => dispatch(doSelectCategory(query)),
  doFetchBooks: (query) => dispatch(fetchBooks(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBooks);
