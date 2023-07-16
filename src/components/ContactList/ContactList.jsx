import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contactsSlice';
import { selectContacts, selectFilterValue } from 'redux/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={`${css.contactList} ${css.noPadding}`}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactListItem}>
          {contact.name}:&nbsp;&nbsp;&nbsp;{contact.phone}
          <button
            type="button"
            className={css.contactListItemBtn}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
