import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth.js';
import { logOut } from 'redux/auth/operations.js';
import { NavButton } from 'styles/styles.js';
import { Stack, Typography, Avatar} from '@mui/material';

export const UserMenu = () => {
const dispatch = useDispatch();
const {user} = useAuth();

    return <Stack direction='row' alignItems='center' sx={{gap: 2, marginLeft: 'auto'}}>
      <Avatar  sx={{backgroundColor: 'primary.main'}} >{user.name.charAt()}</Avatar>
      <Typography  sx={{}}  >Welcome, {user.name}!</Typography>
      <NavButton type='button' onClick={() => dispatch(logOut())}  >Logout</NavButton>
    </Stack>
  };