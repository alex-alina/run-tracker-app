export const findMax = (list, listKey) => {
  const maxValue = list.reduce((maxVal, currentVal) => {
    if (currentVal[listKey] > maxVal) {
      maxVal = currentVal[listKey];
    }
    return maxVal;
  },
  0);
  //fix accumulator
  return maxValue;
};