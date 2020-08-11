import { ADD_BOOKS, DELETE_BOOK, SELECTED_BOOK, UNSELECTED_BOOK } from "../constants/actionTypes";

const doAddBooks = payload => ({
  type: ADD_BOOKS,
  payload
});

const doDeleteBook = payload => ({
  type: DELETE_BOOK,
  payload
});

const doSelectBook = payload => ({
  type: SELECTED_BOOK,
  payload
});

const doUnSelectBook = payload => ({
  type: UNSELECTED_BOOK,
  payload
});

export {
  doAddBooks,
  doDeleteBook,
  doSelectBook,
  doUnSelectBook
};
