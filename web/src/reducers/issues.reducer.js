import * as types from "../constants/issues.constants";

const initialState = {
  list: [],
};

export default function issues(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_ISSUES:
      return {
        ...state,
        list: action.payload.list,
      };

    default:
      return state;
  }
}
