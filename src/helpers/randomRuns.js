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
  },
  {
    distance: 15, 
    duration: 65,
    date: new Date('10-02-2020')
  },
  {
    distance: 7, 
    duration: 40,
    date: new Date('08-03-2020')
  }
];

export const assignRandomRun = (runsList) => {
  const index = Math.floor(Math.random() * runsList.length);
  return runsList[index];
};