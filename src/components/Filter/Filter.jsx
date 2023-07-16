import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/contactsSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.filterContainer}>
      <label className={css.filterLabel}>
        Find contacts by name:
        <input
          className={css.filterName}
          type="text"
          value={filterValue}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};
