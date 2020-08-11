import { ADD_BOOKS, DELETE_BOOK, SELECTED_BOOK, UNSELECTED_BOOK } from '../constants/actionTypes';

const INITIAL_STATE = {
  data: []
};

const applyFetchSuccessBook = (state, action) => ({
  ...state,
  data: action.payload
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
    case ADD_BOOKS:
      return applyFetchSuccessBook(state, action);
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

export const getBooks = state => state.data;
