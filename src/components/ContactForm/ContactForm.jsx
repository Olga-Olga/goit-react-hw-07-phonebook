import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/slice';
import { StyledInput, StyledButton, StyledForm } from './ContactForm.styled';
import { addContacts } from 'redux/operations';

export const ContactsForm = () => {
  const mylist = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (mylist.some(el => el.name === name)) {
      alert('need unique name');
      return;
    }
    dispatch(addContacts({ id: nanoid(), name, number }));
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      {/* <div>Name</div> */}
      <StyledInput
        onChange={handleChangeInput}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      {/* <div>Number</div> */}
      <StyledInput
        onChange={handleChangeInput}
        type="tel"
        name="number"
        placeholder="Enter number"
        value={number}
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <StyledButton>Add contact</StyledButton>
    </StyledForm>
  );
};
