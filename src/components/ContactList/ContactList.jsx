import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFilteredContacts } from 'redux/contacts/selectors.js';
import { selectError } from 'redux/contacts/selectors.js';
import { StyledList } from 'styles/styles.js';

import { toast } from 'react-toastify';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);

  if (error) {
    toast.info(`Error`);
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
      <StyledList sx={{  }}>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </StyledList>
    </div>
  );
};
