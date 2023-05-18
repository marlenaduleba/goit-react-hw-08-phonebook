import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFilteredContacts } from 'redux/contacts/selectors.js';
import { selectError } from 'redux/contacts/selectors.js';
import { List } from '@mui/material';

import { Notify } from 'notiflix';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);

  if (error) {
    Notify.info(`Error`);
    return (
      <h2 className="text" style={{ fontSize: '40px' }}>
        ERROR
      </h2>
    );
  }

  if (filteredContacts.length === 0) {
    return <></>;
  }

  return (
    <div>
      <List   sx={{ width: '100%', marginTop: 2}}>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </List>
    </div>
  );
};
