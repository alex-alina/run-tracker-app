import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4caf50',
      light: '#80e27e',
      dark: '#087f23',
      contrastText: '#fff',
    },
    secondary: {
      main: '#546e7a',
      light: '#819ca9',
      dark: '#29434e',
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