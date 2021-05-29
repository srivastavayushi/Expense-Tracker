import "./App.css";
import { GlobalProvider } from "./context/GlobalState";

// Import Components
import Balance from "./components/Balance";
import Expenditure from "./components/Expenditure";
import Transactions from "./components/Transactions";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <GlobalProvider>
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance />
        <Expenditure />
        <Transactions />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
