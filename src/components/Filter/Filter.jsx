import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { getFilteredContacts } from 'redux/slices/filtersSlice.js';

import { FilterInput, FilterWrap } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const value = event.target.value.trim();

    dispatch(getFilteredContacts(value));
  };

  return (
    <FilterWrap>
      <FilterInput
        onChange={onChange}
        name="filter"
        type="filter"
        value={filter}
      ></FilterInput>
    </FilterWrap>
  );
};
