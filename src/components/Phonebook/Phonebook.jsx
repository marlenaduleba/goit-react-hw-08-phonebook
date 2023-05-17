// import { Section } from 'components/Section/Section';
// import { Filter } from 'components/Filter/Filter';
// import  {ContactForm}  from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { useSelector } from 'react-redux';
// import { selectContacts, selectIsLoading } from 'redux/selectors';
// import Loader from 'components/Loader/Loader';
// import { Container, Typography } from '@mui/material';


// export const Phonebook = () => {
//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);

//   return (
//     <Container maxWidth='sm' sx={{paddingBottom: 10}}  >
     
//         <Section title="Phonebook">
//           <ContactForm />
//            {isLoading && <Loader  />}
//         </Section>
//         <Section title="Contacts">
      
//           {contacts.length > 0 ? (
//             <Filter />
//           ) : (
//             <Typography align='center'>
//               Looks like you don`t have any contacts yet or just clear them all.
//               Please add new contact.
//             </Typography>
//           )}
//           <ContactList />
      
//         </Section>
     
//     </Container>
//   );
// };
