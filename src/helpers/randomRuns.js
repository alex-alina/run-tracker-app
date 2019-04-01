export const dummyData = [
  {
    distance: 12, 
    duration: 80,
    date: new Date()
  },
  {
    distance: 6, 
    duration: 30,
    date: new Date('08-12-2018')
  },
  {
    distance: 9, 
    duration: 65,
    date: new Date('03-06-2018')
  },
  {
    distance: 16, 
    duration: 120,
    date: new Date('01-07-2018')
  },
  {
    distance: 20, 
    duration: 130,
    date: new Date('10-06-2018')
  }
];

export const assignRandomRun = (runsList) => {
  const index = Math.floor(Math.random() * runsList.length);
  return runsList[index];
};