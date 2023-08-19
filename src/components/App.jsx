import { styled } from 'styled-components';
import ContactList from './ContactList/ContactList';
import { ContactsForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledDiv>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Filter</h2>
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </StyledDiv>
  );
};

export const StyledDiv = styled.div`
  margin: 0 auto;
  padding: 20px 80px;
`;
