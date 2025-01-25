import { jsx as _jsx } from "react/jsx-runtime";
import TodoItem from './TodoItem';
const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
    return (_jsx("ul", { children: todos.map((todo) => (_jsx(TodoItem, { todo: todo, onToggleTodo: onToggleTodo, onDeleteTodo: onDeleteTodo }, todo.id))) }));
};
export default TodoList;
