export const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    overflow: 'auto',
    backgroundColor: '#fff',
  },

  profileImg: {
    display: 'block',
    width: '100%',
    margin: '0 auto',
    height: 'auto',
    objectFit: 'cover',
    objectPosition: 'center',
    [theme.breakpoints.up('lg')]: {
      height: '100vh',
    },
  },
});
