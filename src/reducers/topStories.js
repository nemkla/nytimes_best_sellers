import { ADD_TOPSTORIES } from '../constants/actionTypes';

const INITIAL_STATE = {
  data: []
};

const applyAddTopStories = (state, action) => ({
  ...state,
  data: action.payload
});

export default function bookReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TOPSTORIES:
      return applyAddTopStories(state, action);
    default:
      return state;
  }
}

export const getTopStories = state => state.data;
