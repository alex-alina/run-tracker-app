import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffd24c',
      light: '#ffe54c',
      dark: '#c68400',
      contrastText: '#000',
    },
    secondary: {
      main: '#0277bd',
      light: '#58a5ef',
      dark: '#004c8b',
      contrastText: '#fff',
    },
  },

  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ],
    useNextVariants: true,
  },

  overrides: {
    MuiTypography: {
      root: {
        color: '#fff',
      }
    },

    MuiButton: {
      contained: {
        borderRadius: '50px',
      },
    },

    MuiListItem: {
      button: {
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor:'#0277bd',
      },
      root: {
        paddingTop: '6px',
        paddingBottom: '6px',
      },
    },

    MuiAvatar: {
      root: {
        width: '50px',
        height: '50px',
        backgroundColor: '#fff',
        marginRight: '20px',
      },
    },
  }
});