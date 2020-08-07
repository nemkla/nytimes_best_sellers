export default function categoryReducer(state, { type, payload }) {
  switch (type) {
    case "FETCH_INIT_CATEGORY":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS_CATEGORY":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
        selected: ''
      };
    case "FETCH_FAILURE_CATEGORY":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case "SELECTED_CATEGORY":
        return {
          ...state,
          selected: payload
        };
    default:
      return state;
  }
}
