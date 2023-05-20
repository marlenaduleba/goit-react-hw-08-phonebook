import { logIn } from 'redux/auth/operations.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  StyledTypography,
  StyledButton,
  StyledFormControl,
} from 'styles/styles.js';
import {
  Paper,
  Stack,
  Box,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const initialValues = {
  email: '',
  password: '',
  showPassword: false,
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);

  const handleSubmit = e => {
    const { email, password } = values;
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setValues(initialValues);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleClickShowPassword = () => {
    setValues(prevValues => ({
      ...prevValues,
      showPassword: !prevValues.showPassword,
    }));
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Box sx={{ mt: 5 }}>
      <StyledTypography variant="h5" component="h1">
        Sign In
      </StyledTypography>
      <Paper elevation={2} sx={{ p: 2 }}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Stack sx={{ margin: '0 auto', alignItems: 'center' }}>
            <StyledFormControl required autoComplete="off" fullWidth>
              <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
              <Input
                id="standard-adornment-email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </StyledFormControl>
            <StyledFormControl required autoComplete="off" fullWidth>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleInputChange}
                autoComplete="off"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </StyledFormControl>
            <StyledButton type="submit">Log In</StyledButton>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
