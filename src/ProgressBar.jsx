import { useState } from 'react';
import './ProgressBar.css';

function ProgressBar({progress, pcolor = "green"}) {
    const progressWidth = Math.min(110, Math.max (-10, progress));

    let desColor 
  if (progress <= 10 && progress >= 0) {
    desColor = "orange"
  }
  else if (progress < 0) {
    desColor = "red"
  } 
  else if (progress >= 10 && progress < 100) {
    desColor = "yellow"
  }
  else {
    desColor = "green"
  }
    

  return (
    <div className = 'progress-bar-container'> 
        <div
            className = 'progress-bar'
            style = {{
                width: `${progressWidth}%`,
                backgroundColor: desColor,
            }}
       />
       <span className='progress-label'>{`${progressWidth}%`}</span>
    </div>
    
  );
}

export default ProgressBar;