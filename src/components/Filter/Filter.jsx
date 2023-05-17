import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';
import { TextField, Stack } from '@mui/material';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  
  };

  return (
    <Stack >
     
       
        <TextField
          label="Find contacts by name"
          type="search"
          variant='standard'
          value={filter}
          name="filter"
          onChange={handleFilter}
        />
     
    </Stack>
  );
};


