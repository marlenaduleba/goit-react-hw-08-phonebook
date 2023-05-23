import { useDispatch } from 'react-redux';
import { StyledButton } from 'styles/styles.js';
import { Stack } from '@mui/material';

import {
  useHandleSubmit,
  useHandleInputChange,
  useHandleClickShowPassword,
} from 'hooks/useFormUtils.js';
import { register } from 'redux/auth/operations.js';

import { EmailField } from 'components/Forms/EmailField.jsx';
import { PasswordField } from 'components/Forms/PasswordField.jsx';
import { UsernameField } from './UsernameField.jsx';

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

  const handleUsernameChange = e => {
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
      
    >
      <UsernameField value={values.name} onChange={handleUsernameChange} />
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



