import React from 'react';
import Header from '../components/Header';
import LinkCard from '../components/LinkCard';

const MainScreen: React.FC = () => {
  const links = [
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/erick-gabriel/' },
    { title: 'GitHub', url: 'https://github.com/erick-gabriel' },
    { title: 'Email', url: 'mailto:erick@example.com' },
  ];

  return (
    <div className="container">
      <img src="/profile.jpg" alt="Erick Gabriel" className="profile-pic" />
      <Header name="Erick Gabriel Araújo Leandro" />
      <div className="links">
        {links.map((link, index) => (
          <LinkCard key={index} title={link.title} url={link.url} />
        ))}
      </div>
    </div>
  );
};

export default MainScreen;