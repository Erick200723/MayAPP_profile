import React from 'react';
import Header from '../components/Header';
import SkillCard from '../components/SkillCard';

const SkillScreen: React.FC = () => {
  const skills = [
    { skill: 'JavaScript', level: 90 },
    { skill: 'React', level: 85 },
    { skill: 'Node.js', level: 70 },
    { skill: 'CSS', level: 80 },
  ];

  return (
    <div className="container">
      <img src="/profile.jpg" alt="Erick Gabriel" className="profile-pic" />
      <Header name="Erick Gabriel Araújo Leandro" />
      <div className="skills">
        {skills.map((s, index) => (
          <SkillCard key={index} skill={s.skill} level={s.level} />
        ))}
      </div>
    </div>
  );
};

export default SkillScreen;