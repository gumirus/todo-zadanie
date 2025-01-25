import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
const TodoInput = ({ onAddTodo }) => {
    const [text, setText] = useState('');
    const handleAddTodo = () => {
        if (text.trim()) {
            onAddTodo(text);
            setText('');
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };
    return (_jsx("div", { children: _jsx("input", { className: "inputField", type: "text", value: text, onChange: (e) => setText(e.target.value), placeholder: "What needs to be done?", onKeyDown: handleKeyPress }) }));
};
export default TodoInput;
