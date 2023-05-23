import React from 'react';
import { Input, InputLabel } from '@mui/material';
import { StyledFormControl } from 'styles/styles.js';

export const NumberField = ({ value, onInputChange }) => {
  const handleNumberChange = e => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  return (
    <StyledFormControl required fullWidth>
      <InputLabel htmlFor="standard-adornment-number">Number</InputLabel>
      <Input
        id="standard-adornment-number"
        type="tel"
        name="number"
        value={value}
        onChange={handleNumberChange}
  
        inputProps={{
          pattern: "^[+]?[0-9 \\u0028\\u0029\\u002D]*$",
          title: "Phone number must consist of digits and may include spaces, dashes, and parentheses. It can start with '+'",
        }}
      />
    </StyledFormControl>
  );
};