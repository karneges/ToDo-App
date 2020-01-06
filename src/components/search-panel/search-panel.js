import React from 'react';

import './search-panel.css';
class SearchPanel extends React.Component {
  constructor () {
    super();
    this.onSearch = (e) => {
this.props.onSearch(e.target.value)
    };
  }

  render () {
    return (
      <input type="text"
        onChange = {this.onSearch}
        className="form-control search-input"
        placeholder="type to search" />
    );
  };
}
export default SearchPanel;

// 1)Повесить обработчик события на ввод в инпут
// Обработчик должен уметь запускать фильтрацию массива ,но всегда
// помнить изначальное состояние
