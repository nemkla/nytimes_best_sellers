import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from '../constants/actionTypes';
import { CATEGORIES, BOOKS, TOPSTORIES } from '../constants/stateKeys';

const INITIAL_STATE = {
  isLoading: {
    CATEGORIES: false,
    BOOKS: false,
    TOPSTORIES: false
  },
  isError: {
    CATEGORIES: false,
    BOOKS: false,
    TOPSTORIES: false
  },
  isSuccess: {
    CATEGORIES: false,
    BOOKS: false,
    TOPSTORIES: false
  }
};

const applyFetchInit = (state, action) => {
  const { stateKey, value } = action.payload;
  const isLoadingState = state.isLoading;
  const isErrorState = state.isError;
  const isSuccessState = state.isSuccess;

  isLoadingState[stateKey] = value;
  isErrorState[stateKey] = false;
  isSuccessState[stateKey] = false;

  return {
    ...state,
    isLoading: isLoadingState,
    isError: isErrorState,
    isSuccess: isSuccessState
  };
};


const applyFetchSuccess = (state, action) => {
  const { stateKey, value } = action.payload;
  const isLoadingState = state.isLoading;
  const isErrorState = state.isError;
  const isSuccessState = state.isSuccess;

  isLoadingState[stateKey] = false;
  isErrorState[stateKey] = false;
  isSuccessState[stateKey] = value;

  return {
    ...state,
    isLoading: isLoadingState,
    isError: isErrorState,
    isSuccess: isSuccessState
  };
}

const applyFetchFailure = (state, action) => {
  const { stateKey, value } = action.payload;
  const isLoadingState = state.isLoading;
  const isErrorState = state.isError;
  const isSuccessState = state.isSuccess;

  isLoadingState[stateKey] = false;
  isErrorState[stateKey] = value;
  isSuccessState[stateKey] = false;

  return {
    ...state,
    isLoading: isLoadingState,
    isError: isErrorState,
    isSuccess: isSuccessState
  };
}

export default function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_INIT:
      return applyFetchInit(state, action);
    case FETCH_SUCCESS:
      return applyFetchSuccess(state, action);
    case FETCH_FAILURE:
      return applyFetchFailure(state, action);
    default:
      return state;
  }
}

export function getIsLoading(state, stateKey) {
  return state.isLoading[stateKey];
}

export function getIsError(state, stateKey) {
  return state.isError[stateKey];
}

export function getIsSuccess(state, stateKey) {
  return state.isSuccess[stateKey];
}
