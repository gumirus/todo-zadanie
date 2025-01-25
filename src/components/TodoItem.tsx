import React from 'react';
import { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleTodo, onDeleteTodo }) => {
  return (
    <li className="todoItem">
      <div
        onClick={() => onToggleTodo(todo.id)}
        className={`checkbox ${todo.completed ? 'completed' : ''}`}  
      >
        <span className={`checkmark ${todo.completed ? 'show' : ''}`}>
          ✔
        </span>
      </div>
      <span
        onClick={() => onToggleTodo(todo.id)}
        className={`todoText ${todo.completed ? 'completed' : ''}`}  
      >
        {todo.text}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)} className="deleteButton">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
