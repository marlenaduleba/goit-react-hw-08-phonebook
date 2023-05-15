import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import  {ContactForm}  from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import Loader from 'components/Loader/Loader';
import { Container } from '@mui/material';

import css from './Phonebook.module.css';
import Form from 'components/Form/Form.jsx';

export const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container maxWidth='sm' >
     
        <Section title="Phonebook">
          <Form/>
          <ContactForm />
           {isLoading && <Loader  />}
        </Section>
        <Section title="Contacts">
      
          {contacts.length > 0 ? (
            <Filter />
          ) : (
            <p className={css.message}>
              Looks like you don`t have any contacts yet or just clear them all.
              Please add new contact.
            </p>
          )}
          <ContactList />
      
        </Section>
     
    </Container>
  );
};
