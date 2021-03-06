import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state =   {
      todo: [],
  }
  createTodo    =   (value)  =>  {
      let newTodo = this.state.todo;
      newTodo.push({
          task: value,
          id: Date.now(),
          completed: false
      })
      this.setState((state) =>  ({
          todo: newTodo
      }))
      document.querySelector("input").value = "";
  }
  completeTask  =   (value) =>  {
      let newTodo = this.state.todo;
      newTodo = newTodo.map((todo)  =>  {
          if(value.id === todo.id)  {
              todo.completed = true;
              return todo;
          } else {
              return todo;
          }
      })
      this.setState((state)  =>  ({
          todo: newTodo
      }))
  }
  clearComplete = ()   =>  {
      let newTodo = this.state.todo;
      newTodo = newTodo.filter((todo)  =>  {
          return todo.completed === false;
      })
      this.setState((state) =>  ({
          todo: newTodo
      }))
  }
  render() {
    return (
      <div>
        <TodoList todo={this.state.todo} clickComplete={this.completeTask} />
        <TodoForm clickAdd={this.createTodo} clearComplete={this.clearComplete} />
      </div>
    );
  }
}

export default App;
