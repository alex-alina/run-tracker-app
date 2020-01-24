import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffd24c',
      light: '#ffe187',
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

    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      }
    },

    MuiAvatar: {
      root: {
        width: '30px',
        height: '30px',
        backgroundColor: '#fff',
        marginRight: '10px',
      },
    },
  }
});