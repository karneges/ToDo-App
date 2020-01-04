import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/Serach-panel';

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Make Awesome App', important: true },
    { label: 'Have a Lunch', important: false }
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos = {todoData}/>
    </div>
  );
};
ReactDOM.render(<App />,
  document.getElementById('root'));
