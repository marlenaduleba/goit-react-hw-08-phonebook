import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/slice.js';
import { selectFilter } from 'redux/contacts/selectors.js';
import { TextField, Stack } from '@mui/material';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Stack>
      <TextField
        label="Find contacts by name"
        type="search"
        variant="standard"
        value={filter}
        name="filter"
        onChange={handleFilter}
      />
    </Stack>
  );
};
