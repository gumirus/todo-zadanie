import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import useTodos from './hooks/useTodos';


const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div>
      <h1>todos</h1>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
      <Footer totalTodos={todos.length} />
    </div>
  );
};

export default App;
