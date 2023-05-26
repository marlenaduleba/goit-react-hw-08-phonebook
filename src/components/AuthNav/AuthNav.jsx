
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button, Stack } from '@mui/material';

export const AuthNav = ({place}) => {
  return (
    <Stack direction='row' sx={{gap: 2} } place={place} >
      <Button variant='nav'  component={NavLink}  to="/login"  >
        Log In
      </Button >
      <Button variant='nav'  component={NavLink}  to="/register"  >
        Register
      </Button >
      
    </Stack>
  );
};

AuthNav.propTypes = {
  place: PropTypes.string.isRequired,
};
