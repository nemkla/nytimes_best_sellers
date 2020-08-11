import { FETCH_INIT_CATEGORY, FETCH_SUCCESS_CATEGORY, FETCH_FAILURE_CATEGORY, SELECTED_CATEGORY } from '../constants/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  selected: '',
  data: []
};

const applyFetchInitCategory = (state, action) => ({
  ...state,
  isLoading: true,
  isError: false,
});

const applyFetchSuccessCategory = (state, action) => ({
  ...state,
  isLoading: false,
  isError: false,
  data: action.payload,
  selected: ''
});

const applyFetchFailureCategory = (state, action) => ({
  ...state,
  isLoading: false,
  isError: true,
});

const applySelectCategory = (state, action) => ({
  ...state,
  selected: action.payload
});

export default function category(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_INIT_CATEGORY:
      return applyFetchInitCategory(state, action);
    case FETCH_SUCCESS_CATEGORY:
      return applyFetchSuccessCategory(state, action);
    case FETCH_FAILURE_CATEGORY:
      return applyFetchFailureCategory(state, action);
    case SELECTED_CATEGORY:
      return applySelectCategory(state, action);
    default:
      return state;
  }
}
export const getCategories = state => state.data;
export const getCategoriesPending = state => state.isLoading;
export const getCategoriesError = state => state.isError;
