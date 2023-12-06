import React from 'react';
import Button from './Button';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function RecentExpensesTable({
  expenses,
  budgets,
  handleDeleteExpense }) {


  return (
    <table className="table table-striped">
      <thead className="h5">
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Budget</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {
          expenses
            .map(expense => (
              <tr key={expense.expenseId}>
                <th scope="row">{expense.expenseName}</th>
                <td>${expense.expenseAmount}</td>
                <td>
                  <Link to={`budget/${expense.selectbudgetCategory}`}>
                    <Button color="success" outlineColor='green'>
                      {budgets
                        .filter((budget) => budget.budgetId === expense.selectbudgetCategory)
                        .map((filteredBudget) => (
                          <span key={filteredBudget.budgetId}>{filteredBudget.budgetName}</span>
                        ))}
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button
                    onClick={() => handleDeleteExpense(expense.expenseId)}
                    color="danger"
                    outlineColor='red'
                    icon={faTrashCan}></Button>
                </td>
              </tr>
            ))}
      </tbody>
    </table >
  );
}
