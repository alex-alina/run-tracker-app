export const styles = theme => ({
  list: {
    width: '100%',
    top: '45vh',
    zIndex: '6',
    backgroundColor: 'inherit',
    margin: '0 auto',
    // padding: theme.spacing.unit * 1,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 3,
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 5,
      width: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing.unit * 6,
      width: '40%',
    },
  },
  
  userLi: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '2vh auto',
   
  },
  
  link: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'space-around',

    },
  },

  avatar: {
    [theme.breakpoints.up('sm')]: {
      width: '50px',
      height: '50px',
      marginRight: '20px',
    },
  },

  leftSideLi: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: '20px',
  },

  liText: {
    fontSize: 'calc(1rem + 0.5vw)',
    color: theme.palette.secondary.main,
  }, 

  liTextRight: {
    fontSize: 'calc(1rem + 0.5vw)',
    fontWeight: '300',
    color: theme.palette.secondary.main,
  },
});
