import './App.css';
import CustomButton from './CustomButton';
import RandomCard from './RandomCard';
import ProgressBar from './ProgressBar';



function App() {
  return (
    <>
      <h1>Custom Components Practice</h1>
      <CustomButton text="Click Me" bgcolor="cornflowerblue" alertMessage= "the big ten!" />
      {/* Add your custom components here */}
      <RandomCard value={6} backgroundColor={"brown"} />
      <ProgressBar progress={0} pcolor= 'red' />
    </>
  );
}

export default App;
