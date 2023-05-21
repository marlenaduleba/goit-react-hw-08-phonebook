import { Input, InputLabel } from '@mui/material';
import { Notify } from 'notiflix';
import { StyledFormControl } from 'styles/styles.js';


export const NumberField = ({ value, onInputChange }) => {
    const handleNumberChange = e => {
      const { name, value } = e.target;
      onInputChange(name, value);
    };
  
    const isValidPhoneNumber = phoneNumber => {
      const phoneNumberRegex = /^\+?[0-9 ()-]+$/;
      return phoneNumberRegex.test(phoneNumber);
    };
  
    const handleBlur = e => {
      const { value } = e.target;
      if (value && !isValidPhoneNumber(value)) {
        Notify.failure('Invalid phone number format');
      }
    };
  
    return (
      <StyledFormControl required autoComplete="off" fullWidth>
        <InputLabel htmlFor="standard-adornment-number">Number</InputLabel>
        <Input
          id="standard-adornment-number"
          type="tel"
          name="number"
          value={value}
          onChange={handleNumberChange}
          onBlur={handleBlur}
          autoComplete="off"
        />
      </StyledFormControl>
    );
  };
