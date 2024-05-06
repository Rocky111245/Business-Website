import React from 'react';
import './CommandingBar.css'; // Make sure to import the CSS file

const CommandingBar = ({ styleType }) => {
  const barStyle = styleType === 'default' ? 'commanding-bar commanding-bar-designer' : 'commanding-bar commanding-bar-default';
  return (
    <div className={barStyle}>
      Customer Support
    </div>
  );
}

export default CommandingBar;
