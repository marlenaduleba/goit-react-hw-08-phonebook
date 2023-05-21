import {
  Button,
  AppBar,
  List,
  Typography,
  FormControl,
  Container,
} from '@mui/material';
import { styled, createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5F6D',
    },
    secondary: {
      main: '#FFC371',
    },
    action: {
      // hover: '#FEECD4',
      hoverOpacity: '0.0',
    },
    text: {
      primary: '#2C2C2C',
    },
    common: {
      lightBlack: '#2C2C2C',
    },
  },
});

export const StyledContainer = styled(Container)(() => ({}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: '#fff',
}));

export const NavButton = styled(Button)(({ theme }) => ({
  minWidth: 100,
  color: theme.palette.primary.main,
  textTransform: 'none',
  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  border: '1px solid #FF5F6D',
  borderRadius: 50,
  '&.active': {
    background: 'linear-gradient(to right, #FFC371, #FF5F6D)',
    border: 'none',
    color: '#fff',
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '8px',
  width: '50%',
  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
  background:
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    'linear-gradient(to right, #FFC371, #FF5F6D)',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  borderRadius: 50,
  color: theme.palette.common.white,
  textTransform: 'none',
  fontSize: 15,
  fontWeight: 700,
  minHeight: 30,
  boxShadow: theme.shadows[0],
  '&:active': {
    boxShadow: theme.shadows[0],
  },
}));

export const StyledList = styled(List)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
}));

export const DeleteButton = styled(Button)(() => ({
  minWidth: 80,
  padding: '4px 6px',
  borderRadius: 50,
  textTransform: 'none',
  border: '1px solid #FF5F6D',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  marginBottom: '24px',
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

export const StyledFormControl = styled(FormControl)(() => ({
  marginBottom: '32px',
}));
