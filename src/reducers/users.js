import { USERS_FETCHED } from "../actions/users";
import { RUN_ADDED, CLEAR_RUNS, DELETE_RUN } from "../actions/runs";

const initialState = null;

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case USERS_FETCHED:
    return action.users;

  case RUN_ADDED:
    const { userId, distance, duration, date } = action.payload;
    const addRunToUser = state.map(user => {
      const runs = user.runs;
      if(user.id === userId) {
        return {
          ...user, 
          runs: [...runs, {distance: parseInt(distance), duration, date}]
        };
      } else {
        return user;
      }
    });
    return addRunToUser;

  case CLEAR_RUNS:
    const userIdForClear = action.payload.userId;
    const clearUserRuns = state.map(user => {
      if(user.id === userIdForClear) {
        user.runs.length = 0;
        return user;
      } else {
        return user;
      }
    });
    return clearUserRuns;

  case DELETE_RUN:
    const index = action.payload.runIndex;
    const userIdForDelete = action.payload.userId;
    const updateUsers = state.map(user => {
      if(user.id === userIdForDelete) {
        const updateRuns = user.runs.filter((run, runIndex) => runIndex !== index);
        return {
          ...user,
          runs: updateRuns,
        };
      } else {
        return user;
      }
    });
    return updateUsers;

  default:
    return state;
  }
};

export default reducer;