import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { createContact } from 'redux/contactsSlice';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    const { name, number } = formData;
    if (name && number) {
      dispatch(
        createContact({
          id: nanoid(),
          name,
          number,
        })
      );
      setFormData({
        name: '',
        number: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className={css.contactForm}>
      <label className={css.formLabel}>
        Name:
        <input
          className={css.formInput}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label className={css.formLabel}>
        Number:
        <input
          className={css.formInput}
          type="text"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
