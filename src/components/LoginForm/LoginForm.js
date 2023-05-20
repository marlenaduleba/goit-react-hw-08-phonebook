import { logIn } from 'redux/auth/operations.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { StyledTypography, StyledButton, StyledFormControl } from 'styles/styles.js';
import {
  Paper,
  Stack,
  Box,
  InputLabel,
  Input,
} from '@mui/material';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(values));
    setValues(initialValues);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  return (
    <Box sx={{ mt: 5 }}>
      <StyledTypography variant="h5" component="h1">
        Sign In
      </StyledTypography>
      <Paper elevation={2} sx={{ p: 2 }}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Stack sx={{ margin: '0 auto', alignItems: 'center' }}>
            <StyledFormControl fullWidth>
              <InputLabel>Email</InputLabel>
              <Input
                type="email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            </StyledFormControl>
            <StyledFormControl fullWidth>
              <InputLabel>Password</InputLabel>
              <Input
                type="password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
              />
            </StyledFormControl>
            <StyledButton type="submit">Log In</StyledButton>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};
