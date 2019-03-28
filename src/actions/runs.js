export const RUN_ADDED = 'RUN_ADDED';
export const CLEAR_RUNS = 'CLEAR_RUNS';
export const DELETE_RUN = 'DELETE_RUN';

export const addRun = (userId, distance, duration, date) => ({
  type: RUN_ADDED,
  payload: {
    userId,
    distance, 
    duration, 
    date,
  }
});

export const clearList = (userId) => ({
  type: CLEAR_RUNS,
  payload: userId
});

export const deleteRun = (userId, index) => ({
  type: DELETE_RUN,
  payload: {
    userId,
    index,
  }
});
