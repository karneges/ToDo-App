/* eslint-disable react/prop-types */
import React from 'react';

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'black'
  };
  return (
    <span style = {style}>{ label }</span>
  );
};

export default TodoListItem;
