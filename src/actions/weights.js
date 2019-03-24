export const WEIGHT_ADDED = 'WEIGHT_ADDED';

const addWeight = (userId, weight, date) => ({
  type: WEIGHT_ADDED,
  payload: {
    userId,
    weight, 
    date,
  }
});


export default addWeight;