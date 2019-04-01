export const styles = theme => ({
  card: {
    width: '80%',
    margin: 'auto',
    padding: theme.spacing.unit * 1,
    [theme.breakpoints.up('md')]: {
      maxWidth: '500',
      width: '40%',
      height: 'auto',
      margin: '2% auto',
      padding: theme.spacing.unit * 1,
    },
  },

  positionMedia: {
    width: '80%',
    margin: '20% auto 10% auto',
    padding: theme.spacing.unit * 1,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      margin: '10% auto 5% auto',
      padding: theme.spacing.unit * 1,
      width: '400px',
      height: "400px",
    },
  },

  media: {
    width: '80%',
    height: 'auto',
    margin: '8% auto',
    paddingRight: theme.spacing.unit * 3,
    objectFit: 'contain',
    verticalAlign: 'center',
    [theme.breakpoints.up('md')]: {
      width: '300px',
      height: "300px",
    },
  },

  positionStartBtn: {
    minWidth: '64px',
    width: '100px',
    margin: '2vmax auto 6vmax auto',
  }
});
