import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts, selectError} from 'redux/selectors';
import { useReducer } from 'react';
import { Notify } from 'notiflix';
import css from './ContactForm.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const initialValues = {
  name: '',
  phone: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'number':
      return { ...state, phone: action.payload };
    case 'reset':
      return { ...action.payload };
    default:
      return state;
  }
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
 
  

  const [{name, phone}, dispatchReducer] = useReducer(reducer, initialValues);

  const handleFormSubmit = e => {
    e.preventDefault();

    if (nameUnique(name)) {
      dispatch(addContact({name, phone}));
      Notify.success(`${name} added to your contacts.`)
    }

    dispatchReducer({ type: 'reset', payload: initialValues });
  };

  const nameUnique = newName => {
    const searchUnique = newName.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === searchUnique)) {
      Notify.failure(`${newName} is already in contacts.`);
      return false;
    }
    return true;
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    dispatchReducer({ type: name, payload: value });
  };

  if (error) {
    Notify.error(`ERROR`);
      return;
  }

  return (
    
      <form className={css.form} onSubmit={handleFormSubmit}>
           <Box sx={{ width: 500, height: 300, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }} >
             <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '100' }}>
             <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
             <Input
            id="standard-adornment-name"
           
            aria-describedby="standard-name-helper-text"
            inputProps={{
              'aria-label': 'name',
            }}
          />
                     </FormControl>
                     <FormControl sx={{ m: 1, width: '100' }} variant="standard">
                       <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                       <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
                       />
                     </FormControl>
           </Box>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Z\u0080-\uFFFF]+(([\' -][a-zA-Z\u0080-\uFFFF ])?[a-zA-Z\u0080-\uFFFF]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <button className={css.btn} type="submit">
         Add Contact
        </button>
      </form>
    
  );
};
