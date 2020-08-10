import { FETCH_INIT_CATEGORY, FETCH_SUCCESS_CATEGORY, FETCH_FAILURE_CATEGORY, SELECTED_CATEGORY } from '../constants/actionTypes';

const doFetchInitCategory = payload => ({
  type: FETCH_INIT_CATEGORY,
  payload
});

const doFetchSuccessCategory = payload => ({
  type: FETCH_SUCCESS_CATEGORY,
  payload
});

const doFetchFailureCategory = payload => ({
  type: FETCH_FAILURE_CATEGORY,
  payload
});

const doSelectCategory = payload => ({
  type: SELECTED_CATEGORY,
  payload
});

export {
  doFetchInitCategory,
  doFetchSuccessCategory,
  doFetchFailureCategory,
  doSelectCategory
};
