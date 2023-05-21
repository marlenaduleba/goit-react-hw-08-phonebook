//import PropTypes from 'prop-types';
import { Typography, Stack } from '@mui/material';


export const Section = ({ title, children }) => {
  return (
    <Stack component="section"  sx={{ margin: '0 auto', maxWidth: '50ch'}} >
      <Typography variant="h4" component="h2" align='center' sx={{marginBottom: 3}}>
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
