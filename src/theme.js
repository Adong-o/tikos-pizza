import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF4D4D',
      light: '#FF7A7A',
      dark: '#CC3D3D',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2C3E50',
      light: '#34495E',
      dark: '#1A252F',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
      dark: '#F8F9FA',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#636E72',
    },
    success: {
      main: '#2ECC71',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.8rem',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.2rem',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.8rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.4rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.2rem',
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 24px',
          fontSize: '1rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(255, 77, 77, 0.23)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

export default theme;
