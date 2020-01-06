import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './app.css';
import AddPanel from '../add-panel/add-panel';

class App extends React.Component {
  constructor () {
    super();
    this.maxId = 100;
    this.createTodoItem = (label) => {
      return {
        label,
        important: false,
        done: false,
        id: this.maxId++
      };
    };
    this.state = {
      todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make Awesome App'),
        this.createTodoItem('Have a lunch')
      ],
      term: '',
      filter: 'All'
    };
    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);
        const newArray = [...todoData.slice(0, idx),
          ...todoData.slice(idx + 1)];
        return {
          todoData: newArray
        };
      });
    };
    this.addItem = (text) => {
      const newItem = this.createTodoItem(text);
      this.setState((state) => {
        const newArray = [...state.todoData, newItem];
        return {
          todoData: newArray
        };
      });
    };

    this.toggleProperty = (arr, id, propName) => {
      const idx = arr.findIndex((el) => el.id === id);
      const oldItem = arr[idx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName] };
      return [...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)];
    };

    this.onToggleDone = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, 'done')
        };
      });
    };
    this.onToggleImportant = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, 'important')
        };
      });
    };
    this.onSearch = (text, filter = false) => {
      if (!filter) {
        this.setState(({ term }) => {
          return {
            term: text
          };
        });
      } else {
        this.setState((state) => {
          console.log(filter);
          ////Продолжить тут 
          // return {
          //   filter
          // };
        });
      }
    };

    this.Search = (items, term) => {
      if (term.length === 0) {
        return items;
      }
      return items.filter((item) => {
        return item.label.indexOf(term) > -1;
      });
    };
  };

  render () {
    const doneCount = this.state.todoData
      .filter((item) => item.done).length;
    const todoCount = this.state.todoData.length - doneCount;
    const visbleItems = this.Search(this.state.todoData, this.state.term);

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch} />
          <ItemStatusFilter onSearch={this.onSearch}/>
        </div>

        <TodoList
          todos={visbleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <div className="bottom-panel">
          <AddPanel
            onAdd={this.addItem} />
        </div>

      </div>
    );
  };
}
export default App;
