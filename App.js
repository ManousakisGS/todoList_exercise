import React, {Component} from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

class App extends Component {
  render() {
  return (
    <div className='App'>
      <h1 className='header'> To-Do List of Activities </h1>
      <AddTodo/>
      <TodoList/>
    </div>
  );
}
}

export default App;
