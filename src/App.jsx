import './App.css';
import CustomButton from './CustomButton';
import RandomCard from './RandomCard';
import ProgressBar from './ProgressBar';
import HistoryTracker from './HistoryTracker';



function App() {
  return (
    <>
      <h1>Custom Components Practice</h1>
      <CustomButton text="Who am I?" bgcolor="cornflowerblue" alertMessage= "the number game!" />
      {/* Add your custom components here */}
      <RandomCard value={0} backgroundColor={"brown"} />
      <HistoryTracker history = {[]} hcolor='green'/>
    </>
  );
}

export default App;
