import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import { StyledTypography } from 'styles/styles.js';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Phonebook App</title>
      </Helmet>
      <Box>
        <StyledTypography variant="h1">welcome to</StyledTypography>
        <StyledTypography variant="h1">Phonebook</StyledTypography>
       
      </Box>
    </>
  );
}
