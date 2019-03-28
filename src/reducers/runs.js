import { RUN_ADDED, CLEAR_RUNS, DELETE_RUN } from "../actions/runs";
// const dummyData = [
//   {weight: 62, date: new Date()},
//   {weight: 56, date: new Date()}, 
//   {weight: 69, date: new Date()},
// ];

const initialState = {};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case RUN_ADDED:
    const { userId, distance, duration, date } = action.payload;
    const userRuns = state[userId] || [];
    return {
      ...state,
      [userId]: [...userRuns, {distance: parseInt(distance), duration, date}]
    };

  case CLEAR_RUNS:
    return{
      ...state,
      [action.payload]: [],
    };

  case DELETE_RUN:
    const { index } = action.payload;
    const userRun = state[action.payload.userId];
    const updatedRuns = userRun.filter((entry, entryIndex) => entryIndex !== index);
    return {
      ...state,
      [action.payload.userId]: updatedRuns,
    };
    
  default:
    return state;
  }
};

export default reducer;