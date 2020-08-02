import { SEARCH_USERS, GET_USERS, GET_REPOS, CLEAR_USERS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        user: action.payload,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    default: {
      return state;
    }
  }
};
