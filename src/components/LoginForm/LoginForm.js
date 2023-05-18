import { logIn } from 'redux/auth/operations.js';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { useReducer } from 'react';

const initialValues = {
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
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

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [{ email, password }, dispatchReducer] = useReducer(reducer, initialValues);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email,
        password,
      })
    );
    dispatchReducer({type: 'reset', payload: initialValues});
  };


  const handleInputChange = e => {
    const {name, value} = e.target;
    dispatchReducer({type: name, payload: value});
  }

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" value={email} onChange={handleInputChange} />
      </label>

      <label className={css.label}>
        Password
        <input type="password" name="password" value={password} onChange={handleInputChange} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
