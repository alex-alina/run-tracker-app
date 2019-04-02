// list - an array of objects
// listKey - the obj property to use for computing the maximum value
// Returns the maximum value, not the object
export const findMax = (list, listKey) => {
  if(list.length === 0){
    return null;
  }

  const initialVal = list[0][listKey];
  
  const maxValue = list.reduce((maxVal, currentVal) => {
    if (currentVal[listKey] > maxVal) {
      maxVal = currentVal[listKey];
    } 
    return maxVal;
  },
  initialVal);
  
  return maxValue;
};