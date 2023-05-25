import { Toolbar } from '@mui/material';
import { useAuth } from 'hooks/useAuth.js';
import { Navigation } from 'components/Navigation/Navigation.jsx';
import { UserMenu } from 'components/UserMenu/UserMenu.jsx';
import { AuthNav } from 'components/AuthNav/AuthNav.jsx';
import { StyledAppBar } from 'styles/styles.js';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <StyledAppBar position="static">
      <Toolbar sx={{pt: 1, pb: 1}} >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav place="right" />}
      </Toolbar>
    </StyledAppBar>
  );
};
