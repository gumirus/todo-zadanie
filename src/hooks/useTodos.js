import { useState } from 'react';
const useTodos = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Тестовое задание', completed: false },
        { id: 2, text: 'Прекрасный код', completed: true },
        { id: 3, text: 'Покрытие тестами', completed: false }
    ]);
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };
    return { todos, addTodo, toggleTodo, deleteTodo, clearCompleted };
};
export default useTodos;
