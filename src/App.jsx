import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import { GlobalProvider } from "./context/GlobalState";
import TransactionLIst from "./TransactionLIst";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionLIst />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
