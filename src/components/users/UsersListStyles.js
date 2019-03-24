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

  userLi: {
    width: '80%',
    display: 'flex',
    justifyContent: 'flex-start',
    margin: 'auto',
    paddingTop: theme.spacing.unit * 1.5,
    paddingBottom: theme.spacing.unit * 1.5,
    paddingLeft: '30px',
    backgroundColor: theme.palette.secondary.main,
  },
  
  liText: {
    color: '#fff',
    fontSize: 'calc(1rem + 0.5vw)'
  }
});
