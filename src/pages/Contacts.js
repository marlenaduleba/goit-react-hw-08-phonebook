
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations.js';
import { selectLoading } from 'redux/contacts/selectors.js';
import { Helmet } from 'react-helmet';
import { Container, Typography } from '@mui/material';
import { Section } from 'components/Section/Section.jsx';
import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import Loader from 'components/Loader/Loader.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { ContactList } from 'components/ContactList/ContactList.jsx';
import { selectAllContacts } from 'redux/contacts/selectors.js';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectAllContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Container maxWidth='sm' sx={{paddingBottom: 10}}  >
     
     <Section title="Phonebook">
       <ContactForm />
        {isLoading && <Loader  />}
     </Section>
     <Section title="Contacts">
   
       {contacts.length > 0 ? (
         <Filter />
       ) : (
         <Typography align='center'>
           Looks like you don`t have any contacts yet or just clear them all.
           Please add new contact.
         </Typography>
       )}
       <ContactList />
   
     </Section>
  
 </Container>
      {/* <TaskEditor />
      <div>
        {isLoading && 'Request in progress...'}
      </div>
      <TaskList/> */}
    </>
  );
}