// export const findMax = (list) => {
//   //list is an array of objects
//   let max = list[0].listItemProp;
//   list.forEach((listItem) => {
//     if (listItem.key > max) {
//       max = listItem.listItemProp;
//     }
//   });
//   return max;
// };

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