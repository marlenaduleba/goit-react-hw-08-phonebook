import { logIn } from 'redux/auth/operations.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { StyledFormControl } from 'styles/styles.js';
import {
  Button,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const initialValues = {
  email: '',
  password: '',
  showPassword: false,
};

export const LoginForm = () => {
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
    <Stack
      sx={{ alignItems: 'center' }}
      component="form"
      onSubmit={handleSubmit}
    >
      <StyledFormControl required fullWidth>
        <InputLabel shrink htmlFor="standard-adornment-email">Email</InputLabel>
        <Input
          id="standard-adornment-email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
      </StyledFormControl>
      <StyledFormControl required fullWidth>
        <InputLabel shrink htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          name="password"
          value={values.password}
          onChange={handleInputChange}
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
      <Button type="submit" variant='main' >Log In</Button>
    </Stack>
  );
};
