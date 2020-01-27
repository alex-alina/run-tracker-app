export const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    overflow: 'auto',
    backgroundColor: '#fff',
  },

  welcome: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 1,
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 2,    
    },
  },

  chartContainer: {
    width: '100%',
    margin: 'auto',
    padding: theme.spacing.unit * 1,
    overflow: 'auto',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 3,    
    },
  },
  
  title: {
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing.unit * 4,    
    },
  },

  profileImg: {
    display: 'block',
    width: '100%',
    margin: '0 auto',
    height: '40vh',
    objectFit: 'cover',
    objectPosition: 'center',
  },
});
