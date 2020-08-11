import { ADD_TOPSTORIES } from "../constants/actionTypes";

const doAddTopStories = payload => ({
  type: ADD_TOPSTORIES,
  payload
});

export {
  doAddTopStories
};
