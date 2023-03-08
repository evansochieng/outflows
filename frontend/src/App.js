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
  const totalIncome = incomes.reduce(
    (initTotalIncome, curIncome) => initTotalIncome + curIncome.value,
    0
  );
  const totalExpense = expenses.reduce(
    (initTotalExpense, curExpense) => initTotalExpense + curExpense.value,
    0
  );
  const balance = totalIncome - totalExpense;

  // define variable for expense details when creating a new expense
  const [expenseDetails, setExpenseDetails] = useState({
    id: "",
    name: "",
    date: "",
    category: "",
    description: "",
    payment: "",
    value: ""
  });

  /////////////////////////////////////////////////////
  ///// Create new expense popup /////
  const [show, setShow] = useState(false);

  ///// Edit expense popup /////
  const [expEditPopup, setExpEditPopup] = useState(false);

  ///// Delete expense popup /////
  const [expDeletePopup, setExpDeletePopup] = useState(false);
  ////////////////////////////////////////////////////

  // CRUD Operations
  // GET - make fetch request to get expenses from django api
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/expenses/")
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((err) => console.log(err));
  }, []);

  // CREATE - Add a new expense
  const handleSubmit = (e) => {
    // prevent form from refreshing
    e.preventDefault();

    // post the new expense
    fetch("http://127.0.0.1:8000/api/expenses/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Accepted: "application/json",
      },
      body: JSON.stringify(expenseDetails),
    })
      .then((res) => res.json()) //should handle bad response
      .then((data) => {
        console.log(data)
        setExpenses([...expenses, data]);
        setExpenseDetails({
          id: "",
          name: "",
          date: "",
          category: "",
          description: "",
          payment: "",
          value: ""
        });
      });
  };

  // UPDATE - Edit details of an expense
  const handleUpdate = (e, expense) => {
    console.log(expense)
    // prevent form from refreshing
    e.preventDefault();

    fetch(`http://127.0.0.1:8000/api/expenses/${expense.id}`, {
      //pass dummy expense
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accepted: "application/json",
      },
      body: JSON.stringify(expense) //add what to stringify
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // DELETE - Delete an expense
  const handleDelete = (expense) => {
    console.log(expense)
    fetch(`http://127.0.0.1:8000/api/expenses/${expense.id}`, {
      //pass dummy expense
      method: "DELETE",
      "Content-Type": "application/json",
    })
  };

  return (
    <div className="App">
      <NavBar />
      {isLogin ? (
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <Home
                totalIncome={totalIncome}
                totalExpense={totalExpense}
                balance={balance}
              />
            }
          />
          <Route
            exact
            path="/income"
            element={
              <Income
                setIncomes={setIncomes}
                handleSubmit={handleSubmit}
                expenseDetails={expenseDetails}
                setExpenseDetails={setExpenseDetails}
              />
            }
          />
          <Route
            exact
            path="/expenses"
            element={
              <Expenses
                expenses={expenses}
                handleSubmit={handleSubmit}
                expenseDetails={expenseDetails}
                setExpenseDetails={setExpenseDetails}
                show={show}
                setShow={setShow}
                expEditPopup={expEditPopup}
                setExpEditPopup={setExpEditPopup}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                expDeletePopup={expDeletePopup}
                setExpDeletePopup={setExpDeletePopup}
              />
            }
          />
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
