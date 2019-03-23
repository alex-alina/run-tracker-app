import { createMuiTheme } from '@material-ui/core/styles';
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f9a825',
    },
    secondary: {
      main: '#81d4fa',
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
    MuiDivider: {
      light: {
        backgroundColor: '#ffffff8C',
      }
    },
    MuiListItemText: {
      primary: {
        color: '#fff',
      }
    },
    MuiListItem: {
      button: {
        paddingTop: '10px',
        paddingBottom: '10px',
      },
      root: {
        paddingTop: '6px',
        paddingBottom: '6px',
      },
    },
    MuiAvatar: {
      root: {
        width: '34px',
        height: '34px',
        backgroundColor: '#fff',
      },
      colorDefault: {
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: '#99cc60',
        },
      }
    },
    MuiIcon: {
      root: {
        fontSize: '20px',
        width: '20px',
      }
    },
    MuiFormControlLabel: {
      labelPlacementStart: {
        flexDirection: 'row',
      }
    },
    MuiFormGroup: {
      root: {
        flexWrap: 'wrap',
        flexDirection: 'row',
      }
    },
    MuiPaper: {
      elevation4: {
        boxShadow: 'none',
      }
    },
  }
});