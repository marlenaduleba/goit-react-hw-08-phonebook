import { logIn } from 'redux/auth/operations.js';
import { useDispatch } from 'react-redux';
import { useReducer } from 'react';
import { StyledButton, StyledTypography, StyledTextField } from 'styles/styles.js';
import { Paper, TextField, Stack, Box } from '@mui/material';

const initialValues = {
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'reset':
      return { ...action.payload };
    default:
      return state;
  }
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [{ email, password }, dispatchReducer] = useReducer(
    reducer,
    initialValues
  );

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email,
        password,
      })
    );
    dispatchReducer({ type: 'reset', payload: initialValues });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    dispatchReducer({ type: name, payload: value });
  };

  return (
    <Box sx={{mt: 5}} >
      <StyledTypography variant='h5'component='h1' >Sign In</StyledTypography>
        <Paper  elevation={2} sx={{p: 2}} >
          <form onSubmit={handleSubmit} autoComplete="off">
          <Stack sx={{ margin: '0 auto', alignItems: 'center'}}>
            <StyledTextField
            label="Email"
              type="email"
              name="email"
              value={email}
              variant="standard"
              onChange={handleInputChange}
              fullWidth
            />
            <StyledTextField
            label="Password"
              type="password"
              name="password"
              value={password}
              variant="standard"
              onChange={handleInputChange}
              fullWidth
            />
            <StyledButton type="submit">Log In</StyledButton>
          </Stack>
      </form>
        </Paper>
    </Box>
  );
};
