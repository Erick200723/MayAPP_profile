import React from 'react';

interface LinkCardProps {
  title: string;
  url: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="link-card">
    {title}
  </a>
);

export default LinkCard;