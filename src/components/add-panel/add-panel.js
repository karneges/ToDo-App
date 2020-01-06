import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import './add-panel.css';

class AddPanel extends React.Component {
  constructor () {
    super();
    this.state = {
      label: ''
    };

    this.onLabelChange = (e) => {
      console.log(e.target.value);
      this.setState({
        label: e.target.value
      });
    };
    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.onAdd(this.state.label);
      this.setState({
        label: ''
      });
    };
  }

  render () {
    return (
      <form className="d-flex add-panel"
        onSubmit={this.onSubmit}>
        <input type="text"
          className="form-control add-panel"
          placeholder="Whats need to be done?"
          onChange={this.onLabelChange}
          value={this.state.label}/>
        <button
          className="btn btn-outline-secondary">
          Add
        </button>
      </form>

    );
  };
}
export default AddPanel;
