import { Box, Toolbar } from '@mui/material';
import { useAuth } from 'hooks/useAuth.js';
import { Navigation } from 'components/Navigation/Navigation.jsx';
import { UserMenu } from 'components/UserMenu/UserMenu.jsx';
import { AuthNav } from 'components/AuthNav/AuthNav.jsx';
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
