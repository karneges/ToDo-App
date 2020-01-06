import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import './add-panel';

const AddPanel = ({ onAdd }) => {
  return (
    <div className="d-flex add-panel">
      <input type="text"
        className="form-control add-panel"
        placeholder="Whats need to be done?" />
      <button type="button"
        onClick={onAdd}
        className="btn btn-outline-secondary">
                Add
      </button>
    </div>

  );
};
export default AddPanel;
