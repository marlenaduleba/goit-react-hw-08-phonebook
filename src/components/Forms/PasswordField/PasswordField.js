import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import { StyledFormControl } from "styles/styles.js";


export const PasswordField = ({ value, onChange, showPassword, onClickToggle, onMouseDown }) => (
    <StyledFormControl required autoComplete="off" fullWidth>
      <InputLabel htmlFor="standard-adornment-password">
        Password
      </InputLabel>
      <Input
        id="standard-adornment-password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={value}
        onChange={onChange}
        autoComplete="off"
       
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClickToggle}
              onMouseDown={onMouseDown}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </StyledFormControl>
  );

