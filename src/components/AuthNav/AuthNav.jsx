import { NavLink } from 'react-router-dom';
import { NavButton } from 'styles/styles.js';
import { Stack } from '@mui/material';

export const AuthNav = () => {
  return (
    <Stack direction='row' sx={{gap: 2, marginLeft: 'auto'}} >
      <NavButton  component={NavLink}  to="/login"  >
        Log In
      </NavButton >
      <NavButton  component={NavLink}  to="/register"  >
        Register
      </NavButton >
      
    </Stack>
  );
};
