import { ADD_CATEGORIES, SELECTED_CATEGORY } from "../constants/actionTypes";

const doAddCategories = payload => ({
  type: ADD_CATEGORIES,
  payload
});

const doSelectCategory = payload => ({
  type: SELECTED_CATEGORY,
  payload
});

export {
  doAddCategories,
  doSelectCategory
};
