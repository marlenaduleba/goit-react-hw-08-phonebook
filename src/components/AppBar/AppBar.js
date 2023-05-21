import { Box, Toolbar } from '@mui/material';
import { useAuth } from 'hooks/useAuth.js';
import { Navigation } from 'components/Navigation/Navigation.js';
import { UserMenu } from 'components/UserMenu/UserMenu.js';
import { AuthNav } from 'components/AuthNav/AuthNav.js';
import { StyledAppBar } from 'styles/styles.js';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};
