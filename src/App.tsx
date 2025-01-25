import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import useTodos from './hooks/useTodos';

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className='container'>
      <p>todos</p>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={filteredTodos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
      <Footer
        totalTodos={todos.length}
        completedTodos={completedCount}
        activeTodos={activeCount}
        onClearCompleted={clearCompleted}
        onFilterChange={setFilter}
      />
    </div>
  );
};

export default App;