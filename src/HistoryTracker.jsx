import { useEffect, useState } from 'react';
import './HistoryTracker.css';

function HistoryTracker({history, hcolor}) {

  return (
    <div className = 'history-tracker'> 
    <h3>History of Values</h3>
    <ul>
        {history.map((entry, index) => (
            <li key={index} style = {{backgroundColor: hcolor}}>
                {entry.value}
            </li>
        ))}
    </ul>
</div>
    
  );
}

export default HistoryTracker;