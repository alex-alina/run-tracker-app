export const WEIGHT_ADDED = 'WEIGHT_ADDED';
export const CLEAR_WEIGHTS = 'CLEAR_WEIGHTS';
export const DELETE_WEIGHT = 'DELETE_WEIGHT';

export const addWeight = (userId, weight, date) => ({
  type: WEIGHT_ADDED,
  payload: {
    userId,
    weight, 
    date,
  }
});

export const clearList = (userId) => ({
  type: CLEAR_WEIGHTS,
  payload: userId
});

export const deleteWeight = (userId, index) => ({
  type: DELETE_WEIGHT,
  payload: {
    userId,
    index,
  }
});
