import * as BookActions from "../actions/book";

function fetchBooks(url) {
  return async (dispatch) => {
    dispatch(BookActions.doFetchInitBook());
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      dispatch(BookActions.doFetchSuccessBook(data.results.books));
      return data.results.books;
    } catch (error) {
      dispatch(BookActions.doFetchFailureBook());
    }
  };
}

export default fetchBooks;
