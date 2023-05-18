import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { register } from 'redux/auth/operations.js';
import { useReducer } from 'react';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'reset':
      return { ...action.payload };
    default:
      return state;
  }
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [{ name, email, password }, dispatchReducer] = useReducer(reducer, initialValues);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
      dispatchReducer({type: 'reset', payload: initialValues});
  };

  const handleInputChange = (e) => {
    const {name, value} = e.currentTarget;
    dispatchReducer({type: name, payload: value})
  }

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" value={name} onChange={handleInputChange}  />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email"  value={email} onChange={handleInputChange} />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password"  value={password} onChange={handleInputChange} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
