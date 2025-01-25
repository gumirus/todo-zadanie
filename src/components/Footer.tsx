import React from 'react';

interface FooterProps {
  totalTodos: number;
  completedTodos: number;
  activeTodos: number;
  onClearCompleted: () => void;
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
}

  const Footer: React.FC<FooterProps> = ({ totalTodos, completedTodos, onClearCompleted, onFilterChange }) => {
  const activeTodos = totalTodos - completedTodos;

  return (
  <footer style = {footerStyle}>
  <span>{activeTodos} item{activeTodos !== 1?'s': ''} left</span>
  <div style = {filterStyle}>
  <button onClick = {() => onFilterChange('all') }>All</button>
  <button onClick = {() => onFilterChange('active') }>Active</button>
  <button onClick = {() => onFilterChange('completed') }>Completed</button>
  </div>
  <button onClick = {onClearCompleted} style = {clearButtonStyle}>Clear completed</button>
  </footer>
  );
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
