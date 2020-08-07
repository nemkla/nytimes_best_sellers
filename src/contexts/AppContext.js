import React, { createContext, useReducer } from "react";
import useCombinedReducer from "../reducers/useCombinedReducer";
import bookReducer from "../reducers/bookReducer";
import categoryReducer from "../reducers/categoryReducer";

export const AppContext = createContext();
export const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  data: [],
};
export function AppProvider(props) {
  const [state, dispatch] = useCombinedReducer({
    books: useReducer(bookReducer, INITIAL_STATE),
    categories: useReducer(categoryReducer, INITIAL_STATE),
  });

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
}
