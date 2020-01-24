export const styles = theme => ({
  root: {
    width: '100%',
    margin: 'auto',
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
    overflow: 'auto',
    [theme.breakpoints.up('lg')]: {
      margin: '2% auto',
      padding: theme.spacing.unit * 5,
    },
  },
 
  welcome: {
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing.unit * 6,    
    },
  },

  positionBtns: {
    width: '95%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
  },
  
  runsList: {
    width: '95%',
    height: 'auto',
    minHeight:'200px',
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 1,
    borderRadius: '4px',
    backgroundColor: theme.palette.secondary.light,
    [theme.breakpoints.up('lg')]: {
      width: '85%',
    },
  },
  
  liItem:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing.unit * 2,
    },
  },

  leftSideLi: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },
  
  liText: {
    color: '#fff',
    fontSize: 'calc(1rem + 0.5vw)',
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing.unit * 3,
    },
  }
});
