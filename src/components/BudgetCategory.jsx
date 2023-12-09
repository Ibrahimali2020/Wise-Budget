import React from 'react'
import styles from './BudgetCategory.module.css'
import { ProgressBar } from 'react-bootstrap'
import Button from './Button'
import { faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import { useBudget } from '../contexts/BudgetContext'

export default function BudgetCategory({ budget }) {
  const { expenses, handleDeleteBudget } = useBudget()

  const location = useLocation();
  const filteredExpenses = expenses.filter(expense => expense.selectbudgetCategory === budget.budgetId)
  const spent = filteredExpenses.reduce((acc, expense) => expense.expenseAmount + acc, 0)


  return (
    <div className={styles.card}>
      <div className="budgetInfo d-flex justify-content-between mb-2">
        <h4>{budget.budgetName}</h4>
        <h4>$ {budget.budgetAmount} Budgeted</h4>
      </div>
      <ProgressBar
        className={styles.progress}
        variant="success"
        min={0}
        now={spent}
        max={budget.budgetAmount}
        striped />
      <div className="spendRemaing d-flex justify-content-between mt-2">
        <p>${spent} spent</p>
        <p className={styles.remaining}>${budget.budgetAmount - spent} remaining</p>
      </div>
      <div className="text-center">
        {
          (location.pathname.includes(budget.budgetId)) ?
            <Button onClick={() => handleDeleteBudget(budget.budgetId)} outlineColor='red' color='danger' icon={faTrashCan}>
              Delete Budget
            </Button> :
            <Link to={`budget/${budget.budgetId}`} className={styles.link}>
              <Button outlineColor='green' color='success' icon={faEye}>
                View Details
              </Button>
            </Link>
        }
      </div >
    </div >
  )
}
