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
    (initTotalIncome, curIncome) => initTotalIncome + curIncome.amount,
    0
  );
  const totalExpense = expenses.reduce(
    (initTotalExpense, curExpense) => initTotalExpense + curExpense.value,
    0
  );
  const balance = totalIncome - totalExpense;

  ////////////////////////// EXPENSES OPERATION ///////////////////////////////
  // define variable for expense details when creating a new expense
  const [expenseDetails, setExpenseDetails] = useState({
    name: "",
    date: "",
    category: "",
    description: "",
    payment: "",
    value: "",
  });

  /////////////
  ///// Create new expense popup /////
  const [show, setShow] = useState(false);

  ///// Edit expense popup /////
  const [expEditPopup, setExpEditPopup] = useState(false);

  ///// Delete expense popup /////
  const [expDeletePopup, setExpDeletePopup] = useState(false);
  /////////////

  // Expense CRUD Operations
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
        setExpenses([...expenses, data]);
        setExpenseDetails({
          name: "",
          date: "",
          category: "",
          description: "",
          payment: "",
          value: "",
        });
      });
  };

  // UPDATE - Edit details of an expense
  const handleUpdate = (expense) => {
    fetch(`http://127.0.0.1:8000/api/expenses/${expense.id}/`, {
      //pass dummy expense
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // Accepted: "application/json",
      },
      body: JSON.stringify(expense), //add what to stringify
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // DELETE - Delete an expense
  const handleDelete = (expense) => {
    console.log(expense);
    fetch(`http://127.0.0.1:8000/api/expenses/${expense.id}`, {
      //pass dummy expense
      method: "DELETE",
      // "Content-Type": "application/json",
    });
  };
  ////////////////// END OF EXPENSE OPERATIONS /////////////////////

  ///////////////////// INCOME OPERATIONS //////////////////////////////
  // define variable for income details when creating a new income
  const [incomeDetails, setIncomeDetails] = useState({
    name: "",
    date: "",
    source: "",
    description: "",
    amount: "",
  });

  /////////////
  ///// Create new income popup /////
  const [showIncome, setShowIncome] = useState(false);

  ///// Edit income popup /////
  const [incEditPopup, setIncEditPopup] = useState(false);

  ///// Delete income popup /////
  const [incDeletePopup, setIncDeletePopup] = useState(false);
  /////////////

  // Income CRUD Operations
  // GET - make fetch request to get incomes from django api
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/incomes/")
      .then((res) => res.json())
      .then((data) => {
        setIncomes(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // CREATE - Add a new income
  const handleIncomeSubmit = (e) => {
    // prevent form from refreshing
    e.preventDefault();

    // post the new expense
    fetch("http://127.0.0.1:8000/api/incomes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //Accepted: "application/json",
      },
      body: JSON.stringify(incomeDetails),
    })
      .then((res) => res.json())
      // .then((res) => {
      //   // check if the response is okay
      //   if (res.ok) {
      //     return res.json();
      //   } else {
      //     throw new Error("Network response was not ok");
      //   }
      // })
      .then((data) => {
        console.log(data)
        setIncomes([...incomes, data]);
        setIncomeDetails({
          name: "",
          date: "",
          source: "",
          description: "",
          amount: "",
        });
      })
      .catch((error) => console.error("Error posting data", error));
  };

  // UPDATE - Edit details of an income
  const handleIncomeUpdate = (income) => {
    fetch(`http://127.0.0.1:8000/api/incomes/${income.id}/`, {
      //pass dummy income
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // Accepted: "application/json",
      },
      body: JSON.stringify(income), //add what to stringify
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // DELETE - Delete an income
  const handleIncomeDelete = (income) => {
    console.log(income);
    fetch(`http://127.0.0.1:8000/api/incomes/${income.id}`, {
      method: "DELETE",
      // "Content-Type": "application/json",
    });
  };

  ///////////////////// END OF INCOME OPERATIONS ///////////////////////

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
                expenses={expenses}
                incomes={incomes}
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
                incomes={incomes}
                handleIncomeSubmit={handleIncomeSubmit}
                incomeDetails={incomeDetails}
                setIncomeDetails={setIncomeDetails}
                showIncome={showIncome}
                setShowIncome={setShowIncome}
                incEditPopup={incEditPopup}
                setIncEditPopup={setIncEditPopup}
                incDeletePopup={incDeletePopup}
                setIncDeletePopup={setIncDeletePopup}
                handleIncomeUpdate={handleIncomeUpdate}
                handleIncomeDelete={handleIncomeDelete}
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
