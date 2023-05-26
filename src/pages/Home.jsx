import { Helmet } from 'react-helmet-async';
import { Box, Chip, Typography } from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav.jsx';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Phonebook App</title>
      </Helmet>
      <Box sx={{maxWidth: 600, m: '0 auto'}} >
        <Typography variant="h3" version="home" component="h1">
          welcome to <Chip label="Phonebook" color="primary" />
        </Typography>
        <Typography >
          Phonebook is an application designed to keep your contacts in one
          place. After adding your account and logging in, you can add and
          remove contacts, view and filter them and enjoy the design prepared
          especially for you.
        </Typography>
        <AuthNav place='center' />
      </Box>
    </>
  );
}
