export const maxWeight = (weightsList) => {
  //weightList is an array of objects
  let maximumWeight = 0;
  weightsList.forEach((weight) => {
    if (weight.weight > maximumWeight) {
      maximumWeight = weight.weight;
    }
  });
  return maximumWeight;
};