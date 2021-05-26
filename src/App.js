import './App.css';

// Import Components
import Balance from "./components/Balance";
import Expenditure from "./components/Expenditure";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <div >
      <h2>Expense Tracker</h2>
      <div className="container">
      <Balance/>
      <Expenditure/>
      <History/>
      <AddTransaction/>
      </div>
     
    
    </div>
  );
}

export default App;
