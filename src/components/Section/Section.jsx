//import PropTypes from 'prop-types';
import {  Stack } from '@mui/material';
import { StyledTypography } from 'styles/styles.js';


export const Section = ({ title, children }) => {
  return (
    <Stack component="section"  sx={{ margin: '0 auto 32px', maxWidth: '450px'}} >
      <StyledTypography variant="h4" component="h2" >
  {title}
</StyledTypography>
      {children}
    </Stack>
  );
};

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
// };
