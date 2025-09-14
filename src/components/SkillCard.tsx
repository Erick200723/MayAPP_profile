import React from 'react';

interface SkillCardProps {
  skill: string;
  level: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, level }) => (
  <div className="skill-card">
    <span>{skill}</span>
    <progress value={level} max={100}></progress>
  </div>
);

export default SkillCard;