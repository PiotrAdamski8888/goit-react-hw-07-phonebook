import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../../redux/contactsSlice';
import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contactsStatus = useSelector(state => state.contacts.status);

  useEffect(() => {
    if (contactsStatus === 'idle') {
      dispatch(fetchContacts());
    }
  }, [contactsStatus, dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
