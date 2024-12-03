// src/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 25 },
    { name: 'JAVASCRIPT', percentage: 89 },
    { name: 'CSS', percentage: 70 },
    { name: 'PHP', percentage: 66 },
    { name: 'WORDPRESS', percentage: 95 },
    { name: 'JQUERY', percentage: 50 },
    { name: 'ANGULAR', percentage: 65 },
    { name: 'REACT', percentage: 45 }
  ];

  const sectionStyle = {
    backgroundColor: '#000000',
    padding: '4rem 2rem',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const titleStyle = {
    color: '#ffffff',
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    marginBottom: '3rem',
    textAlign: 'center',
  };

  const skillsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '2rem',
    width: '100%',
    maxWidth: '1000px',
  };

  const SkillCircle = ({ name, percentage }) => {
    const size = 120;
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    const skillItemStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    };

    const svgStyle = {
      transform: 'rotate(-90deg)',
    };

    const textStyle = {
      color: '#ffffff',
      fontSize: '0.9rem',
      textAlign: 'center',
      marginTop: '0.5rem',
    };

    const percentageStyle = {
      color: '#FF6600',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };

    const circleContainerStyle = {
      position: 'relative',
      width: `${size}px`,
      height: `${size}px`,
    };

    return (
      <div style={skillItemStyle}>
        <div style={circleContainerStyle}>
          <svg width={size} height={size} style={svgStyle}>
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#333333"
              strokeWidth={strokeWidth}
            />
            {/* Progress circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#FF6600"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>
          <div style={percentageStyle}>{percentage}%</div>
        </div>
        <div style={textStyle}>{name}</div>
      </div>
    );
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>MY SKILLS</h2>
      <div style={skillsGridStyle}>
        {skills.map((skill) => (
          <SkillCircle
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
