import { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations.js';
import { selectError } from 'redux/contacts/selectors.js';
import { selectAllContacts } from 'redux/contacts/selectors.js';
import { Notify } from 'notiflix';
import { Stack } from '@mui/material';
import { StyledButton } from 'styles/styles.js';
import { NameField } from './NameField.js';
import { NumberField } from '../NumberField.js';


const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {



  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const error = useSelector(selectError);
  const [values, setValues] = useState(initialValues);

  const handleFormSubmit = e => {
    e.preventDefault();

    if (nameUnique(values.name)) {
      dispatch(addContact(values));
      Notify.success(`${values.name} added to your contacts.`);
      setValues(initialValues);
    }
  };

  const nameUnique = newName => {
    const searchUnique = newName.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === searchUnique)) {
      Notify.failure(`${newName} is already in contacts.`);
      return false;
    }
    return true;
  };

  const handleInputChange = (fieldName, value) => {
    setValues(prevValues => ({ ...prevValues, [fieldName]: value }));
  };

  if (error) {
    Notify.error(`ERROR`);
    return null;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Stack spacing={4} sx={{ margin: '0 auto', alignItems: 'center' }}>
        <NameField value={values.name} onInputChange={handleInputChange} />
        <NumberField value={values.number} onInputChange={handleInputChange} />
        <StyledButton type="submit">Add Contact</StyledButton>
      </Stack>
    </form>
  );
};
