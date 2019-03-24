import { USERS_FETCHED } from "../actions/users";

const initialState = null;

const reducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
  case USERS_FETCHED:
    return action.users;
  default:
    return state;
  }
};

export default reducer;