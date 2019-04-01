import { USER_FETCHED } from "../actions/users";

const initialState = null;

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case USER_FETCHED:
    return action.userId;
  default:
    return state;
  }
};

export default reducer;