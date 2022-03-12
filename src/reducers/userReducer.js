export default function (state, action) {
  switch (action.type) {
    case "START_FECTH":
      return { ...state, isLoading: true, isError: false, user: null };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, user: action.payload };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, isError: true };
    default:
      state;
  }
}
