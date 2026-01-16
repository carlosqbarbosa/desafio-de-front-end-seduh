import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.hotBlue,
    },
    secondary: {
      main: colors.coldGray,
    },
    background: {
      default: colors.black,
      paper: colors.white,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '72px',
      fontWeight: 200,
      letterSpacing: '0.05em',
    },
    h2: {
      fontSize: '48px',
      fontWeight: 200,
      letterSpacing: '0.03em',
    },
    h3: {
      fontSize: '36px',
      fontWeight: 300,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 300,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 300,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 300,
          letterSpacing: '0.03em',
          borderRadius: '8px',
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          animationDuration: '1.4s',
        },
      },
    },
  },
});