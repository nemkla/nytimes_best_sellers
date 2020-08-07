export default function bookReducer(state, { type, payload }) {
  switch (type) {
    case "FETCH_INIT_BOOK":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS_BOOK":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    case "FETCH_FAILURE_BOOK":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SELECTED_BOOK":
      return state.data.map((item) => {
        if (item.primary_isbn10 === payload) {
          return { ...item, selected: true };
        } else {
          return item;
        }
      });
    case "UNSELECTED_BOOK":
      return state.data.map((item) => {
        if (item.primary_isbn10 === payload) {
          return { ...item, selected: false };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
}
