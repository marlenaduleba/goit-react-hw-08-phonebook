import { Input, InputLabel } from '@mui/material';
import { StyledFormControl } from 'styles/styles.js';

export const EmailField = ({ value, onChange }) => (
  <StyledFormControl required fullWidth>
    <InputLabel shrink htmlFor="standard-adornment-email">Email</InputLabel>
    <Input
      id="standard-adornment-email"
      type="email"
      name="email"
      value={value}
      onChange={onChange}
      autoComplete='email'
    
      
    />
  </StyledFormControl>
);
