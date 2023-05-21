import { Input, InputLabel } from '@mui/material';
import { StyledFormControl } from 'styles/styles.js';

export const UsernameField = ({ value, onChange }) => (
  <StyledFormControl required autoComplete="off" fullWidth>
    <InputLabel htmlFor="standard-adornment-name">Username</InputLabel>
    <Input
      id="standard-adornment-name"
      type="text"
      name="name"
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  </StyledFormControl>
);
