import { WEIGHT_ADDED, CLEAR_WEIGHTS, DELETE_WEIGHT } from "../actions/weights";

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
  case CLEAR_WEIGHTS:
    return{
      ...state,
      [action.payload]: [],
    };
  case DELETE_WEIGHT:
    const { index } = action.payload;
    const userWeight = state[action.payload.userId];
    const updatedWeights = userWeight.filter((entry, entryIndex) => entryIndex !== index);
    return {
      ...state,
      [action.payload.userId]: updatedWeights,
    };
  default:
    return state;
  }
};

export default reducer;