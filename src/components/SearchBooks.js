import React, { useState, useEffect, useContext } from "react";
import { compose } from 'recompose';

import { AppContext } from "../contexts/AppContext";

import BookList from "./BookList";
import CategoryForm from "./CategoryForm";

import "../styles/SearchBooks.css";

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
    categories.selected !== ""
      ? setUrl(
          `https://api.nytimes.com/svc/books/v3/lists/current/${categories.selected}.json?api-key=OGDK7aGVDlAT6L8KaYnfASlYi6ydHveG`
        )
      : alert("Category cannot be empty!!!");
  };

  const handleOnChange = (name) => {
    dispatch({ type: "SELECTED_CATEGORY", payload: name });
  };

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
export default SearchBooks;
