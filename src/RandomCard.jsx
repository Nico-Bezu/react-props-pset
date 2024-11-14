import { useState } from 'react';
import './RandomCard.css';
import ProgressBar from './ProgressBar';
import HistoryTracker from './HistoryTracker';

function RandomCard({val = 0, backgroundColor}) {

  const [value, setValue] = useState(val);
  let [history, setHistory] = useState([0]);

  let description
  let desColor
  if (value <= 10 && value >= 0) {
    description = "small card"
    desColor = "orange"
  }
  else if (value < 0) {
    description = "horrible luck"
    desColor = "red"
  } 
  else if (value >= 10 && value < 100) {
    description = "not too bad"
    desColor = "yellow"
  }
  else {
    description = "insane card"
    desColor = "green"
  }

  const handleClick = () => {
    const newVal = (Math.floor(Math.random() * 111) - 3);
    setValue(newVal)
    let newHistory = [...history];
    newHistory.push(newVal);
    setHistory(newHistory);
  };

  return (
    <div className='random-card-container'>
    <button className="random-card" style={{ backgroundColor: desColor }} onClick={handleClick}>
          <div className="card-value">{value}</div>
          <div className="card-description">{description}</div>
    </button>
    <ProgressBar progress={value} pcolor='blue'/> 
    <HistoryTracker history={history} hcolor={desColor}/>
    </div>
  );
}

export default RandomCard;