import * as React from 'react';
import {AppBar, Box, Toolbar} from '@mui/material';
import { useAuth } from 'hooks/useAuth.js';
import { Navigation } from 'components/Navigation/Navigation.js';
import { UserMenu } from 'components/UserMenu/UserMenu.js';
import { AuthNav } from 'components/AuthNav/AuthNav.js';


export default function ButtonAppBar() {

  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '20px' }}>
      <AppBar position="static">
        <Toolbar>
        <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
