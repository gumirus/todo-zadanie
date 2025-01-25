import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import useTodos from './hooks/useTodos';
const App = () => {
    const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();
    const [filter, setFilter] = useState('all');
    const filteredTodos = todos.filter(todo => {
        if (filter === 'active')
            return !todo.completed;
        if (filter === 'completed')
            return todo.completed;
        return true;
    });
    const completedCount = todos.filter(todo => todo.completed).length;
    const activeCount = todos.length - completedCount;
    return (_jsxs("div", { className: 'container', children: [_jsx("p", { children: "todos" }), _jsx(TodoInput, { onAddTodo: addTodo }), _jsx(TodoList, { todos: filteredTodos, onToggleTodo: toggleTodo, onDeleteTodo: deleteTodo }), _jsx(Footer, { totalTodos: todos.length, completedTodos: completedCount, activeTodos: activeCount, onClearCompleted: clearCompleted, onFilterChange: setFilter })] }));
};
export default App;
