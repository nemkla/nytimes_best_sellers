import * as CategoryActions from "../actions/category";

function fetchCategories() {
  const API_KEY = "6xpMY2BGw0tx5vACoxw8YNBq3NqHo4mo";
  const URL = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`;
  return async (dispatch) => {
    dispatch(CategoryActions.doFetchInitCategory());
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      dispatch(CategoryActions.doFetchSuccessCategory(data.results));
      return data.results;
    } catch (error) {
      dispatch(CategoryActions.doFetchFailureCategory());
    }
  };
}

export default fetchCategories;
