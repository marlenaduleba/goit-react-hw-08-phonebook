import { useDispatch } from 'react-redux';
import { StyledButton } from 'styles/styles.js';
import { Stack } from '@mui/material';

import { useHandleSubmit, useHandleInputChange, useHandleClickShowPassword } from 'hooks/useFormUtils.js';
import { register } from 'redux/auth/operations.js';

import { EmailField } from 'components/Forms/EmailField/EmailField.js';
import { PasswordField } from 'components/Forms/PasswordField/PasswordField.js';
import { NameField } from '../NameField/NameField.js';

const initialValues = {
  name: '',
  email: '',
  password: '',
  showPassword: false,
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [values, handleSubmit, setValues] = useHandleSubmit(
    initialValues,
    values => dispatch(register(values))
  );

  const handleInputChange = useHandleInputChange(setValues);
  const handleClickShowPassword = useHandleClickShowPassword(setValues);

  const handleNameChange = e => {
    handleInputChange(e, setValues);
  };

  const handleEmailChange = e => {
    handleInputChange(e, setValues);
  };

  const handlePasswordChange = e => {
    handleInputChange(e, setValues);
  };

  return (
    <Stack
      sx={{ alignItems: 'center' }}
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <NameField value={values.name} onChange={handleNameChange} />
      <EmailField value={values.email} onChange={handleEmailChange} />
      <PasswordField
        value={values.password}
        onChange={handlePasswordChange}
        showPassword={values.showPassword}
        onClickToggle={handleClickShowPassword}
        onMouseDown={() => {}}
      />
      <StyledButton type="submit">Register</StyledButton>
    </Stack>
  );
};
