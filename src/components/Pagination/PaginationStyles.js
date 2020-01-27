export const styles = theme => ({
  pagination: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 3,
    color: '#fff',
  },

  pagesLi: {
    width: '70px',
    marginRight: theme.spacing.unit * 1,
    paddingLeft: theme.spacing.unit * 3,
    fontSize: 'calc(1rem + 0.5vw)',
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing.unit * 3,

    },
  },

  pageLink: {
    width: '8px',
    color: '#fff',
    fontSize: 'calc(0.7rem + 0.5vw)',
  },
  
  // underline: {
  //   textDecoration: 'underline',
  // },
});
