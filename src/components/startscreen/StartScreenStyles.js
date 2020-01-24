export const styles = theme => ({
  card: {
    width: '100%',
    height: '100vh',
    overflow: 'auto',
  },

  positionMedia: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing.unit * 10,
    },
  },

  media: {
    display: 'block',
    width: '25vw',
    height: '30vh',
    paddingRight: theme.spacing.unit * 1,
    objectFit: 'contain',
    verticalAlign: 'center',
  },
  
  appTitle: {
    margin: '1.5vmax auto',
  },

  introParagraph:{
    width: '90%',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '40%',
    },
  },

  positionStartBtn: {
    minWidth: '64px',
    width: 'auto',
    margin: '1vmax auto 6vmax auto',
  }
});
