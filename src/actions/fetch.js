import {
  FETCH_INIT,
  FETCH_FAILURE,
  FETCH_SUCCESS,
} from "../constants/actionTypes";

const doFetchInit = (stateKey, value) => ({
  type: FETCH_INIT,
  payload: { stateKey: stateKey, value: value },
});

const doFetchSuccess = (stateKey, value) => ({
  type: FETCH_SUCCESS,
  payload: { stateKey: stateKey, value: value },
});

const doFetchFailure = (stateKey, value) => ({
  type: FETCH_FAILURE,
  payload: { stateKey: stateKey, value: value },
});

export { doFetchInit, doFetchSuccess, doFetchFailure };
