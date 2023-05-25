import { NavLink } from 'react-router-dom';
import { Button, Stack } from '@mui/material';

export const AuthNav = () => {
  return (
    <Stack direction='row' sx={{gap: 2, marginLeft: 'auto'}} >
      <Button variant='nav'  component={NavLink}  to="/login"  >
        Log In
      </Button >
      <Button variant='nav'  component={NavLink}  to="/register"  >
        Register
      </Button >
      
    </Stack>
  );
};
