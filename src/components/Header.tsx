import React from 'react';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => (
  <header className="header">
    <h1>{name}</h1>
  </header>
);

export default Header;