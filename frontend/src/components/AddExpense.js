import React from 'react'

function AddExpense( { expense } ) {
  return (
    <tr>
    <td>{expense.name}</td>
    <td>{expense.date}</td>
    <td>{expense.category}</td>
    <td>{expense.description}</td>
    <td>{expense.payment_mode}</td>
    <td>{expense.value}</td>
    <td>
        <a class="add" title="Add" data-toggle="tooltip">
        <i class="material-icons">&#xE03B;</i>
        </a>
        <a class="edit" title="Edit" data-toggle="tooltip">
        <i class="material-icons">&#xE254;</i>
        </a>
        <a class="delete" title="Delete" data-toggle="tooltip">
        <i class="material-icons">&#xE872;</i>
        </a>
    </td>
    </tr>
  );
}

export default AddExpense;