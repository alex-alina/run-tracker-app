export const styles = theme => ({
  card: {
    width: '80%',
    margin: 'auto',
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    [theme.breakpoints.up('md')]: {
      maxWidth: '500',
      width: '40%',
      height: 'auto',
      margin: '2% auto',
      paddingTop: theme.spacing.unit * 10,
      paddingBottom: theme.spacing.unit * 10,
    },
  },
 
  welcome: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 7,
  },

  positionBtns: {
    width: '80%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  
  runsList: {
    width: '80%',
    height: 'auto',
    minHeight:'200px',
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
    borderRadius: '4px',
    backgroundColor: theme.palette.secondary.main,
  },
  
  liItem:{
    display: 'flex',
    justifyContent: 'space-between',
  },
  
  liText: {
    color: '#fff',
    fontSize: 'calc(1rem + 0.5vw)'
  }
});
