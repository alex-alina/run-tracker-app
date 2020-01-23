export const styles = theme => ({
  card: {
    width: '100%',
    height: '100vh',
    // margin: 'auto',
    // padding: theme.spacing.unit * 1,
    // [theme.breakpoints.up('md')]: {
    //   maxWidth: '500',
    //   width: '40%',
    //   height: 'auto',
    //   margin: '2% auto',
    //   padding: theme.spacing.unit * 1,
    // },
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
    height: '40vh',
    paddingRight: theme.spacing.unit * 1,
    objectFit: 'contain',
    verticalAlign: 'center',
  },

  positionStartBtn: {
    minWidth: '64px',
    width: 'auto',
    margin: '1vmax auto 6vmax auto',
  }
});
