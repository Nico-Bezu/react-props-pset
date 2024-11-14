import './App.css';
import CustomButton from './CustomButton';
import RandomCard from './RandomCard';



function App() {
  return (
    <>
      <h1>Custom Components Practice</h1>
      <CustomButton text="Click Me" bgcolor="cornflowerblue" alertMessage= "the big 10!" />
      {/* Add your custom components here */}
      <RandomCard value={6} backgroundColor={"brown"} />
    </>
  );
}

export default App;
