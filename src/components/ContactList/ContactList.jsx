import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from 'redux/operations';
import {
  StyledBox,
  StyledItem,
  StyleContact,
  SlyledDotSeperator,
} from './ContactList.styled';
import { selectContacts, selectFilter } from 'redux/selector';

const ContactList = () => {
  const mylist = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredList = () => {
    return mylist.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDelete = id => {
    dispatch(removeContacts(id));
  };

  return (
    <StyledBox>
      {filteredList().length ? (
        filteredList().map(el => (
          <StyledItem key={el.id}>
            <div>{el.name}</div>
            <SlyledDotSeperator></SlyledDotSeperator>
            <StyleContact>
              <div> {el.phone} </div>
              <button name="delete" onClick={() => onDelete(el.id)}>
                Delete
              </button>
            </StyleContact>
          </StyledItem>
        ))
      ) : (
        <h2>Empty list</h2>
      )}
    </StyledBox>
  );
};

export default ContactList;
