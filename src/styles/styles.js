import { AppBar, List, Typography, FormControl } from '@mui/material';
import { styled, createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5F6D',
    },
    action: {
      hoverOpacity: '0.0',
    },
  },
  typography: {
    fontFamily: `'Red Hat Display', sans-serif`,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#2B3B42',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: '200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          fontWeight: 500,
          '&:hover': {
            transform: 'scale(1.1)',
          },
          borderRadius: 50,
          color: defaultTheme.palette.common.white,
          textTransform: 'none',
          fontSize: 15,
          minHeight: 35,
          boxShadow:
            '0 20px 20px -20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.06)',
          '&:active': {
            boxShadow: defaultTheme.shadows[4],
          },
        },
      },
      variants: [
        {
          props: { variant: 'main' },
          style: {
            marginTop: '8px',
            width: '50%',
            minHeight: 'auto',
            height: '40.25px',
            background:
              /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
              'linear-gradient(to right, #FFC371, #FF5F6D)',
          },
        },
        {
          props: { variant: 'nav' },
          style: {
            minWidth: 100,
            color: '#FF5F6D',
            border: '1px solid #FF5F6D',
            '&.active': {
              background: 'linear-gradient(to right, #FFC371, #FF5F6D)',
              border: 'none',
              color: defaultTheme.palette.common.white,
            },
          },
        },
        {
          props: { variant: 'delete' },
          style: {
            minWidth: 80,
            padding: '4px 6px',
            border: '1px solid #FF5F6D',
            color: '#FF5F6D',
          },
        },
      ],
    },
  },
});

export const StyledAppBar = styled(AppBar)(() => ({
  background: defaultTheme.palette.common.white,
  boxShadow: '0 0px 20px 0px rgba(0, 0, 0, 0.05)',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  '&:hover': {
    boxShadow: '0 0px 30px 0px rgba(0, 0, 0, 0.1)',
  },
}));

export const StyledList = styled(List)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
}));

export const StyledTypography = styled(Typography)(() => ({
  marginBottom: '32px',
  textAlign: 'center',
  fontWeight: 500,
}));

export const StyledFormControl = styled(FormControl)(() => ({
  marginBottom: '32px',
}));
