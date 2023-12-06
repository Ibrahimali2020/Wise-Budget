import React from 'react'
import Card from './Card'
import Button from './Button'

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'

export default function AddNewExpense({
  budgets,
  expenseName,
  expenseAmount,
  setExpenseName,
  setExpenseAmount,
  selectbudgetCategory,
  setSelectBudgetCategory,
  handleAddNewExpense }) {

  const location = useLocation();
  const { budgetName, budgetId } = budgets[0]

  function handleSubmit(e) {
    e.preventDefault()
    handleAddNewExpense();
    toast.success(`Expense ${expenseName} created!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <Card>
      <h4><strong>Add New {(location.pathname.includes(budgetId)) ? budgetName : ''} Expense</strong></h4>
      <form onSubmit={handleSubmit}>
        <div className="form-row d-flex justify-content-between">
          <div className="form-group col-md-6 ">
            <label >Expense Name</label>
            <input
              value={expenseName}
              onChange={e => setExpenseName(e.target.value)}
              type="text"
              required
              className="form-control mt-2"
              placeholder="e.g., Coffee" />
          </div>
          <div className="form-group col-md-6  px-2">
            <label >Amount</label>
            <input
              value={expenseAmount}
              onChange={e => setExpenseAmount(Number(e.target.value))}
              type="number"
              required
              className="form-control mt-2"
              placeholder="e.g., 3.50" />
          </div>
        </div>

        <div className="form-group pt-3 ">
          <label >Budget Category</label>
          <select
            className="form-select mt-2"
            value={selectbudgetCategory}
            required
            onChange={e => setSelectBudgetCategory(e.target.value)}>
            <option value="">Select Budget Category</option>
            {budgets.map(budget => <option
              key={budget.budgetId}
              value={budget.budgetId}>{budget.budgetName}
            </option>)}
          </select>

        </div>

        <Button color='dark' type="submit" icon={faPlus} >Add Expense</Button>
      </form>
    </Card >
  )
}
