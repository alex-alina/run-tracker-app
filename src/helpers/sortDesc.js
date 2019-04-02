export const sortDesc = (list) => {
  list.sort((a ,b) => {
    return b.date - a.date;
  });
};