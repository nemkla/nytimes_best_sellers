import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { doSelectCategory } from "../actions/category";
import fetchBooks from "../features/fetchBooks";

import BookList from "./BookList";
import CategoryForm from "./CategoryForm";

import "../styles/SearchBooks.css";

function SearchBooks({books, categories, doSelectCategory, doFetchBooks }) {
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

  const withMaybe = (conditionalRenderingFn) => (Component) => (props) =>
    conditionalRenderingFn(props)
      ? null
      : <Component { ...props } />

  const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) =>
    conditionalRenderingFn(props)
      ? <EitherComponent />
      : <Component { ...props } />

  const LoadingIndicator = () => <p>Loading ...</p>;
  const ErrorMessage = () => <p>Oops, something went wrong ...</p>;
  const EmptyMessage = () => <p>No Data Available ...</p>;

  const isLoadingConditionFunction = (props) => props.isLoading;
  const isErrorConditionFunction = (props) => props.isError;
  const isNullConditionFunction = (props) => !props.data;
  const isEmptyConditionFunction = (props) => !props.data.length;

  const withConditionalRenderings = compose(
  withEither(isLoadingConditionFunction, LoadingIndicator),
  withEither(isErrorConditionFunction, ErrorMessage),
  withMaybe(isNullConditionFunction),
  withEither(isEmptyConditionFunction, EmptyMessage));

  const FormWithConditionalRendering = withConditionalRenderings(CategoryForm);
  const BookListWithConditionalRendering = withConditionalRenderings(BookList);

  console.log("Render: SearchBooks");
  return (
    <>
      <FormWithConditionalRendering { ...categories } handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} />
      <BookListWithConditionalRendering  { ...books } />
    </>
  );
}

const mapStateToProps = ({bookState, categoryState}) => ({
  books: bookState,
  categories: categoryState
});

const mapDispatchToProps = (dispatch) => ({
  doSelectCategory: query => dispatch(doSelectCategory(query)),
  doFetchBooks: query => dispatch(fetchBooks(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBooks);
