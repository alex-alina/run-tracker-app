export const findMax = (list, listItemProp) => {
  //listItem is an array of objects
  let max;
  list.forEach((listItem) => {
    if (listItem.listItemProp > max) {
      max = listItemProp;
    }
  });
  return max;
};