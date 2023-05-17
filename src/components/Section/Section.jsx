//import PropTypes from 'prop-types';
import { Typography, Stack } from '@mui/material';


export const Section = ({ title, children }) => {
  return (
    <Stack component="section"  sx={{paddingLeft: 5, paddingRight: 5, marginBottom: 5}} >
      <Typography variant="h4" component="h2" align='center' >
  {title}
</Typography>
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
