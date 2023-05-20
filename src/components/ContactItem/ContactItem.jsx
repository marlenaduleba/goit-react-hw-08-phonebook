import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations.js';
//import PropTypes from 'prop-types';
import { ListItem, Button, ListItemButton, ListItemText } from '@mui/material';
import { DeleteButton } from 'styles/styles.js';

import { Notify } from 'notiflix';
import { selectError } from 'redux/contacts/selectors.js';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    Notify.info(`${contact.name} removed from your contacts.`);
  };

  if (error) {
    Notify.error(`ERROR`);
    return (
      <h2 className="text" style={{ fontSize: '40px' }}>
        ERROR
      </h2>
    );
  }

  return (
    <ListItem
      secondaryAction={
        <DeleteButton
          edge="end"
          aria-label="delete contact"
          onClick={handleDelete}
          type="button"
         
        >
          Delete
        </DeleteButton>
      }
      disablePadding
    >
      <ListItemButton role="undefined" dense>
        <ListItemText  primary={contact.name}  sx={{flexBasis: '20%'}} />
        <ListItemText secondary={contact.number} sx={{flexBasis: '50%'}} />
      </ListItemButton>
    </ListItem>
  );
};

// ContactItem.propTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
//   }).isRequired,
// };
