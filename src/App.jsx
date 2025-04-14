import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseTable from "./components/ExpenseTable.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (indexToDelete) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete));
  };

  // Sorting the expenses alphabetically by title before filtering
  const filteredExpenses = expenses
    .sort((a, b) => a.title.localeCompare(b.title)) // Sort by title
    .filter((expense) =>
      expense.title.toLowerCase().includes(search.toLowerCase()) ||
      expense.description.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <div className="content">
        <div className="form-section">
          <h2>Add Expense</h2>
          <ExpenseForm onAddExpense={addExpense} />
        </div>

        <div className="table-section">
          <SearchBar search={search} setSearch={setSearch} />
          <ExpenseTable expenses={filteredExpenses} onDelete={deleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
