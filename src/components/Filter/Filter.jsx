import React from 'react';
import { useDispatch } from 'react-redux';
import { filterChanges } from 'redux/slice';

const Filter = ({ value, onChangeFilterValue }) => {
  const dispatch = useDispatch();

  onChangeFilterValue = e => {
    dispatch(filterChanges(e.target.value));
  };

  return (
    <div>
      <input onChange={onChangeFilterValue} value={value}></input>
    </div>
  );
};
export default Filter;
