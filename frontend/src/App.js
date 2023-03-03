import { React, useEffect, useState } from "react";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import Logout from "./components/Logout";
import { Route, Routes } from "react-router-dom";

function App() {
  // set state for login
  const [isLogin, setIsLogin] = useState(false);

  // define variables for expenses and balances
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // define variables for total income, total expenses, and balance
  const totalIncome = incomes.reduce( (initTotalIncome, curIncome) => initTotalIncome + curIncome.value, 0);
  const totalExpense = expenses.reduce( (initTotalExpense, curExpense) => initTotalExpense + curExpense.value, 0);
  const balance = totalIncome - totalExpense;

  // make fetch request to get expenses from django api
  useEffect( () => {
    fetch("http://127.0.0.1:8000/api/expenses/")
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <NavBar />
      {isLogin ? (
        <Routes>
          <Route exact path="/home" element={<Home totalIncome={totalIncome} totalExpense={totalExpense} balance={balance} />} />
          <Route exact path="/income" element={<Income setIncomes={setIncomes} />} />
          <Route exact path="/expenses" element={<Expenses expenses={expenses} />} />
          <Route
            exact
            path="/logout"
            element={<Logout setIsLogin={setIsLogin} />}
          />
        </Routes>
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default App;
