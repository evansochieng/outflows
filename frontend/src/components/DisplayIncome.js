import React from 'react'

const DisplayIncome = ({
  income,
  incomeDetails,
  setIncomeDetails,
  incEditPopup,
  setIncEditPopup,
//   handleIncomeUpdate,
//   handleIncomeDelete,
  incDeletePopup,
  setIncDeletePopup,
}) => {
  // define a function to handleEditClick and set details to clicked income
  const handleEditClick = () => {
    setIncEditPopup(true);
    setIncomeDetails({ ...incomeDetails, ...income });
  };

  // define a function to handleEditClick and set details to clicked income
  const handleDeleteClick = () => {
    setIncDeletePopup(true);
    setIncomeDetails({ ...incomeDetails, ...income });
  };

  return (
    <tr>
      <td>{income.name}</td>
      <td>{income.date}</td>
      <td>{income.source}</td>
      <td>{income.description}</td>
      <td>{income.amount}</td>
      <td>
        <a className="add" title="Add" data-toggle="tooltip">
          <i className="material-icons">&#xE03B;</i>
        </a>
        <a className="edit" title="Edit" data-toggle="tooltip">
          <i className="material-icons" onClick={() => handleEditClick()}>
            &#xE254;
          </i>
        </a>
        {/* Display the Edit popup here */}
        {/* <EditIncome
          incomeDetails={incomeDetails}
          setIncomeDetails={setIncomeDetails}
          incEditPopup={incEditPopup}
          setIncEditPopup={setIncEditPopup}
          handleIncomeUpdate={handleIncomeUpdate}
        /> */}

        <a className="delete" title="Delete" data-toggle="tooltip">
          <i className="material-icons" onClick={() => handleDeleteClick()}>
            &#xE872;
          </i>
          {/* Display the Delete popup here */}
          {/* <DeleteIncome
            incomeDetails={incomeDetails}
            incDeletePopup={incDeletePopup}
            setIncDeletePopup={setIncDeletePopup}
            handleIncomeDelete={handleIncomeDelete}
          /> */}
        </a>
      </td>
    </tr>
  );
};

export default DisplayIncome;