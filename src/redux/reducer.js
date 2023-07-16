import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
