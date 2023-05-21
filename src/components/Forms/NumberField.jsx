import React from 'react';
import { Input, InputLabel } from '@mui/material';
import { StyledFormControl } from 'styles/styles.js';

export const NumberField = ({ value, onInputChange }) => {
  const handleNumberChange = e => {
    const { name, value } = e.target;
    onInputChange(name, value);
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
        autoComplete="off"
        inputProps={{ pattern: "[0-9]+", title: "Only numbers are allowed" }}
      />
    </StyledFormControl>
  );
};