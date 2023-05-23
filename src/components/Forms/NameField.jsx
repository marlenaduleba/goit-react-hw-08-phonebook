import { Input, InputLabel } from '@mui/material';
import { StyledFormControl } from 'styles/styles.js';

export const NameField = ({ value, onInputChange }) => {
  const handleNameChange = e => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  return (
    <StyledFormControl required fullWidth>
      <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
      <Input
        id="standard-adornment-name"
        type="text"
        name="name"
        value={value}
        onChange={handleNameChange}
  
        inputProps={{
          pattern: "[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż\\-' ]+",
          title:
            'Only letters, apostrophe, dash, spaces, and Polish characters are allowed',
        }}
      />
    </StyledFormControl>
  );
};
