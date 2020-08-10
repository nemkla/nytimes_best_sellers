import { FETCH_INIT_BOOK, FETCH_SUCCESS_BOOK, FETCH_FAILURE_BOOK, DELETE_BOOK, SELECTED_BOOK, UNSELECTED_BOOK } from '../constants/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  data: []
};

const applyFetchInitBook = (state, action) => ({
  ...state,
  isLoading: true,
  isError: false,
});

const applyFetchSuccessBook = (state, action) => ({
  ...state,
  isLoading: false,
  isError: false,
  data: action.payload
});

const applyFetchFailureBook = (state, action) => ({
  ...state,
  isLoading: false,
  isError: true,
});

const applySelectBook = (state, action) => ({
  ...state,
  data: state.data.map((item) => {
    if (item.primary_isbn10 === action.payload) {
      return { ...item, selected: true };
    } else {
      return item;
    }
  })
});

const applyUnSelectBook = (state, action) => ({
  ...state,
  data: state.data.map((item) => {
    if (item.primary_isbn10 === action.payload) {
      return { ...item, selected: false };
    } else {
      return item;
    }
  })
});

const applyDeleteBook = (state, action) => ({
  ...state,
  data: state.data.filter(item => item.primary_isbn10 !== action.payload)
});

export default function bookReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_INIT_BOOK:
      return applyFetchInitBook(state, action);
    case FETCH_SUCCESS_BOOK:
      return applyFetchSuccessBook(state, action);
    case FETCH_FAILURE_BOOK:
      return applyFetchFailureBook(state, action);
    case SELECTED_BOOK:
      return applySelectBook(state, action);
    case UNSELECTED_BOOK:
      return applyUnSelectBook(state, action);
    case DELETE_BOOK:
      return applyDeleteBook(state, action);
    default:
      return state;
  }
}
