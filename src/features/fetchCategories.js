import { doAddCategories } from "../actions/category";
import { doFetchInit, doFetchFailure, doFetchSuccess } from "../actions/fetch";
import { CATEGORIES } from '../constants/stateKeys';

function fetchCategories() {
  const API_KEY = "6xpMY2BGw0tx5vACoxw8YNBq3NqHo4mo";
  const URL = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`;
  return async (dispatch) => {
    dispatch(doFetchInit(CATEGORIES, true));
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      dispatch(doAddCategories(data.results));
      dispatch(doFetchSuccess(CATEGORIES, true));
      return data.results;
    } catch (error) {
      dispatch(doFetchFailure(CATEGORIES, true));
    }
  };
}

export default fetchCategories;
