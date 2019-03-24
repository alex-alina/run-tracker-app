import { WEIGHT_ADDED } from "../actions/weights";

const initialState = {};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case WEIGHT_ADDED:
    const { userId, weight, date } = action.payload;
    const userWeights = state[userId] || [];
    return {
      ...state,
      [userId]: [...userWeights, {weight, date}]
    }; 
  default:
    return state;
  }
};

export default reducer;