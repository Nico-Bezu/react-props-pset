import './RandomCard.css';

function RandomCard({value, backgroundColor }) {

  let description
  if (value < 10) {
    description = "small card"
  }
  else if (value >= 10 && value < 100) {
    description = "not too bad"
  }
  else {
    description = "insane card"
  }
 
  const handleClick = () => {
    alert("This number is " + description);
  };

  return (
    <button className="random-card" style={{ backgroundColor: bgcolor }} onClick={handleClick}>
          <div className="card-value">{value}</div>
          <div className="card-description">{description}</div>
    </button>
  );
}

export default RandomCard;