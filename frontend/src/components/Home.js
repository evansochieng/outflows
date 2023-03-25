import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

//import and register all elements since chart js is treeshakable
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Home = ({ totalIncome, totalExpense, balance, incomes, expenses}) => {

  // define a n object to store the frequencies of expense categories
  const freqExpensesObject = {}
  expenses.forEach( exp => {
    // create a key for each category and value with the number of its occurence
    freqExpensesObject.hasOwnProperty(exp.category)
      ? (freqExpensesObject[exp.category] += 1)
      : (freqExpensesObject[exp.category] = 1);
  });

  ////// Visualizations with Chart JS //////
  ////// Draw a pie chart for the expense categories ////////

  //define the data
  let data = Object.values(freqExpensesObject);
  // create custom labels
  let labels = Object.keys(freqExpensesObject);
  let customLabels = labels.map((label, index) => `${label}: ${data[index]}`);

  const chartdata = {
    labels: customLabels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "rgba(75,192,192,0.4)",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "rgba(75,192,192,1)",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Pie Chart of Expense Categories",
      fontSize: 16,
    },
    legend: {
      display: true,
      position: "right",
    },

    datalabels: {
      display: true,
      color: "white",
    },
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <div className="card" style={{ width: "18rem", marginBottom: "30px" }}>
          <div className="card-body">
            <h5 className="card-title">MY BALANCE</h5>
            <p className="card-text">Total Balance: $ {balance}</p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem", marginBottom: "30px" }}>
          <div className="card-body">
            <h5 className="card-title">INCOME</h5>
            <p className="card-text">Total Income: $ {totalIncome}</p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem", marginBottom: "30px" }}>
          <div className="card-body">
            <h5 className="card-title">EXPENSES</h5>
            <p className="card-text">Total Expenses: $ {totalExpense}</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "800px", maxHeight: "600px" }}>
        <h2>Pie Chart of Expenses</h2>
        <Doughnut data={chartdata} options={options} />
      </div>
    </div>
  );
};

export default Home;
