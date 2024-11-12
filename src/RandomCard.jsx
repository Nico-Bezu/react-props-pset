import './RandomCard.css';

function RandomCard({ value, description, backgroundColor }) {

  const handleClick = () => {
    alert(alertMessage);
  };

  return (
    <button className="random-card" style={{ backgroundColor: bgcolor }} onClick={handleClick}>
      {text}
    </button>
  );
}

export default RandomCard;