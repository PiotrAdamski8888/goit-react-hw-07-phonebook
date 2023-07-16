import { createSlice } from '@reduxjs/toolkit';

export const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (state, action) => action.payload,
  },
});

export const { filterContact } = contactsFilterSlice.actions;
