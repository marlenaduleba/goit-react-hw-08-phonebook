import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations.js';
import { selectError } from 'redux/contacts/selectors.js';
import { selectAllContacts } from 'redux/contacts/selectors.js';
import { useReducer } from 'react';
import { Notify } from 'notiflix';
import { TextField, Stack, Button } from '@mui/material';
import { StyledButton } from 'styles/styles.js';


const initialValues = {
  name: '',
  number: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'number':
      return { ...state, number: action.payload };
    case 'reset':
      return { ...action.payload };
    default:
      return state;
  }
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const error = useSelector(selectError);

  const [{ name, number }, dispatchReducer] = useReducer(reducer, initialValues);

  const handleFormSubmit = e => {
    e.preventDefault();

    if (nameUnique(name)) {
      dispatch(addContact({ name, number }));
      Notify.success(`${name} added to your contacts.`);
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
    const { name, value } = e.target;
    dispatchReducer({ type: name, payload: value });
  };

  if (error) {
    Notify.error(`ERROR`);
    return;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Stack spacing={4} sx={{ margin: '0 auto', alignItems: 'center' }}>
        <TextField
          id="name"
          label="Name"
          variant="standard"
          type="text"
          name="name"
          inputProps={{
            pattern: "^[a-zA-ZÀ-ÿ]+(([' -][a-zA-ZÀ-ÿ ])?[a-zA-ZÀ-ÿ]*)*$",
          }}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleInputChange}
          required
          fullWidth
        
        />

        <TextField
          id="number"
          label="Number"
          variant="standard"
          type="tel"
          name="number"
          inputProps={{
            pattern:
              '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
          }}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleInputChange}
          required
          fullWidth
  
        />

        <StyledButton type="submit" >
          Add Contact
        </StyledButton>
      </Stack>
    </form>
  );
};