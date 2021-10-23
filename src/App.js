import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Buy butter' },
    { id: 2, completed: false, title: 'Buy bread' },
    { id: 3, completed: false, title: 'Buy meat' },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    // removeTodo: removeTodo
    // if key and value are the same
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Todo List</h1>

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No Todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
