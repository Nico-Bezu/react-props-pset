import './CustomMessage.css';

function CustomMessage({ value, description, backgroundColor }) {

  const handleClick = () => {
    alert(alertMessage);
  };

  return (
    <button className="custom-message" style={{ backgroundColor: bgcolor }} onClick={handleClick}>
      {text}
    </button>
  );
}

export default CustomMessage;