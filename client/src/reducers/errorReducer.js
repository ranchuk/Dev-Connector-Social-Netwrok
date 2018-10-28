import { GET_ERRORS, CLEAR_ERROS } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERROS:
      return {};
    default:
      return state;
  }
}
