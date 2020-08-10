import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import * as BookActions from "../actions/book";
import * as CategoryActions from "../actions/category";
import BookList from "./BookList";
import CategoryForm from "./CategoryForm";

import "../styles/SearchBooks.css";

function SearchBooks({books, categories, doSelectCategory, doFetchInitCategory, doFetchSuccessCategory, doFetchFailureCategory, doFetchInitBook, doFetchSuccessBook, doFetchFailureBook }) {
  const URL =
    "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=OGDK7aGVDlAT6L8KaYnfASlYi6ydHveG";
  const [url, setUrl] = useState(URL);

  useEffect(() => {
    async function fetchData() {
      try {
        let didCancel = false;
        const fetchData = async () => {
          const init = () =>
            url === URL
              ? doFetchInitCategory()
              : doFetchInitBook();
          const failure = () =>
            url === URL
              ? doFetchFailureCategory()
              : doFetchFailureBook();

          init();
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw Error(response.statusText);
            }
            const data = await response.json();

            if (!didCancel) {
              const success  = () =>
                url === URL
                  ? doFetchSuccessCategory(data.results)
                  : doFetchSuccessBook(data.results.books);

            success();
            }
          } catch (error) {
            if (!didCancel) {
              failure();
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
    categories.selected !== ""
      ? setUrl(
          `https://api.nytimes.com/svc/books/v3/lists/current/${categories.selected}.json?api-key=OGDK7aGVDlAT6L8KaYnfASlYi6ydHveG`
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

  console.log('Render: SearchBooks');
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
  doSelectCategory: query => dispatch(CategoryActions.doSelectCategory(query)),
  doFetchInitCategory: query => dispatch(CategoryActions.doFetchInitCategory(query)),
  doFetchSuccessCategory: query => dispatch(CategoryActions.doFetchSuccessCategory(query)),
  doFetchFailureCategory: query => dispatch(CategoryActions.doFetchFailureCategory(query)),
  doFetchInitBook: query => dispatch(BookActions.doFetchInitBook(query)),
  doFetchSuccessBook: query => dispatch(BookActions.doFetchSuccessBook(query)),
  doFetchFailureBook: query => dispatch(BookActions.doFetchFailureBook(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBooks);
