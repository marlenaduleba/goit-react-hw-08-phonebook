// import { useDispatch } from 'react-redux';
// import { StyledButton } from 'styles/styles.js';
// import { Stack } from '@mui/material';

// import {
//   useHandleSubmit,
//   useHandleInputChange,
//   useHandleClickShowPassword,
// } from 'hooks/useFormUtils.js';
// import { register } from 'redux/auth/operations.js';

// import { EmailField } from 'components/Forms/EmailField.jsx';
// import { PasswordField } from 'components/Forms/PasswordField.jsx';
// import { UsernameField } from './UsernameField.jsx';

// const initialValues = {
//   name: '',
//   email: '',
//   password: '',
//   showPassword: false,
// };

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const [values, handleSubmit, setValues] = useHandleSubmit(
//     initialValues,
//     values => dispatch(register(values))
//   );

//   const handleInputChange = useHandleInputChange(setValues);
//   const handleClickShowPassword = useHandleClickShowPassword(setValues);

//   const handleNameChange = e => {
//     handleInputChange(e, setValues);
//   };

//   const handleEmailChange = e => {
//     handleInputChange(e, setValues);
//   };

//   const handlePasswordChange = e => {
//     handleInputChange(e, setValues);
//   };

//   return (
//     <Stack
//       sx={{ alignItems: 'center' }}
//       component="form"
//       onSubmit={handleSubmit}
//       autoComplete="off"
//     >
//       <UsernameField value={values.name} onChange={handleNameChange} />
//       <EmailField value={values.email} onChange={handleEmailChange} />
//       <PasswordField
//         value={values.password}
//         onChange={handlePasswordChange}
//         showPassword={values.showPassword}
//         onClickToggle={handleClickShowPassword}
//         onMouseDown={() => {}}
//       />
//       <StyledButton type="submit">Register</StyledButton>
//     </Stack>
//   );
// };




import { register } from 'redux/auth/operations.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { StyledButton, StyledFormControl} from 'styles/styles.js';
import { IconButton, Input, InputAdornment, InputLabel, Stack } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const initialValues = {
  name: '',
  email: '',
  password: '',
  showPassword: false,
};



export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);

  const handleSubmit = e => {
    const { name, email, password } = values;
    e.preventDefault();
    dispatch(register({ name, email, password }));
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
          autoComplete="off"
        >
          <StyledFormControl required autoComplete="off" fullWidth>
    <InputLabel htmlFor="standard-adornment-name">Username</InputLabel>
    <Input
      id="standard-adornment-name"
      type="text"
      name="name"
      value={values.name}
      onChange={handleInputChange}
      autoComplete="off"
    />
  </StyledFormControl>
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
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
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
          <StyledButton type="submit">Register</StyledButton>
        </Stack>
      );
};