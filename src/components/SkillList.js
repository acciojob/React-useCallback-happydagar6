import React from 'react';

// React.memo ensure karega ki yeh faltu mein re-render na ho
const SkillList = React.memo(({ skillsList, onRemoveSkill }) => {
  return (
    <ul id="skill-list">
      {skillsList.map((skillName, index) => (
        <li 
          key={skillName} 
          id={`skill-number-${index}`} 
          onClick={() => onRemoveSkill(skillName)}
          style={{ cursor: 'pointer', marginBottom: '5px' }}
        >
          {skillName}
        </li>
      ))}
    </ul>
  );
});

export default SkillList;