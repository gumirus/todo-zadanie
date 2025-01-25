import React from 'react';

interface FooterProps {
  totalTodos: number;
}

const Footer: React.FC<FooterProps> = ({ totalTodos }) => {
  return <footer>Total Todos: {totalTodos}</footer>;
};

export default Footer;
