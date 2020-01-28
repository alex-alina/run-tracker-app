export const styles = theme => ({
  root: {
    width: '100%',
    margin: 'auto',
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 1,
    overflow: 'auto',
    [theme.breakpoints.up('lg')]: {
      margin: '2% auto',
      paddingTop: 0,
    },
  },

  positionBtns: {
    width: '95%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing.unit * 1.5,
      paddingBottom: theme.spacing.unit * 2.5,
      width: '80%',
    },
  },
  
  runsList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '95%',
    height: 'auto',
    minHeight:'360px',
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
    borderRadius: '4px',
    backgroundColor: theme.palette.secondary.light,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 2,

    },
    [theme.breakpoints.up('lg')]: {
      width: '85%',
    },
  },
  
  liItem:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 1,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,    
    },
  },

  leftSideLi: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },

  rightSideLi: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '45%',
    [theme.breakpoints.up('sm')]: {
      width: '25%',
    },
  },
  
  btn: {
    marginRight: '15px',
    [theme.breakpoints.up('sm')]: {
      marginRight: '30px',
    },
  },

  liText: {
    color: '#fff',
    fontSize: 'calc(1rem + 0.5vw)',
    [theme.breakpoints.up('sm')]: {
      marginRight: '30px',
    },
  }
});
