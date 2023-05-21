import { logIn } from 'redux/auth/operations.js';
import { useDispatch } from 'react-redux';
import { StyledButton } from 'styles/styles.js';
import { Stack } from '@mui/material';

import { EmailField } from 'components/Forms/EmailField/EmailField.js';
import { PasswordField } from 'components/Forms/PasswordField/PasswordField.js';

import { useHandleSubmit, useHandleInputChange, useHandleClickShowPassword, useHandleMouseDownPassword } from 'hooks/useFormUtils.js';

const initialValues = {
  email: '',
  password: '',
  showPassword: false,
};

export default function LoginForm() {
  const dispatch = useDispatch();
  

  
  const [values, handleSubmit, setValues] = useHandleSubmit(
    initialValues,
    (values) => dispatch(logIn(values)) 
  );




  const handleInputChange = useHandleInputChange(setValues);
  const handleClickShowPassword = useHandleClickShowPassword(setValues);
  const handleMouseDownPassword = useHandleMouseDownPassword();

  const handleEmailChange = (e) => {
    handleInputChange(e, setValues);
  };

  const handlePasswordChange = (e) => {
    handleInputChange(e, setValues);
  };

  return (
    <Stack
      sx={{ alignItems: 'center' }}
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <EmailField value={values.email} onChange={handleEmailChange} />
      <PasswordField
        value={values.password}
        onChange={handlePasswordChange}
        showPassword={values.showPassword}
        onClickToggle={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
      />
      <StyledButton type="submit">Log In</StyledButton>
    </Stack>
  );
}
