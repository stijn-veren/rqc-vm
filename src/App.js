import TodoList from './Todo/TodoList';

function App() {
  const todos = [
    { id: 1, completed: false, title: 'Buy butter' },
    { id: 2, completed: false, title: 'Buy bread' },
    { id: 3, completed: false, title: 'Buy meat' },
  ];

  return (
    <div className="wrapper">
      <h1>Todo List</h1>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
