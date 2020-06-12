import { createMuiTheme } from '@material-ui/core/styles'

const MuiTheme = createMuiTheme({
  typography: {
    fontSize: 16,
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.4rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 300,
    },
    body2: {
      fontWeight: 300,
      lineHeight: '1.8rem',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
    MuiPaper: {
      variant: 'outlined',
      elevation: 0,
    },
  },
  shape: {
    borderRadius: 0,
  },
  palette: {
    common: {
      black: '#555',
    },
    primary: {
      light: '#d14d7d',
      main: '#c6215d',
      dark: '#8a1741',
      contrastText: '#fff',
    },
    secondary: {
      light: '#777777',
      main: '#555',
      dark: '#3b3b3b',
      contrastText: '#fff',
    },
    text: {
      primary: '#555',
    },
  },
  overrides: {
    MuiFab: {
      root: {
        boxShadow: 'none !important',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: '30px !important',
      },
    },
  },
})

export default MuiTheme
