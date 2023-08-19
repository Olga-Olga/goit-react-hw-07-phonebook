import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/slice';

const ContactList = () => {
  const mylist = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredList = () => {
    return mylist.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <div>
      {filteredList().map(el => (
        <li key={el.id}>
          {el.name} {el.number}
          <span> </span>
          <button name="delete" onClick={() => onDelete(el.id)}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default ContactList;
