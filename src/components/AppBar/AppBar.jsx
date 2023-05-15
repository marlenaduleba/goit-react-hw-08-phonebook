import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '20px' }}>
      <AppBar position="static">
        <Toolbar>
          <Button color='inherit' sx={{ marginRight: 'auto', textTransform: 'none'}}  >Home</Button>

          <Button color="inherit" sx={{ textTransform: 'none'}} >Sign up</Button>
          <Button color="inherit" sx={{ textTransform: 'none'}} >Sign in</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
