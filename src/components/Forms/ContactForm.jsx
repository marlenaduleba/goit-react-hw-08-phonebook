// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contacts/operations.js';
// import { selectError } from 'redux/contacts/selectors.js';
// import { selectAllContacts } from 'redux/contacts/selectors.js';
// import { toast } from 'react-toastify';
// import { Stack } from '@mui/material';
// import { StyledButton } from 'styles/styles.js';
// import { NameField } from './NameField.jsx';
// import { NumberField } from './NumberField.jsx';

// const initialValues = {
//   name: '',
//   number: '',
// };

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectAllContacts);
//   const error = useSelector(selectError);
//   const [values, setValues] = useState(initialValues);

//   const handleFormSubmit = e => {
//     e.preventDefault();

//     if (nameUnique(values.name)) {
//       dispatch(addContact(values));
//       toast.success(`${values.name} added to your contacts.`);
//       setValues(initialValues);
//     }
//   };

//   const nameUnique = newName => {
//     const searchUnique = newName.toLowerCase();

//     if (contacts.find(({ name }) => name.toLowerCase() === searchUnique)) {
//       toast.error(`${newName} is already in contacts.`);
//       return false;
//     }
//     return true;
//   };

//   const handleInputChange = (fieldName, value) => {
//     setValues(prevValues => ({ ...prevValues, [fieldName]: value }));
//   };

//   if (error) {
//     toast.error(`ERROR`);
//     return null;
//   }

//   return (
//     <Stack
//       sx={{ alignItems: 'center' }}
//       component="form"
//       onSubmit={handleFormSubmit}
//       autoComplete="off"
//     >
//       <NameField value={values.name} onInputChange={handleInputChange} />
//       <NumberField value={values.number} onInputChange={handleInputChange} />
//       <StyledButton type="submit">Add Contact</StyledButton>
//     </Stack>
//   );
// };


import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations.js';
import { selectError } from 'redux/contacts/selectors.js';
import { selectAllContacts } from 'redux/contacts/selectors.js';
import { toast } from 'react-toastify';
import { Input, InputLabel, Stack } from '@mui/material';
import { StyledButton, StyledFormControl } from 'styles/styles.js';


const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const error = useSelector(selectError);
  const [{name, number}, setValues] = useState(initialValues);

  const handleFormSubmit = e => {
    e.preventDefault();

    if (nameUnique(name)) {
      dispatch(addContact({name, number}));
      toast.success(`${name} added to your contacts.`);
      setValues(initialValues);
    }
  };

  const nameUnique = newName => {
    const searchUnique = newName.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === searchUnique)) {
      toast.error(`${newName} is already in contacts.`);
      return false;
    }
    return true;
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };
  
  if (error) {
    toast.error(`ERROR`);
    return null;
  }

  return (
    <Stack
      sx={{ alignItems: 'center' }}
      component="form"
      onSubmit={handleFormSubmit}
      autoComplete="off"
    >
      <StyledFormControl required autoComplete="off" fullWidth>
      <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
      <Input
        id="standard-adornment-name"
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        autoComplete="off"
        inputProps={{
          pattern: "[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż\\-' ]+",
          title:
            'Only letters, apostrophe, dash, spaces, and Polish characters are allowed',
        }}
      />
    </StyledFormControl>
    <StyledFormControl required autoComplete="off" fullWidth>
      <InputLabel htmlFor="standard-adornment-number">Number</InputLabel>
      <Input
        id="standard-adornment-number"
        type="tel"
        name="number"
        value={number}
        onChange={handleInputChange}
        autoComplete="off"
        inputProps={{
          pattern: "^[+]?[0-9 \\u0028\\u0029\\u002D]*$",
          title: "Phone number must consist of digits and may include spaces, dashes, and parentheses. It can start with '+'",
        }}
      />
    </StyledFormControl>
      <StyledButton type="submit">Add Contact</StyledButton>
    </Stack>
  );
};


