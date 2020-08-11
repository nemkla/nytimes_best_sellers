import { doAddBooks } from "../actions/book";
import { doFetchInit, doFetchFailure, doFetchSuccess } from "../actions/fetch";
import { BOOKS } from '../constants/stateKeys';

function fetchBooks(url) {
  return async (dispatch) => {
    dispatch(doFetchInit(BOOKS, true));
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      dispatch(doAddBooks(data.results.books));
      dispatch(doFetchSuccess(BOOKS, true));
      return data.results.books;
    } catch (error) {
      dispatch(doFetchFailure(BOOKS, true));
    }
  };
}

export default fetchBooks;
