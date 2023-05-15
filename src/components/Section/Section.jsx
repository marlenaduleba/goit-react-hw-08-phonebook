import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.section} >
      <Typography variant="h4" component="h2">
  {title}
</Typography>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
