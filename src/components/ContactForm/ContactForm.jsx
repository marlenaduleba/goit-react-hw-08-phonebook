import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts, selectError} from 'redux/selectors';
import { useReducer } from 'react';
import { Notify } from 'notiflix';
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  phone: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'number':
      return { ...state, phone: action.payload };
    case 'reset':
      return { ...action.payload };
    default:
      return state;
  }
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
 
  

  const [{name, phone}, dispatchReducer] = useReducer(reducer, initialValues);

  const handleFormSubmit = e => {
    e.preventDefault();

    if (nameUnique(name)) {
      dispatch(addContact({name, phone}));
      Notify.success(`${name} added to your contacts.`)
    }

    dispatchReducer({ type: 'reset', payload: initialValues });
  };

  const nameUnique = newName => {
    const searchUnique = newName.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === searchUnique)) {
      Notify.failure(`${newName} is already in contacts.`);
      return false;
    }
    return true;
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    dispatchReducer({ type: name, payload: value });
  };

  if (error) {
    Notify.error(`ERROR`);
      return;
  }

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z\\u0080-\\uFFFF]+(([\\' -][a-zA-Z\\u0080-\\uFFFF ])?[a-zA-Z\\u0080-\\uFFFF]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleInputChange}
          required
        />
      </label>

      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
          onChange={handleInputChange}
          required
        />
      </label>
      <button className={css.btn} type="submit">
       Add Contact
      </button>
    </form>
  );
};
