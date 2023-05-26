import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';

export const Section = ({ title, children }) => {
  return (
    <Stack
      component="section"
      sx={{ margin: '0 auto 32px', maxWidth: '450px' }}
    >
      <Typography variant="h4" version="title" component="h2">
        {title}
      </Typography>
      {children}
    </Stack>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
