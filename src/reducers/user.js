import { USER_FETCHED } from "../actions/users";

const initialState = null;

const reducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
  case USER_FETCHED:
    return action.user;
  default:
    return state;
  }
};

export default reducer;