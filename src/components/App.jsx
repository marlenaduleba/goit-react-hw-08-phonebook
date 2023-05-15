import { useEffect } from 'react';
import { Container } from '@mui/system';
import { Phonebook } from './Phonebook/Phonebook';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import AppBar from './AppBar/AppBar.jsx';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <AppBar/>
      <Phonebook />
    </ Container>
  );
};
