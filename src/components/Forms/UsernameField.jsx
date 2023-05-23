import { Input, InputLabel } from '@mui/material';
import { StyledFormControl } from 'styles/styles.js';

export const UsernameField = ({ value, onChange }) => (
  <StyledFormControl required fullWidth>
    <InputLabel shrink htmlFor="standard-adornment-username">Username</InputLabel>
    <Input
      id="standard-adornment-username"
      type="text"
      name="usernameInput"
      value={value}
      onChange={onChange}
      
     
    />
  </StyledFormControl>
);
