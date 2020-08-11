import { ADD_CATEGORIES, SELECTED_CATEGORY } from '../constants/actionTypes';

const INITIAL_STATE = {
  data: []
};

const applyFetchSuccessCategory = (state, action) => ({
  ...state,
  data: action.payload,
  selected: ''
});

const applySelectCategory = (state, action) => ({
  ...state,
  selected: action.payload
});

export default function category(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CATEGORIES:
      return applyFetchSuccessCategory(state, action);
    case SELECTED_CATEGORY:
      return applySelectCategory(state, action);
    default:
      return state;
  }
}
export const getCategories = state => state.data;
