import './RandomCard.css';

function RandomCard({description, backgroundColor }) {

  const value = Math.floor(Math.random() * 13) + 1;
  const handleClick = () => {
    alert(alertMessage);
  };

  return (
    <button className="random-card" style={{ backgroundColor: bgcolor }} onClick={handleClick}>
          <div className="card-description">{description}</div>
    </button>
  );
}

export default RandomCard;