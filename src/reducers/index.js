import { combineReducers } from 'redux';
import bookReducer from './book';
import categoryReducer from './category';

const rootReducer = combineReducers({
  bookState: bookReducer,
  categoryState: categoryReducer,
});

export default rootReducer;
