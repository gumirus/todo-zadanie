import React from 'react';
import { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleTodo, onDeleteTodo }) => {
  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
