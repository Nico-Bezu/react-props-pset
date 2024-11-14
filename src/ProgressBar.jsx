import { useState } from 'react';
import './ProgressBar.css';

function ProgressBar({progress, pcolor = "green"}) {
    const progressWidth = Math.min(100, Math.max (0, progress));

    

  return (
    <div className = 'progress-bar-container'> 
        <div
            className = 'progress-bar'
            style = {{
                width: `${progressWidth}%`,
                backgroundColor: pcolor,
            }}
       />
       <span className='progress-label'>{`${progressWidth}%`}</span>
    </div>
    
  );
}

export default ProgressBar;