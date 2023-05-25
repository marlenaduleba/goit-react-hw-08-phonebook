import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';


export default function Home() {
  return (
    <>
      <Helmet>
        <title>Phonebook App</title>
      </Helmet>
      <Box>
        <Typography variant="h1">welcome to</Typography>
        <Typography variant="h1">Phonebook</Typography>
       
      </Box>
    </>
  );
}
