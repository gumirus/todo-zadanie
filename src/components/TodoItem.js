import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TodoItem = ({ todo, onToggleTodo }) => {
    return (_jsxs("li", { className: "todoItem", children: [_jsx("div", { onClick: () => onToggleTodo(todo.id), className: `checkbox ${todo.completed ? 'completed' : ''}`, children: _jsx("span", { className: `checkmark ${todo.completed ? 'show' : ''}`, children: "\u2714" }) }), _jsx("span", { onClick: () => onToggleTodo(todo.id), className: `todoText ${todo.completed ? 'completed' : ''}`, children: todo.text })] }));
};
export default TodoItem;
