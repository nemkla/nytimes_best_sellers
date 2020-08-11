import { doAddTopStories } from "../actions/topStories";
import { doFetchInit, doFetchFailure, doFetchSuccess } from "../actions/fetch";
import { TOPSTORIES } from '../constants/stateKeys';

function fetchTopStories() {
  const API_KEY = "6xpMY2BGw0tx5vACoxw8YNBq3NqHo4mo";
  const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
  return async (dispatch) => {
    dispatch(doFetchInit(TOPSTORIES, true));
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      dispatch(doAddTopStories(data.results));
      dispatch(doFetchSuccess(TOPSTORIES, true));
      return data.results;
    } catch (error) {
      dispatch(doFetchFailure(TOPSTORIES, true));
    }
  };
}

export default fetchTopStories;
