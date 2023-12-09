import React from 'react'
import WrapperForms from './WrapperForms'
import CreateBudget from './CreateBudget'
import AddNewExpense from './AddNewExpense'
import BudgetCategory from './BudgetCategory'
import RecentExpensesTable from './RecentExpensesTable'
import { useBudget } from '../contexts/BudgetContext'

export default function MainContent() {
  const { budgets, expenses } = useBudget()
  return (
    <>
      <WrapperForms >
        <CreateBudget />

        {(budgets.length > 0) && <AddNewExpense budgets={budgets} />}
      </WrapperForms>

      {(budgets.length > 0) && <>
        <h2 className='mt-4'><strong>Existing Budgets</strong> </h2 >
        <WrapperForms>
          {budgets.map(budget => <BudgetCategory
            key={budget.budgetId}
            budget={budget}
          />)}
        </WrapperForms>
      </>}

      {(expenses.length > 0) && <>
        <h2 className='mt-4 mb-4'><strong>Recent Expenses</strong> </h2 >
        <RecentExpensesTable budgets={budgets} expenses={expenses} />
      </>}

    </>
  )
}
