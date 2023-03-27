import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";

//import and register all elements since chart js is treeshakable
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Home = ({ totalIncome, totalExpense, balance, incomes, expenses}) => {

  // define an object to store the frequencies of expense categories
  const freqExpensesObject = {}
  expenses.forEach( exp => {
    // create a key for each category and value with the number of its occurence
    freqExpensesObject.hasOwnProperty(exp.category)
      ? (freqExpensesObject[exp.category] += 1)
      : (freqExpensesObject[exp.category] = 1);
  });

  // define an object to store the total income from each income category
  const totalCatIncome = {};
  incomes.forEach( inc => {
    // create a key for each category and value to be total income
    totalCatIncome.hasOwnProperty(inc.source)
      ? (totalCatIncome[inc.source] += inc.amount)
      : (totalCatIncome[inc.source] = inc.amount);
  });
  
  ////// Visualizations with Chart JS //////
  ////// Draw a doughnut chart for the expense categories ////////

  //define the data
  let expDouData = Object.values(freqExpensesObject);
  // create custom labels
  let labels = Object.keys(freqExpensesObject);
  let customLabels = labels.map(
    (label, index) => `${label}: ${expDouData[index]}`
  );

  const chartdata = {
    labels: customLabels,
    datasets: [
      {
        data: expDouData,
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

  const doughnutOptions = {
    title: {
      display: true,
      text: "Doughnut Chart of Expense Categories",
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
  ////////////////////////////////////////////////////

  ////////////////////////////////////////////////////
  /////// Draw a bar plot of income amount from each source //////////
  const data = {
    labels: Object.keys(totalCatIncome),
    datasets: [
      {
        label: "Total Income",
        data: Object.values(totalCatIncome),
        // backgroundColor: "rgba(54, 162, 235, 0.2)",
        backgroundColor: "#36A2EB",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    title: {
      display: true,
      text: "Total Income per Income Stream",
      fontSize: 16,
    },
  };
  ///////////////////////////////////////////////////////////

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
        <div>
          <h2>Summary of Money Flow</h2>
        </div>
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ maxWidth: "600px", maxHeight: "400px" }}>
          <h2 style={{ textAlign: "center" }}>
            Doughnut Chart of Frequency of Expenses Category
          </h2>
          <Doughnut data={chartdata} options={doughnutOptions} />
        </div>

        <div style={{ maxWidth: "600px", maxHeight: "400px" }}>
          <h2 style={{ textAlign: "center" }}>
            Bar Graph of Income per Income Stream
          </h2>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Home;
