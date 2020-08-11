import { combineReducers } from "redux"
import bookReducer from "./book"
import categoryReducer from "./category"
import { connectRouter } from "connected-react-router"

const rootReducer = (history) => combineReducers({
  bookState: bookReducer,
  categoryState: categoryReducer,
  router: connectRouter(history)
});

export default rootReducer
