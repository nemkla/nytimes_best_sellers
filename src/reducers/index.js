import { combineReducers } from "redux"
import bookReducer from "./book"
import categoryReducer from "./category"
import topStoriesReducer from "./topStories"
import fetchReducer from "./fetch"
import { connectRouter } from "connected-react-router"

const rootReducer = (history) => combineReducers({
  bookState: bookReducer,
  categoryState: categoryReducer,
  topStoriesState: topStoriesReducer,
  fetchState: fetchReducer,
  router: connectRouter(history)
});

export default rootReducer
