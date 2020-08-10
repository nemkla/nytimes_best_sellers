import { FETCH_INIT_BOOK, FETCH_SUCCESS_BOOK, FETCH_FAILURE_BOOK, DELETE_BOOK, SELECTED_BOOK, UNSELECTED_BOOK } from '../constants/actionTypes';

const doFetchInitBook = payload => ({
  type: FETCH_INIT_BOOK,
  payload
});

const doFetchSuccessBook = payload => ({
  type: FETCH_SUCCESS_BOOK,
  payload
});

const doFetchFailureBook = payload => ({
  type: FETCH_FAILURE_BOOK,
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
  doFetchInitBook,
  doFetchSuccessBook,
  doFetchFailureBook,
  doDeleteBook,
  doSelectBook,
  doUnSelectBook
};
