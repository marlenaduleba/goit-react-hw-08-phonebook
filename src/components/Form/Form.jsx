import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormControlLabel,
  Box,
  Button
} from '@mui/material';

const Form = () => {
  return (
      <form >
    <Box sx={{ width: 500, height: 300, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
          <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Number</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <Button variant="contained"  sx={{margin: '20px auto 0 auto', width: 'max-content'}} >Add contact</Button>
          </FormControl>

    </Box>
      </form>
  );
  
};

export default Form;
