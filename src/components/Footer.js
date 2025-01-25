import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const Footer = ({ totalTodos, completedTodos, onClearCompleted, onFilterChange }) => {
    const activeTodos = totalTodos - completedTodos;
    return (_jsxs("footer", { style: footerStyle, children: [_jsxs("span", { className: 'itemsLeft', children: [activeTodos, " item", activeTodos !== 1 ? 's' : '', " left"] }), _jsxs("div", { style: filterStyle, children: [_jsx("button", { onClick: () => onFilterChange('all'), children: "All" }), _jsx("button", { onClick: () => onFilterChange('active'), children: "Active" }), _jsx("button", { onClick: () => onFilterChange('completed'), children: "Completed" })] }), _jsx("button", { onClick: onClearCompleted, style: clearButtonStyle, children: "Clear completed" })] }));
};
const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderTop: '1px solid #e6e6e6',
    backgroundColor: '#f9f9f9',
};
const filterStyle = {
    display: 'flex',
    gap: '10px',
};
const clearButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#f56262',
    cursor: 'pointer',
};
export default Footer;
