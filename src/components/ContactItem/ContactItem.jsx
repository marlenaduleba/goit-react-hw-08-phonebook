import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations.js';
//import PropTypes from 'prop-types';
import { Button, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { DeleteButton } from 'styles/styles.js';

import { toast } from 'react-toastify';
import { selectError } from 'redux/contacts/selectors.js';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.info(`${contact.name} removed from your contacts.`);
  };

  if (error) {
    toast.error(`ERROR`);
    return (
      <h2 className="text" style={{ fontSize: '40px' }}>
        ERROR
      </h2>
    );
  }

  return (
    <ListItem
      secondaryAction={
        <Button
        variant='delete'
          edge="end"
          aria-label="delete contact"
          onClick={handleDelete}
          type="button"
         
        >
          Delete
        </Button>
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
